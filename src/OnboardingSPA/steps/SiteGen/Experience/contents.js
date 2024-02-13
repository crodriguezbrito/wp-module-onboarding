import { __ } from '@wordpress/i18n';

const getContents = () => {
	return {
		heading: __(
			'How familiar are you with using WordPress?',
			'wp-module-onboarding'
		),
		options: [
			{
				key: 1,
				title: __( 'Beginner', 'wp-module-onboarding' ),
				desc: __(
					'First time here, where am I?',
					'wp-module-onboarding'
				),
			},
			{
				key: 2,
				title: __( 'Used it some', 'wp-module-onboarding' ),
				desc: __(
					"I'll ask for help when I need it",
					'wp-module-onboarding'
				),
			},
			{
				key: 3,
				title: __( 'Expert', 'wp-module-onboarding' ),
				desc: __(
					"Stay out of my way, I know what I'm doing",
					'wp-module-onboarding'
				),
			},
		],
		skip: __( 'Skip', 'wp-module-onboarding' ),
	};
};

export default getContents;
