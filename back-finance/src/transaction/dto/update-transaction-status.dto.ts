import { TransactionStatus } from '@prisma/client'
import { IsEnum, IsUUID } from 'class-validator'

export class UpdateTransactionStatusDto {
  @IsUUID()
  transactionId: string

  @IsEnum(TransactionStatus)
  transactionStatus: TransactionStatus
}
