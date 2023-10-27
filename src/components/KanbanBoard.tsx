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
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates, arrayMove } from "@dnd-kit/sortable";
import Task from "./Task";
type Props = {};

const KanbanBoard = (props: Props) => {
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const { AllColumns, AllTasks } = useContextValue();
  const columnsId = AllColumns.map((it) => it.id);
  function handleDragStart(event:DragStartEvent) {
    console.log({event});
    
    if (event.active.data.current?.type === "Task") {
      setActiveTask(event.active.data.current.task);
      return;
    }
  }
  function handleDragOver() {}
  function handleDragEnd() {}
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
