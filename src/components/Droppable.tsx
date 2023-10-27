import React from 'react';
import {useDraggable, useDroppable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';
type Props={
children:JSX.Element
data:Task | Column
}
 const Droppable:React.FC<Props>=(props) =>{
  const { attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,} = useSortable({
    id: props.data.id,
    data: {
        task:props.data,
        type:"Task"
      },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : 1,
  } 
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </div>
  );
}
export default Droppable