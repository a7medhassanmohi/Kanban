import { useSortable } from '@dnd-kit/sortable';
import React from 'react'
import { CSS } from "@dnd-kit/utilities";

type Props = {
    task: Task;
}

const TaskCard = ({ task}: Props) => {
    const {
        setNodeRef,
        attributes,
        listeners,
        transform,
        transition,
        isDragging,
      } = useSortable({
        id: task.id,
        data: {
          type: "Task",
          task,
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
      {...attributes}
      {...listeners}
    className="bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab relative task"
    >TaskCard</div>
  )
}

export default TaskCard