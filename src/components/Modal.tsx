
interface ModalProps {
  setNewTask: (value: string) => void;
  toggleModal: () => void;
  handleAddTask: () => void;
  newTask: string;
}

export const Modal = ({ setNewTask, toggleModal, handleAddTask, newTask }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Adicionar Tarefa</h2>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Digite a nova tarefa"
          className="w-full border border-blue-400 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={toggleModal}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg transition duration-300"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={handleAddTask}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  )
}
