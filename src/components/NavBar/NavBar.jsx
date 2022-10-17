/** @format */

import React from "react"
import { useState } from "react"
import { CgMenuGridO } from "react-icons/cg"
import { TfiClose } from "react-icons/tfi"
import logo from "../../assets/logo-horizontal-b-text.png"

const NavBar = () => {
	const [toggle, setToggle] = useState(false)
	function toggleOnMenu(event) {
		setToggle(!toggle)

		event.preventDefault()
	}
	return (
		<div>
			<div
				className={`flex justify-between transition-all ease-in-out duration-700 ${
					toggle ? "bg-primary-100 bg-opacity-30 backdrop-blur-lg " : ""
				}`}>
				<img src={logo} alt='' className='w-36  relative top-0 p-2 ' />
				{toggle ? (
					<TfiClose
						className='text-[34px] p-2 mt-2 mr-1 cursor-pointer'
						onClick={toggleOnMenu}
					/>
				) : (
					<CgMenuGridO
						className='text-[40px] p-2 mt-2 cursor-pointer'
						onClick={toggleOnMenu}
					/>
				)}
			</div>

			<ul
				className={` bg-primary-100 bg-opacity-30 backdrop-blur-lg transition-all ease duration-700 flex flex-col justify-center h-[200px] ${
					toggle ? " opacity-100  " : "   opacity-0  "
				}`}>
				{menuItems.map((menuItem, index) => {
					return (
						<li className=' m-3  ' key={index}>
							<a
								className=' hover:text-purple-500 font-bold uppercase'
								href={menuItem.link}>
								{menuItem.name}
							</a>
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
