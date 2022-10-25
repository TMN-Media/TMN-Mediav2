/** @format */

import React, { useEffect } from "react"
import { InlineWidget } from "react-calendly"
import elvis from "../../assets/headshots/elvis.jpg"
import { Element } from "react-scroll"
import AOS from "aos"
import "aos/dist/aos.css"
const Contact = () => {
	useEffect(() => {
		AOS.init({
			// Global settings:
			disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
			startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
			initClassName: "aos-init", // class applied after initialization
			animatedClassName: "aos-animate", // class applied on animation
			useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
			disableMutationObserver: false, // disables automatic mutations' detections (advanced)
			debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
			throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

			// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
			offset: 120, // offset (in px) from the original trigger point
			delay: 0, // values from 0 to 3000, with step 50ms
			duration: 400, // values from 0 to 3000, with step 50ms
			easing: "ease", // default easing for AOS animations
			once: false, // whether animation should happen only once - while scrolling down
			mirror: false, // whether elements should animate out while scrolling past them
			anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
		})
	})
	return (
		<>
			<Element name='Contact' className='element'>
				<div
					data-aos='fade-up'
					data-aos-delay='50'
					data-aos-duration='1000'
					data-aos-easing='ease-in-out'
					data-aos-mirror='true'
					data-aos-once='false'
					data-aos-anchor-placement='top-center'
					className='text-white p-10  bg-gradient-to-b from-primary-100 to-primary-300'>
					<h1 className='text-secondary-100 text-center text-3xl  font-bold '>
						CONTACT US
					</h1>
					<div className='w-[100px] h-[3px] mx-auto my-20 bg-secondary-100'></div>

					<div className=' grid lg:grid-cols-4 lg:gap-10  lg:max-w-6xl m-auto'>
						<div className='text-center my-auto lg:col-span-2 lg:order-2'>
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
								You will have a clear understanding of the next steps you can
								take for your business to start generating consistent and
								reliable results online with Paid Advertising by the end of this
								Audit call.
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
								If you have a general inquiry and would like to speak to our
								expert team, you can contact us via email at:
								contact@tmn-media.com
							</p>
						</div>
					</div>
				</div>
			</Element>
		</>
	)
}

export default Contact
