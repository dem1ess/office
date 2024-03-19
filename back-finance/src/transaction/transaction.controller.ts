import {
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
import { Transaction } from '@prisma/client'
import { CreateTransactionDto } from './dto/create-transaction.dto'
import { PrMoneyCallbackDto } from './dto/prmoney-callback.dto'
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

  @HttpCode(200)
  @Post('success')
  @UsePipes(ValidationPipe)
  async handleSuccessCallback(@Body() callbackDto: PrMoneyCallbackDto) {
    // Извлекаем идентификатор транзакции из description
    const transactionId = callbackDto.description

    // Обновляем статус транзакции на COMPLETE и обновляем баланс пользователя
    return this.transactionService.updateTransactionStatus({
      transactionId,
      transactionStatus: 'COMPLETE'
    })
  }

  @HttpCode(200)
  @Post('fail')
  @UsePipes(ValidationPipe)
  async handleFailCallback(@Body() callbackDto: PrMoneyCallbackDto) {
    // Извлекаем идентификатор транзакции из description
    const transactionId = callbackDto.description

    // Обновляем статус транзакции на ERROR
    return this.transactionService.updateTransactionStatus({
      transactionId,
      transactionStatus: 'ERROR'
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
