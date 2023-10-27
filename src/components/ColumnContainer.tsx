import { SortableContext, useSortable } from '@dnd-kit/sortable';
import React, { useMemo } from 'react'
import { CSS } from "@dnd-kit/utilities";
import TaskCard from './TaskCard';

type Props = {
    column: Column ;
    tasks: Task[];
}

const ColumnContainer = (props: Props) => {
    const tasksIds = useMemo(() => {
        return props.tasks.map((task) => task.id);
      }, [props.tasks]);
    
      const {
        setNodeRef,
        attributes,
        listeners,
        transform,
        transition,
        isDragging,
      } = useSortable({
        id: props.column.id,
        data: {
          type: "Column",
          column:props.column,
        },
      });
      const style = {
        transition,
        transform: CSS.Transform.toString(transform),
      };
  return (
    <div
    ref={setNodeRef}
    style={style}
    className='
    bg-columnBackgroundColor
    w-[350px]
    h-[500px]
    max-h-[500px]
    rounded-md
    flex
    flex-col'
    >
        <div className="title   bg-mainBackgroundColor
      text-md
      h-[60px]
      cursor-grab
      rounded-md
      rounded-b-none
      p-3
      font-bold
      border-columnBackgroundColor
      border-4
      flex
      items-center
      justify-between"
      {...attributes}
      {...listeners}
      >
{props.column.title}
        </div>
        <div className="flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto">
        <SortableContext items={tasksIds}>
        {props.tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
            />
          ))}
        </SortableContext>

        </div>
        
    </div>
  )
}
export default ColumnContainer