import { Dispatch } from 'redux';
import { useDispatch } from "react-redux"
import AddNewCardForm from "./AddNewCardForm";
import { hideAddNewCardModal, showAddNewCardModal } from '../actions/ui/addNewCardModal';
import { useSelector } from 'react-redux';

function AddNewCardModal () {
    const addNewCardModalVisible: boolean = useSelector((state: AppState) => state.addNewCardModalVisible)
    const dispatch: Dispatch<any> = useDispatch()

    const onOpen = () => {
        dispatch(showAddNewCardModal())
    }
    const onCancel = () => {
        dispatch(hideAddNewCardModal())
    }

    return (
       <>
            <div className="flex-center">
                <button className="btn green" onClick={() => onOpen()}>Add New Card</button>
            </div>
            <div className={`modal-wrapper ${addNewCardModalVisible ? 'modal-visible': 'modal-hidden'}`}>
                <div className="modal">
                   <div className="modal-header">
                        <span className="header" onClick={() => onCancel()}>&larr;</span>
                        <span className="header">Add a New Card</span>
                   </div>
                    <AddNewCardForm />
                </div>
            </div>
       </>
   )
}

export default AddNewCardModal