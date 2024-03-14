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
				className='mt-1 block w-full border-color--secondary-bg rounded-xl text-white shadow-sm py-1 px-2 bg-color--secondary-bg text-sm'>
				<option value='en'>English</option>
				<option value='pl'>Polski</option>
				<option value='it'>Italiano</option>
				<option value='de'>Deutsch</option>
			</select>
		</div>
	)
}

export default LanguageSelector
