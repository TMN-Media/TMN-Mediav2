/** @format */

import React from "react"
import heroLogo from "../../assets/logo-vertical.png"
import heroVideo from "../../assets/nyc-bg.mp4"

const Hero = () => {
	return (
		<div>
			<video
				src={heroVideo}
				autoPlay
				muted
				loop
				className=' h-screen w-screen object-cover top-0  '
				type='video/mp4'
			/>
			<section
				className='bg-black  absolute backdrop-blur-sm top-0 w-full h-screen bg-opacity-60
			 text-white text-center'>
				<div className='flex flex-col justify-center h-1/2 items-center relative'>
					<img
						src={heroLogo}
						alt=''
						className='w-[150px] lg:w-[250px] m-auto mb-5'
					/>
					<h1 className='mb-5 text-xl lg:text-2xl'>Better Brand Building</h1>
					<button className='uppercase bg-primary-100 lg:text-xl lg:w-[250px]  drop-shadow-xl p-2 text-sm w-[200px] font-bold rounded-full'>
						Free audit call
					</button>
				</div>
			</section>
		</div>
	)
}

export default Hero
