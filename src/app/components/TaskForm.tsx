import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Task } from "../interfaces/task";


interface TaskFormProps {
    addTask: (task: Task) => void;
}

export default function TaskForm({ addTask }: TaskFormProps) {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!title.trim()) return;

        const newTask: Task = {
            id: uuidv4(),
            title: title.trim(),
            description:description.trim(),
            completed: false,
        };

        addTask(newTask);
        setTitle("");
    };
    return (
        <div className="relative w-[75vw] border border-solid border-gray-200 rounded-2xl p-4 mb-10 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 mx-auto">
            <form onSubmit={handleSubmit}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base/7 font-semibold text-gray-900">Crear Tarea</h2>
                        <p className="mt-1 text-sm/6 text-gray-600">
                            Escribe acá más detalles de tu tarea
                        </p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
                                    Título
                                </label>
                                <div className="mt-2">

                                    <input
                                        id="title"
                                        name="title"
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        placeholder="Escribe tu título acá"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm"
                                        required
                                    />

                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                                    Detalles
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows={3}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="Escribe detalles de tu tarea"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm"
                                        required
                                    />
                                </div>
                                
                            </div>


                        </div>
                    </div>

                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm/6 font-semibold text-gray-900">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}