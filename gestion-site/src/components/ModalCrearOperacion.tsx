import { useState } from "react";
import useOperaciones from "../hooks/useOperaciones";

const ModalOperacion = ({ isOpen, onClose, cuentaId }) => {
  const [type, setType] = useState("deposit");
  const [ammount, setAmmount] = useState("");
  const [createdAt, setcreatedAt] = useState(new Date().toISOString().slice(0, 16));

  const { submitOperacion } = useOperaciones();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!ammount || parseFloat(ammount) <= 0) return;

    const operacionData = {
      type,
      ammount: parseFloat(ammount),
      accountId: cuentaId,
      createdAt: new Date(createdAt).toISOString()
    };

    await submitOperacion(operacionData);
    onClose();
    
    setType("deposit");
    setAmmount("");
    setcreatedAt(new Date().toISOString().slice(0, 16));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full">

        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Añadir Operación</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          
          <div>
            <label className="block text-sm font-medium mb-1">Tipo</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full p-2 border rounded"
              required
            >
              <option value="deposit">Depósito</option>
              <option value="invoice">Factura</option>
              <option value="withdrawal">Retiro</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Monto</label>
            <input
              type="number"
              value={ammount}
              onChange={(e) => setAmmount(e.target.value)}
              step="0.01"
              min="0.01"
              placeholder="0.00"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Fecha y Hora</label>
            <input
              type="datetime-local"
              value={createdAt}
              onChange={(e) => setcreatedAt(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 p-2 border rounded hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 p-2 bg-orange-600 text-white rounded hover:bg-orange-700"
            >
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalOperacion;