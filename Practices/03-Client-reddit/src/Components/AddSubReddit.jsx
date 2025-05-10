import { useState } from "react";
import { ModalReddit } from "./ModalReddit";
import '../Css/StylesComponents/AddSubReddit.css';

export function AddSubReddit(){
    const[isOpen, setIsOpen] = useState(false);

    // Funcion que abre la ventana modal
    const openModal = () => {
        setIsOpen(true);
    }

    // Funcion que cierra la ventana modal
    const CloseModal = () => {
        setIsOpen(false);
    }

    return(
        <section className="JS--Section--Button">
            <button className="JS--button" onClick={() => openModal()}>
                Add SubReddit
            </button>
            {isOpen && (
                <ModalReddit isOpen={isOpen} closeModal={CloseModal}/>
            )}
        </section>
    )
}