import { resolve } from './resolve';
import { onboardingRestURL } from './common';

import apiFetch from '@wordpress/api-fetch';

export async function getHomepagePatterns(data = '') {
    return await resolve(
        apiFetch({ url: onboardingRestURL(`patterns/${data}`) }).then()
    );
}

export async function getPatterns( step = false, squash = false ) {
	return await resolve(
		apiFetch( {
			url: onboardingRestURL(
				`patterns` +
					( step ? `&step=${ step }&squash=${ squash }` : '' )
			),
		} ).then()
	);
}
