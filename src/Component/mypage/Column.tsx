import React, { ReactElement } from "react";

interface ITask {
  id: string;
  content: string;
}

interface ITasksTotal {
  [name: string]: ITask;
}

interface IColumn {
  id: string;
  title: string;
  taskIds: string[];
}

interface IColumnTotal {
  [name: string]: IColumn;
}

interface IProps {
  tasks: ITasksTotal;
  columns: IColumnTotal;
  columnOrder: string[];
}

const Columns: React.FC<IProps> = ({
  tasks,
  columns,
  columnOrder
}): ReactElement => {
  console.log(tasks, columns, columnOrder);
  return <div>안녕하세요</div>;
};

export default Columns;
