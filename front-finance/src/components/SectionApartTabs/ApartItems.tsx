import React from 'react'
import { Link } from 'react-router-dom'
import { IProperty } from '../../models/IProperty.ts'

interface Iprops {
	property: IProperty
}

const ApartmentItem: React.FC<Iprops> = ({ property }) => {
	return (
		<div
			id={property.id}
			role='group'
			className='apartments-item rounded-xl h-max-content shadow-small overflow-hidden border-4 border-color--border'>
			<Link to={`app/asset/${property.id}`} className='flex flex-col'>
				<div className='apart-cover'>
					<img
						src={`/villas/${property.photoUrls[0]}`}
						alt={property.description}
						className='apart-cover-image'
					/>
				</div>
				<div className='apart-title'>
					<div className='price-investors items-center justify-center'>
						<div className='newtext-24-bold-120-3 text-white'>
							{property.name}
						</div>
					</div>
					<div className='apart-currency-number text-gray-300'>
						<div className='newtext-18-bold-120-2'>$</div>
						<div className='newtext-18-bold-120-2'>
							{property.price.toLocaleString()}
						</div>
					</div>
				</div>

				<div className='apart-percents'>
					<div className='apart-percents-growth'>
						<div className='text-xl text-gray-100'>Year of commissioning</div>
						<div className='newtext-16-regular-150 text-gray-200'>
							{property.yearOfCompletion}
						</div>
					</div>
					<div className='apart-percents-return'>
						<div className='text-xl text-gray-100'>ROI</div>
						<div className='newtext-16-regular-150 text-gray-200'>
							{property.roi}%
						</div>
					</div>
					<div className='apart-percents-growth'>
						<div className='text-xl text-gray-100'>
							Number of particles purchased
						</div>
						<div className='newtext-16-regular-150 text-gray-200'>
							{property.tokens}
						</div>
					</div>
				</div>
				<div className='button mt-auto apartments'>
					<div>Invest</div>
				</div>
			</Link>
		</div>
	)
}

export default ApartmentItem
