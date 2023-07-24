import React from "react";
import { useParams } from "react-router-dom";
import { ManhwaTrending } from "../constants";

const ManhwaDetail = () => {
  const { id } = useParams();

  const data = ManhwaTrending.find((item) => item.id === id);

  return (
    <div className="text-white text-left">
      <div className="pt-24 px-[15rem] flex items-center space-x-8">
        <div className="max-w-[300px]">
          <img src={data?.poster} alt="" />
        </div>

        <div className="h-full space-y-4">
          <h1 className="font-semibold text-[3rem]">{data?.title}</h1>

          <div className="flex items-center space-x-3">
            <div>94.45K Views</div>
            <div>1.4K Likes</div>
            <div>1005 Chaps</div>
          </div>

          <div className="flex items-center space-x-4">
            <div>
              <button className="bg-primary px-4 py-2 rounded-md font-semibold hover:bg-secondary transition duration-300">
                Read now
              </button>
            </div>
            <div>
              <button className="border-2 border-primary text-primary px-4 py-2 rounded-md font-semibold hover:border-secondary hover:text-secondary transition duration-300">
                Lastest Chapter
              </button>
            </div>
            <div>
              <button className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:text-secondary transition duration-300">
                Add to list
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <div>
              <span className="text-gray-400">Author:</span> ABC
            </div>
            <div>
              <span className="text-gray-400">Artis:</span> ABC
            </div>
            <div>
              <span className="text-gray-400">Genres:</span> ABC
            </div>
            <div>
              <span className="text-gray-400">Rate:</span> ABC
            </div>
            <div>
              <span className="text-gray-400">Description:</span> ABC
            </div>
            <div className="flex items-center space-x-8">
              <div>
                <div className="text-gray-400">Country</div>
                <div>JP</div>
              </div>

              <div>
                <div className="text-gray-400">Status</div>
                <div>Continute...</div>
              </div>
              
              <div>
                <div className="text-gray-400">Total chapters</div>
                <div>1000+</div>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ManhwaDetail;
