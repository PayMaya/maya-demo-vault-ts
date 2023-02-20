import axios from 'axios';
import config from '../config';
import { Buffer } from 'buffer';

const mayaPaymentsUrl: string = config.maya_payments.url
const sk: string = Buffer.from(`${config.maya_payments.sec_api_key}:`, 'binary').toString('base64')

export const createCustomer = async (req: CreateCustomerRequest) => {
    const headers = {
        accept: 'application/json',
        authorization: `Basic ${sk}`,
    }
    
    const response = await axios.post(`${mayaPaymentsUrl}/customers`, req, { headers })
    const customer: Customer = response.data
    return customer
}
