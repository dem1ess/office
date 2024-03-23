import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Request,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { FileFieldsInterceptor } from '@nestjs/platform-express'
import { User } from '@prisma/client'
import { diskStorage } from 'multer'
import { extname } from 'path'
import { AuthDto } from 'src/auth/dto/auth.dto'
import { Roles } from 'src/roles/roles.decorator'
import { RolesGuard } from 'src/roles/roles.guard'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UsePipes(new ValidationPipe())
  @Post()
  async create(@Body() dto: AuthDto) {
    return this.userService.create(dto)
  }

  @Put(':id')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'documentPhoto1', maxCount: 1 },
        { name: 'documentPhoto2', maxCount: 1 }
      ],
      {
        storage: diskStorage({
          destination: './uploads',
          filename: (req, file, callback) => {
            const uniqueSuffix =
              Date.now() + '-' + Math.round(Math.random() * 1e9)
            const ext = extname(file.originalname)
            const filename = `${file.fieldname}-${uniqueSuffix}${ext}`
            callback(null, filename)
          }
        })
      }
    )
  )
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(
    @Param('id') id: string,
    @UploadedFiles()
    files: {
      documentPhoto1?: Express.Multer.File[]
      documentPhoto2?: Express.Multer.File[]
    },
    @Body() dto: UpdateUserDto
  ) {
    // Получаем первый файл из каждого массива файлов
    const documentPhoto1 = files.documentPhoto1?.[0]
    const documentPhoto2 = files.documentPhoto2?.[0]

    // Если файлы были загружены, сохраняем их URL в DTO
    if (documentPhoto1) {
      dto.documentPhoto1Url = `http://localhost:3000/images/kys/${id}/${documentPhoto1.filename}`
    }
    if (documentPhoto2) {
      dto.documentPhoto2Url = `http://localhost:3000/images/kys/${id}/${documentPhoto2.filename}`
    }

    return this.userService.update(id, dto)
  }

  @Put(':id/verify')
  async toggleVerification(
    @Param('id') id: string,
    @Body('isVerif') isVerif: boolean
  ) {
    try {
      await this.userService.toggleVerification(id, isVerif)
      return { message: 'User verification status updated successfully' }
    } catch (error) {
      throw new Error('Failed to update user verification status')
    }
  }

  @Get(':id')
  async getProfileId(@Param('id') id: string) {
    return this.userService.getProfileId(id)
  }
  @Get('check')
  async checkAuth(@Request() req) {
    // Если пользователь аутентифицирован, req.user будет содержать информацию о пользователе
    return req.user
  }

  @Get()
  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  async findAll(): Promise<User[]> {
    return this.userService.findAll()
  }
}
