 type Id = string | number;

 type Column = {
    id: Id;
    title: string;
  };

 type Task = {
    id: Id;
    columnId: Id;
    content: string;
  };
  type Context={
    ShowEditModel: boolean;
    ShowPreviewModel: boolean;
    AllColumns: Column[];
    AllTasks: Task[];
    ActiveEditTaskId: string | null;
    setAllTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    setShowEditModel: React.Dispatch<React.SetStateAction<boolean>>;
    setActiveEditTaskId: React.Dispatch<React.SetStateAction<string | null>>;
    addTask:(x: string,z: string)=>void,
    deleteTask:(x: string)=>void,
    EditTask:(x: string,y:string)=>void
  }