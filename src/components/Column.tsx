import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Task from "./Task";
import { useContextValue } from "@/Context";
import Droppable from "./Droppable";
import { SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import {CSS} from '@dnd-kit/utilities';

type Props = {
  id: Id;
  title: string;
};

const Column = ({title,id}: Props) => {
  const {AllTasks,addTask}=useContextValue()
  const ColumnTasks=AllTasks.filter((task)=>task.columnId===id)
  const TasksId=AllTasks.map((it)=>it.id)
  const { attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,} = useSortable({
    id: id,
    data: {
        Column:{title,id},
        type:"Column"
      },
      disabled:true
  });
  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : 1,
  } 
  return (
           <div
           ref={setNodeRef} style={style} {...listeners} {...attributes}
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
               <h3>{title}</h3>
               <div className="add_task flex items-center gap-1 cursor-pointer opacity-75 hover:opacity-100 transition-all" onClick={()=>addTask(id.toString(),"new task")}>
                 <p className="text-[0.7rem]">Add</p>
                 <AiOutlinePlusCircle size={15} />
               </div>
             </div>
      
             <SortableContext items={TasksId} strategy={verticalListSortingStrategy} >
            {ColumnTasks.map((task)=>
            <Droppable data={task} key={task.id}>
              <Task  {...task}/>
            </Droppable>
            )}
             </SortableContext>
           </div>
  );
};  

export default Column;
