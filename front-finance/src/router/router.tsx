import { createBrowserRouter } from 'react-router-dom'
import { AssetPage } from '../pages/AssetPage'
import { HomePage } from '../pages/HomePage'
import { MarketplacePage } from '../pages/Marketplace'
import { WalletDeposit } from '../pages/Wallet/Deposit.tsx'
import { Withdraw } from '../pages/Wallet/Withdraw.tsx'
import AccountPage from '../pages/account/AccountPage'
import { KycPage } from '../pages/kyc/KycPage'
import { Layout } from '../pages/layout'

export const router = createBrowserRouter([
	{
		path: '/welcome',
		element: <HomePage />,
		errorElement: <HomePage />,
	},
	{
		path: '/',
		element: <Layout />,
		errorElement: <Layout />,
		children: [
			{ index: true, element: <MarketplacePage /> },
			{
				path: 'asset/:id',
				element: <AssetPage />,
			},
			{
				path: 'kyc',
				element: <KycPage />,
			},
			{
				path: 'wallet',
				element: <Withdraw />,
			},
			{
				path: 'wallet/deposit',
				element: <WalletDeposit />,
			},
			{
				path: 'account',
				element: <AccountPage />,
			},
			// Добавьте другие страницы, которые должны быть внутри Layout
		],
	},
])
