export interface IPaymentPayload {
    option?: string;
    amount?: number;
    to?: string;
    from?: string;
}

export interface IRealPaymentPayload {
    price?: number;
    network?: string;
    recipient_number?: string;
    sender?: string;
    option?: string;
    apikey?: string;
    orderID?: string;
    token?: string;
}

export interface IRequestPayment {
    create(payload: IPaymentPayload): any;
    mapPayload(payload: IPaymentPayload): IRealPaymentPayload;
}

export interface ITransactionResponse {
    code?: number,
    status: string,
    id: string
}
