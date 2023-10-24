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
    ShowEditModel:boolean,
    ShowPreviewModel:boolean,

}