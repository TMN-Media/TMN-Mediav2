/** @format */

import React from "react"
import { useState } from "react"
import { CgMenuGridO } from "react-icons/cg"
import { TfiClose } from "react-icons/tfi"
import logo from "../../assets/logo-horizontal-b-text.png"
import { Link } from "react-scroll"
const NavBar = () => {
	const [toggle, setToggle] = useState(false)
	function toggleOnMenu(event) {
		setToggle(!toggle)

		event.preventDefault()
	}
	return (
		<div
			className='lg:flex  justify-between  z-50 absolute  top-0 w-full h-screen lg:h-max
		text-white text-center'>
			<div
				className={`flex justify-between lg:w-max lg:block transition-all ease-in-out duration-700 ${
					toggle ? "bg-primary-100 bg-opacity-30 backdrop-blur-lg " : ""
				}`}>
				<img
					src={logo}
					alt=''
					className='w-[200px] lg:w-[300px]  relative top-0 mt-2 ml-2 p-2 lg:h-max'
				/>
				{toggle ? (
					<TfiClose
						className='text-[44px] p-2 mt-5 mr-1 cursor-pointer lg:hidden'
						onClick={toggleOnMenu}
					/>
				) : (
					<CgMenuGridO
						className='text-[50px] p-2 mt-5 mr-2 cursor-pointer lg:hidden'
						onClick={toggleOnMenu}
					/>
				)}
			</div>

			<ul
				className={` absolute lg:mr-2 bg-primary-100 lg:py-10  lg:bg-inherit lg:backdrop-blur-none bg-opacity-30 backdrop-blur-lg transition-all ease duration-700 flex flex-col lg:flex-row lg:relative lg:opacity-100 lg:justify-end justify-center h-1/4 lg:h-max lg:w-1/2 w-full z-10 ${
					toggle ? " opacity-100  " : "   opacity-0  "
				}`}>
				{menuItems.map((menuItem, index) => {
					return (
						<li className=' m-3  ' key={index}>
							<Link
								className=' hover:text-secondary-100 font-bold uppercase cursor-pointer lg:text-xl'
								to={menuItem.name}
								spy={true}
								smooth={true}
								offset={50}
								duration={500}>
								{menuItem.name}
							</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default NavBar

const menuItems = [
	{ name: "About", link: "/" },
	{ name: "Services", link: "/" },
	{ name: "Contact", link: "/" },
]
