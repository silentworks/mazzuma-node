import { RequestPayment } from '../src/RequestPayment';

describe('Request Payment', () => {
	it('has payload', () => {
		const apiKey = '1234567';
		const option = 'rmta';
		const network = 'mtn';
		const actualPayload = {
			price: 12.55,
			network: network,
			recipient_number: '023023203232',
			sender: '032021210',
			option: option,
			apikey: apiKey
		};
		const requestPayment = new RequestPayment(apiKey, option, network)
		expect(requestPayment.mapPayload({
			option: option,
			amount: 12.55,
			to: '023023203232',
			from: '032021210'
		})).toEqual(actualPayload);
	});
});