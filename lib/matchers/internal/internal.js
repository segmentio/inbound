

module.exports = function (href, referrer, callback) {

	if (href.host && referrer.host && href.host === referrer.host) {
		return callback(null, {
			type: 'internal'
		});
	} else {
		return callback(null, false);
	}

};