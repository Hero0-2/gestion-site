const ModalConfirmacion = ({ isOpen, onClose, onConfirm, titulo, mensaje, textoConfirmar = "Sí, eliminar", textoCancelar = "Cancelar" }) => {
    if (!isOpen) return null

    // Handle backdrop click
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={handleBackdropClick}
        >
            <div className="bg-white rounded-xl shadow-lg max-w-md w-full mx-auto transform transition-all">
                <div className="flex items-center justify-center p-4">
                    <div className="bg-red-100 rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                    </div>
                </div>

                <div className="px-6 pb-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{titulo}</h3>
                    <p className="text-gray-600">{mensaje}</p>
                </div>

                <div className="flex gap-3 p-6 border-t border-gray-200">
                    <button
                        onClick={onClose}
                        className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                    >
                        {textoCancelar}
                    </button>
                    <button
                        onClick={onConfirm}
                        className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                    >
                        {textoConfirmar}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalConfirmacion