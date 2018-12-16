import { Mazzuma } from './Mazzuma';
import APIRequest from './api';

export function mazzuma(apiKey: string) {
    const api = new APIRequest();
    return new Mazzuma(apiKey, api);
}
