import { Link } from 'react-router-dom'
import LanguageSelector from '../i18n'

export function NavBarComponent() {
	return (
		<div className='styles_sideMenu__CiC1H DefaultLayout_nav___sMSW'>
			<nav>
				<ul className='styles_navList__BfiL6'>
					<div className='TLDLabel_box__GpJen'>
						<div className='TLDLabel_logoWrapper__u8POJ DefaultLayout_TLDLabel__1gKwY'>
							<Link className='TLDLabel_logo__HKkd8' to='/'>
								<img
									className=''
									src='/TLD_logo_beige.svg'
									alt='TLD'
								/>
							</Link>
							<LanguageSelector />
						</div>
					</div>
					<li className='styles_sideMenuNavItem__fij19 DefaultLayout_menuItem__H1jbg'>
						<Link className='styles_link__V9uY8' to='/account'>
							<div className='styles_iconWrap__rlIw7'>
								<svg
									width='20'
									height='18'
									viewBox='0 0 20 18'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className=''>
									<path
										d='M19.75 6C19.7504 5.93027 19.7409 5.86083 19.7219 5.79375L18.3766 1.0875C18.2861 0.775232 18.0971 0.500591 17.8378 0.304588C17.5784 0.108585 17.2626 0.00173713 16.9375 0H3.0625C2.73741 0.00173713 2.4216 0.108585 2.16223 0.304588C1.90287 0.500591 1.71386 0.775232 1.62344 1.0875L0.279063 5.79375C0.259696 5.86079 0.249912 5.93022 0.250001 6V7.5C0.250001 8.08217 0.385545 8.65634 0.645899 9.17705C0.906252 9.69776 1.28427 10.1507 1.75 10.5V16.5C1.75 16.8978 1.90804 17.2794 2.18934 17.5607C2.47064 17.842 2.85218 18 3.25 18H16.75C17.1478 18 17.5294 17.842 17.8107 17.5607C18.092 17.2794 18.25 16.8978 18.25 16.5V10.5C18.7157 10.1507 19.0937 9.69776 19.3541 9.17705C19.6145 8.65634 19.75 8.08217 19.75 7.5V6ZM3.0625 1.5H16.9375L18.0081 5.25H1.99469L3.0625 1.5ZM7.75 6.75H12.25V7.5C12.25 8.09674 12.0129 8.66903 11.591 9.09099C11.169 9.51295 10.5967 9.75 10 9.75C9.40326 9.75 8.83097 9.51295 8.40901 9.09099C7.98705 8.66903 7.75 8.09674 7.75 7.5V6.75ZM6.25 6.75V7.5C6.25 8.09674 6.01295 8.66903 5.59099 9.09099C5.16903 9.51295 4.59674 9.75 4 9.75C3.40326 9.75 2.83097 9.51295 2.40901 9.09099C1.98705 8.66903 1.75 8.09674 1.75 7.5V6.75H6.25ZM16.75 16.5H3.25V11.175C3.4969 11.2248 3.74813 11.2499 4 11.25C4.58217 11.25 5.15634 11.1145 5.67705 10.8541C6.19776 10.5937 6.6507 10.2157 7 9.75C7.3493 10.2157 7.80224 10.5937 8.32295 10.8541C8.84366 11.1145 9.41783 11.25 10 11.25C10.5822 11.25 11.1563 11.1145 11.6771 10.8541C12.1978 10.5937 12.6507 10.2157 13 9.75C13.3493 10.2157 13.8022 10.5937 14.3229 10.8541C14.8437 11.1145 15.4178 11.25 16 11.25C16.2519 11.2499 16.5031 11.2248 16.75 11.175V16.5ZM16 9.75C15.4033 9.75 14.831 9.51295 14.409 9.09099C13.9871 8.66903 13.75 8.09674 13.75 7.5V6.75H18.25V7.5C18.25 8.09674 18.0129 8.66903 17.591 9.09099C17.169 9.51295 16.5967 9.75 16 9.75Z'
										strokeWidth='1'
										stroke='#58667E'
										fill='#58667E'
										strokeLinecap='round'
										strokeLinejoin='round'></path>
								</svg>
							</div>
							<span className='styles_title__UkiHt'>Dashboard</span>
						</Link>
					</li>
					<li className='styles_sideMenuNavItem__fij19 DefaultLayout_menuItem__H1jbg'>
						<Link className='styles_link__V9uY8' to='/'>
							<div className='styles_iconWrap__rlIw7'>
								<svg
									width='20'
									height='20'
									viewBox='0 0 20 20'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className=''>
									<path
										d='M19.75 6C19.7504 5.93027 19.7409 5.86083 19.7219 5.79375L18.3766 1.0875C18.2861 0.775232 18.0971 0.500591 17.8378 0.304588C17.5784 0.108585 17.2626 0.00173713 16.9375 0H3.0625C2.73741 0.00173713 2.4216 0.108585 2.16223 0.304588C1.90287 0.500591 1.71386 0.775232 1.62344 1.0875L0.279063 5.79375C0.259696 5.86079 0.249912 5.93022 0.250001 6V7.5C0.250001 8.08217 0.385545 8.65634 0.645899 9.17705C0.906252 9.69776 1.28427 10.1507 1.75 10.5V16.5C1.75 16.8978 1.90804 17.2794 2.18934 17.5607C2.47064 17.842 2.85218 18 3.25 18H16.75C17.1478 18 17.5294 17.842 17.8107 17.5607C18.092 17.2794 18.25 16.8978 18.25 16.5V10.5C18.7157 10.1507 19.0937 9.69776 19.3541 9.17705C19.6145 8.65634 19.75 8.08217 19.75 7.5V6ZM3.0625 1.5H16.9375L18.0081 5.25H1.99469L3.0625 1.5ZM7.75 6.75H12.25V7.5C12.25 8.09674 12.0129 8.66903 11.591 9.09099C11.169 9.51295 10.5967 9.75 10 9.75C9.40326 9.75 8.83097 9.51295 8.40901 9.09099C7.98705 8.66903 7.75 8.09674 7.75 7.5V6.75ZM6.25 6.75V7.5C6.25 8.09674 6.01295 8.66903 5.59099 9.09099C5.16903 9.51295 4.59674 9.75 4 9.75C3.40326 9.75 2.83097 9.51295 2.40901 9.09099C1.98705 8.66903 1.75 8.09674 1.75 7.5V6.75H6.25ZM16.75 16.5H3.25V11.175C3.4969 11.2248 3.74813 11.2499 4 11.25C4.58217 11.25 5.15634 11.1145 5.67705 10.8541C6.19776 10.5937 6.6507 10.2157 7 9.75C7.3493 10.2157 7.80224 10.5937 8.32295 10.8541C8.84366 11.1145 9.41783 11.25 10 11.25C10.5822 11.25 11.1563 11.1145 11.6771 10.8541C12.1978 10.5937 12.6507 10.2157 13 9.75C13.3493 10.2157 13.8022 10.5937 14.3229 10.8541C14.8437 11.1145 15.4178 11.25 16 11.25C16.2519 11.2499 16.5031 11.2248 16.75 11.175V16.5ZM16 9.75C15.4033 9.75 14.831 9.51295 14.409 9.09099C13.9871 8.66903 13.75 8.09674 13.75 7.5V6.75H18.25V7.5C18.25 8.09674 18.0129 8.66903 17.591 9.09099C17.169 9.51295 16.5967 9.75 16 9.75Z'
										strokeWidth='1'
										stroke='#58667E'
										fill='#58667E'
										strokeLinecap='round'
										strokeLinejoin='round'></path>
								</svg>
							</div>
							<span className='styles_title__UkiHt'>Marketplace</span>
						</Link>
					</li>
					<li className='styles_sideMenuNavItem__fij19'>
						<Link className='styles_link__V9uY8' to='/wallet'>
							<div className='styles_iconWrap__rlIw7'>
								<svg
									className=''
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										opacity='0.2'
										d='M3.75 18C3.75 18.3978 3.90804 18.7794 4.18934 19.0607C4.47064 19.342 4.85218 19.5 5.25 19.5H20.25C20.4489 19.5 20.6397 19.421 20.7803 19.2803C20.921 19.1397 21 18.9489 21 18.75V8.25C21 8.05109 20.921 7.86032 20.7803 7.71967C20.6397 7.57902 20.4489 7.5 20.25 7.5H5.25C4.85218 7.5 4.47064 7.34196 4.18934 7.06066C3.90804 6.77936 3.75 6.39782 3.75 6V18Z'
										fill='#58667E'></path>
									<path
										d='M3.75 6V18C3.75 18.3978 3.90804 18.7794 4.18934 19.0607C4.47064 19.342 4.85218 19.5 5.25 19.5H20.25C20.4489 19.5 20.6397 19.421 20.7803 19.2803C20.921 19.1397 21 18.9489 21 18.75V8.25C21 8.05109 20.921 7.86032 20.7803 7.71967C20.6397 7.57902 20.4489 7.5 20.25 7.5H5.25C4.85218 7.5 4.47064 7.34196 4.18934 7.06066C3.90804 6.77936 3.75 6.39782 3.75 6ZM3.75 6C3.75 5.60218 3.90804 5.22064 4.18934 4.93934C4.47064 4.65804 4.85218 4.5 5.25 4.5H18'
										stroke='#58667E'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'></path>
									<path
										d='M16.875 14.625C17.4963 14.625 18 14.1213 18 13.5C18 12.8787 17.4963 12.375 16.875 12.375C16.2537 12.375 15.75 12.8787 15.75 13.5C15.75 14.1213 16.2537 14.625 16.875 14.625Z'
										fill='#58667E'></path>
								</svg>
							</div>
							<span className='styles_title__UkiHt'>Wallet</span>
						</Link>
					</li>
					<li className='styles_sideMenuNavItem__fij19 DefaultLayout_menuItem__H1jbg'>
						<Link className='styles_link__V9uY8' to='/kyc'>
							<div className='styles_iconWrap__rlIw7'>
								<svg
									className=''
									xmlns='http://www.w3.org/2000/svg'
									width='22'
									height='22'
									viewBox='0 0 22 22'>
									<path
										d='M20.1744 8.63937C19.8209 8.27 19.4553 7.88938 19.3175 7.55469C19.19 7.24813 19.1825 6.74 19.175 6.24781C19.1609 5.33281 19.1459 4.29594 18.425 3.575C17.7041 2.85406 16.6672 2.83906 15.7522 2.825C15.26 2.8175 14.7519 2.81 14.4453 2.6825C14.1116 2.54469 13.73 2.17906 13.3606 1.82562C12.7137 1.20406 11.9788 0.5 11 0.5C10.0212 0.5 9.28719 1.20406 8.63937 1.82562C8.27 2.17906 7.88938 2.54469 7.55469 2.6825C7.25 2.81 6.74 2.8175 6.24781 2.825C5.33281 2.83906 4.29594 2.85406 3.575 3.575C2.85406 4.29594 2.84375 5.33281 2.825 6.24781C2.8175 6.74 2.81 7.24813 2.6825 7.55469C2.54469 7.88844 2.17906 8.27 1.82562 8.63937C1.20406 9.28625 0.5 10.0212 0.5 11C0.5 11.9788 1.20406 12.7128 1.82562 13.3606C2.17906 13.73 2.54469 14.1106 2.6825 14.4453C2.81 14.7519 2.8175 15.26 2.825 15.7522C2.83906 16.6672 2.85406 17.7041 3.575 18.425C4.29594 19.1459 5.33281 19.1609 6.24781 19.175C6.74 19.1825 7.24813 19.19 7.55469 19.3175C7.88844 19.4553 8.27 19.8209 8.63937 20.1744C9.28625 20.7959 10.0212 21.5 11 21.5C11.9788 21.5 12.7128 20.7959 13.3606 20.1744C13.73 19.8209 14.1106 19.4553 14.4453 19.3175C14.7519 19.19 15.26 19.1825 15.7522 19.175C16.6672 19.1609 17.7041 19.1459 18.425 18.425C19.1459 17.7041 19.1609 16.6672 19.175 15.7522C19.1825 15.26 19.19 14.7519 19.3175 14.4453C19.4553 14.1116 19.8209 13.73 20.1744 13.3606C20.7959 12.7137 21.5 11.9788 21.5 11C21.5 10.0212 20.7959 9.28719 20.1744 8.63937ZM19.0916 12.3228C18.6425 12.7916 18.1775 13.2763 17.9309 13.8716C17.6947 14.4434 17.6844 15.0969 17.675 15.7297C17.6656 16.3859 17.6553 17.0731 17.3638 17.3638C17.0722 17.6544 16.3897 17.6656 15.7297 17.675C15.0969 17.6844 14.4434 17.6947 13.8716 17.9309C13.2763 18.1775 12.7916 18.6425 12.3228 19.0916C11.8541 19.5406 11.375 20 11 20C10.625 20 10.1422 19.5387 9.67719 19.0916C9.21219 18.6444 8.72375 18.1775 8.12844 17.9309C7.55656 17.6947 6.90313 17.6844 6.27031 17.675C5.61406 17.6656 4.92688 17.6553 4.63625 17.3638C4.34562 17.0722 4.33437 16.3897 4.325 15.7297C4.31562 15.0969 4.30531 14.4434 4.06906 13.8716C3.8225 13.2763 3.3575 12.7916 2.90844 12.3228C2.45937 11.8541 2 11.375 2 11C2 10.625 2.46125 10.1422 2.90844 9.67719C3.35562 9.21219 3.8225 8.72375 4.06906 8.12844C4.30531 7.55656 4.31562 6.90313 4.325 6.27031C4.33437 5.61406 4.34469 4.92688 4.63625 4.63625C4.92781 4.34562 5.61031 4.33437 6.27031 4.325C6.90313 4.31562 7.55656 4.30531 8.12844 4.06906C8.72375 3.8225 9.20844 3.3575 9.67719 2.90844C10.1459 2.45937 10.625 2 11 2C11.375 2 11.8578 2.46125 12.3228 2.90844C12.7878 3.35562 13.2763 3.8225 13.8716 4.06906C14.4434 4.30531 15.0969 4.31562 15.7297 4.325C16.3859 4.33437 17.0731 4.34469 17.3638 4.63625C17.6544 4.92781 17.6656 5.61031 17.675 6.27031C17.6844 6.90313 17.6947 7.55656 17.9309 8.12844C18.1775 8.72375 18.6425 9.20844 19.0916 9.67719C19.5406 10.1459 20 10.625 20 11C20 11.375 19.5387 11.8578 19.0916 12.3228ZM15.2806 8.21937C15.3504 8.28903 15.4057 8.37175 15.4434 8.46279C15.4812 8.55384 15.5006 8.65144 15.5006 8.75C15.5006 8.84856 15.4812 8.94616 15.4434 9.0372C15.4057 9.12825 15.3504 9.21097 15.2806 9.28063L10.0306 14.5306C9.96097 14.6004 9.87825 14.6557 9.7872 14.6934C9.69616 14.7312 9.59856 14.7506 9.5 14.7506C9.40144 14.7506 9.30384 14.7312 9.2128 14.6934C9.12175 14.6557 9.03903 14.6004 8.96937 14.5306L6.71937 12.2806C6.57864 12.1399 6.49958 11.949 6.49958 11.75C6.49958 11.551 6.57864 11.3601 6.71937 11.2194C6.86011 11.0786 7.05098 10.9996 7.25 10.9996C7.44902 10.9996 7.63989 11.0786 7.78063 11.2194L9.5 12.9397L14.2194 8.21937C14.289 8.14964 14.3717 8.09432 14.4628 8.05658C14.5538 8.01884 14.6514 7.99941 14.75 7.99941C14.8486 7.99941 14.9462 8.01884 15.0372 8.05658C15.1283 8.09432 15.211 8.14964 15.2806 8.21937Z'
										fill='#58667E'
										stroke='#58667E'
										strokeWidth='0.5'></path>
								</svg>
							</div>
							<span className='styles_title__UkiHt'>Verification</span>
						</Link>
					</li>
					<hr className='DefaultLayout_horizontalLine__UJhca' />
					<li className='styles_sideMenuNavItem__fij19'>
						<a
							className='styles_link__V9uY8'
							target='_blank'
							href='https://api.whatsapp.com/message/7IRLJKFEV3DJP1?autoload=1&app_absent=0'>
							<div className='styles_iconWrap__rlIw7'>
								<svg
									className=''
									width='20'
									height='20'
									viewBox='0 0 20 20'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M10.3125 1.875C8.24119 1.87727 6.25538 2.70111 4.79074 4.16574C3.32611 5.63038 2.50227 7.61619 2.5 9.6875V16.2758C2.50041 16.6003 2.62953 16.9115 2.85902 17.141C3.08852 17.3705 3.39966 17.4996 3.72422 17.5H10.3125C12.3845 17.5 14.3716 16.6769 15.8368 15.2118C17.3019 13.7466 18.125 11.7595 18.125 9.6875C18.125 7.6155 17.3019 5.62836 15.8368 4.16323C14.3716 2.6981 12.3845 1.875 10.3125 1.875ZM12.5 11.875H7.5C7.33424 11.875 7.17527 11.8092 7.05806 11.6919C6.94085 11.5747 6.875 11.4158 6.875 11.25C6.875 11.0842 6.94085 10.9253 7.05806 10.8081C7.17527 10.6908 7.33424 10.625 7.5 10.625H12.5C12.6658 10.625 12.8247 10.6908 12.9419 10.8081C13.0592 10.9253 13.125 11.0842 13.125 11.25C13.125 11.4158 13.0592 11.5747 12.9419 11.6919C12.8247 11.8092 12.6658 11.875 12.5 11.875ZM12.5 9.375H7.5C7.33424 9.375 7.17527 9.30915 7.05806 9.19194C6.94085 9.07473 6.875 8.91576 6.875 8.75C6.875 8.58424 6.94085 8.42527 7.05806 8.30806C7.17527 8.19085 7.33424 8.125 7.5 8.125H12.5C12.6658 8.125 12.8247 8.19085 12.9419 8.30806C13.0592 8.42527 13.125 8.58424 13.125 8.75C13.125 8.91576 13.0592 9.07473 12.9419 9.19194C12.8247 9.30915 12.6658 9.375 12.5 9.375Z'
										fill='#58667E'></path>
								</svg>
							</div>
							<span className='styles_title__UkiHt'>Ask a question</span>
						</a>
					</li>
					{/*<li className='styles_sideMenuNavItem__fij19'>*/}
					{/*	<a*/}
					{/*		className='styles_link__V9uY8'*/}
					{/*		target='_blank'*/}
					{/*		href='https://faq.TLD.com/en/general/introduction-to-TLD-platform'>*/}
					{/*		<div className='styles_iconWrap__rlIw7'>*/}
					{/*			<svg*/}
					{/*				className=''*/}
					{/*				width='20'*/}
					{/*				height='20'*/}
					{/*				viewBox='0 0 20 20'*/}
					{/*				fill='none'*/}
					{/*				xmlns='http://www.w3.org/2000/svg'>*/}
					{/*				<path*/}
					{/*					d='M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.4149 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1227 7.84581 17.266 5.78051 15.7427 4.25727C14.2195 2.73403 12.1542 1.87727 10 1.875ZM10 15C9.81458 15 9.63333 14.945 9.47916 14.842C9.32499 14.739 9.20482 14.5926 9.13387 14.4213C9.06291 14.25 9.04434 14.0615 9.08052 13.8796C9.11669 13.6977 9.20598 13.5307 9.33709 13.3996C9.4682 13.2685 9.63525 13.1792 9.81711 13.143C9.99896 13.1068 10.1875 13.1254 10.3588 13.1964C10.5301 13.2673 10.6765 13.3875 10.7795 13.5417C10.8825 13.6958 10.9375 13.8771 10.9375 14.0625C10.9375 14.3111 10.8387 14.5496 10.6629 14.7254C10.4871 14.9012 10.2486 15 10 15ZM10.625 11.1938V11.25C10.625 11.4158 10.5592 11.5747 10.4419 11.6919C10.3247 11.8092 10.1658 11.875 10 11.875C9.83424 11.875 9.67527 11.8092 9.55806 11.6919C9.44085 11.5747 9.375 11.4158 9.375 11.25V10.625C9.375 10.4592 9.44085 10.3003 9.55806 10.1831C9.67527 10.0658 9.83424 10 10 10C11.0336 10 11.875 9.29688 11.875 8.4375C11.875 7.57812 11.0336 6.875 10 6.875C8.96641 6.875 8.125 7.57812 8.125 8.4375V8.75C8.125 8.91576 8.05916 9.07473 7.94195 9.19194C7.82474 9.30915 7.66576 9.375 7.5 9.375C7.33424 9.375 7.17527 9.30915 7.05806 9.19194C6.94085 9.07473 6.875 8.91576 6.875 8.75V8.4375C6.875 6.88672 8.27657 5.625 10 5.625C11.7234 5.625 13.125 6.88672 13.125 8.4375C13.125 9.79531 12.05 10.932 10.625 11.1938Z'*/}
					{/*					fill='#58667E'></path>*/}
					{/*			</svg>*/}
					{/*		</div>*/}
					{/*		<span className='styles_title__UkiHt'>How it works</span>*/}
					{/*	</a>*/}
					{/*</li>*/}
				</ul>
			</nav>
		</div>
	)
}