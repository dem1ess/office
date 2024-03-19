import { useState } from 'react'
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
				console.log(user.id, amount)
				// Создаем транзакцию
				const response = await instance.post('/transactions', {
					userId: user.id,
					amount: parseFloat(amount),
				})

				// Получаем transactionId из ответ
				const transactionId = response.data.id

				// Перенаправляем пользователя на страницу оплаты
				const clientId = '1oYwaDHU0j6bIVymaldsNW7icpYn2vBRmzFSuQvE' // Замените на ваш client_id
				const paymentUrl = `https://new.prmoney.com/payments/create?client_id=${clientId}&amount=${amount}&currency=840&description=${transactionId}`
				window.location.href = paymentUrl
			} else {
				console.error('User is not logged in')
			}
		} catch (error) {
			console.error('Ошибка при создании транзакции:', error)
		}
	}

	return (
		<div className='DefaultLayout_contentChildren__UAU26 m0 md:m-5 pt-12 md:pt-16 flex justify-center w-full'>
			<div className='bg-color--primary-bg flex flex-col  rounded-xl p-12 w-1/2'>
				<Link to=' wallet'>
					<div className='flex items-center'>
						<IoArrowBack className='text-3xl text-sky-500' />
						<p className='text-sky-500 text-lg'>Back to Wallet</p>
					</div>
				</Link>
				<p className='text-lg my-3'>Enter amount</p>
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
							Continue
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}
