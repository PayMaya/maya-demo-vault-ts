import axios from 'axios';
import config from '../config';
import { Buffer } from 'buffer';

const mayaPaymentsUrl: string = config.maya_payments.url
const publicAuth: string = Buffer.from(`${config.maya_payments.pub_api_key}:`, 'binary').toString('base64')

export const createPaymentToken = async (newCardDetails: NewCardDetails) => {
    const headers = {
        accept: 'application/json',
        authorization: `Basic ${publicAuth}`,
    }
    const { isDefault: _, ...card } = newCardDetails
    const req: PaymentTokenRequest = { card }
    
    const response = await axios.post(`${mayaPaymentsUrl}/payment-tokens`, req, { headers })
    const cards: PaymentTokenResponse = response.data
    return cards
}

const secretAuth: string = Buffer.from(`${config.maya_payments.sec_api_key}:`, 'binary').toString('base64')

export const createCardPayment = async (customerId: string, cardTokenId: string, req: CardPaymentRequest) => {
    const headers = {
        accept: 'application/json',
        authorization: `Basic ${secretAuth}`,
    }

    const response = await axios.post(`${mayaPaymentsUrl}/customers/${customerId}/cards/${cardTokenId}/payments`, req, { headers })
    const cardPayment: CardPayment = response.data
    return cardPayment
}