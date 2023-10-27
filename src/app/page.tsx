"use client"
import { ContextWrapper, useContextValue } from '@/Context'
import ColumnContainer from '@/components/ColumnContainer'
import EditModal from '@/components/EditModal'
import KanbanComponent from '@/components/Kanban/KanbanComponent'
import ShowContentModel from '@/components/ShowContentModel'
import {
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
export default function Home() {
  const {ShowEditModel}=useContextValue()

  return (
    <main>
      
        <>
        <KanbanComponent/>
       {ShowEditModel && <EditModal/>}
        </>
        {/* <ShowContentModel/> */}

    </main>
  )
}
