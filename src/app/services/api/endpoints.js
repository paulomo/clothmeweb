import API from './api';

export const userEndoint = {
    createUser: API + '/users',
    readAllUser: API + '/users',
    readOneUser: API + '/users/:id',
    updateUser: API + '/users/:id',
    disableUser: API + '/users/:id',
    enableUser: API + '/users/:id',
    deleteUser: API + '/users/:id',
}

export const productEndoint = {
    createProduct: API + '/products',
    readAllProduct: API + '/products',
    readOneProduct: API + '/products/:id',
    updateProduct: API + '/products/:id',
    publishProduct: API + '/products/:id',
    deleteProduct: API + '/products/:id',
}

export const orderEndoint = {
    createOrder: API + '/orders',
    readAllOrder: API + '/orders',
    readOneOrder: API + '/orders/:id',
    updateOrder: API + '/orders/:id',
    deleteOrder: API + '/orders/:id',
}