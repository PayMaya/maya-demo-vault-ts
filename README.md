# Card Payment Vault Demo

This mini application demonstrates the use of [Maya Card Payment Vault](https://developers.maya.ph/docs/maya-card-payment-vault) in order to tokenize a users card information, and using the token to perform one-time or automatic payments.

If you want to see the relevant integration code directly, see the following:
- [customerService.ts](src/services/customerService.ts) for registering your customer
- [cardService.ts](src/services/cardService.ts) for associating a card with a customer
- [paymentService.ts](src/services/paymentService.ts) for making payments with your customer's card

This project was created with React (React Redux and Thunk) and TypeScript.

Do not build your application on top of this demo.

---

## Requirements
1. Checkout API keys (public and secret)- needed as authorization in API calls

## How to Run the Application
1. Run `npm install` to install all needed packages.
2. Run `npm start` to start the application. (see next part for note on environment variables) 

Example: 
> REACT_APP_VAULT_PUBLIC_API_KEY='pk-abcdefhij' REACT_APP_VAULT_SECRET_API_KEY='sk-abcdefhij' npm start

## Environment variables
You can set these variables in your environment, or when running the application, or in a `.env` file in the root directory.

| env variable                      | description                                 | default               |
|-----------------------------------|---------------------------------------------|-----------------------|
| REACT_APP_VAULT_PUBLIC_API_KEY    | (required) public api key                   |                       |
| REACT_APP_VAULT_SECRET_API_KEY    | (required) secret api key                   |                       |
| REACT_APP_HOST_URL                | host url of the app, used for redirect urls | http://localhost:3000 |
| REACT_APP_PATH_PREFIX             | path prefix, used for redirect urls         | /                     |
| PORT                              | port that the app listens to                | 3000                  |

### Using a .env file
You can create a `.env` file in the root folder with values.  This allows you to run the application with just `npm start`

Example
```ini
REACT_APP_VAULT_PUBLIC_API_KEY=pk-gjldkfjgkldfjgljdfglawas
REACT_APP_VAULT_SECRET_API_KEY=sk-sjsdfhdsjfhsjkldfsdfhsdf
```


## APIs Used
1. [Maya Payment Vault](https://developers.maya.ph/reference/introduction-payment-vault)

## Features
1. Adding products to cart
2. Card management page for vaulted cards
2. Checking out and paying using vaulted cards

## Codebase (`src` folder)
### **Frontend**
##### `App.tsx`
Routing / handling of React views / pages
##### `App.css`
CSS for the application
##### `src/actions`
Redux actions
##### `src/components`
Customized React components used within the application
##### `src/reducers`
Redux reducers
##### `src/thunks`
Redux thunks for handling asynchronous logic
##### `src/views`
Customized React views / pages


### **Backend**
##### `src/services`
Service files - API calls

### **Miscellaneous**
##### `src/types`
Type assertions
##### `src/utils`
Helper functions


## Additional Resources
1. [Sandbox credentials and cards that can be used during checkout](https://developers.maya.ph/reference/sandbox-credentials-and-cards)
2. [How to integrate with Maya Card Payment Vault](https://developers.maya.ph/docs/maya-card-payment-vault)
3. [Using webhooks](https://developers.maya.ph/docs/receive-real-time-payment-information-using-webhooks)
