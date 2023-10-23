import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

type Props = {};

const ShowContentModel = (props: Props) => {
  return (
    <div className="bg-mainBackgroundColor fixed top-0 left-0 w-full h-full flex items-center justify-center z-30 ">
      <div className="wrapper bg-TaskBackgroundColor w-[40%] h-[200px] flex items-start justify-center relative rounded-md overflow-y-auto">
        <p className="text-white text-sm mt-7 p-2 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          iste aliquid sapiente esse modi in veritatis ipsam repudiandae
          mollitia itaque, rem perferendis necessitatibus ratione, at natus
          laudantium non delectus quis?
        </p>

        <div className="close absolute top-2 right-3 opacity-75 hover:opacity-100 transition-all cursor-pointer ">
          <AiOutlineCloseCircle size={20} />
        </div>
      </div>
    </div>
  );
};

export default ShowContentModel;
