import md5 from 'crypto-js/md5'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IoArrowBack } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { instance } from '../../api/axios.ts'
import { useAppSelector } from '../../hooks/redux.ts'
import { IUser } from '../../models/IUser.ts'

export function WalletDeposit() {
	const user = useAppSelector(state => state.user.user) as IUser | null
	const [amount, setAmount] = useState('')

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		try {
			if (user) {
				const response = await instance.post('/transactions', {
					userId: user.id,
					amount: parseFloat(amount),
				})

				// Получаем transactionId из ответа
				const transactionId = response.data.id
				// Генерация данных с помощью PHP-кода
				const ids = '1585'
				const key_shop = '34b941437d7c445ff282ea21c1bbcbfa'
				const val = 'USD'

				const sumFormatted = parseFloat(amount).toFixed(2) // Форматируем сумму
				const hash = md5(
					`${ids}:${sumFormatted}:${key_shop}:${transactionId}:${val}`
				).toString()

				console.log(hash)
				// Перенаправляем пользователя на страницу оплаты
				const paymentUrl = `https://kassify.com/sci_v2/?ids=${ids}&summ=${sumFormatted}&s=${hash}&us_id=${transactionId}&user_code=${user.email}&val=${val}`
				window.location.href = paymentUrl
			} else {
				console.error('User is not logged in')
			}
		} catch (error) {
			console.error('Ошибка при создании транзакции:', error)
		}
	}
	const { t } = useTranslation()

	return (
		<div className='DefaultLayout_contentChildren__UAU26 m0 md:m-5 pt-12 md:pt-16 flex justify-center w-full'>
			<div className='bg-color--primary-bg flex flex-col  rounded-xl p-12 w-1/2'>
				<Link to='/app/wallet'>
					<div className='flex items-center'>
						<IoArrowBack className='text-3xl text-sky-500' />
						<p className='text-sky-500 text-lg'>{t('BacktoWallet')}</p>
					</div>
				</Link>
				<p className='text-lg my-3'>{t('Enteramount')} USD</p>
				<form onSubmit={handleSubmit}>
					<input
						type='number'
						value={amount}
						onChange={e => setAmount(e.target.value)}
						className='w-full p-2 hover:none bg-gray-200 text-gray-600 font-bold text-lg rounded-l-md focus:outline-none'
					/>
					<div className='mt-10 flex flex-col justify-center items-center'>
						<button
							type='submit'
							className='bg-sky-400 mt-5 text-white px-4 rounded-xl py-5'>
							{t('Continue')}
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}
