/** @format */

import React from "react"
import heroLogo from "../../assets/logo-vertical.png"
import heroVideo from "../../assets/nyc-bg.mp4"
import { Link } from "react-scroll"

const Hero = () => {
	return (
		<div>
			<section
				className='bg-black  absolute backdrop-blur-sm top-0 z-90 w-full h-screen bg-opacity-60
			 text-white text-center'>
				<div className='flex flex-col justify-center h-1/2 items-center relative'>
					<img
						src={heroLogo}
						alt=''
						className='w-[150px] lg:w-[250px] m-auto mb-5'
					/>
					<h1 className='mb-5 text-xl lg:text-2xl'>Better Brand Building</h1>

					<button className='uppercase bg-primary-100 lg:text-xl lg:w-[250px] z-50  cursor-pointer  drop-shadow-xl p-2 text-sm w-[200px] font-bold rounded-full'>
						<Link
							to='Contact'
							spy={true}
							smooth={true}
							offset={50}
							duration={500}>
							Free audit call
						</Link>
					</button>
				</div>
			</section>
			<video
				src={heroVideo}
				autoPlay
				muted
				loop
				className=' h-screen w-screen object-cover top-0  '
				type='video/mp4'
			/>
		</div>
	)
}

export default Hero
