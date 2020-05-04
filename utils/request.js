const app = getApp();

const baseUrl = app.globalData.baseUrl;

export const request = function (url, method = 'GET', data = {}, header = { contentType: 'application/json' }) {
	header.token = app.globalData.token;
	return new Promise((resolve, reject) => {
		wx.request({
			url: baseUrl + url,
			data,
			header,
			method,
			success(res) {
				const { data, statusCode, header } = res;
				if (data.errCode === '000000') {
					resolve(data.result);
				} else if (data.errCode === '999998') {
					// 如果用户态失效
					app.globalData.token = '';
					app.globalData.userInfo = { name: '', avatar: '' };
					wx.navigateTo({
						url: '/pages/login/index',
					})
				}
				else {
					reject(new Error(data.errMsg));
				}
			},
			fail(err) {
				reject(err);
			}
		})
	});
}

export const getReq = request.get = function (url, data, header) {
	return this(url, 'GET', data, header);
}

export const postReq = request.post = function (url, data, header) {
	return this(url, 'POST', data, header)
}

export default request;