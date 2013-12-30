require('./server')
	.start(
		require('./router').route
	);