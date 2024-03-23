import { useEffect, useState } from 'react'
import { instance } from '../api/axios'
import { useAppSelector } from '../hooks/redux'
import { IUser } from '../models/IUser'
export function AdminPage() {
	const user = useAppSelector(state => state.user.user) as IUser | null
	const [users, setUsers] = useState<IUser[]>([])

	useEffect(() => {
		if (user && user.role === 'ADMIN') {
			fetchUsers()
		}
	}, [user])

	const fetchUsers = async () => {
		try {
			const response = await instance.get('/user')
			setUsers(response.data)
		} catch (error) {
			console.error('Error fetching users:', error)
		}
	}

	const toggleVerification = async (userId: string, isVerif: boolean) => {
		try {
			await instance.put(`/user/${userId}/verify`, { isVerif: !isVerif })
			fetchUsers()
		} catch (error) {
			console.error('Error toggling verification:', error)
		}
	}

	return (
		<div className='m0 md:m-5 pt-12 md:pt-16 flex justify-center w-full'>
			{user && user.role === 'ADMIN' ? (
				<div className='bg-color--primary-bg rounded-xl p-12'>
					<h2 className='text-xl font-bold mb-4 text-white'>Admin Page</h2>
					<div className='flex flex-col'>
						{users
							.sort(
								(a, b) =>
									new Date(b.createdAt).getTime() -
									new Date(a.createdAt).getTime()
							)
							.map(user => (
								<div
									key={user.id}
									className='border p-4 flex flex-col mr-4 mb-4'>
									<p className='text-white'>ID: {user.id}</p>
									<p className='text-white'>Email: {user.email}</p>
									<p className='text-white'>Balance: {user.balance}</p>
									<button
										onClick={() => toggleVerification(user.id, user.isVerif)}
										className={`mt-2 px-4 py-2 rounded ${
											user.isVerif
												? 'bg-red-500 text-white'
												: 'bg-green-500 text-white'
										}`}>
										{user.isVerif ? 'Unverify' : 'Verify'}
									</button>
								</div>
							))}
					</div>
				</div>
			) : (
				<p className='text-white'>You are not authorized to view this page.</p>
			)}
		</div>
	)
}
