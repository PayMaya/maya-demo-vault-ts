import axios from 'axios';
import config from '../config';
import { Buffer } from 'buffer';
import { v4 as uuidv4 } from 'uuid';

const mayaPaymentsUrl: string = config.maya_payments.url
const publicAuth: string = Buffer.from(`${config.maya_payments.pub_api_key}:`, 'binary').toString('base64')
const secretAuth: string = Buffer.from(`${config.maya_payments.sec_api_key}:`, 'binary').toString('base64')
const redirectUrl = `${config.host_url}/purchase`;

/* 
    For demo purposes, the following functions were done on the frontend. 
    However, when implementing for commercial use, please do the following transactions
    on your backend servers to protect the cardTokenId of the customer.
*/

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
        requestReferenceNumber,
        redirectUrl: {
            success: `${redirectUrl}/success/?id=${requestReferenceNumber}`,
            failure: `${redirectUrl}/failed/?id=${requestReferenceNumber}`,
            cancel: `${redirectUrl}/canceled/?id=${requestReferenceNumber}`
        }
    }
    const response = await axios.post(`${mayaPaymentsUrl}/customers/${customerId}/cards/${cardTokenId}/payments`, cardPaymentRequest, { headers })
    const cardPayment: CardPayment = response.data
    return { requestReferenceNumber, cardPayment };
}

export const createOneTimePayment = async (cardTokenId: string, totalAmount: number) => {
    const headers = {
        accept: 'application/json',
        authorization: `Basic ${secretAuth}`,
    }
    const requestReferenceNumber = uuidv4();
    const cardPaymentRequest = {
        paymentTokenId: cardTokenId,
        totalAmount: {
            amount: totalAmount,
            currency: 'PHP'
        },
        requestReferenceNumber,
        redirectUrl: {
            success: `${redirectUrl}/success/?id=${requestReferenceNumber}`,
            failure: `${redirectUrl}/failed/?id=${requestReferenceNumber}`,
            cancel: `${redirectUrl}/canceled/?id=${requestReferenceNumber}`
        }
    }
    const response = await axios.post(`${mayaPaymentsUrl}/payments`, cardPaymentRequest, { headers })
    const cardPayment: CardPayment = response.data
    return { requestReferenceNumber, cardPayment };
}