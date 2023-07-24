import { useHover } from "@uidotdev/usehooks";
import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const ManhwaCard = ({ item }) => {
  const navigate = useNavigate();
  const [ref, hovering] = useHover();

  return (
    <div onClick={()=>{navigate(`/details/${item.id}`)}} ref={ref} className="flex justify-center">
      <motion.div
        transition={{
          layout: { duration: 0.7, type: "spring" },
        }}
        layout
        className="cursor-pointer mb-2 max-w-[220px] text-left space-y-3"
      >
          <div>
            <div>
              <img src={item.poster} alt="" />
            </div>
            <div className="italic font-bold text-xl pt-4 uppercase">
              {item.title}
            </div>
            <div className="text-slate-300">{item.chapter}</div>
            <div className="flex items-center space-x-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgb(234 179 8)"
                  className="w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div>{item.rate}/5.0</div>
            </div>
          </div>
      </motion.div>
    </div>
  );
};

export default ManhwaCard;
