
const crypto = require('crypto');
const axios = require('axios');
const dateFormat = require('./format');
const baseUrl = 'https://app.cloopen.com:8883/2013-12-26/Accounts/';

class Sms {
	constructor(accountSid, appId, token) {
		this.accountSid = accountSid;
		this.appId = appId;
		this.token = token;
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
	}

	async send(phone, code, templateId, minutes) {
		let timeStamp = dateFormat.format(new Date());
		let url = this.getUrl(timeStamp);
		let auth = this.getAuthorization(timeStamp);
		let params = this.getParameter(phone, code, templateId, minutes);
		axios.defaults.headers.common['Authorization'] = auth;
		let result = await axios.post(url, params);
		return result.data;
	}

	getUrl(timeStamp) {
		let str = `${this.accountSid}${this.token}${timeStamp}`;
		let sig = crypto.createHash('md5').update(str).digest('hex').toUpperCase();//md5加密
		let url = `${baseUrl}${this.accountSid}${'/SMS/TemplateSMS?sig='}${sig}`;
		return url;
	}

	getParameter(phone, code, templateId, minutes) {
		let datas = [code, minutes];
		let paramter = {
			"to": phone,
			"appId": this.appId,
			"templateId": templateId,
			"datas": datas
		}
		return paramter;
	}

	getAuthorization(timeStamp) {
		var str = `${this.accountSid}${':'}${timeStamp}`;
    var b = Buffer.from(str, 'utf-8');
    return b.toString('base64');
	}

}

module.exports = function (accountSid, appId, token) {
	return new Sms(accountSid, appId, token);
}