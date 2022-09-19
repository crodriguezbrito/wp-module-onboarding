import { useSelect } from '@wordpress/data';
import { BlockEditorProvider } from '@wordpress/block-editor';
import { parse } from '@wordpress/blocks';
import { useEffect, useState } from '@wordpress/element';

import AutoHeightBlockPreview from './auto';
import { useGlobalStylesOutput } from '../../../utils/global-styles/use-global-styles-output';
import { store as nfdOnboardingStore } from '../../../store';

/**
 * Renders themed WordPress block grammer.
 * [Note] Please do not remove any commented code, this will be used later to update our preview
 *
 * @param             root0
 * @param             root0.blockGrammer
 * @param             root0.viewportWidth
 * @param             root0.styling
 * @param             root0.previewSettings
 * @property {string} blockGrammer          WordPress block grammer.
 * @property {number} viewportWidth         Set viewport width for the AutoHeightBlockPreview component.
 * @property {string} styling               The type of styling to be applied (small, large, custom).
 */
const BlockPreview = ( {
	blockGrammer,
	viewportWidth = 1300,
	styling = 'large',
	previewSettings = false,
} ) => {
	const [ blocks, setBlocks ] = useState();
	const [ settings, setSettings ] = useState();

	const storedPreviewSettings = useSelect(
		( select ) => select( nfdOnboardingStore ).getPreviewSettings(),
		[]
	);

	useEffect( () => {
		if ( previewSettings ) {
			setSettings(
				useGlobalStylesOutput( previewSettings, storedPreviewSettings )
			);
		} else {
			setSettings( storedPreviewSettings );
		}

		setBlocks( parse( blockGrammer ) );
	}, [] );

	useEffect( () => {
		if ( ! previewSettings ) {
			setSettings( storedPreviewSettings );
		}
	}, [ storedPreviewSettings ] );

	return (
		<div className={ `live-preview__container-${ styling }` }>
			{ settings && (
				<BlockEditorProvider
					value={ blocks }
					settings={ settings.settings }
				>
					<AutoHeightBlockPreview
						viewportWidth={ viewportWidth }
						settings={ settings.settings }
					/>
				</BlockEditorProvider>
			) }
		</div>
	);
};

export default BlockPreview;
