import React from "react";
import {CSS} from '@dnd-kit/utilities';

import { BsTrash3 } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { useSortable } from "@dnd-kit/sortable";
import { useContextValue } from "@/Context";
type Props = {
  id: Id;
  columnId: Id;
  content: string;
};

const Task = (props: Props) => {
  const {deleteTask}=useContextValue()
 
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
      <div className="content flex-1">{props.content}</div>
      <div className="action  flex items-center gap-1">
        <div className="delete opacity-70 hover:opacity-100" onClick={()=>deleteTask(props.id.toString())}>
          <BsTrash3 size={15} />
        </div>
        <div className="edit opacity-70 hover:opacity-100" >
          <AiOutlineEdit size={15} />
        </div>
      </div>
    </div>
  );
};

export default Task;
