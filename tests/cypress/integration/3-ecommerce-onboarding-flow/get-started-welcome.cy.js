// <reference types="Cypress" />
import { CheckDrawerDisabled } from '../wp-module-support/drawer.cy';
import { CheckCardHeadingSubheading } from '../wp-module-support/header.cy';
import {
	BasicSidebarCheck,
	CheckHelpPanelLinks,
	CheckIllustrationPanel,
	CheckInfoPanel,
	CheckIntroPanel,
} from '../wp-module-support/sidebar.cy';
import { GetPluginId, GetPluginName } from '../wp-module-support/pluginID.cy';

describe( 'Get Started Welcome Page', function () {
	before( () => {
		cy.visit(
			'wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/get-started/welcome'
		);
	} );

	it( 'Change tab and check', () => {
		let tabCount = 0;
		const className = '#tab-panel-0-tab';
		const arr = cy.get( '.components-tab-panel__tabs > button' );
		arr.each( () => {
			cy.get( className.concat( tabCount + 1 ) )
				.trigger( 'mouseover' )
				.should( 'be.visible' );
			cy.get( className.concat( tabCount + 1 ).concat( '-view' ) ).should(
				'be.visible'
			);
			tabCount += 1;
		} );
	} );

	it( 'Check Exit to Wordpress button is visible and clickable and continue flow', () => {
		cy.get( '.nfd-onboarding-etw__trigger' ).should( 'be.visible' ).click();
		cy.get( '.components-modal__screen-overlay' ).should( 'be.visible' );
		cy.get( '.nfd-onboarding-etw__buttons > .is-secondary' ).click();
		cy.get( '.components-modal__screen-overlay' ).should( 'not.exist' );
	} );

	it( 'Check Exit to Wordpress button is visible and clickable and cancel', () => {
		cy.get( '.nfd-onboarding-etw__trigger' ).should( 'be.visible' ).click();
		cy.get( '.components-modal__screen-overlay' ).should( 'be.visible' );
		cy.get( '.components-modal__header > button' ).click();
		cy.get( '.components-modal__screen-overlay' ).should( 'not.exist' );
	} );

	it( 'Check if the Suppressed Drawer does not open on clicking Toggle Button', () => {
		CheckDrawerDisabled();
	} );

	if(GetPluginId()=='bluehost'){
		it( 'Check to make sure sidebar opens, content is in place and close sidebar', () => {
			CheckIntroPanel( '__get-started-welcome', 'Start Setup' );
			CheckIllustrationPanel();
			CheckInfoPanel( 2 );
			CheckHelpPanelLinks( true, 'Hire Our Full-Service Creative Team' );
		} );

		it( 'Check if `store` appears in heading', () => {
			cy.get('.nfd-step-card-heading')
				.scrollIntoView()
				.should('be.visible')
				.contains('store');
		} );
	}
	else{
		it( 'Check to make sure Sidebar opens', () => {
			BasicSidebarCheck();
		} );
	};

	it( 'Check if welcome card is visible', () => {
		cy.get( '.welcome-card' ).should( 'be.visible' );
	} );

	it( 'Check if main heading and sub heading shows up', () => {
		CheckCardHeadingSubheading();
	} );

	it( 'Check for brandname in sub heading', () => {
		GetPluginName();
	} );

	it( 'Check navigation back button is not visible', () => {
		cy.get( '.navigation-buttons_back' ).should('exist');
	} );

	it( 'Check if next step loads on clicking navigation next', () => {
		cy.get( '.navigation-buttons_next' ).click();
		cy.url().should( 'not.include', '#/wp-setup/step/get-started/welcome' );
		cy.get('.navigation-buttons_back').click();
	} );

	it( 'Check Exit to Wordpress button is visible and clickable and exit flow', () => {
		cy.get( '.nfd-onboarding-etw__trigger' ).should( 'be.visible' ).click();
		cy.get( '.components-modal__screen-overlay' ).should( 'be.visible' );
		cy.get( '.nfd-onboarding-etw__buttons > .is-primary' ).click();
		cy.url().should( 'not.contain', '#/wp-setup/step/get-started/welcome' );
	} );
} );
