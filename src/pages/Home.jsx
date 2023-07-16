import AnimeGirl from "../assets/anime-girl.png";
import Tanjiro from "../assets/tanjiro-kamado.png";
import ManhwaList from "../UI/ManhwaList";
import Category from "../UI/Category";
import "./Home.css";
import { Input, Button } from "@material-tailwind/react";
import banner from "../assets/banner.png";

const ManhwaTrending = [
  {
    poster: "https://cdn-amz.woka.io/images/I/816av3JOFCS.jpg",
    title: "One piece",
    chapter: "Chapter 1079",
    rate: 4.3,
  },
  {
    poster: "https://cdn-amz.woka.io/images/I/81QcCmi+u6L.jpg",
    title: "Black cover",
    chapter: "Chapter 365",
    rate: 4.3,
  },
  {
    poster:
      "https://ecdn.game4v.com/g4v-content/uploads/2022/07/30120055/Chainsaw-anime-1-game4v-1659157253-90.png",
    title: "Chainsawman",
    chapter: "Chapter 125",
    rate: 4.3,
  },
  {
    poster:
      "https://m.media-amazon.com/images/I/613rnZy0RtL._AC_UF894,1000_QL80_.jpg",
    title: "Lookism",
    chapter: "Chapter 453",
    rate: 4.3,
  },
];

const Home = () => {
  return (
    <div className="bg-[#121212] text-white">
      {/* Hero  */}
      <div className="h-[768px] flex flex-col justify-between bg-[url('https://wallpapers.com/images/featured/demon-slayer-anime-vy37autfo82jvft7.jpg')] bg-center bg-cover text-white bg-black/90 bg-blend-overlay pb-4 ">
        <div>
          <h1 className="font-semibold text-center mb-4 pt-12">
            ADVENTURE; DARK FANTASY; MARTIAL ARTS;
          </h1>
          <h1 className="text-[5rem] leading-[5.5rem] font-extrabold italic text-center">
            DEMON SLAYER: <br /> KIMETSU NO YAIBA
          </h1>
          <div className="relative">
            <img
              className="absolute left-1/2 -translate-x-60  scale-125 translate-y-4"
              src={Tanjiro}
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-between px-[15rem] z-20">
          <div className="w-1/3 text-left text-lg ">
            <p>
              Who strives to become a demon slayer after his family was
              slaughtered and his younger sister Nezuko turned into a demon
            </p>
          </div>
          <div className="space-x-4 flex items-center">
            <button className="bg-[#C62F44] text-xl font-semibold py-3 px-6 rounded-full">
              Read now
            </button>
            <button className=" text-xl font-semibold py-3 px-6 rounded-full flex space-x-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
              </svg>
              <div>Ch.205</div>
            </button>
          </div>
        </div>
      </div>

      {/* New released comic */}

      <div className=" pt-10  px-[15rem] grid justify-center">
        <h1 className="text-left text-[2.5rem] leading-[5.5rem] font-extrabold italic mb-10 pb-10">
          NEW RELEASED COMIC
        </h1>
        <div className="flex justify-around items-center min-w-[1100px]">
          <ManhwaList data={ManhwaTrending} />
        </div>
      </div>

      {/* Explore by interest */}
      <div className="px-[15rem] pt-10 grid grid-cols-1 justify-items-center">
        <h1 className="text-center text-[2.5rem] leading-[5.5rem] font-extrabold italic mb-10">
          EXPLORE BY INTEREST
        </h1>
        <div>
          <Category />
        </div>
      </div>
      {/* Explore shonen jump */}
      <div className=" pt-10  px-[15rem] grid justify-center">
        <h1 className="text-left text-[2.5rem] leading-[5.5rem] font-extrabold italic pb-10">
          WEEKLY SHONEN JUMP
        </h1>
        <div className="flex justify-around items-center min-w-[1100px]">
          <ManhwaList unTitle={true} data={ManhwaTrending} />
        </div>
      </div>

      {/* JUMP PLUS */}
      <div className=" pt-10  px-[15rem] grid justify-center">
        <h1 className="text-left text-[2.5rem] leading-[5.5rem] font-extrabold italic pb-10">
          JUMP PLUS
        </h1>
        <div className="flex justify-around items-center min-w-[1100px]">
          <ManhwaList unTitle={true} data={ManhwaTrending} />
        </div>
      </div>

      {/* TOP 8 POPULAR MANHWA */}

      <div
        id="noisebg"
        className="px-[15rem] rounded-t-[5rem] mt-20 grid justify-center"
      >
        <div className="text-left text-[2.5rem] leading-[5.5rem] font-extrabold italic pb-10 pt-6">
          EASY READ MANGA <br /> ANYWHERE AND ANYTIME
        </div>

        <div className="text-left text-[2.1rem] leading-[5.5rem] font-extrabold italic pb-10">
          TOP 8 POPULAR MANHWA
        </div>

        <div className="flex justify-around items-center min-w-[1100px] mb-8">
          <ManhwaList unTitle={false} data={ManhwaTrending} />
        </div>
        <div className="flex justify-around items-center min-w-[1100px]">
          <ManhwaList unTitle={false} data={ManhwaTrending} />
        </div>
      </div>

      {/* Daily update schule  */}

      <div className="grid justify-center">
        <div className="text-[2.5rem] leading-[5.5rem] font-extrabold italic pb-10 pt-6">
          DAILY UPDATE SCHEDULE MANHWA
        </div>
        <div className="bg-[#242424] px-3 py-2 rounded-full mb-8">
          <ul className="flex items-center justify-between text-md font-medium text-center text-gray-500 dark:text-gray-400">
            <li className="mr-2">
              <a
                href="#"
                className="inline-block px-8 py-3 text-white bg-[#B62D40] rounded-full active"
                aria-current="page"
              >
                Sunday
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                Monday
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                Tuesday
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                Wednesday
              </a>
            </li>
            <li className="mr-2">
              <a className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
                Thursday
              </a>
            </li>
            <li className="mr-2">
              <a className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
                Friday
              </a>
            </li>
            <li>
              <a className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
                Saturday
              </a>
            </li>
          </ul>
        </div>

        <div className="flex justify-around items-center min-w-[1100px] mb-8">
          <ManhwaList unTitle={true} data={ManhwaTrending} />
        </div>
        <div className="flex justify-around items-center min-w-[1100px]">
          <ManhwaList unTitle={true} data={ManhwaTrending} />
        </div>
        <div className="mt-10">
          <button className="bg-[#C62F44] text-md font-semibold py-3 px-8 rounded-full">
            Load more updates
          </button>
        </div>
      </div>

      {/* Update evryday */}

      <div className="grid justify-center px-[15rem] mt-12">
        <div className="flex justify-between">
          <div>
            <div className="text-left text-[2.5rem] font-extrabold italic pb-10 pt-6">
              UPDATE <span className="text-red">EVERYDAY</span> <br /> ONLY AT
              HEROMANHWA
            </div>
            <div className="text-left w-1/2 mb-10">
              Comics are always updated at 10AM and there is a notification if
              the comic will be on holiday. So stay turned at Daily Update
              Schedule
            </div>
            <div>
              <div className="flex items-center">
                <div className="relative">
                  <div className="absolute top-4 left-3">
                    <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                  </div>
                  <input
                    type="text"
                    className="h-14 w-96 pl-5 pr-20 rounded-full z-0 focus:shadow focus:outline-none bg-[#242424]"
                    placeholder="Enter your email address"
                  />
                  <div className="absolute top-3 right-4">
                    <button className="px-4 py-2 text-white rounded-full bg-red-500 hover:bg-red-600 text-sm font-semibold">
                      Get notified
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[250px]">
            <img src={AnimeGirl} alt="" />
          </div>
        </div>
      </div>
      <div id="banner" className="w-full h-32 "></div>
    </div>
  );
};

export default Home;
