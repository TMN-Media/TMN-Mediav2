/** @format */

import React from "react"
import { GiCheckMark } from "react-icons/gi"
import { Element } from "react-scroll"

const OfferedServices = () => {
	return (
		<Element name='Services' className='element'>
			<div className='services bg-gradient-to-b to-secondary-200 from-secondary-100 py-10 m-auto h-full relative'>
				<h1 className='text-center text-3xl font-bold text-primary-100 mb-10'>
					WHAT WE OFFER
				</h1>
				<div className='w-[100px] h-[3px] mb-20 mx-auto bg-primary-100'></div>

				<ul className='text-center m-auto  md:w-[850px] grid grid-cols-1 md:grid-cols-2'>
					{services.map((service, index) => {
						return (
							<li
								key={index}
								className='flex m-auto w-[300px] md:w-[300px] mb-5 '>
								<GiCheckMark className='text-2xl text-primary-100 mt-2 mr-2' />
								<h4 className='text-2xl font-semibold  '>{service.name}</h4>
							</li>
						)
					})}
				</ul>
			</div>
		</Element>
	)
}

export default OfferedServices

const services = [
	{ name: "Social media marketing" },
	{ name: "SEO/Search engine" },
	{ name: "Media planning" },
	{ name: "Analytics" },
	{ name: "Web/App development" },
	{ name: "Graphic design" },
]
