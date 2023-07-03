'use client'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from "next/navigation";
import SectionTitle from '@components/UI/SectionTitle'

import PointOfSaleItem from '@components/Items/PointOfSaleItem'

interface PointOfSale {
	_id: string
	address: string
	creator: {
		_id: string
		email: string
		username: string
		image: string
	}
	latitude: string
	longitude: string
	name: string
	type: string
}

function PointsOfSale() {
	const [allPoints, setAllPoints] = useState<PointOfSale[]>([])
	const [loading, setLoading] = useState(true)
  const router = useRouter();
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''

	const fetchPointsOfSale = async () => {
		try {
			const response = await fetch('/api/point-of-sale')
			const data = await response.json()

			const filteredPoints = data.filter((point: PointOfSale) => point.creator._id.toString() === userId.toString())

			setAllPoints(filteredPoints)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

  const handleDelete = async (point: PointOfSale) => {
		try {
			await fetch(`/api/point-of-sale/${point._id.toString()}`, {
				method: 'DELETE',
			})

			const filteredPoints = allPoints.filter(item => item._id !== point._id)

			setAllPoints(filteredPoints)
		} catch (error) {
			console.log(error)
		}
	}

  const handleEdit = async (point: PointOfSale) => {
		router.push(`/edit-point-of-sale?id=${point._id}`);
	}

	useEffect(() => {
		fetchPointsOfSale()
	}, [])

	if (loading) {
		return (
			<section className='container py-20'>
				<p className='mt-10 text-black text-center'>Wczytywanie danych...</p>
			</section>
		)
	}

	return (
		<section className='container py-20'>
			<SectionTitle title='Moje punkty sprzedaży' />
			{allPoints.length > 0 ? (
				allPoints.map(point => (
					<PointOfSaleItem
						key={point._id}
						name={point.name}
						address={point.address}
						type={point.type}
						latitude={point.latitude}
						longitude={point.longitude}
						handleDelete={() => handleDelete(point)}
            handleEdit={() =>handleEdit(point)}
					/>
				))
			) : (
				<p className='mt-10 text-black text-center'>Brak punktów sprzedaży</p>
			)}
		</section>
	)
}

export default PointsOfSale
