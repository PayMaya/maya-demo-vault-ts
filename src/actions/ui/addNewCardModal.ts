export const SHOW_ADD_NEW_CARD_MODAL = 'SHOW_ADD_NEW_CARD_MODAL'
export const HIDE_ADD_NEW_CARD_MODAL = 'HIDE_ADD_NEW_CARD_MODAL'

export function showAddNewCardModal() {
    return {
        type: SHOW_ADD_NEW_CARD_MODAL
    }
}

export function hideAddNewCardModal() {
    return {
        type: HIDE_ADD_NEW_CARD_MODAL
    }
}