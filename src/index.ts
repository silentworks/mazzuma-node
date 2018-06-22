import { Mazzuma } from './Mazzuma';
import * as api from './api';

export default function (apiKey: string) {
    return new Mazzuma(apiKey, api);
}
