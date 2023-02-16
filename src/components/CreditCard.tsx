// import { Card } from './Card'
import { Dispatch } from 'redux';
import { useDispatch } from "react-redux"
import { getCardsThunk, updateCardThunk } from '../thunks/card';
import { useSelector } from 'react-redux';

interface CreditCardProps {
    card: CardDetails
}

function CreditCard ({ card }: CreditCardProps) {
    const mayaCustomerId: string = useSelector((state: AppState) => state.currentUser.mayaCustomerId)

    const dispatch: Dispatch<any> = useDispatch()

    const onMakeDefault = () => {
        dispatch(updateCardThunk(mayaCustomerId, card.cardTokenId))
        dispatch(getCardsThunk(mayaCustomerId))
    }
    
    const status: React.ReactNode = card.default ? 
        <p> &#x2713; default </p> : 
        <button className='btn green' onClick={() => onMakeDefault()}>Make default</button>
    
    return (
        <div className='credit-card-container'>
            <div className='column'><p> {card.cardType} </p></div>
            <div className='column'><p> {`${card.first6}*****${card.last4}`} </p></div>
            <div className='column'>{status}</div>
        </div>
   )
}

export default CreditCard