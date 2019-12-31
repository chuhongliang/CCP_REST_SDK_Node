let accountSid = '8a216da869';
let appId = '8a216da869';
let token = '56c3cd';
const sms = require('../lib/sms')(accountSid, appId, token);

async function test(){
	let result = await sms.send('13717807729', 332870, '1',1);
	console.log(result);
}
test();