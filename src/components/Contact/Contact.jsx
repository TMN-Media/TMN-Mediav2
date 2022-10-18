/** @format */

import React from "react"
import { InlineWidget } from "react-calendly"
import elvis from "../../assets/headshots/elvis.jpg"

const Contact = () => {
	return (
		<div className='text-white p-10  bg-gradient-to-b from-primary-100 to-primary-300'>
			<h1 className='text-secondary-100 text-center text-3xl  font-bold '>
				CONTACT US
			</h1>
			<div className='max-w-lg w-full h-[3px] mx-auto my-20 bg-secondary-100'></div>

			<div className=' grid lg:grid-cols-4 lg:gap-10  lg:max-w-6xl m-auto'>
				<div className='text-center my-auto lg:col-span-2 order-2'>
					<p className='text-xl font-bold lg:text-2xl '>
						Schedule a call with Elvis today!
					</p>
					<p className='text-2xl font-bold lg:text-4xl text-secondary-100 mb-10'>
						Free 15-Minute Call
					</p>
					<img
						className='bg-secondary-100 m-auto w-40 h-40 rounded-full border-primary-100 border-8 object-cover'
						src={elvis}
						alt=''
					/>
					<p className='text-xl m-auto mb-10 md:max-w-2xl lg:text-2xl'>
						You will have a clear understanding of the next steps you can take
						for your business to start generating consistent and reliable
						results online with Paid Advertising by the end of this Audit call.
					</p>
				</div>
				<div className='lg:col-span-2 order-1 mb-10'>
					<InlineWidget
						className='  col-span-2'
						url='https://calendly.com/meetwithelvis/30min?back=1&month=2022-10'
					/>
				</div>

				<div className='text-center   mt-10 lg:col-span-4 order-3'>
					<h1 className='text-secondary-100 text-3xl font-bold mb-10 '>
						Have any questions?
					</h1>
					<p className='text-xl m-auto lg:text-2xl md:max-w-xl '>
						If you have a general inquiry and would like to speak to our expert
						team, you can contact us via email at: contact@tmn-media.com
					</p>
				</div>
			</div>
		</div>
	)
}

export default Contact
