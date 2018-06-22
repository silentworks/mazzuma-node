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

export class RequestPayment implements IRequestPayment {
    private apiKey: string;
    private option: string;
    private network: string;
    protected rp?: any;

    constructor(apiKey: string, option: string, network: string, request?: any) {
        this.option = option;
        this.apiKey = apiKey;
        this.network = network;
        this.rp = request;
    }

    create(payload: IPaymentPayload) {
        let fullPayload = this.mapPayload(payload);
        return this.makeRequest(fullPayload);
    }

    mapPayload(payload: IPaymentPayload): IRealPaymentPayload {
        const { amount, to, from } = payload;
        return {
            price: amount,
            network: this.network,
            recipient_number: to,
            sender: from,
            option: this.option,
            apiKey: this.apiKey
        }
    }

    protected makeRequest(payload: IRealPaymentPayload) {
        return this.rp.paymentRequest(payload);
    }
}