import CommonLayout from '../../components/Layouts/Common';

import { useEffect } from '@wordpress/element';

import { useSelect, useDispatch } from '@wordpress/data';
import { store as nfdOnboardingStore } from '../../store';
import { FOOTER_SITEGEN, HEADER_SITEGEN } from '../../../constants';

import { useNavigate } from 'react-router-dom';

import { Button } from '@wordpress/components';
import { DEFAULT_FLOW, SITEGEN_FLOW } from '../../data/flows/constants';

import { resolveGetDataForFlow } from '../../data/flows';
import { validateFlow } from '../../data/flows/utils';

const TheFork = () => {
	const navigate = useNavigate();
	const { brandConfig, migrationUrl } = useSelect( ( select ) => {
		return {
			brandConfig: select( nfdOnboardingStore ).getNewfoldBrandConfig(),
			migrationUrl: select( nfdOnboardingStore ).getMigrationUrl(),
		};
	} );

	const {
		setIsHeaderEnabled,
		setSidebarActiveView,
		setHeaderActiveView,
		setDrawerActiveView,
		setIsHeaderNavigationEnabled,
		updateAllSteps,
		updateTopSteps,
		updateRoutes,
		updateDesignRoutes,
		updateInitialize,
		setFooterActiveView,
	} = useDispatch( nfdOnboardingStore );

	const switchFlow = ( newFlow ) => {
		if ( ! validateFlow( brandConfig, newFlow ) ) {
			return false;
		}
		const currentFlow = window.nfdOnboarding.currentFlow;
		const getData = resolveGetDataForFlow( newFlow );
		const data = getData();
		updateAllSteps( data.steps );
		updateTopSteps( data?.topSteps );
		updateRoutes( data.routes );
		updateDesignRoutes( data?.designRoutes );
		if ( SITEGEN_FLOW !== currentFlow ) {
			window.nfdOnboarding.oldFlow = currentFlow;
		}
		window.nfdOnboarding.currentFlow = newFlow;
		updateInitialize( true );
		navigate( data.steps[ 1 ].path );
	};

	useEffect( () => {
		setIsHeaderEnabled( false );
		setSidebarActiveView( false );
		setIsHeaderNavigationEnabled( false );
		setHeaderActiveView( HEADER_SITEGEN );
		setDrawerActiveView( false );
		setFooterActiveView( FOOTER_SITEGEN );
	} );

	const oldFlow = window.nfdOnboarding?.oldFlow
		? window.nfdOnboarding.oldFlow
		: DEFAULT_FLOW;
	return (
		<CommonLayout
			isCentered
			className="nfd-onboarding-step--site-gen__fork"
		>
			<h1 className="nfd-onboarding-step--site-gen__fork__heading">
				The Fork
			</h1>
			<div className="nfd-onboarding-step--site-gen__fork__buttons">
				{ validateFlow( brandConfig, SITEGEN_FLOW ) && (
					<Button
						className="nfd-onboarding-step--site-gen__fork__buttons__button"
						onClick={ () => switchFlow( SITEGEN_FLOW ) }
					>
						Goto sitegen flow
					</Button>
				) }
				<Button
					className="nfd-onboarding-step--site-gen__fork__buttons__button"
					onClick={ () => switchFlow( oldFlow ) }
				>
					Goto normal flow
				</Button>
				{ migrationUrl && (
					<Button
						className="nfd-onboarding-step--site-gen__fork__buttons__button"
						onClick={ () => window.open( migrationUrl, '_blank' ) }
					>
						Migrate an existing site
					</Button>
				) }
			</div>
		</CommonLayout>
	);
};

export default TheFork;
