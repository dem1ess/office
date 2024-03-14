import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { Role, User } from '@prisma/client'
import { hash } from 'argon2'
import { AuthDto } from 'src/auth/dto/auth.dto'
import { PrismaService } from 'src/prisma.service'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(dto: AuthDto) {
    // Хешируйте пароль перед сохранением в базу данных
    const hashedPassword = await hash(dto.password)

    // Создайте пользователя с хешированным паролем и другими полями
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        password: hashedPassword,
        balance: 0,
        role: Role.USER,
        googleId: null,
        firstName: null,
        lastName: null,
        documentType: null,
        country: null,
        documentPhoto1Url: null,
        documentPhoto2Url: null,
        selfieUrl: null,
        isVerif: false
      }
    })

    return user
  }

  async createGoogle(dto: AuthDto, firstName: string, lastName: string) {
    // Хешируйте пароль перед сохранением в базу данных
    const hashedPassword = await hash(dto.password)

    // Создайте пользователя с хешированным паролем и другими полями
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        password: hashedPassword,
        balance: 0,
        role: Role.USER,
        googleId: null,
        firstName: firstName, // Используйте данные из параметра
        lastName: lastName, // Используйте данные из параметра
        documentType: null,
        country: null,
        documentPhoto1Url: null,
        documentPhoto2Url: null,
        selfieUrl: null,
        isVerif: false
      }
    })

    return user
  }

  async getCheckProfile(id: string) {
    // Предполагается, что у вас есть модель User в Prisma
    const user = await this.prisma.user.findUnique({
      where: { id }
    })
    console.log(user)
    // Удалите лишние поля, которые не должны быть отправлены клиенту

    return user
  }

  // Пример метода updateUserBalance в UserService
  async updateUserBalance(userId: string, amount: number): Promise<User> {
    // Получаем текущего пользователя
    const user = await this.prisma.user.findUnique({
      where: { id: userId }
    })

    if (!user) {
      throw new NotFoundException(`User with id ${userId} not found`)
    }

    // Проверяем, что баланс не станет отрицательным
    if (user.balance + amount < 0) {
      throw new BadRequestException(`Insufficient balance for user ${userId}`)
    }

    // Обновляем баланс пользователя
    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data: { balance: user.balance + amount }
    })

    return updatedUser
  }

  async update(id: string, dto: UpdateUserDto) {
    // Хешируйте пароль перед сохранением в базу данных
    let data = dto
    if (dto.password) {
      data = { ...dto, password: await hash(dto.password) }
    }
    // Создайте пользователя с хешированным паролем и другими полями
    const user = await this.prisma.user.update({
      where: {
        id
      },
      data
    })
    return user
  }

  async getProfileId(id: string) {
    const profile = await this.getById(id)
    const purchases = await this.prisma.purchase.findMany({
      where: {
        buyerId: id
      }
    })
    const transactions = await this.prisma.transaction.findMany({
      where: {
        userId: id
      }
    })

    return {
      profile,
      purchases,
      transactions
    }
  }

  getById(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id
      },
      include: {
        transaction: true,
        purchase: true
      }
    })
  }

  getByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email
      }
    })
  }

  async findAll(): Promise<User[]> {
    // Используем Prisma Client для получения всех пользователей из базы данных
    return this.prisma.user.findMany()
  }
}
