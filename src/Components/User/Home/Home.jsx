import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { dummybanner } from '../../../utils/userhome'


function Home() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000
	};

	const images =
		//  dummybanner
		[
			// "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			"https://images.pexels.com/photos/1851481/pexels-photo-1851481.jpeg",
			"https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			// "https://images.pexels.com/photos/5329530/pexels-photo-5329530.jpeg?auto=compress&cs=tinysrgb&w=600"
		]
	return (
		<div>
			<div className='max-w-[1640px] mx-auto p-4 bg-white'>
				<Slider {...settings} className=''>
					{images.map((image, index) => (
						<div className='max-h-[500px] relative'>
							{/* Overlay */}
							<div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
								<h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Explore <span className='text-orange-500'> the </span></h1>
								<h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>World </span> with Ease</h1>
							</div>

							<div key={index} className="overflow-hidden ">
								<img className='w-full max-h-[500px] object-cover ' src={image} alt="/" />
							</div>
						</div>
					))}
				</Slider>
			</div>
			




			{/* <div className='h-96 bg-white flex'>
				<div className='bg-white text-slate-950 md:w-full'>
					<h5></h5>
				</div>
				<div className='bg-white md:w-full'>
					<h5></h5>
				</div>

			</div> */}
		</div>

	)
}

export default Home