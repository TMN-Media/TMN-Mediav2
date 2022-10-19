/** @format */

import React from "react"
import logo from "../../assets/logo-horizontal-b-text.png"
import { CiFacebook, CiTwitter, CiInstagram, CiLinkedin } from "react-icons/ci"
const Footer = () => {
	return (
		<div className=' p-10 bg-gradient-to-b from-primary-100 to-primary-300 text-white '>
			<section className='grid grid-col-reverse md:grid-cols-2 lg:grid-cols-3 max-w-7xl m-auto'>
				<div className='order-5 lg:order-1 mb-10 '>
					<img src={logo} alt='' />
					<h1 className='text-xl mb-5'>Better Brand Building</h1>
					<p>TMN Media LLC | copyright 2022</p>
				</div>

				<div className='order-1 mb-10 lg:order-3'>
					<h1 className='text-2xl font-bold mb-5'>Navigation</h1>
					<ul className='text-gray-300 text-lg'>
						<li className='mb-1'>About</li>
						<li className='mb-1'>Services</li>
						<li className='mb-1'>Contact</li>
					</ul>
				</div>
				<div className='order-3 lg:order-5 mb-10'>
					<h1 className='text-2xl font-bold mb-5 '>Legal</h1>
					<ul className='text-gray-300 text-lg'>
						<li className='mb-1'>Privacy Policy</li>
						<li>Terms & Conditions</li>
					</ul>
				</div>

				<div className='order-2 lg:order-4 mb-10'>
					<h1 className='text-2xl font-bold mb-5 '>Connect</h1>
					<div className='flex text-4xl text-secondary-100'>
						<a href='https://www.facebook.com/profile.php?id=100086717028798'>
							<CiFacebook className='mr-3' />
						</a>
						<a href='https://twitter.com/thetmn_media'>
							<CiTwitter className='mr-3' />
						</a>
						<a href='https://www.instagram.com/tmn__media/'>
							<CiInstagram className='mr-3' />
						</a>
						<a href='/'>
							<CiLinkedin className='mr-3' />
						</a>
					</div>
				</div>
				<div className='order-4 lg:order-3 mb-10'>
					<h1 className='text-2xl mb-5 font-bold'>Subscribe</h1>
					<div className='flex flex-col'>
						<input
							type='text'
							placeholder='Email Address'
							className='p-4 mb-2 h-10 text-black'
						/>
						<button className='bg-secondary-100 text-black font-bold p-1'>
							SUBMIT
						</button>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Footer
