import { Dispatch } from 'redux';
import { useDispatch } from "react-redux"
import { makeCardDefaultThunk } from '../thunks/card';
import { useSelector } from 'react-redux';

function VaultedCard ({ cardTokenId, default: isDefault, cardType, first6, last4 }: CardDetails) {
    const mayaCustomerId: string = useSelector((state: AppState) => state.currentUser.mayaCustomerId)

    const dispatch: Dispatch<any> = useDispatch()

    const onMakeDefault = () => {
        dispatch(makeCardDefaultThunk(mayaCustomerId, cardTokenId))
    }
    
    const status: React.ReactNode = isDefault ? 
        <p> &#x2713; default </p> : 
        <button className='btn green' onClick={() => onMakeDefault()}>Make default</button>
    
    return (
        <div className='add-new-card-container'>
            <div className='column'><p> {cardType} </p></div>
            <div className='column'><p> {`${first6}*****${last4}`} </p></div>
            <div className='column'>{status}</div>
        </div>
   )
}

export default VaultedCard