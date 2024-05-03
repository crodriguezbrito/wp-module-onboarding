// <reference types="Cypress" />

import {
	AdminBarCheck,
	DarkBGCheck,
	LightBGCheck,
} from '../wp-module-support/siteGen.cy';

describe( 'SiteGen Fork Step', function () {
	before( () => {
		cy.exec(
			'npx wp-env run cli wp option delete nfd_module_onboarding_flow'
		);
		cy.exec(
			`npx wp-env run cli wp option set _transient_nfd_site_capabilities '{"hasAISiteGen": true, "canAccessAI": true}' --format=json`
		);
		cy.exec(
			`npx wp-env run cli wp option set _transient_timeout_nfd_site_capabilities 4102444800`
		);
		cy.wait( 10000 );
		cy.visit( 'wp-admin/?page=nfd-onboarding#/wp-setup/step/fork' );
		cy.timeout( 60000 );
	} );

	it( 'Check for the header admin bar', () => {
		AdminBarCheck();
	} );

	it( 'Check for the existing dark background', () => {
		DarkBGCheck();
	} );

	it( 'Check for the light background', () => {
		LightBGCheck();
	} );

	it( 'Check for the heading and the title', () => {
		cy.get( '.nfd-onboarding-step__heading__title' )
			.should( 'be.visible' )
			.should( 'have.text', 'Welcome to WordPress' );
	} );

	it( 'Check for the subheading', () => {
		cy.get( '.nfd-onboarding-step__heading__subtitle' ).should(
			'be.visible'
		);
	} );

	it( 'Check the number of container options available', () => {
		cy.get( '.nfd-onboarding-sitegen-options__container__options' )
			.should( 'be.visible' )
			.should( 'have.length', 3 );
	} );

	it( 'Check for selection of different container options', () => {
		const className = '.nfd-onboarding-sitegen-options__container__options';
		const arr = cy.get( className );

		arr.each( ( $element ) => {
			const dataSlugText = $element.attr( 'data-flow' );
			if ( dataSlugText == 'sitegen' ) {
				$element.click();
				cy.url().should( 'include', 'sitegen/step/welcome', {
					timeout: 10000,
				} );
				cy.go( 'back' );
			}
		} );
	} );

	it( 'Check for the import your WP account link at the bottom', () => {
		cy.get( '.nfd-onboarding-step--site-gen__fork__importsite' )
			.scrollIntoView()
			.should( 'exist' )
			.should( 'contain', 'Already have a WordPress site' );
	} );
} );
