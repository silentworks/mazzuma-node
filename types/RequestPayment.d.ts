interface IPaymentPayload {
    option?: string;
    amount?: number;
    to?: string;
    from?: string;
}
interface IRealPaymentPayload {
    price?: number;
    network?: string;
    recipient_number?: string;
    sender?: string;
    option?: string;
    apiKey?: string;
    token?: string;
}
interface IRequestPayment {
    create(payload: IPaymentPayload): any;
    mapPayload(payload: IPaymentPayload): IRealPaymentPayload;
}
export declare class RequestPayment implements IRequestPayment {
    private apiKey;
    private option;
    private network;
    protected rp?: any;
    constructor(apiKey: string, option: string, network: string, request?: any);
    create(payload: IPaymentPayload): any;
    mapPayload(payload: IPaymentPayload): IRealPaymentPayload;
    protected makeRequest(payload: IRealPaymentPayload): any;
}
export {};
