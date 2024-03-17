import { Link } from 'react-router-dom'

export function HeroSelections() {
	return (
		<div
			id='w-node-_39a22fe0-22f0-0bcf-597e-c84a48ee7eec-48ee7eec'
			className='menu-desktop-container static-light'>
			<div
				id='w-node-_39a22fe0-22f0-0bcf-597e-c84a48ee7eed-48ee7eec'
				className='menu-desktop static'>
				<div className='lang-logo'>
					<Link
						to='/app'
						aria-current='page'
						className='menu-logo-image light w-inline-block w--current'></Link>
				</div>
				<div
					id='w-node-_39a22fe0-22f0-0bcf-597e-c84a48ee7efc-48ee7eec'
					className='menu_liinks-menu_button'>
					<div
						id='w-node-_39a22fe0-22f0-0bcf-597e-c84a48ee7efd-48ee7eec'
						className='menu-links'>
						<Link to='/appapp' className='static_menu-link hidden'>
							Partners
						</Link>
						<Link to='/app' target='_blank' className='static_menu-link'>
							About platform
						</Link>
						<Link to='/app' target='_blank' className='static_menu-link'>
							How to invest
						</Link>
						<Link to='/app' target='_blank' className='static_menu-link'>
							Get Started
						</Link>
					</div>
					<Link
						id='w-node-_39a22fe0-22f0-0bcf-597e-c84a48ee7f06-48ee7eec'
						to='/app'
						target='_blank'
						className='button whity small_sign static-light w-inline-block'>
						<div>Sign up / Log in</div>
					</Link>
				</div>
			</div>
		</div>
	)
}
