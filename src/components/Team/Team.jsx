/** @format */

import React, { useEffect } from "react"
import elvis from "../../assets/headshots/elvis.jpg"
import kenan from "../../assets/headshots/kenan.jpg"
import hasib2 from "../../assets/headshots/hasib2.jpg"
import amar from "../../assets/headshots/amar.jpg"
import ibro from "../../assets/headshots/ibro.jpg"
import izo from "../../assets/headshots/izo.jpg"
import AOS from "aos"
import "aos/dist/aos.css"
const Team = () => {
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
		<div
			data-aos='fade-up'
			data-aos-delay='50'
			data-aos-duration='1000'
			data-aos-easing='ease-in-out'
			data-aos-mirror='true'
			data-aos-once='false'>
			<h1 className='text-center text-primary-100 p-5 text-3xl font-bold'>
				MEET THE TEAM
			</h1>
			<div className='w-[100px] h-[3px] mx-auto my-10 bg-primary-100'></div>
			<section className='p-5 grid lg:grid-cols-2 max-w-7xl m-auto'>
				<div className='m-auto lg:order-2'>
					<h1 className='text-3xl text-center text-primary-100 font-bold'>
						Everything you need in one package
					</h1>
					<p className='text-lg text-center lg:text-xl md:max-w-xl mx-auto my-5'>
						With our fascinating workplace culture, quality of clientele,
						TMN-Media has our pick of the litter all over the world when it
						comes to who we can hire. The team in front of you is the result of
						that.
					</p>
				</div>
				<div className='text-center grid   grid-cols-1 max-w-3xl m-auto md:grid-cols-2 justify-center items-center'>
					{teamMembers.map((member, index) => {
						return (
							<div key={index} className={`p-5 m-auto `}>
								<img
									className='bg-secondary-100 m-auto w-40 h-40  rounded-full border-primary-100 border-8 object-cover'
									src={member.img}
									alt=''
								/>
								<h1 className='text-3xl text-black font-bold'>{member.name}</h1>
								<p className='text-xl text-primary-200'>{member.title}</p>
							</div>
						)
					})}
				</div>
			</section>
		</div>
	)
}

export default Team

const teamMembers = [
	{ name: "Elvis Jusupović", title: "Chief Marketing Officer", img: elvis },

	{ name: "Hasib Zulfić", title: "Performance Marketer", img: hasib2 },
	{ name: "Kenan Serhatlić", title: "Senior Software Engineer", img: kenan },
	{ name: "Ibro Kardašević", title: "Junior Software Engineer", img: ibro },

	{ name: "Amar Avdić", title: "Client Specialist", img: amar },
	{ name: "Izo Omanović", title: "Client Specialist", img: izo },
]
