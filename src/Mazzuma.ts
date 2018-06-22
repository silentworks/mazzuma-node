import { RequestPayment } from './RequestPayment';

export class Mazzuma {
    readonly apiKey: string;
    readonly request?: any;

    static readonly MTN_TO_MTN: string = 'rmtm';
    static readonly MTN_TO_AIRTEL: string = 'rmta';
    static readonly MTN_TO_VODAFONE: string = 'rmtv';
    static readonly MTN_TO_TIGO: string = 'rmtt';
    static readonly AIRTEL_TO_MTN: string = 'ratm';
    static readonly AIRTEL_TO_AIRTEL: string = 'rata';
    static readonly AIRTEL_TO_VODAFONE: string = 'ratv';
    static readonly AIRTEL_TO_TIGO: string = 'ratt';
    static readonly TIGO_TO_MTN: string = 'rttm';
    static readonly TIGO_TO_AIRTEL: string = 'rtta';
    static readonly TIGO_TO_VODAFONE: string = 'rttv';
    static readonly TIGO_TO_TIGO: string = 'rttt';
    static readonly VODAFONE_TO_MTN: string = 'rvtm';
    static readonly VODAFONE_TO_AIRTEL: string = 'rvta';
    static readonly VODAFONE_TO_VODAFONE: string = 'rvtv';
    static readonly VODAFONE_TO_TIGO: string = 'rvtt';

    private flowDirection: string;

    // create constructor that requires api key
    constructor(apiKey: string, request?: any) {
        this.apiKey = apiKey;
        this.request = request;
    }

    // request a payment
    create(cashflowDirection: string) {
        this.flowDirection = cashflowDirection;
        const network = this.networkLookup(cashflowDirection);
        return this.newRequestPayment(this.apiKey, cashflowDirection, network, this.request);
    }

    // check transaction status
    transactionStatus(transactionId: string) {
        return this.request.transactionStatus(transactionId);
    }

    protected networkLookup(flowDirection: string) {
        switch (flowDirection) {
            case Mazzuma.MTN_TO_MTN:
            case Mazzuma.MTN_TO_AIRTEL:
            case Mazzuma.MTN_TO_VODAFONE:
            case Mazzuma.MTN_TO_TIGO:
                return 'mtn'
            break;
            case Mazzuma.AIRTEL_TO_MTN:
            case Mazzuma.AIRTEL_TO_AIRTEL:
            case Mazzuma.AIRTEL_TO_VODAFONE:
            case Mazzuma.AIRTEL_TO_TIGO:
                return 'airtel'
            break;
            case Mazzuma.TIGO_TO_MTN:
            case Mazzuma.TIGO_TO_AIRTEL:
            case Mazzuma.TIGO_TO_VODAFONE:
            case Mazzuma.TIGO_TO_TIGO:
                return 'tigo'
            break;
            case Mazzuma.VODAFONE_TO_MTN:
            case Mazzuma.VODAFONE_TO_AIRTEL:
            case Mazzuma.VODAFONE_TO_VODAFONE:
            case Mazzuma.VODAFONE_TO_TIGO:
                return 'vodafone'
            break;
        }
    }

    protected newRequestPayment(apiKey: string, flowDirection: string, network: string, api?: any) {
        return new RequestPayment(apiKey, flowDirection, network, api);
    }
}
