import axios from 'axios';
import config from '../config';
import { Buffer } from 'buffer';

const mayaPaymentsUrl: string = config.maya_payments.url
const token: string = Buffer.from(`${config.maya_payments.sec_api_key}:`, 'binary').toString('base64')

export const retrieveCards = async (id: string) => {
    const headers = {
        accept: 'application/json',
        authorization: `Basic ${token}`,
    }

    console.log(token)

    const response = await axios.get(`${mayaPaymentsUrl}/customers/${id}/cards`, { headers })
    const cards: CardDetails[] = response.data
    return cards
}