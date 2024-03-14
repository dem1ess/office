import { FC, useState } from 'react'
import CameraComponent from './Camera'
import { COUNTRIES } from './selector/countries'
import CountrySelector from './selector/selector'
import { SelectMenuOption } from './selector/types'

export const KycPage: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [country, setCountry] = useState<SelectMenuOption['value']>('PL')
	const [documentType, setDocumentType] = useState('ID card')

	const documentTypes = [
		'ID card',
		'Passport',
		'Residence permit',
		'Driver\'s license'
	]

	// @ts-ignore
	return (
		<div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
			<div className="relative py-3 sm:max-w-xl sm:mx-auto">
				<div
					className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
				<div className="relative px-4 py-10 bg-color--primary-bg border-color--border border shadow-lg sm:rounded-3xl sm:p-20">
					<form className="max-w-md mx-auto">
						<h1 className="text-2xl text-white font-semibold text-center">Verification Form</h1>
						<div className="space-y-6 py-8">
							<div>
								<label
									htmlFor="country"
									className="text-sm font-bold mb-4 text-white block">
									Select issuing country
								</label>
								<CountrySelector
									id={'country-selector'}
									open={isOpen}
									onToggle={() => setIsOpen(!isOpen)}
									onChange={setCountry}
									//@ts-ignore
									selectedValue={COUNTRIES?.find(
										option => option.value === country
									)}
								/>
							</div>
							<div>
								<label className="text-sm font-bold mb-3 text-white block">
									Choose your document type
								</label>
								<div className="space-y-2">
									{documentTypes.map((type, index) => (
										<div key={index} className="flex items-center text-white">
											<input
												type="radio"
												id={`document-type-${index}`}
												name="document-type"
												value={type}
												checked={documentType === type}
												onChange={(e) => setDocumentType(e.target.value)}
												className="form-radio h-4 w-4 text-blue-500 transition duration-150 ease-in-out focus:ring focus:ring-blue-200"
											/>
											<label htmlFor={`document-type-${index}`} className="ml-2 cursor-pointer">
												{type}
											</label>
										</div>
									))}
								</div>

							</div>
							<div className="flex justify-around">
								<div>
									<label
										htmlFor="document-photo"
										className="text-sm font-bold mb-2 text-white block">
										Upload a first photo
									</label>
									<div className="relative">
										<input
											type="file"
											id="document-photo"
											name="document-photo"
											className="hidden"
										/>
										<label
											htmlFor="document-photo"
											className="cursor-pointer block w-full py-8 px-4 bg-gradient-to-b from-cyan-400 to-light-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 active:bg-blue-800"
										>
											Choose a File
										</label>
									</div>
								</div>
								<div>
									<label
										htmlFor="document-photo"
										className="text-sm font-bold mb-2 text-white block">
										Upload a second photo
									</label>
									<div className="relative">
										<input
											type="file"
											id="document-photo"
											name="document-photo"
											className="hidden"
										/>
										<label
											htmlFor="document-photo"
											className="cursor-pointer block w-full py-8 px-4 bg-gradient-to-b from-cyan-400 to-light-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 active:bg-blue-800"
										>
											<p>Choose a File</p>
										</label>
									</div>
								</div>
							</div>
							<CameraComponent />
							<div>
								<label
									htmlFor="email"
									className="text-sm font-bold text-white block">
									Email verification
								</label>
								<input
									type="email"
									id="email"
									name="email"
									className="w-full p-2.5 border border-gray-300 rounded mt-1"
									placeholder="you@example.com"
								/>
							</div>

							<div>
								<button
									type="submit"
									className="w-full p-2.5 text-white bg-cyan-500 rounded hover:bg-cyan-700 focus:outline-none">
									Submit
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
