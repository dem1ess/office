import { PartialType } from '@nestjs/mapped-types'
import { Role } from '@prisma/client'
import {
	IsBoolean,
	IsEmail,
	IsEnum,
	IsNumber,
	IsOptional,
	IsString,
	MinLength
} from 'class-validator'
import { CreateUserDto } from './create-user.dto'

export class UpdateUserDto extends PartialType(CreateUserDto) {
	// ... остальные поля ...

	// Добавляем поля для загрузки фотографий
	@IsOptional()
	documentPhoto1?: Express.Multer.File

	@IsOptional()
	documentPhoto2?: Express.Multer.File
}