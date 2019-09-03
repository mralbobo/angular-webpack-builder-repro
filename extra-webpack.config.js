const path = require('path');

module.exports = {
	module: {
		rules: [
			{
				include: [path.resolve('src/app/AnalyticsService.ts')],
				loader: path.resolve('preprocess-analytics-loader.js'),
			}
		]
	}
};
