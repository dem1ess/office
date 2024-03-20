import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import de from '../../public/locales/de.json'
import en from '../../public/locales/en.json'
import it from '../../public/locales/it.json'
import pl from '../../public/locales/pl.json'

const resources = {
	en: {
		translation: en,
	},
	pl: {
		translation: pl,
	},
	it: {
		translation: it,
	},
	de: {
		translation: de,
	},
}

i18n.use(initReactI18next).init({
	resources,
	lng: 'pl',
	fallbackLng: 'pl',
	interpolation: {
		escapeValue: false,
	},
})

export default i18n
