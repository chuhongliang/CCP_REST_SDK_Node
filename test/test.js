const accountSid = '8a216da86904c0600';
const appId = '8a216da86904';
const token = '56c3cd7d6529';
const sms = require('../lib/sms')(accountSid, appId, token);

async function test() {
	let result = await sms.send('1561902230', '1', [332870,1]);
	console.log(result);
}
test();