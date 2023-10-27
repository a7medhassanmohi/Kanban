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
    setAllTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    addTask:(x: string,z: string)=>void
    deleteTask:(x: string)=>void
  }