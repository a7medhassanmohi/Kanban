import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Task from "./Task";

type Props = {};

const Column = (props: Props) => {
  return (
    <div
      className="w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.33%-0.75rem)] lg:w-[calc(25%-0.75rem)] 
    min-h-[500px]
    bg-columnBackgroundColor
    border-2
    border-pink-500
    h-[500px]
    max-h-[500px]
    rounded-md
    flex
    flex-col
    overflow-y-auto
    relative
    "
    >
      <div
        className="Column_Head flex items-center justify-between 
        h-[80px]
        sticky
        z-20
        top-0
        left-0
        w-full
         bg-mainBackgroundColor
         text-md
         cursor-grab
         rounded-md
         rounded-b-none
         p-3
         font-bold
         border-columnBackgroundColor
         border-4
        "
      >
        <h3>Name</h3>
        <div className="add_task flex items-center gap-1 cursor-pointer opacity-75 hover:opacity-100 transition-all">
          <p className="text-[0.7rem]">Add</p>
          <AiOutlinePlusCircle size={15} />
        </div>
      </div>
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  );
};

export default Column;
