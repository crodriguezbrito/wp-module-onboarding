import { Icon, chevronDown } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

import ButtonDark from '../../../../components/Button/ButtonDark';
import {ReactComponent as Wishlist} from '../../../../static/icons/site-features/wishlist.svg'
import { Button, Dropdown } from '@wordpress/components';
import { useState } from '@wordpress/element';

const onTextChange = ( e ) => {
	e.preventDefault();
	setCustomerInput( e.target.value );
};


const TextInput = ( { customerInput, isDisabled } ) => {
	return (
		<input
			className='nfd-onboarding-header__center-input'
			disabled = { isDisabled }
			type="text"
			value = { customerInput }
			onChange={ ( e ) => onTextChange( e ) }
		/>
	);
};

/**
 * Version step Navigation button.
 *
 * @return {WPComponent} VersionButton Component
 */
const VersionDropDown = ( ) => {
	return (
		<div className='nfd-onboarding-header__center-dropdown-item'>
			<Button>Rename</Button>
			<Button>View All</Button>
		</div>
	);
};

/**
 * Version step Navigation button.
 *
 * @return {WPComponent} VersionButton Component
 */
const VersionButton = ( {isInputDisabled} ) => {
	return (
		<Dropdown
			popoverProps={ { placement: 'bottom-start' } }
			renderToggle={ ( { isOpen, onToggle } ) => (
				<ButtonDark
					onClick={ onToggle }
					aria-expanded={ isOpen }
				>
					<Wishlist />
					{/* { __( 'Version 1', 'wp-module-onboarding' ) } */}
					<TextInput customerInput={  __( 'Version 1', 'wp-module-onboarding' ) } disabled={isInputDisabled} />
					<Icon icon={ chevronDown } />
				</ButtonDark>
			) }
			renderContent={ () => <VersionDropDown />
			}
    	/>
	);
};

/**
 * Centre Step buttons presented in Header.
 *
 * @return {WPComponent} StepNavigation Component
 */
const StepNavigationCenter = () => {
	const [isInputDisabled, setIsInputDisabled] = useState(true);
	
	return (
		<div className="nfd-onboarding-header__step-navigation">
			<VersionButton isInputDisabled={isInputDisabled}/>
		</div>
	);
};

export default StepNavigationCenter;