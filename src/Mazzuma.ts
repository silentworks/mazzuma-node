import { RequestPayment } from './RequestPayment';
import APIRequest from './api';
import { AxiosResponse } from 'axios';
import { ITransactionResponse } from './types';

export class Mazzuma {
    readonly apiKey: string;
    readonly request?: APIRequest;

    readonly MTN_TO_MTN: string = 'rmtm';
    readonly MTN_TO_AIRTEL: string = 'rmta';
    readonly MTN_TO_VODAFONE: string = 'rmtv';
    readonly MTN_TO_TIGO: string = 'rmtt';
    readonly AIRTEL_TO_MTN: string = 'ratm';
    readonly AIRTEL_TO_AIRTEL: string = 'rata';
    readonly AIRTEL_TO_VODAFONE: string = 'ratv';
    readonly AIRTEL_TO_TIGO: string = 'ratt';
    readonly TIGO_TO_MTN: string = 'rttm';
    readonly TIGO_TO_AIRTEL: string = 'rtta';
    readonly TIGO_TO_VODAFONE: string = 'rttv';
    readonly TIGO_TO_TIGO: string = 'rttt';
    readonly VODAFONE_TO_MTN: string = 'rvtm';
    readonly VODAFONE_TO_AIRTEL: string = 'rvta';
    readonly VODAFONE_TO_VODAFONE: string = 'rvtv';
    readonly VODAFONE_TO_TIGO: string = 'rvtt';

    // create constructor that requires api key
    constructor(apiKey: string, request?: APIRequest) {
        this.apiKey = apiKey;
        this.request = request;
    }

    // request a payment
    public create(cashflowDirection: string) {
        const network = this.networkLookup(cashflowDirection);
        return this.newRequestPayment(this.apiKey, cashflowDirection, network, this.request);
    }

    // check transaction status
    async transactionStatus(transactionId: string): Promise<AxiosResponse<ITransactionResponse>> {
        return this.request.transactionStatus(transactionId);
    }

    protected networkLookup(flowDirection: string) {
        switch (flowDirection) {
            case this.MTN_TO_MTN:
            case this.MTN_TO_AIRTEL:
            case this.MTN_TO_VODAFONE:
            case this.MTN_TO_TIGO:
                return 'mtn'
            break;
            case this.AIRTEL_TO_MTN:
            case this.AIRTEL_TO_AIRTEL:
            case this.AIRTEL_TO_VODAFONE:
            case this.AIRTEL_TO_TIGO:
                return 'airtel'
            break;
            case this.TIGO_TO_MTN:
            case this.TIGO_TO_AIRTEL:
            case this.TIGO_TO_VODAFONE:
            case this.TIGO_TO_TIGO:
                return 'tigo'
            break;
            case this.VODAFONE_TO_MTN:
            case this.VODAFONE_TO_AIRTEL:
            case this.VODAFONE_TO_VODAFONE:
            case this.VODAFONE_TO_TIGO:
                return 'vodafone'
            break;
        }
    }

    protected newRequestPayment(apiKey: string, flowDirection: string, network: string, api?: any) {
        return new RequestPayment(apiKey, flowDirection, network, api);
    }
}
