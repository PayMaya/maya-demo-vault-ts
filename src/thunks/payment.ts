import { createPaymentTokenSuccesful, createPaymentTokenFailed, paymentSuccessful, paymentFailed, paymentCancelled } from "../actions/payment/actionCreators";
import config from "../config";
import { createCardPayment } from "../services/cardService";
import { createPaymentToken } from "../services/paymentService";
import { v4 as uuidv4 } from 'uuid';
import { Dispatch } from "redux";

export function createPaymentTokenThunk (newCardDetails: NewCardDetails) {
    return async (dispatch: any) => {
        try {
            const res: PaymentTokenResponse = await createPaymentToken(newCardDetails)
            dispatch(createPaymentTokenSuccesful(res))
        } catch (err) {
            dispatch(createPaymentTokenFailed())
            console.log(err)
        }
    }
}

export function payWithVaultedCardThunk(customerId:string, cardTokenId:string, totalAmount:number) {
    return async (dispatch:Dispatch) => {
        try {
            const cardPaymentRequest:CardPaymentRequest = {
                totalAmount: {
                    amount: totalAmount,
                    currency: 'PHP'
                },
                requestReferenceNumber: uuidv4()
            }
            const response = await createCardPayment(customerId,cardTokenId,cardPaymentRequest);
            processPaymentResult(response.status,dispatch,cardPaymentRequest.requestReferenceNumber);
        } catch (err) {
            console.log(err);
        }
    }
}

function processPaymentResult(result:string, dispatch:Dispatch, requestReferenceNumber:string) {
    const redirectUrl = `${config.host_url}/purchase`;
    switch (result) {
        case 'PAYMENT_SUCCESS':
            window.location.href = `${redirectUrl}/success/?id=${requestReferenceNumber}`;
            dispatch(paymentSuccessful());
            break;
        case 'PAYMENT_FAILED':
            window.location.href = `${redirectUrl}/failed/?id=${requestReferenceNumber}`;
            dispatch(paymentFailed());
            break;
        case 'PAYMENT_CANCELLED':
            window.location.href = `${redirectUrl}/canceled/?id=${requestReferenceNumber}`;
            dispatch(paymentCancelled());
            break;
        default:
            break;
    }
}
