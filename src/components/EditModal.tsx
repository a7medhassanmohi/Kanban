import { useContextValue } from "@/Context";
import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

type Props = {};

const EditModal = (props: Props) => {
  const {setShowEditModel,setActiveEditTaskId,AllTasks,ActiveEditTaskId,setAllTasks}=useContextValue()
  const [textValue, settextValue] = useState<string| undefined>("")
  function submitEditTask(){
    
    setAllTasks((prevTasks)=>{
      if(ActiveEditTaskId){
        const editTask=prevTasks.find((task)=>task.id===ActiveEditTaskId)
        if(editTask && typeof textValue==="string"){
          editTask.content=textValue
        }
      }
      return prevTasks
    })
    setActiveEditTaskId(null)
    setShowEditModel(false)
  }
  useEffect(() => {
    if(ActiveEditTaskId){
     let item=AllTasks.find((task)=>task.id===ActiveEditTaskId)
     settextValue(item?.content)
    }
  }, [ActiveEditTaskId])
  
  return (
    <div className="bg-mainBackgroundColor fixed top-0 left-0 w-full h-full flex items-center justify-center z-30 ">
      <div className="wrapper bg-TaskBackgroundColor w-[40%] min-h-[300px] flex items-center justify-center relative rounded-md">
        <div className="form w-1/2 text-center">
          <textarea
            name=""
            id=""
            className="h-[150px]  text-white text-sm p-1 rounded-md  outline-none   border-2 w-full
    border-pink-500 bg-gray-500/50"
          value={textValue}
          onChange={(e)=>{
            settextValue(e.target.value)
          }}
          ></textarea>
          <div className="action mt-2 ">
            <button
            onClick={submitEditTask}
              className="
            cursor-pointer
          rounded-lg
          bg-mainBackgroundColor
          border-2
          border-columnBackgroundColor
          px-4
          py-1
          ring-rose-500
          hover:ring-2
          w-[60%]
          text-sm
            "
            >
              Edit
            </button>
          </div>
        </div>

        <div className="close absolute top-2 right-3 opacity-75 hover:opacity-100 transition-all cursor-pointer " onClick={()=>{setShowEditModel(false);
        setActiveEditTaskId(null)
        }}>
          <AiOutlineCloseCircle size={20} />
        </div>
      </div>
    </div>
  );
};

export default EditModal;
