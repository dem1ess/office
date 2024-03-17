import { useEffect } from 'react'
import { BsSendFill } from 'react-icons/bs'
import { IoMdAdd } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.ts'
import { ITransaction } from '../../models/ITransaction.ts'
import { fetchUserTransactions } from '../../store/reducers/ActionsCreator.ts'
import UnauthorizedPage from '../Unauthorized/UnauthorizedPage.tsx'

export function Withdraw() {
	const dispatch = useAppDispatch()
	const { transaction } = useAppSelector(state => state.transaction)
	const user = useAppSelector(state => state.user.user)

	useEffect(() => {
		dispatch(fetchUserTransactions(user!.id))
		console.log(transaction)
	}, []) // Запускаем загрузку транзакций только при первом рендере

	return user ? (
		<div className='DefaultLayout_contentChildren__UAU26 pt-12 md:pt-16 flex justify-center w-full'>
			<div className='styles_root__1igZZ flex justify-center items-center flex-col w-full'>
				<div className='mb-8'>
					<p className='styles_header__v3sCm'>TLD Wallet</p>
				</div>
				<div className='styles_wallet__mbi07 md:w-1/2 border-color--border border'>
					<div className='styles_walletActions__pCmZM'>
						<div>
							<p className='styles_totalBalanceHeader__sUjSj'>
								Overall balance
							</p>
							<p className='styles_totalBalanceValue__KVoKa text-white'>
								{user ? <span>{user.balance}</span> : <span>--</span>}
								<span> USD</span>
							</p>
						</div>
						<div className='flex justify-center items-center'>
							<div className='styles_walletButtonWrapper__5Q3zx  styles_walletActionButton__OMw2H'>
								<button className='styles_walletButton__PDVQb btn-gradient Button_root__0ygym'>
									<BsSendFill />
								</button>
								<p>Withdraw</p>
							</div>
							<Link to='deposit'>
								<div className='styles_walletButtonWrapper__5Q3zx'>
									<button className='styles_walletButton__PDVQb bg-sky-400 Button_root__0ygym'>
										<IoMdAdd className='text-3xl' />
									</button>
									<p>Deposit</p>
								</div>
							</Link>
						</div>
					</div>
					<div className='styles_balancesWrapper__BIGba'>
						<div className='flex justify-between mx-5'>
							<p>Transaction History</p>
							<p className='pl-8'>Status</p>
							<p>Amount</p>
						</div>
						<div className='styles_balances__0nTGG'>
							{transaction?.map((transaction: ITransaction) => (
								<>
									<div
										key={transaction.id}
										className='styles_root__6W9Qt styles_tokenBalance__QuKRC'>
										<div className='styles_container__ljKHI'>
											<p className='styles_upperText__JgZ7V'>
												{transaction.id}
											</p>
											<div className='styles_tooltip__JZjY4'>
												<div className='Tooltip_detailsIcon__0Np2G Tooltip_tooltip__m_96l'></div>
											</div>
										</div>
										<div>
											<p className='styles_upperText__JgZ7V'>
												{transaction.transactionStatus}
											</p>
										</div>
										<div>
											<p className='styles_upperText__JgZ7V'>
												{transaction.amount}
											</p>
										</div>
									</div>
								</>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	) : (
		<UnauthorizedPage />
	)
}
