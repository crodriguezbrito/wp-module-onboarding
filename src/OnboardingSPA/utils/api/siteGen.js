import apiFetch from '@wordpress/api-fetch';

import { resolve } from './resolve.js';
import { onboardingRestURL } from './common';

export async function getSiteGenIdentifiers() {
	return await resolve(
		apiFetch( {
			url: onboardingRestURL( 'sitegen/get-identifiers' ),
		} ).then()
	);
}

export async function generateSiteGenMeta(
	siteInfo,
	identifier,
	skipCache = false
) {
	return await resolve(
		apiFetch( {
			url: onboardingRestURL( 'sitegen/generate' ),
			method: 'POST',
			data: {
				site_info: siteInfo,
				identifier,
				skip_cache: skipCache,
			},
		} ).then()
	);
}

/* export async function getHomePagePreviews() {
	return await resolve(
		apiFetch( {
			url: onboardingRestURL( 'sitegen/get-homepages' ),
		} ).then()
	);
} */
export async function getHomePagePreviews( siteDescription, regenerate ) {
	// eslint-disable-next-line no-debugger
	debugger;
	return await apiFetch( {
		path: onboardingRestURL( 'sitegen/get-homepages' ),
		method: 'GET',
		data: { site_description: siteDescription, regenerate },
	} );
}
