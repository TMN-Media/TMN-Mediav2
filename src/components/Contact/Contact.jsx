/** @format */

import React from "react"
import { InlineWidget } from "react-calendly"

const Contact = () => {
	return (
		<div className='text-white p-10 bg-gradient-to-b from-primary-100 to-primary-300'>
			<div className='text-center'>
				<h1 className='text-secondary-100 text-3xl font-bold mb-10'>
					CONTACT US
				</h1>
				<p className='text-xl font-bold'>Schedule a call with Elvis today!</p>
				<p className='text-2xl font-bold text-secondary-100 mb-10'>
					Free 15-Minute Call
				</p>
				<div className='mb-5 bg-primary-100 m-auto w-40 h-40 rounded-full border-secondary-100 border-8' />
				<p className='text-xl m-auto mb-10'>
					You will have a clear understanding of the next steps you can take for
					your business to start generating consistent and reliable results
					online with Paid Advertising by the end of this Audit call.
				</p>
			</div>
			<InlineWidget
				className=''
				url='https://calendly.com/tmnmedia/aduit-call?back=1&month=2022-09'
			/>

			<div className='text-center mt-10'>
				<h1 className='text-secondary-100 text-3xl font-bold mb-10'>
					Have any questions?
				</h1>
				<p className='text-xl m-auto '>
					If you have a general inquiry and would like to speak to our expert
					team, you can contact us via email at: contact@tmn-media.com
				</p>
			</div>
		</div>
	)
}

export default Contact
