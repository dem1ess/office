import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { getTokenFromLocalStorage } from './helpers/localstorage.helper.ts'
import { useAppDispatch } from './hooks/redux.ts'
import { router } from './router/router.tsx'
import { AuthService } from './service/auth.service.ts'
import { login, logout } from './store/reducers/UserSlice.ts'

function App() {
	const dispatch = useAppDispatch()
	const checkAuth = async () => {
		const token = getTokenFromLocalStorage()
		try {
			if (token) {
				const data = await AuthService.getProfile()
				if (data) {
					dispatch(login(data))
				} else {
					dispatch(logout())
				}
			}
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		checkAuth()
	}, [])
	return <RouterProvider router={router} />
}

export default App
