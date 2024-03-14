
import { instance } from '../api/axios'
import { IResponseUser, IUser, IUserData } from '../models/IUser'



export const AuthService = {
	async registration(userData: IUserData): Promise<IResponseUser> {
		const { data } = await instance.post<IResponseUser>('auth/register', userData)
		return data
	},

	async googleLogin() {
		try {
			// Выполните запрос к вашему бекенду для аутентификации через Google
			const { data } = await instance.get('/auth/google');

			// Верните данные, полученные от бекенда
			return data;
		} catch (error) {
			console.error('Error during Google login:', error);
			// Возможно, бросить ошибку или вернуть обработанную ошибку вместо того, чтобы молча ее подавлять
			throw error;
		}
	},

	async login(userData: IUserData): Promise<IResponseUser | undefined> {
		const { data } = await instance.post<IResponseUser>('auth/login', userData)
		return data
	},

	async getProfile(): Promise<IUser | undefined> {
		const { data } = await instance.get<IUser>('auth/profile')
		if (data) return data
	},
}
