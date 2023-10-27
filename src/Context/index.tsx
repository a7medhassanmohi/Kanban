import React, { createContext, useContext, useState } from 'react'

const columns: Column[]=[
  {
    id:"1",
    title:"To Do"
  },
  {
    id:"2",
    title:"in Progress"
  },
  {
    id:"3",
    title:"testing"
  },
  {
    id:"4",
    title:"Done"
  },
]
const tasks:Task[]=[
{ id: "100",
  columnId: "1",
  content:"first task"
},
{ id:"101" ,
  columnId: "1",
  content:"second task"
},
{ id: "102",
  columnId: "1",
  content:"thired task"
},
{ id: "103",
  columnId:"2",
  content:"in progress task"
},
{ id: "104",
  columnId:"3",
  content:"testing task"
},
]
const context=createContext({
  ShowEditModel:false,
  ShowPreviewModel:false,
  AllColumns:columns,
  AllTasks:tasks
})
  
  
type Context={
    ShowEditModel:boolean,
    ShowPreviewModel:boolean,
    AllColumns:Column[],
    AllTasks:Task[]
}

  type PropsWrapper = {
    children:JSX.Element
  }
  type UseContextProps={}

 
  
  const ContextWrapper = ({children}: PropsWrapper) => {
    const [ShowEditModel, setShowEditModel] = useState(false)
    const [ShowPreviewModel, setShowPreviewModel] = useState(false)
   const [AllColumns, setAllColumns] = useState<Column[]>(columns)
   const [AllTasks, setAllTasks] = useState<Task[]>(tasks)
    const sharedState={ShowEditModel,ShowPreviewModel,AllColumns,AllTasks}
    return (
      <context.Provider value={sharedState} >{children}</context.Provider>
    )
  }

  const useContextValue = () => {
    const values = useContext(context)
    return values
    
  }

  export {ContextWrapper,useContextValue}