import peeking from "../assets/peeking.png";
import CategoryCard from "./CategoryCard";
import { CategoryList } from "../constants";

const Category = () => {
  return (
    <div className="grid grid-cols-4 gap-10 items-center justify-items-center max-w-[1100px]">
      {CategoryList.map((item, index) => (
        <CategoryCard key={index} data={item} />
      ))}

      <div className="group relative h-full overflow-hidden rounded-xl">
        <div
          className="w-[250px] h-[300px] bg-center bg-cover duration-300 group-hover:scale-125 group-hover:blur-[2px]"
          style={{ backgroundImage: `url('https://assets-prd.ignimgs.com/2022/08/17/top25animecharacters-blogroll-1660777571580.jpg')` }}
        />

        <div className=" h-full w-full flex flex-col justify-between text-left p-5 absolute inset-0 bg-[#AF2C3F]/80 text-gray-300 group-hover:text-white transition duration-300">
          <div className="italic font-bold text-[1.3rem]">SEE ALL GENRES MANGA</div>
          <div className="absolute translate-y-32">
          <img src={peeking} alt="" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
