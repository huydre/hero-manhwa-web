import React from "react";

const CategoryCard = ({ data }) => {
  return (
    <div className="group relative h-full overflow-hidden rounded-xl">
      <div
        className="w-[250px] h-[300px] bg-center bg-cover duration-300 group-hover:scale-125 group-hover:blur-[2px]"
        style={{ backgroundImage: `url('${data.thumbnail})` }}
      />

      <div className=" h-full w-full flex flex-col justify-between text-left p-5 absolute inset-0 bg-[#AF2C3F]/80 text-gray-300 group-hover:text-white transition duration-300">
        <div className="italic font-bold text-[1.3rem]">{data.title}</div>
        <div className="italic">{data.description} </div>
      </div>
    </div>
  );
};

export default CategoryCard;
