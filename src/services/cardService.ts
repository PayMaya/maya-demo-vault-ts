import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import config from '../config';
import { Buffer } from 'buffer';

const mayaPaymentsUrl: string = config.maya_payments.url
const secretAuth: string = Buffer.from(`${config.maya_payments.sec_api_key}:`, 'binary').toString('base64')

export const retrieveCards = async (customerId: string) => {
    const headers = {
        accept: 'application/json',
        authorization: `Basic ${secretAuth}`,
    }

    const response = await axios.get(`${mayaPaymentsUrl}/customers/${customerId}/cards`, { headers })
    const cards: CardDetails[] = response.data
    return cards
}

export const makeCardDefault = async (customerId: string, cardTokenId: string) => {
    const headers = {
        accept: 'application/json',
        authorization: `Basic ${secretAuth}`,
    }

    const req = {
        isDefault: true
    }
    
    const response = await axios.put(`${mayaPaymentsUrl}/customers/${customerId}/cards/${cardTokenId}`, req, { headers })
    const cards: CardDetails = response.data
    return cards
}


export const createCard = async (customerId: string, paymentTokenId: string, isDefault: boolean = true) => {
    const headers = {
        accept: 'application/json',
        authorization: `Basic ${secretAuth}`,
    }

    const req: CreateCardRequest = {
        paymentTokenId,
        isDefault,
        requestReferenceNumber: uuidv4(),
        redirectUrl: {
            success: `${config.host_url}/cards`,
            failure: `${config.host_url}/cards`,
            cancel: `${config.host_url}/cards`
        }
    }
    
    const response = await axios.post(`${mayaPaymentsUrl}/customers/${customerId}/cards`, req, { headers })
    const CreatedCard: CreatedCard = response.data
    return CreatedCard
}