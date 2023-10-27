import React from 'react'

import { AiOutlinePlusCircle } from 'react-icons/ai';
import KanbanBoard from '../KanbanBoard';
type Props = {}

const KanbanComponent = (props: Props) => {
  return (
    <div className='min-h-screen overflow-hidden container mx-auto py-5' >
      <KanbanBoard/>
    </div>
    
  )
}

export default KanbanComponent