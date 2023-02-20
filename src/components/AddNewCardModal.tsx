import { useState } from 'react';
import AddNewCardForm from "./AddNewCardForm";

function AddNewCardModal () {
    const [addNewCardModalVisible, setAddNewCardModalVisible] = useState(false)

    const onOpenModal = () => {
        setAddNewCardModalVisible(true)
    }
    const onCloseModal = () => {
        setAddNewCardModalVisible(false)
    }

    return (
       <>
            <div className="flex-center">
                <button className="btn green" onClick={() => onOpenModal()}>Add New Card</button>
            </div>
            <div className={`modal-wrapper ${addNewCardModalVisible ? 'modal-visible': 'modal-hidden'}`}>
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

export default AddNewCardModal