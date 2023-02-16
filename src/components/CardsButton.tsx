import { Dispatch } from 'redux';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import RedirectButton from "./RedirectButton"
import { getCardsThunk } from "../thunks/card";


function CardsButton () {
    const mayaCustomerId: string = useSelector((state: AppState) => state.currentUser.mayaCustomerId)

    const dispatch: Dispatch<any> = useDispatch()
    const onGetCards = () => {
        dispatch(getCardsThunk(mayaCustomerId))
    }

    return (
        <div className="button-container nav-bar-item">
            <RedirectButton display='Cards' url='/cards' className='btn' onClick={() => onGetCards()} />
        </div>
    )
}

export default CardsButton