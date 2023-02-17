import { createPaymentTokenSuccesful, createPaymentTokenFailed } from "../actions/payment/actionCreators";
import { createPaymentToken } from "../services/paymentService";

export function createPaymentTokenThunk (req: PaymentTokenRequest) {
    return async (dispatch: any) => {
        try {
            const res: PaymentTokenResponse = await createPaymentToken(req)
            dispatch(createPaymentTokenSuccesful(res))
        } catch (err) {
            dispatch(createPaymentTokenFailed())
            console.log(err)
        }
    }
}
