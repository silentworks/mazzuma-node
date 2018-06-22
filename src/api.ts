import * as rp from "request-promise-native";

const apiBaseUri = 'https://client.teamcyst.com/';

export function paymentRequest(payload: object) {
    const options = {
        uri: `${apiBaseUri}api_call.php`,
        body: payload,
    };
    return rp.post(options).then((response) => response);
};

export function transactionStatus(transactionId: string) {
    const options = {
        uri: `${apiBaseUri}checktransaction.php`,
        qs: {
            id: transactionId
        },
    };
    return rp.get(options).then((response) => response);
}
