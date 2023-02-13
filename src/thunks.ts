import { add } from "./actions";

export function addThunk() {
    return (dispatch: any) => dispatch(add())
}