/** @format */

import React from "react"
import elvis from "../../assets/headshots/elvis.jpg"
import kenan from "../../assets/headshots/kenan.jpg"
import hasib2 from "../../assets/headshots/hasib2.jpg"
import amar from "../../assets/headshots/amar.jpg"
import ibro from "../../assets/headshots/ibro.jpg"
import izo from "../../assets/headshots/izo.jpg"

const Team = () => {
	return (
		<div>
			<h1 className='text-center text-primary-100 p-5 text-3xl font-bold'>
				MEET THE TEAM
			</h1>
			<div className='max-w-lg w-full h-[3px] mx-auto my-10 bg-primary-100'></div>
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
