export type Task = {
  id: string;
  title: string;
  description: string;
  status: "new" | "in-progress" | "done";
};

export const tasks: Task[] = [
  {
    id: "1",
    title: "Изучить React",
    description: "Разобраться с useState и useEffect",
    status: "new",
  },
  {
    id: "2",
    title: "Создать компонент",
    description: "Создать TaskList",
    status: "in-progress",
  },
];
