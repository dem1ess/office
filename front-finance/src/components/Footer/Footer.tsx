// components/Footer.tsx

import React from 'react'
import { Link } from 'react-router-dom'
import { MdDownload } from 'react-icons/md'

export const Footer: React.FC = () => {
	return (
		<section className='fold mx-[-1.1vw] mb=[-1.1vw] is--footer'>
			<div className='wrapp is--footer'>
				<div className='footer-box'>
					<div className='footer-logo-side'>
						<div className='lang-logo'>
							<Link to='/' aria-current='page' className=''>
								<img className='h-[150px]' src='/TLD_logo_beige.svg' alt='' />
							</Link>
						</div>
					</div>

				</div>
				<div className='footer-bottom'>
					<div>2024 © TLD Platform. All rights reserved</div>
					<div className='footer-bottom-box'>
						<div className="div-block-12">
							<div className="text-block-34">Call us at</div>
							<div className="margin-t-16px">
								<a
									href="tel:+1234567890"
									className="button-with-icon is--no-shape textcolor-white w-inline-block">
									<div>+1234567890</div>
								</a>
							</div>
						</div>
						<div className='div-block-12'>
							<div className='text-block-34'>Write us an email</div>
							<div className='margin-t-16px'>
								<a
									href='mailto:s.ricci@tld-bali.com'
									className='button-with-icon is--no-shape textcolor-white w-inline-block'>
									<div>s.ricci@tld-bali.com</div>
								</a>
							</div>
						</div>
						<Link
							to="/privacy-policy"
							target="_blank"
							className="footer-link-bottom">
							Privacy Policy
						</Link>
						<a
							href="https://find-and-update.company-information.service.gov.uk/company/14791588/filing-history/MzM3NTM4OTAxOWFkaXF6a2N4/document?format=pdf&download=0"
							target='_blank'
							className='flex footer-link-bottom'>
							Company license
							<MdDownload className='text-xl' />
						</a>
						<Link
							to="/terms-of-use"
							target="_blank"
							className="footer-link-bottom">
							Terms of Service
						</Link>

					</div>
				</div>
			</div>
		</section>
	)
}
