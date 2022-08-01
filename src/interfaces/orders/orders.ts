export interface OrderI {
    id:       number;
    customer: OrderCustomer;
    products:  OrderProduct[];
    total:    number;
    createAt: Date;
    updateAt: Date;
}

export interface OrderCustomer {
    id:       number;
    name:     string;
    lastname: string;
    phone:    string;
    user:     [];
    orders:   string[];
    createAt: Date;
    updateAt: Date;
}

export interface OrderItem {
    id:       number;
    quantity: number;
    product:  OrderProduct;
    order:    string;
    createAt: Date;
    updateAt: Date;
}

export interface OrderProduct {
    id:             number;
    name:           string;
    description:    string;
    price:          number;
    stock:          number;
    image:          string;
    expirationDate: Date;
    // pharmacy:       Pharmacy;
    createAt:       Date;
    updateAt:       Date;
    itemId:         number;
    quantity: number;
}
