import React from 'react'
import { IProperty } from '../../models/IProperty.ts'
import { Link } from 'react-router-dom'

interface Iprops {
	property: IProperty
}

const ApartmentItem: React.FC<Iprops> = ({ property }) => {
	return (
		<div
			id={property.id}
			role='group'
			className='apartments-item rounded-xl shadow-small overflow-hidden border-4 border-color--border min-h-[400px] min-w-[387.333px] max-h-[900px] max-w-[387.333px]'>
			<Link
				to={`/asset/${property.id}`}
				className='itme-link-wrapper w-inline-block'>
				<div className='apart-since w-condition-invisible'>
					<img
						loading='lazy'
						src='/images/653ff790f1cae4717e7b8766_Key.svg'
						alt=''
						className='icon-16'
					/>
					<div className='newtext-12-semi-110-2'>Sold and Rented since</div>
					<div className='newtext-12-semi-110-2 w-dyn-bind-empty'></div>
				</div>

				<div className='apart-cover'>
					<img src={`/villas/${property.photoUrls[0]}`} alt={property.description} className='apart-cover-image' />
				</div>
				<div className="apart-title">
					<div className="price-investors items-center justify-center">
						<div className="newtext-24-bold-120-3 text-white">{property.name}</div>
					</div>
					<div className="apart-currency-number text-gray-300">
						<div className="newtext-18-bold-120-2">$</div>
						<div className="newtext-18-bold-120-2">{property.price.toLocaleString()}</div>
					</div>
				</div>

				<div className="apart-percents">
					<div className="apart-percents-growth">
						<div className="newtext-16-regular-150 textcolor-dark-60">
							Year of commissioning
						</div>
						<div className='newtext-18-bold-120-2 text-gray-300'>
							{property.yearOfCompletion}
						</div>
					</div>
					<div className='apart-percents-return'>
						<div className='newtext-16-regular-150 textcolor-dark-60'>ROI</div>
						<div className='newtext-18-bold-120-2 text-gray-300'>
							{property.roi}%
						</div>
					</div>
					<div className='apart-percents-growth'>
						<div className='newtext-16-regular-150 textcolor-dark-60'>
							Number of particles purchased
						</div>
						<div className='newtext-18-bold-120-2 text-gray-300'>
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
