// src/components/create-modal/delete-modal.tsx

import { useFoodDeleteMutate } from '../../hooks/useFoodDataMutate'; // Importe o novo hook
import type{ ModalProps } from './create-modal';
import "./modal.css";

interface DeleteModalProps extends ModalProps {
    id: number;
}

export function DeleteModal({ closeModal, id }: DeleteModalProps) {
    const { mutate, isSuccess } = useFoodDeleteMutate(); // Use o novo hook

    const handleDelete = () => {
        mutate({ id }); // Agora a tipagem está correta
    };

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Tem certeza?</h2>
                <button onClick={handleDelete}>Confirmar</button>
                <button onClick={closeModal}>Cancelar</button>
            </div>
        </div>
    );
}