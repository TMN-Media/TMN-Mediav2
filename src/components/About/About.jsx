/** @format */

import React from "react"
import { CiRoute } from "react-icons/ci"
import { AiOutlineLineChart } from "react-icons/ai"
import video2 from "../../assets/BETTER BRAND BUILDING.mp4"

const About = () => {
	return (
		<div>
			<section className=' flex flex-col h-full '>
				<div className='text-center grow  py-5  pb-32 lg:pb-[250px] relative h-max  flex flex-col justify-center'>
					<h1 className='text-3xl mx-auto  my-10 '>ABOUT US</h1>
					<div className='w-1/6 h-[3px] mx-auto bg-primary-100'></div>
					<p className='text-lg px-7 max-w-md  mx-auto my-10'>
						At TMN Media is a dynamic innovative agency. In an overcrowded
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
						className=' absolute bottom-0 top-0 left-0 right-0 w-full max-w-3xl  m-auto  0 z-10'
						type='video/mp4'
					/>
				</div>
				<div className='bg-gradient-to-b from-primary-100 to-primary-300  grow relative h-max pt-44 lg:pt-[250px]  text-white py-5 '>
					<div className='flex flex-col lg:flex-row justify-center max-w-5xl m-auto'>
						<div
							className=' m-auto mb-5 text-center  flex flex-col justify-center rounded
					   w-[300px]   h-max  backdrop-blur-lg hover:scale-110 '>
							<CiRoute className='text-6xl m-auto text-secondary-100' />
							<h1 className='mb-5 text-2xl font-bold'> The right path </h1>
							<p className='m-auto  text-lg'>
								Need rebranding? a new website? or advertisement? We do it all
								and we do things with a devotional focus superior to everyone
								else.
							</p>
						</div>

						{/*  */}

						<div
							className=' m-auto mb-5 text-center  flex flex-col justify-center rounded
					   w-[300px]  h-max  backdrop-blur-lg hover:scale-110 '>
							<AiOutlineLineChart className='text-6xl m-auto text-secondary-100' />

							<h1 className='mb-5 text-2xl font-bold'>
								{" "}
								efficiency & accuracy{" "}
							</h1>
							<p className='m-auto  text-lg'>
								We are the agency for you if you want a clear breakdown of how
								much was spent, how much was made, and what your net profit was
								in two clicks.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default About
