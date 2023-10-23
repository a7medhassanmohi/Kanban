import React from 'react'

import { AiOutlinePlusCircle } from 'react-icons/ai';
import KanbanBoard from '../KanbanBoard';
type Props = {}

const KanbanComponent = (props: Props) => {
  return (
    <div className='min-h-screen overflow-hidden container mx-auto'>
      <div className="flex justify-end items-center">

        <button className='
        m-2
          cursor-pointer
          rounded-lg
          bg-mainBackgroundColor
          border-2
          border-columnBackgroundColor
          p-4
          ring-rose-500
          hover:ring-2
          flex
          items-center
          gap-2
        '>
          <AiOutlinePlusCircle size={25}/>
            add new column
        </button>
      </div>
      <KanbanBoard/>
    </div>
  )
}

export default KanbanComponent