import { FC } from 'react'

const TermsOfService: FC = () => {
	return (
		<div className='min-h-screen py-6 flex flex-col justify-center sm:py-12'>
			<div className='relative py-3 sm:max-w-xl sm:mx-auto'>
				<div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
				<div className='relative px-4 py-10 bg-color--primary-bg border-color--border border shadow-lg sm:rounded-3xl sm:p-20'>
					<h1 className='text-2xl text-white font-semibold text-center'>
						Terms of Service
					</h1>
					<p className='mt-8 text-white'>
						Welcome to TLD INVESTMENTS! These Terms of Service ("Terms") govern
						your use of our website located at tld-bali.com (the "Site") and any
						services provided by TLD INVESTMENTS (referred to as "us", "we", or
						"our") through the Site.
					</p>
					<p className='mt-8 text-white'>
						By accessing or using the Site, you agree to be bound by these Terms
						and our Privacy Policy. If you do not agree to these Terms or our
						Privacy Policy, you may not use the Site.
					</p>
					<h2 className='mt-8 text-lg font-semibold text-white'>
						1. Use of the Site
					</h2>
					<p className='mt-4 text-white'>
						1.1. You must be at least 18 years old to use the Site.
						<br />
						1.2. You agree to use the Site only for lawful purposes and in a
						manner that does not infringe the rights of, or restrict or inhibit
						the use and enjoyment of, the Site by any third party.
						<br />
						1.3. You are solely responsible for all activity that occurs under
						your account on the Site.
					</p>
					<h2 className='mt-8 text-lg font-semibold text-white'>
						2. Investment Disclaimer
					</h2>
					<p className='mt-4 text-white'>
						2.1. The information provided on the Site is for general
						informational purposes only and does not constitute financial
						advice.
						<br />
						2.2. We do not guarantee the accuracy, completeness, or usefulness
						of any information provided on the Site. You should conduct your own
						research and seek professional advice before making any investment
						decisions.
						<br />
						2.3. Investments in real estate involve risks, and past performance
						is not indicative of future results. We are not liable for any
						losses or damages resulting from your reliance on information
						provided on the Site.
					</p>
					<h2 className='mt-8 text-lg font-semibold text-white'>
						3. Intellectual Property
					</h2>
					<p className='mt-4 text-white'>
						3.1. The content on the Site, including text, graphics, logos,
						images, and software, is owned by or licensed to TLD INVESTMENTS and
						is protected by copyright and other intellectual property laws.
						<br />
						3.2. You may not reproduce, modify, distribute, display, or
						otherwise use any content from the Site without our prior written
						consent.
					</p>
					<h2 className='mt-8 text-lg font-semibold text-white'>
						4. Links to Third-Party Websites
					</h2>
					<p className='mt-4 text-white'>
						4.1. The Site may contain links to third-party websites or
						resources. We are not responsible for the content, products, or
						services offered on or through any third-party websites or
						resources.
						<br />
						4.2. Any links to third-party websites are provided solely for your
						convenience and do not imply any endorsement or affiliation with the
						third party.
					</p>
					<h2 className='mt-8 text-lg font-semibold text-white'>
						5. Termination
					</h2>
					<p className='mt-4 text-white'>
						5.1. We reserve the right to suspend or terminate your access to the
						Site at any time, without prior notice or liability, for any reason
						whatsoever, including without limitation if you breach these Terms.
					</p>
					<h2 className='mt-8 text-lg font-semibold text-white'>
						6. Changes to These Terms
					</h2>
					<p className='mt-4 text-white'>
						6.1. We may revise these Terms at any time by updating this page. By
						continuing to use the Site after any such revisions, you agree to be
						bound by the revised Terms.
					</p>
					<h2 className='mt-8 text-lg font-semibold text-white'>
						7. Contact Us
					</h2>
					<p className='mt-4 text-white'>
						7.1. If you have any questions about these Terms, please contact us
						at info@tld-bali.com.
					</p>
					<p className='mt-8 text-white'>
						By using the Site, you acknowledge that you have read, understood,
						and agree to be bound by these Terms.
					</p>
				</div>
			</div>
		</div>
	)
}

export default TermsOfService
