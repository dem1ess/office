import React, { useEffect } from 'react'
import ApartmentItem from './ApartItems'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.ts'
import { fetchProperty } from '../../store/reducers/ActionsCreator.ts'



// Тип для таба
// Предполагаемые данные для табов

// Главный компонент SectionApartTabs
const SectionApartTabs: React.FC = () => {
	const dispatch = useAppDispatch()
	const {property} = useAppSelector(state => state.property)

	useEffect(() => {
		dispatch(fetchProperty())
		console.log(property)
	}, []);
	return (
		<section className='section section-apart_tabs flex flex-col items-center justify-center'>
			<div className='flex flex-wrap justify-center m-auto max-w-[1400px]'>
				{property?.map((apartment, index) => (
					<div
						key={apartment.id}
						className={`flex mb-5 justify-center md:w-1/3 p-2 ${
							index < 3 ? 'md:w-1/3' : 'md:w-1/2'
						}`}>
						<ApartmentItem
							property={apartment}
						/>
					</div>
				))}
			</div>
		</section>
	)
}

export default SectionApartTabs
