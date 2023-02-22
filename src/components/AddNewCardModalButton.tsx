import { useState } from 'react';
import AddNewCardForm from "./AddNewCardForm";

function AddNewCardModalButton () {
    const [AddNewCardModalButtonVisible, setAddNewCardModalButtonVisible] = useState(false)

    const onOpenModal = () => {
        setAddNewCardModalButtonVisible(true)
    }
    const onCloseModal = () => {
        setAddNewCardModalButtonVisible(false)
    }

    return (
       <>
            <div className="flex-center">
                <button className="btn green" onClick={() => onOpenModal()}>Add New Card</button>
            </div>
            <div className={`modal-wrapper ${AddNewCardModalButtonVisible ? 'modal-visible': 'modal-hidden'}`}>
                <div className="modal">
                   <div className="modal-header">
                        <span className="header" onClick={() => onCloseModal()}>&larr;</span>
                        <span className="header">Add a New Card</span>
                   </div>
                    <AddNewCardForm onCloseModal={() => onCloseModal()} />
                </div>
            </div>
       </>
   )
}

export default AddNewCardModalButton