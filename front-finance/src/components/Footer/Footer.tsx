// components/Footer.tsx

import React from 'react'
import { MdDownload } from 'react-icons/md'
import { Link } from 'react-router-dom'

export const Footer: React.FC = () => {
	return (
		<section className='fold mx-[-1.1vw] mb=[-1.1vw] is--footer'>
			<div className='wrapp is--footer'>
				<div className='footer-box'>
					<div className='footer-logo-side'>
						<div className='lang-logo justify-center items-center'>
							<Link to='/' aria-current='page' className=''>
								<img className='h-[150px]' src='/TLD_logo_beige.svg' alt='' />
							</Link>
						</div>
					</div>
				</div>
				<div className='footer-bottom'>
					<div>2024 © TLD Platform. All rights reserved</div>
					<div className='footer-bottom-box'>
						<a
							href='tel:+1234567890'
							className='button-with-icon is--no-shape textcolor-white w-inline-block'>
							<div>{`+447436378629`}</div>
						</a>
						<a
							href='mailto:indo@tld-bali.com'
							className='text-white w-inline-block'>
							info@tld-bali.com
						</a>
						<Link
							to='/privacy-policy'
							target='_blank'
							className='footer-link-bottom'>
							Privacy Policy
						</Link>
						<a
							href='https://find-and-update.company-information.service.gov.uk/company/14791588/filing-history/MzM3NTM4OTAxOWFkaXF6a2N4/document?format=pdf&download=0'
							target='_blank'
							className='flex mt-0.5 footer-link-bottom'>
							Company license
							<MdDownload className='text-lg' />
						</a>
						<Link
							to='/terms-of-service'
							target='_blank'
							className='footer-link-bottom'>
							Terms of Service
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
