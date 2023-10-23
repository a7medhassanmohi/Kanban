import React from "react";

import { BsTrash3 } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
type Props = {};

const Task = (props: Props) => {
  return (
    <div
      className="
    h-[80px]
    bg-TaskBackgroundColor
    text-md
    cursor-grab
    rounded-md
    rounded-b-none
    p-3
    font-bold
    border-columnBackgroundColor
    border-2
    flex  items-center
    "
    >
      <div className="content flex-1">task</div>
      <div className="action  flex items-center gap-1">
        <div className="edit opacity-70 hover:opacity-100">
          <BsTrash3 size={15} />
        </div>
        <div className="delete opacity-70 hover:opacity-100">
          <AiOutlineEdit size={15} />
        </div>
      </div>
    </div>
  );
};

export default Task;