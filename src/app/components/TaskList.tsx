import TaskItem from "./TaskItem";
import { Task } from "../interfaces/task"



interface TaskListProps {
    tasks: Task[];
    updateTask: (task: Task) => void;
    deleteTask: (id: string) => void;
  }
  
  export default function TaskList({ tasks, updateTask, deleteTask }: TaskListProps) {
    return (
      <div >
        {tasks.length === 0 ? (
        <div className="flex justify-center ...">
          <p className="text-gray-500">No hay tareas todavía.</p>
          </div>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          ))
        )}
      </div>
    );
  }