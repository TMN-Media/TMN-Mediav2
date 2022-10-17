/** @format */
import heroVideo from "./assets/nyc-bg.mp4"
import NavBar from "./components/NavBar/NavBar"
import heroLogo from "./assets/logo-vertical.png"
import video2 from "./assets/BETTER BRAND BUILDING.mp4"
import "./index.css"

function App() {
	return (
		<div className=''>
			<video
				src={heroVideo}
				autoPlay
				muted
				loop
				className=' h-screen w-screen object-cover top-0  '
				type='video/mp4'
			/>
			<section className='bg-black z-50 absolute backdrop-blur-sm top-0 w-full h-screen bg-opacity-60 text-white text-center'>
				<NavBar />
				<div className='flex flex-col justify-center h-1/2 items-center relative'>
					<img src={heroLogo} alt='' className='w-[150px] m-auto mb-5' />
					<h1 className='mb-5 '>Better Brand Building</h1>
					<button className='uppercase bg-primary-100  drop-shadow-xl p-2 text-sm w-[200px] font-bold rounded-full'>
						How can we help?
					</button>
				</div>
			</section>

			<section className=' flex flex-col '>
				<div className='text-center grow mb-20 lg:mb-40 relative height-1/5 flex flex-col justify-center'>
					<h1 className='text-xl mx-auto  my-10 '>ABOUT US</h1>
					<div className='w-1/2 h-[3px] mx-auto bg-primary-100'></div>
					<p className='text-xs px-7 max-w-md  mx-auto my-10'>
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
						className=' absolute bottom-0 top-0 left-0 right-0 w-full max-w-xl m-auto  0 z-10'
						type='video/mp4'
					/>
				</div>
				<div className='bg-primary-200 grow relative pt-32 lg:mt-40 text-white py-5 flex flex-col '>
					<div className=' m-auto mb-5 text-center  flex flex-col justify-center rounded bg-secondary w-[250px] h-max p-5 bg-opacity-70 backdrop-blur-lg hover:scale-110 '>
						<h1 className='mb-5'> brand strategy </h1>
						<p className='m-auto  text-xs'>
							Your brand isn’t just a logo. It’s who you are, what you stand for
							and how you make people feel. Whether just starting out or
							rebranding, we’ll define one clear strategy that tells your story
							and ensures a loyal following.
						</p>
					</div>

					{/*  */}

					<div className=' m-auto  text-center  flex flex-col justify-center rounded bg-secondary w-[250px] h-max p-5 bg-opacity-70 backdrop-blur-lg hover:scale-110 '>
						<h1 className='mb-5'> brand strategy </h1>
						<p className='m-auto  text-xs'>
							Your brand isn’t just a logo. It’s who you are, what you stand for
							and how you make people feel. Whether just starting out or
							rebranding, we’ll define one clear strategy that tells your story
							and ensures a loyal following.
						</p>
					</div>
				</div>
			</section>

			<section className='h-[50vh]'>
				<h1>meet the team</h1>
			</section>
		</div>
	)
}

export default App
