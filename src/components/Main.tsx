"use client";

import { useState } from "react";
import { FaCheck, FaRegTrashAlt } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { toast } from "react-toastify";
import { Modal } from "./Modal";

type Task = {
  name: string;
  completed: boolean;
}

export const Main = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newTask, setNewTask] = useState<string>("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { name: newTask, completed: false } as Task]);
      setNewTask("");
      toggleModal();
      toast.success("Tarefa adicionada com sucesso.");
    }
  };

  const handleCompletedTask = (task: string) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.name === task ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const handleDeleteTask = (task: string) => {
    setTasks((prev) => prev.filter((t) => t.name !== task));
    toast.error("Tarefa removida com sucesso.");
  };

  return (
    <>
      <main className="flex-grow min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 flex flex-col items-center px-4 sm:px-6 py-10 sm:py-20 overflow-y-auto">
        <section className="w-full max-w-lg border border-blue-400 bg-white shadow-lg rounded-lg px-4 py-6 sm:px-6">
          <h1 className="text-center text-3xl sm:text-5xl font-bold text-blue-700">
            ToDo List
          </h1>

          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 space-y-4 sm:space-y-0">
            <ul className="text-blue-600 font-medium space-y-2 sm:space-y-1">
              <li>
                <span className="font-bold">({tasks.filter(t => !t.completed).length})</span> - Pendentes
              </li>
              <li>
                <span className="font-bold">({tasks.filter(t => t.completed).length})</span> - Realizadas
              </li>
            </ul>

            <div>
              <button
                type="button"
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg shadow-md transition duration-300"
                onClick={toggleModal}
                title="Adicione uma tarefa"
              >
                <IoIosAdd size={20} />
                <span className="ml-2">Adicionar</span>
              </button>
            </div>
          </div>

          <ul className="mt-6 gap-4 flex flex-col">
            {tasks.length > 0 ? (
              tasks.map((task, index) => (
                <li
                  key={index.toString()}
                  className={`${task.completed ? "bg-green-100" : "bg-blue-100"
                    } text-blue-700 px-4 py-6 rounded-lg shadow-sm flex items-center justify-between hover:scale-105 transition`}
                >
                  <span
                    className={`text-base sm:text-2xl font-medium break-words w-1/2 ${task.completed ? "line-through opacity-50" : ""
                      }`}
                  >
                    {task.name}
                  </span>
                  <div className="flex items-center gap-3 sm:gap-5">
                    <button
                      type="button"
                      className={`flex items-center justify-center ${task.completed
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-500 hover:bg-green-600"
                        } text-white p-2 rounded-full shadow-md transition duration-300`}
                      title={
                        task.completed
                          ? "Tarefa já concluída"
                          : "Marcar como concluída"
                      }
                      onClick={() => !task.completed && handleCompletedTask(task.name)}
                      disabled={task.completed}
                    >
                      <FaCheck size={16} />
                    </button>
                    <button
                      type="button"
                      className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-md transition duration-300"
                      title="Excluir tarefa"
                      onClick={() => handleDeleteTask(task.name)}
                    >
                      <FaRegTrashAlt size={16} />
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <p className="opacity-40 font-light text-center">
                Não há tarefas no momento.
              </p>
            )}
          </ul>
        </section>
      </main>
      {isModalOpen && (
        <Modal
          handleAddTask={handleAddTask}
          setNewTask={setNewTask}
          toggleModal={toggleModal}
          newTask={newTask}
        />
      )}
    </>
  );
};
