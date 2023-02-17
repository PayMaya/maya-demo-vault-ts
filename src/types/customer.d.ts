interface CreateCustomerRequest {
    firstName?: string
    middleName?: string
    lastName?: string
    birthday?: string
    customerSince?: string
    sex?: string
    contact?: Contact
    billingAddress?: Address
    shippingAddress?: ShippingAddress
}

interface Customer extends CreateCustomerRequest {
    id: string
    createdAt: string
    updatedAt: string
}

// sub types
type AmountDetails = {
    subtotal?: number
    discount?: number
    serviceCharge?: number
    shippingFee?: number
    tax?: number 
}

type Contact = {
    phone?: string
    email?: string
}

type Address = {
    line1?: string
    line2?: string
    city?: string
    state?: string
    zipCode?: string
    countryCode?: string
    shippingType?: string
}

interface ShippingAddress extends Address {
    firstName?: string
    middleName?: string
    lastName?: string
    phone?: string
    email?: string
}
