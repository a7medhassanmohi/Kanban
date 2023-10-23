import React from "react";
import Column from "./Column";

type Props = {};

const KanbanBoard = (props: Props) => {
  return (
    <div className="board flex gap-3 flex-wrap justify-center ">
      <Column />
      <Column />
      <Column />
      <Column />
    </div>
  );
};

export default KanbanBoard;
