import { useState } from "react";
import { Task } from "../interfaces/task"

interface TaskItemProps {
  task: Task;
  updateTask: (task: Task) => void;
  deleteTask: (id: string) => void;
}

export default function TaskItem({ task, updateTask, deleteTask }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>(task.title);

  const handleUpdate = () => {
    if (!newTitle.trim()) return;
    updateTask({ ...task, title: newTitle.trim() });
    setIsEditing(false);
  };

  return (
    <div className="relative w-[75vw] border border-solid border-gray-200 rounded-2xl p-4 mb-10 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 mx-auto">
         {isEditing ? (
        <div className="space-y-12">
            <input
            className="border p-1 flex-1 mr-2"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={handleUpdate} className="text-indigo-600 focus:outline-indigo-600 mr-2">
            Guardar
          </button>
          <button onClick={() => setIsEditing(false)} className="text-gray-500">
            Cancelar
          </button>
        </div>
        
      ) : (
        <>
          <span>{task.title}</span>
          <div className="flex gap-2">
            <button onClick={() => setIsEditing(true)} className="text-blue-600">
              Editar
            </button>
            <button onClick={() => deleteTask(task.id)} className="text-red-600">
              Eliminar
            </button>
          </div>
        </>
      )}
    </div>
  );
}
