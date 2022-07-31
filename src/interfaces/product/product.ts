export interface ProductI {
    id?:            number;
    name:           string;
    description:    string;
    price:          number;
    stock:          number;
    image:          string;
    expirationDate: Date;
    pharmacy:       ProductPharmacy;
    createAt?:       Date;
    updateAt?:       Date;
}

export interface ProductPharmacy {
    id:       number;
    name:     string;
    image:    string;
    user:     ProductUser;
    products: string[];
    createAt: Date;
    updateAt: Date;
}

export interface ProductUser {
    id:           number;
    email:        string;
    password:     string;
    refreshToken: string;
    role:         ProductRole;
    source:       ProductRole;
    pharmacy:     string;
    customer:     ProductCustomer;
    createAt:     Date;
    updateAt:     Date;
}

export interface ProductCustomer {
    id:       number;
    name:     string;
    lastname: string;
    phone:    string;
    user:     string;
    orders:   ProductOrder[];
    createAt: Date;
    updateAt: Date;
}

export interface ProductOrder {
    id:       number;
    customer: string;
    items:    ProductItem[];
    createAt: Date;
    updateAt: Date;
}

export interface ProductItem {
    id:       number;
    quantity: number;
    product:  string;
    order:    string;
    createAt: Date;
    updateAt: Date;
}

export interface ProductRole {
    id:           number;
    name:         string;
    description?: string;
    users:        string[];
    createAt:     Date;
    updateAt:     Date;
}
