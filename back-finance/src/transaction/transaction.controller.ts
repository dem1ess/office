import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { Transaction, TransactionStatus } from '@prisma/client'
import { CreateTransactionDto } from './dto/create-transaction.dto'
import { CallbackDto } from './dto/prmoney-callback.dto'
import { UpdateTransactionStatusDto } from './dto/update-transaction-status.dto'
import { TransactionService } from './transaction.service'

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @HttpCode(200)
  @Post()
  @UsePipes(ValidationPipe) // Используем ValidationPipe для валидации DTO
  async createTransaction(@Body() createTransactionDto: CreateTransactionDto) {
    // Создаем транзакцию с использованием DTO
    return this.transactionService.createTransaction(createTransactionDto)
  }

  @HttpCode(200)
  @Patch()
  @UsePipes(ValidationPipe) // Используем ValidationPipe для валидации DTO
  async updateTransactionStatus(
    @Body() updateTransactionStatusDto: UpdateTransactionStatusDto
  ) {
    return this.transactionService.updateTransactionStatus(
      updateTransactionStatusDto
    )
  }

  @Post('callbackStatus')
  async handleCallback(@Body() callbackDto: CallbackDto) {
    // Десериализуем payment из строки в объект
    let paymentData
    try {
      paymentData = JSON.parse(callbackDto.payment)
    } catch (error) {
      throw new BadRequestException('Некорректные данные платежа')
    }

    // Извлекаем идентификатор транзакции из description
    const transactionId = paymentData.description

    // Проверяем, что paymentData.status определен и не пустой
    if (!paymentData.status || paymentData.status.trim() === '') {
      throw new BadRequestException('Не указан статус транзакции')
    }

    // Определяем статус транзакции на основе paymentData.status
    let transactionStatus: TransactionStatus
    if (paymentData.status === 'success') {
      transactionStatus = TransactionStatus.COMPLETE
    } else if (paymentData.status === 'fail') {
      transactionStatus = TransactionStatus.CANCELLED
    } else {
      // Если статус не распознан, выбрасываем ошибку
      throw new BadRequestException(`Неизвестный статус: ${paymentData.status}`)
    }

    // Обновляем статус транзакции
    return this.transactionService.updateTransactionStatus({
      transactionId,
      transactionStatus
    })
  }

  @HttpCode(200)
  @Get('user/:userId')
  async getUserTransactions(@Param('userId') userId: string) {
    return this.transactionService.getUserTransactions(userId)
  }

  @HttpCode(200)
  @Get()
  async getAllTransactions(): Promise<Transaction[]> {
    return this.transactionService.findAll()
  }
}
