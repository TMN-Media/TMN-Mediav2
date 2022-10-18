/** @format */
import NavBar from "./components/NavBar/NavBar"

import "./index.css"
import About from "./components/About/About"
import Hero from "./components/Hero/Hero"
import Team from "./components/Team/Team"
import Contact from "./components/Contact/Contact"
import OfferedServices from "./components/OfferedServices/OfferedServices"
import Footer from "./components/Footer/Footer"

function App() {
	return (
		<div className=''>
			<NavBar className='' />
			<Hero />
			<About />
			<OfferedServices />
			<Team />
			<Contact />
			<Footer />
		</div>
	)
}

export default App
