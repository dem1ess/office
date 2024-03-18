import React, { ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'

interface LanguageSelectorProps {}

const LanguageSelector: React.FC<LanguageSelectorProps> = () => {
	const { i18n } = useTranslation()

	const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
		i18n.changeLanguage(event.target.value)
	}

	return (
		<div className='my-2'>
			<select
				id='language'
				onChange={changeLanguage}
				className='mt-1 block w-full border-color--secondary-bg rounded-xl font-bold text-white shadow-sm py-1 px-2 bg-color--secondary-bg text-sm'>
				<option className="font-bold" value='en'>Eng</option>
				<option className="font-bold" value='pl'>PL</option>
				<option className="font-bold" value='it'>IT</option>
				<option className="font-bold" value='de'>DE</option>
			</select>
		</div>
	)
}

export default LanguageSelector
