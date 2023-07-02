import React from 'react'
import Button from '@components/UI/Button'

const PointOfSaleItem: React.FC<{
	name: string
	address: string
	type: string
	latitude: string
	longitude: string
}> = props => {
	const latitude = Number(props.latitude)
	const longitude = Number(props.longitude)
	const marker = `markers=${latitude},${longitude}`
	const iframeSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.2326203809153!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${latitude}%2C${longitude}!5e0!3m2!1sen!2sus!4v1687448119935!5m2!1sen!2sus&${marker}`

	return (
		<div className='flex flex-col p-5 mt-4 bg-white rounded-sm ring-1 ring-zinc-200 shadow-lg text-black '>
			<div className='flex flex-col md:flex-row md:justify-between'>
				<div className='md:w-1/2 lg:w-1/5 lg:mr-5'>
					<h3 className='text-lg lg:text-xl font-semibold'>{props.name}</h3>
					<p className='font-thin'>Adres: {props.address}</p>
					<p className='font-thin'>Typ placówki: {props.type}</p>
				</div>
				<div className='mt-3 md:mt-0 md:w-1/2 lg:w-4/5'>
					<p className='text-lg font-semibold mb-2'>Mapa dojazdu</p>
					<iframe
						src={iframeSrc}
						allowFullScreen
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
						className='w-full h-full'></iframe>
				</div>
			</div>
			<div className='div3 flex flex-row justify-start w-auto text-white mt-5'>
				<Button className='mx-0'>Edytuj</Button>
				<Button
					onClick={() => {
						console.log(latitude, longitude)
					}}>
					Usuń
				</Button>
			</div>
		</div>
	)
}

export default PointOfSaleItem
