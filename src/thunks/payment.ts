import { createPaymentTokenSuccesful, createPaymentTokenFailed } from "../actions/payment/actionCreators";
import { createPaymentToken } from "../services/paymentService";

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
