### CCP_REST_SDK_Node
容联云短信SDK

### Installation
```
npm install ccp_rest_sdk_node
```

### Usage
``` javascript
const accountSid = '8a216da869';
const appId = '8a216da869';
const token = '56c3cd';
const sms = require('../lib/sms')(accountSid, appId, token);

async function test(){
	let result = await sms.send('1561902230', '1', [332870,1]);
	console.log(result);
}
test();


``` 