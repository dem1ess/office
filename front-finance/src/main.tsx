import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import './index.css'
import { store } from './store/store.ts'
import './styles/2dda3a50dd348e4b.css'
import './styles/49827ac4b94a5338.css'
import './styles/49cafd37e161a589.css'
import './styles/731ac91e25607974.css'
import './styles/73ba7d8ee6f8b350.css'
import './styles/918f43afc2cecf83.css'
import './styles/TLD.css'
import './styles/b596dc6a90caa5c2.css'
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)
