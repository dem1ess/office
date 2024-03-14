import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { verify } from 'argon2'
import { UserService } from 'src/user/user.service'
import { AuthDto } from './dto/auth.dto'

@Injectable()
export class AuthService {
  constructor(
    private jwt: JwtService,
    private userService: UserService
  ) {}

  async register(dto: AuthDto) {
    const oldUser = await this.userService.getByEmail(dto.email)

    if (oldUser) throw new BadRequestException('User already exists')

    const newUser = await this.userService.create(dto)
    const token = await this.generateToken(
      newUser.id,
      newUser.role,
      newUser.balance,
      newUser.country,
      newUser.documentPhoto1Url,
      newUser.documentPhoto2Url,
      newUser.isVerif,
      newUser.lastName,
      newUser.documentType,
      newUser.firstName,
      newUser.email
    )

    return {
      user: newUser,
      token
    }
  }

  async removeRefreshTokenToResponse() {
    return null
  }

  async login(dto: AuthDto) {
    const user = await this.validateUser(dto)
    const token = await this.generateToken(
      user.id,
      user.role,
      user.balance,
      user.country,
      user.documentPhoto1Url,
      user.documentPhoto2Url,
      user.isVerif,
      user.lastName,
      user.documentType,
      user.firstName,
      user.email
    )

    return {
      user,
      token
    }
  }

  private async generateToken(
    userId: string,
    role: string,
    balance: number,
    country: string,
    documentPhoto1Url: string,
    documentPhoto2Url: string,
    isVerif: boolean,
    secondName: string,
    documentType: string,
    firstName: string,
    email: string
  ): Promise<string> {
    const payload = {
      id: userId,
      role: role,
      balance: balance,
      country: country,
      documentPhoto1Url: documentPhoto1Url,
      documentPhoto2Url: documentPhoto2Url,
      isVerif: isVerif,
      secondName: secondName,
      firstName: firstName,
      email: email,
      documentType: documentType
    }
    return this.jwt.sign(payload, { expiresIn: '1h' }) // Токен действителен 1 час
  }

  private async validateUser(dto: AuthDto) {
    const user = await this.userService.getByEmail(dto.email)

    if (!user) throw new NotFoundException('User not found')

    const isValid = await verify(user.password, dto.password)
    if (!isValid) throw new UnauthorizedException('Invalid password')

    return user
  }

  async googleLogin(req) {
    if (!req.user) {
      throw new BadRequestException('No user from google')
    }

    // Попробуйте найти пользователя в вашей базе данных по ID пользователя Google
    let user = await this.userService.getByEmail(req.user.email)

    if (!user) {
      const newUserDto: AuthDto = {
        email: req.user.email,
        password: 'generated_password'
      }
      user = await this.userService.createGoogle(
        newUserDto,
        req.user.firstName,
        req.user.lastName
      )
    }

    // Вы можете использовать ваш метод генерации токена, если он необходим
    const token = await this.generateToken(
      user.id,
      user.role,
      user.balance,
      user.country,
      user.documentPhoto1Url,
      user.documentPhoto2Url,
      user.isVerif,
      user.lastName,
      user.documentType,
      user.firstName,
      user.email
    )

    return {
      message: 'User information from google',
      user: req.user,
      token
    }
  }
}
