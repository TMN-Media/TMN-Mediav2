/** @format */

import React from "react"

const Team = () => {
	return (
		<div>
			<section className='p-5'>
				<h1 className='text-center text-primary-100 p-5 text-3xl font-bold'>
					Meet The Team
				</h1>
				<p className='text-xl text-center'>
					With our fascinating workplace culture, quality of clientele,
					TMN-Media has our pick of the litter all over the world when it comes
					to who we can hire. The team in front of you is the result of that.
				</p>
				<div className='text-center grid   grid-cols-1 max-w-3xl m-auto md:grid-cols-2 justify-center items-center'>
					{teamMembers.map((member, index) => {
						return (
							<div
								key={index}
								className={`p-5 ${
									member.name === "Amar Avdić" ? "md:col-span-2" : "col-span-1"
								}`}>
								<div className='bg-secondary-100 m-auto w-40 h-40 rounded-full border-primary-100 border-8' />
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
	{ name: "Elvis Jusupović", title: "Chief Marketing Officer" },
	{ name: "Kenan Serhatlić", title: "Senior Software Engineer" },
	{ name: "Hasib Zulfić", title: "Performance Marketer" },
	{ name: "Ibro Kardašević", title: "Junior Software Engineer" },
	{ name: "Amar Avdić", title: "Client Specialist" },
]
