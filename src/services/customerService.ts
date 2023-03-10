import axios from 'axios';
import config from '../config';
import { Buffer } from 'buffer';

const mayaPaymentsUrl: string = config.maya_payments.url
const secretAuth: string = Buffer.from(`${config.maya_payments.sec_api_key}:`, 'binary').toString('base64')

/* 
    For demo purposes, the following functions were done on the frontend. 
    However, when implementing for commercial use, please do the following transactions
    on your backend servers to protect the cardTokenId of the customer.
*/

export const createCustomer = async (user: User) => {
    const headers = {
        accept: 'application/json',
        authorization: `Basic ${secretAuth}`,
    }

    const { firstName, lastName, email } = user
    const req: CreateCustomerRequest = {
        firstName,
        lastName,
        contact: {
            email
        }
    }
    
    const response = await axios.post(`${mayaPaymentsUrl}/customers`, req, { headers })
    const customer: Customer = response.data
    return customer
}

export const updateCustomer = async (customerId: string, req: CreateCustomerRequest) => {
    const headers = {
        accept: 'application/json',
        authorization: `Basic ${secretAuth}`,
    }
    
    const response = await axios.put(`${mayaPaymentsUrl}/customers/${customerId}`, req, { headers })
    const customer: Customer = response.data
    return customer
}

export const deleteCustomer = async (customerId: string) => {
    const headers = {
        accept: 'application/json',
        authorization: `Basic ${secretAuth}`,
    }
    
    const response = await axios.delete(`${mayaPaymentsUrl}/customers/${customerId}`, { headers })
    const customer: Customer = response.data
    return customer
}
