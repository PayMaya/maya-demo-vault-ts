import { Dispatch } from 'redux';
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from 'react-router-dom';
import { paymentCleared } from '../actions/payment/actionCreators';

interface PostPaymentRedirectProps {
    children: JSX.Element
}

function PostPaymentRoute({ children }: PostPaymentRedirectProps) {
    const postPaymentRedirectUrl: string = useSelector((state: AppState) => state.postPaymentRedirectUrl)
    const redirectUrl: string = postPaymentRedirectUrl

    const dispatch: Dispatch<any> = useDispatch()

    if (redirectUrl) {
        dispatch(paymentCleared())
        return ( <Navigate to={redirectUrl} replace={true} /> ) 
    } else {
        return ( children )
    }
}

export default PostPaymentRoute