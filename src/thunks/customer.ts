import { createCustomerSuccesful, createCustomerFailed } from "../actions/customer/actionCreators";
import { createCustomer } from "../services/customerService";

export function createCustomerThunk (user: User) {
    return async (dispatch: any) => {
        try {
            const res: Customer = await createCustomer(user)
            dispatch(createCustomerSuccesful(res))
        } catch (err) {
            dispatch(createCustomerFailed())
            console.log(err)
        }
    }
}
