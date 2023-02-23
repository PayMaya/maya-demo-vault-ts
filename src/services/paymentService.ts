import axios from 'axios';
import config from '../config';
import { Buffer } from 'buffer';
import { v4 as uuidv4 } from 'uuid';

const mayaPaymentsUrl: string = config.maya_payments.url
const publicAuth: string = Buffer.from(`${config.maya_payments.pub_api_key}:`, 'binary').toString('base64')
const secretAuth: string = Buffer.from(`${config.maya_payments.sec_api_key}:`, 'binary').toString('base64')

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

export const createCardPayment = async (customerId: string, cardTokenId: string, totalAmount: number) => {
    const headers = {
        accept: 'application/json',
        authorization: `Basic ${secretAuth}`,
    }
    const requestReferenceNumber = uuidv4();
    const cardPaymentRequest:CardPaymentRequest = {
        totalAmount: {
            amount: totalAmount,
            currency: 'PHP'
        },
        requestReferenceNumber
    }
    const response = await axios.post(`${mayaPaymentsUrl}/customers/${customerId}/cards/${cardTokenId}/payments`, cardPaymentRequest, { headers })
    const cardPayment: CardPayment = response.data
    return { requestReferenceNumber, cardPayment };
}