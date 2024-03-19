import { IsString } from 'class-validator'
// dto/prmoney-callback.dto.ts
import { IsNumber } from 'class-validator'

export class PrMoneyCallbackDto {
  @IsString()
  order_id: string

  @IsString()
  id: string

  @IsString()
  status: string

  @IsNumber()
  amount: number

  @IsNumber()
  amount_fee: number

  @IsNumber()
  actual_amount: number

  @IsString()
  client_id: string

  @IsString()
  description: string

  @IsString()
  card: string

  @IsString()
  comment: string

  @IsString()
  signature: string
}
