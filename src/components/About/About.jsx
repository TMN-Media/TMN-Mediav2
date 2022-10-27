/** @format */

import React, { useEffect } from "react"
import { CiRoute } from "react-icons/ci"
import { AiOutlineLineChart } from "react-icons/ai"
import video2 from "../../assets/BETTER BRAND BUILDING.mp4"
import { Element } from "react-scroll"
import AOS from "aos"
import "aos/dist/aos.css"

const About = () => {
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
			duration: 2000, // values from 0 to 3000, with step 50ms
			easing: "ease", // default easing for AOS animations
			once: false, // whether animation should happen only once - while scrolling down
			mirror: false, // whether elements should animate out while scrolling past them
			anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
		})
	})
	return (
		<div>
			<Element name='About' className='element'>
				<section className=' flex flex-col h-full '>
					<div
						data-aos='fade-up'
						data-aos-delay='50'
						data-aos-duration='1000'
						data-aos-easing='ease-in-out'
						data-aos-mirror='true'
						data-aos-once='false'
						className='text-center grow  py-5  pb-32 sm:pb-[350px] relative h-max  flex flex-col justify-center'>
						<h1 className='text-3xl text-primary-100 mx-auto font-bold my-10 '>
							ABOUT US
						</h1>
						<div className=' w-[100px] h-[3px] mx-auto bg-primary-100'></div>
						<p className='text-xl px-7 max-w-md  mx-auto my-10'>
							TMN Media is a dynamic innovative agency. In an overcrowded
							marketplace, we assist brands, businesses, and content creators in
							standing out, building confidence, and increasing results.
						</p>
					</div>
					<div className='relative '>
						<video
							src={video2}
							muted
							loop
							controls
							className=' absolute bottom-0 top-0 left-0 right-0 w-full max-w-5xl    m-auto  0 z-10'
							type='video/mp4'
						/>
					</div>
					<div className='bg-gradient-to-b from-primary-100 to-primary-300  grow relative h-max pt-44 sm:pt-[350px]  text-white py-5 '>
						<div className='flex flex-col lg:flex-row justify-center max-w-5xl m-auto'>
							<div
								data-aos='fade-up'
								data-aos-delay='50'
								data-aos-duration='1000'
								data-aos-easing='ease-in-out'
								data-aos-mirror='true'
								data-aos-once='false'
								className=' m-auto  text-center  flex flex-col justify-center rounded
					   w-[300px]  h-max  backdrop-blur-lg hover:scale-110 mb-16'>
								<CiRoute className='text-6xl m-auto text-secondary-100' />
								<h1 className='mb-5  text-2xl font-bold'> The right path </h1>
								<p className='m-auto   text-lg md:text-xl'>
									Need re-branding? A new website? Or advertisement? We do it
									all and we do things with a devotional focus superior to
									anyone else.
								</p>
							</div>

							<div
								data-aos='fade-up'
								data-aos-delay='50'
								data-aos-duration='1000'
								data-aos-easing='ease-in-out'
								data-aos-mirror='true'
								data-aos-once='false'
								className=' m-auto  text-center  flex flex-col justify-center rounded
					   w-[300px]  h-max  backdrop-blur-lg hover:scale-110 mb-16'>
								<AiOutlineLineChart className='text-6xl m-auto text-secondary-100' />

								<h1 className='mb-5 text-2xl font-bold'>
									Efficiency & accuracy
								</h1>
								<p className='m-auto  text-lg md:text-xl'>
									We are the agency for you if you want a clear breakdown of how
									much was spent, how much was made, and what your net profit
									was in two clicks.
								</p>
							</div>

							<div
								data-aos='fade-up'
								data-aos-delay='50'
								data-aos-duration='1000'
								data-aos-easing='ease-in-out'
								data-aos-mirror='true'
								data-aos-once='false'
								className=' m-auto  text-center  flex flex-col justify-center rounded
					   w-[300px]  h-max  backdrop-blur-lg hover:scale-110 mb-16'>
								<AiOutlineLineChart className='text-6xl m-auto text-secondary-100' />

								<h1 className='mb-5 text-2xl font-bold'>No regrets</h1>
								<p className='m-auto  text-lg md:text-xl'>
									You won't regret working with us. TMN-Media will do all it can
									for you to succeed with your brand by reaching higher client
									and revenue goals
								</p>
							</div>
						</div>
					</div>
				</section>
			</Element>
		</div>
	)
}

export default About
