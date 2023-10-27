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
  const {deleteTask,EditTask}=useContextValue()
 
  return (
    <div
      className="
   min-h-fit
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
   touch-none
    "
    >
      <div className="content w-full break-words overflow-x-hidden  whitespace-break-spaces ">
        <p>

        {props.content}
        </p>
        </div>
      <div className="action  flex items-center gap-1">
        <div className="delete opacity-70 hover:opacity-100" onClick={()=>deleteTask(props.id.toString())}>
          <BsTrash3 size={15} />
        </div>
        <div className="edit opacity-70 hover:opacity-100" onClick={()=>EditTask(props.id.toString(),"")} >
          <AiOutlineEdit size={15} />
        </div>
      </div>
    </div>
  );
};

export default Task;
