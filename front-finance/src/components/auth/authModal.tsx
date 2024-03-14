import React, { useState } from 'react';
import { setTokenToLocalStorage } from '../../helpers/localstorage.helper';
import { AuthService } from '../../service/auth.service';
import { useDispatch } from 'react-redux';
import { login } from '../../store/reducers/UserSlice.ts';
import { toast } from 'react-toastify'

interface LoginModalProps {
	show: boolean;
	onClose: () => void;
}

enum FormMode {
	Login,
	Registration,
}

const LoginModal: React.FC<LoginModalProps> = ({ show, onClose }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [mode, setMode] = useState(FormMode.Login);
	const dispatch = useDispatch();

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		try {
			const userData = { email, password };
			let response;
			if (mode === FormMode.Login) {
				response = await AuthService.login(userData);
			} else {
				response = await AuthService.registration(userData);
			}

			if (response && response.token) {
				setTokenToLocalStorage('token', response.token);
				dispatch(login(response.user));
				onClose();
			}
		} catch (error) {
			console.error(mode === FormMode.Login ? 'Error during login:' : 'Error during registration:', error);
		}
	};

	const switchMode = () => {
		setMode(mode === FormMode.Login ? FormMode.Registration : FormMode.Login);
	};

	const handleRegistration = async (event: React.FormEvent) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			toast('Passwords do not match');
			return null;
		}

		try {
			const userData = { email, password };
			const response = await AuthService.registration(userData);

			if (response && response.token) {
				setTokenToLocalStorage('token', response.token);
				dispatch(login(response.user));
				toast('Registration success')
				onClose();
			}
		} catch (error) {
			console.error('Error during registration:', error);
		}
	};

	if (!show) {
		return null;
	}

	return (
		<div onClick={onClose} className='fixed inset-0 flex items-center justify-center z-50'>
			<div onClick={(e) => e.stopPropagation()} className='px-6 py-3 items-center bg-color--secondary-bg rounded-xl shadow-lg'>
				<div className='flex text-white items-center justify-center m-5'>
					<h1>{mode === FormMode.Login ? 'Login' : 'Registration'}</h1>
				</div>
				<form className='space-y-4'>
					<input
						type='email'
						placeholder='Email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						className='w-full p-3 hover:none bg-gray-200 text-gray-600 font-bold text-lg rounded-lg focus:outline-none '
					/>
					<input
						type='password'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						className='w-full p-3.5 border rounded-lg'
					/>
					{mode === FormMode.Registration && (
						<input
							type='password'
							placeholder='Confirm Password'
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
							className='w-full p-3.5 border rounded-lg'
						/>
					)}
					<div className='flex flex-col justify-between'>
						<button
							type='submit'
							onClick={mode === FormMode.Login ? handleSubmit : handleRegistration}
							className='bg-sky-400 mb-4 text-white px-4 rounded-xl py-5'>
							{mode === FormMode.Login ? 'Login' : 'Register'}
						</button>
						<p
							onClick={switchMode}
							className='text-white text-center rounded-xl '>
							{mode === FormMode.Login ? 'Switch to Registration' : 'Switch to Login'}
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginModal;
