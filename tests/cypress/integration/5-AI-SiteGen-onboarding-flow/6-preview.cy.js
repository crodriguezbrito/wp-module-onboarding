// <reference types="Cypress" />

import {
	AdminBarCheck,
	DarkBGCheck,
	LightBGCheck,
	ProgressBarCheck,
} from '../wp-module-support/siteGen.cy';
import {
	apiList,
	siteGenMockAll,
	homePagesMock,
} from '../wp-module-support/MockApi.cy';

describe( 'SiteGen Site Preview Step', function () {
	before( () => {
		cy.visit(
			'wp-admin/index.php?page=nfd-onboarding#/sitegen/step/preview'
		);
		cy.intercept( apiList.sitegen, ( req ) => {
			siteGenMockAll( req );
		} ).as( 'sitegenCalls' );

		cy.intercept( apiList.homepages, ( req ) => {
			homePagesMock( req );
		} ).as( 'homePageCall' );
		cy.timeout( 120000 );
		cy.wait( 5000 );
		cy.wait( 5000 );
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

	it( 'Check the Progress Bar Value', () => {
		ProgressBarCheck( '71.4286%' );
	} );

	it( 'Check for by default 3 versions should be there', () => {
		cy.get( '.live-preview-sitegen--selectable-card', { timeout: 20000 } )
			.should( 'be.visible' )
			.should( 'have.length', 3 );
	} );

	it.skip( 'Check for the favourited theme versions', () => {
		cy.get( 'g[clip-path="url(#heart-filled_svg__a)"]' ).should(
			'not.exist'
		); // when no fav theme is selected
		cy.get(
			'.live-preview-sitegen--selectable-card__live-preview-container-buttons__button__icon'
		)
			.eq( 0 )
			.scrollIntoView()
			.should( 'be.visible' )
			.click();
		cy.get( 'g[clip-path="url(#heart-filled_svg__a)"]', {
			timeout: 20000,
		} ).should( 'exist' );
		cy.get(
			'.live-preview-sitegen--selectable-card__live-preview-container__overlay'
		)
			.eq( 0 )
			.scrollIntoView()
			.click();
		cy.reload();
		cy.wait( 5000 );
		cy.get( 'g[clip-path="url(#heart-filled_svg__a)"]', {
			timeout: 20000,
		} ).should( 'exist' );
		cy.go( 'back' );
		cy.reload();
	} );

	it.skip( 'Check for regenerating the new theme versions', () => {
		cy.get( '[aria-label="Regenerate Content"]', { timeout: 20000 } )
			.eq( 1 )
			.wait( 1000 )
			.click( { force: true } );
		cy.get( '[aria-label="Regenerate Content"]', { timeout: 20000 } )
			.eq( 2 )
			.scrollIntoView();
		cy.get( '.live-preview-sitegen--selectable-card', { timeout: 20000 } )
			.should( 'be.visible' )
			.should( 'have.length', 4 );
	} );

	it( 'Check for the preview note at the bottom', () => {
		cy.get( '.nfd-onboarding-step--site-gen__preview__note' )
			.scrollIntoView()
			.should( 'be.visible' );
		cy.get( 'g[id="State\\=Active"]' ).should( 'exist' );
		cy.get( '.nfd-onboarding-step--site-gen__preview__note span' )
			.scrollIntoView()
			.contains( 'Favorite' );
	} );

	it( 'Select any theme and go forward to the next step', () => {
		cy.get(
			'.live-preview-sitegen--selectable-card__live-preview-container__overlay',
			{ timeout: 10000 }
		)
			.eq( 0 )
			.click();
		cy.url().should( 'not.contain', 'sitegen/step/preview', {
			timeout: 20000,
		} );
	} );
} );
