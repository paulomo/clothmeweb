import API from './api';

const baseUrl = "https://api.getclothme.com";

export const authEndpoint = {
    signUp: baseUrl + '/auth/tenant/signup',
    signIn: baseUrl + '/auth/tenant/signin',
    changePassword: baseUrl + '/auth/tenant/changepassword/:id',
    resetPassword: baseUrl + '/auth/tenant/resetpassword/:id',
    forgotPassword: baseUrl + '/auth/tenant/forgotpassword',
    signOut: baseUrl + '/auth/tenant/signout'
}

export const brandEndpoint = {
    readAllBrandUsers: baseUrl + '/brands',
    readOneBrandUser: baseUrl + '/brands/:id',
    updateBrandUser: baseUrl + '/brands/updatebranduser/:id',
    disableBrandUser: baseUrl + '/brands/disablebranduser/:id',
    enableBrandUser: baseUrl + '/brands/enablebranduser/:id',
    deleteBrandUser: baseUrl + '/brands/deletebranduser/:id',
}

export const productEndpoint = {
    createProduct: baseUrl + '/product',
    readAllProducts: baseUrl + '/products',
    readOneProduct: baseUrl + '/products/:id',
    updateProduct: baseUrl + '/products/updateproduct/:id',
    publishProduct: baseUrl + '/products/publishproduct/:id',
    deleteProduct: baseUrl + '/products/deleteproduct/:id',
}

export const orderEndpoint = {
    createOrder: baseUrl + '/order',
    readAllOrders: baseUrl + '/orders', 
    readOneOrder: baseUrl + '/orders/:id',
    updateOrder: baseUrl + '/orders/updateorder/:id',
    deleteOrder: baseUrl + '/orders/deleteorder/:id',
}

export const customerEndpoint = {
    readAllCustomers: baseUrl + '/customers',
    readOneCustomer: baseUrl + '/customers/:id',
    updateCustomer: baseUrl + '/customers/updatecustomer/:id',
    blockCustomer: baseUrl + './customers/blockcustomer/:id',
    deleteCustomer: baseUrl + '/customers/deletecustomer/:id',
}

export const messageEndpoint = {
    readAllMessages: baseUrl + '/refunds',
    readOneMessage: baseUrl + '/refunds/:id',
    editMessage: baseUrl + '/refunds/updaterefund/:id',
    sendMessage: baseUrl + './refunds/blockrefund/:id',
    blockMessage: baseUrl + './refunds/blockrefund/:id',
    deleteMessage: API + '/refunds/deleterefund/:id',
}

export const refundEndpoint = {
    readAllRefunds: baseUrl + '/refunds',
    readOneRefund: baseUrl + '/refunds/:id',
    updateRefund: baseUrl + '/refunds/updaterefund/:id',
    blockRefund: baseUrl + './refunds/blockrefund/:id',
    deleteRefund: baseUrl + '/refunds/deleterefund/:id',
}