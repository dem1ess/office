import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Request, Res,
  UseGuards,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { AuthService } from './auth.service'
import { AuthDto } from './dto/auth.dto'
import { JwtAuthGuard } from './guards/jwt.guard'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('login')
  async login(@Body() dto: AuthDto) {
    return this.authService.login(dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('register')
  @Post('register')
  async register(@Body() dto: AuthDto) {
    return this.authService.register(dto)
  }

  @HttpCode(200)
  @Post('logout')
  async logout() {
    return true
  }


  @Get('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req) {
    return req.user
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req, @Res() res) {
    try {
      const result = await this.authService.googleLogin(req);

      // В зависимости от результата, выполните дополнительную логику
      if (result.token) {
        // Отправьте ответ с токеном
        res.status(200).json({ token: result.token });
      } else {
        // Редирект или другая логика
        res.redirect('http://localhost:5173/');
      }
    } catch (error) {
      // Обработка ошибок
      console.error('Error during Google authentication:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
