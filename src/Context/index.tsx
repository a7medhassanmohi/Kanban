import React, { createContext, useContext, useState } from 'react'
const context=createContext({
    ShowEditModel:false,
    ShowPreviewModel:false,
  })
  
  
type Context={
    ShowEditModel:boolean,
    ShowPreviewModel:boolean,

}

  type PropsWrapper = {
    children:JSX.Element
  }
  type UseContextProps={}
  
  const ContextWrapper = ({children}: PropsWrapper) => {
    const [ShowEditModel, setShowEditModel] = useState(false)
    const [ShowPreviewModel, setShowPreviewModel] = useState(false)
    const sharedState={ShowEditModel,ShowPreviewModel}
    return (
      <context.Provider value={sharedState} >{children}</context.Provider>
    )
  }

  const useContextValue = (props: UseContextProps) => {
    const values = useContext(context)
    return values
    
  }

  export {ContextWrapper,useContextValue}