import { RequestPayment } from './RequestPayment';
export declare class Mazzuma {
    readonly apiKey: string;
    readonly request?: any;
    static readonly MTN_TO_MTN: string;
    static readonly MTN_TO_AIRTEL: string;
    static readonly MTN_TO_VODAFONE: string;
    static readonly MTN_TO_TIGO: string;
    static readonly AIRTEL_TO_MTN: string;
    static readonly AIRTEL_TO_AIRTEL: string;
    static readonly AIRTEL_TO_VODAFONE: string;
    static readonly AIRTEL_TO_TIGO: string;
    static readonly TIGO_TO_MTN: string;
    static readonly TIGO_TO_AIRTEL: string;
    static readonly TIGO_TO_VODAFONE: string;
    static readonly TIGO_TO_TIGO: string;
    static readonly VODAFONE_TO_MTN: string;
    static readonly VODAFONE_TO_AIRTEL: string;
    static readonly VODAFONE_TO_VODAFONE: string;
    static readonly VODAFONE_TO_TIGO: string;
    private flowDirection;
    constructor(apiKey: string, request?: any);
    create(cashflowDirection: string): RequestPayment;
    transactionStatus(transactionId: string): any;
    protected networkLookup(flowDirection: string): "mtn" | "airtel" | "tigo" | "vodafone";
    protected newRequestPayment(apiKey: string, flowDirection: string, network: string, api?: any): RequestPayment;
}
