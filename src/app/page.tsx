"use client"
import { ContextWrapper } from '@/Context'
import EditModal from '@/components/EditModal'
import KanbanComponent from '@/components/Kanban/KanbanComponent'
import ShowContentModel from '@/components/ShowContentModel'
import {createContext, useState} from "react"


export default function Home() {
  return (
   <main>
    <ContextWrapper>
    <KanbanComponent/>
    {/* <EditModal/> */}
    {/* <ShowContentModel/> */}
    </ContextWrapper>
   </main>
  )
}
