import Tanjiro from '../assets/tanjiro-kamado.png'
import BgHero from '../assets/demon-slayer-bg-hero.jpg'

const Home = () => {
  return (
    <div className='bg-[#121212] text-white'>
      {/* Hero  */}
      <div className="h-[768px] flex flex-col justify-between bg-[url('https://wallpapers.com/images/featured/demon-slayer-anime-vy37autfo82jvft7.jpg')] bg-center bg-cover text-white bg-black/90 bg-blend-overlay pb-4 ">
        <div>
          <h1 className="font-semibold text-center mb-4 pt-12">ADVENTURE; DARK FANTASY; MARTIAL ARTS;</h1>
          <h1 className="text-[5rem] leading-[5.5rem] font-extrabold italic text-center">DEMON SLAYER: <br/> KIMETSU NO YAIBA</h1>
          <div className='relative'>
            <img className='absolute left-1/2 -translate-x-60  scale-125 translate-y-4' src={Tanjiro} alt='' />
          </div>
        </div>
        <div className='flex justify-between px-[8rem] z-20'>
          <div className='w-1/3 text-left text-lg '>
            <p>Who strives to become a demon slayer after his family was slaughtered and his younger sister Nezuko turned into a demon</p>
          </div>
          <div className='space-x-4 flex items-center'>
            <button className='bg-[#C62F44] text-xl font-semibold py-3 px-6 rounded-full'>Read now</button>
            <button className=' text-xl font-semibold py-3 px-6 rounded-full flex space-x-2 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
              </svg>
              <div>Ch.205</div>
            </button>
          </div>
        </div>
      </div>

    {/* New released comic */}

      <div className='px-[8rem] pt-10'>
        <h1 className='text-left text-[2.5rem] leading-[5.5rem] font-extrabold italic'>NEW RELEASED COMIC</h1>
      </div>
    </div>
  )
}

export default Home