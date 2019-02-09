module.exports = [
	[
		'use-babel-config',
		{
			presets: ['react-app'],
			plugins: [
				[
					'module-resolver',
					{
						root: '.',
						alias: {
							'~': './src',
						},
					},
				],
			],
		},
	],
];