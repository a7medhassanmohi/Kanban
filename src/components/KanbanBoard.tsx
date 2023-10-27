import React, { useState } from "react";
import Column from "./Column";
import { useContextValue } from "@/Context";
import { SortableContext } from "@dnd-kit/sortable";
import {
  useSensors,
  useSensor,
  PointerSensor,
  KeyboardSensor,
  DndContext,
  closestCorners,
  DragEndEvent,
  DragStartEvent,
  DragOverEvent,
  DragOverlay,
  DropAnimation,
  defaultDropAnimation,
  useDroppable,
  TouchSensor,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates, arrayMove } from "@dnd-kit/sortable";
import Task from "./Task";
type Props = {};

const KanbanBoard = (props: Props) => {
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const sensors = useSensors(
    useSensor(PointerSensor,{
      activationConstraint:{
        distance: 3,
      }
    }),
  );

  const { AllColumns, AllTasks,setAllTasks } = useContextValue();
  const columnsId = AllColumns.map((it) => it.id);
  function handleDragStart(event:DragStartEvent) {
    
    if (event.active.data.current?.type === "Task") {
      setActiveTask(event.active.data.current.task);
      return;
    }
  }
  function handleDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) return;
    const activeId = active.id;
    const overId = over.id;
    if (activeId === overId) return;
    const isActiveATask = active.data.current?.type === "Task";
    const isOverATask = over.data.current?.type === "Task";
    if (!isActiveATask) return;
    if(isActiveATask && isOverATask ){
      setAllTasks((tasks)=>{
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        const overIndex = tasks.findIndex((t) => t.id === overId);
        if (tasks[activeIndex].columnId != tasks[overIndex].columnId){
          tasks[activeIndex].columnId = tasks[overIndex].columnId;
          return arrayMove(tasks, activeIndex, overIndex);
        }

        return arrayMove(tasks, activeIndex, overIndex);
      })
    }
    const isOverAColumn = over.data.current?.type === "Column";
    if(isActiveATask && isOverAColumn ){
      setAllTasks((tasks)=>{
        const activeIndex = tasks.findIndex((t) => t.id === activeId)
        tasks[activeIndex].columnId=overId
        return arrayMove(tasks, activeIndex, activeIndex);
      })
    }
  }
  function handleDragEnd() {
    setActiveTask(null)
  }
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className="board flex gap-3 flex-wrap justify-center overflow-auto ">
        <SortableContext items={columnsId}>
          {AllColumns.map((col, index) => (
            <Column {...col} key={col.id} />
          ))}
        </SortableContext>
      </div>

      <DragOverlay>
            {activeTask && (
                <Task  {...activeTask}/>
            )}
      </DragOverlay>
    </DndContext>
  );
};

export default KanbanBoard;
