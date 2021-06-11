import {ButtonAppearance, VSCodeButton} from '../index';
import {
	createCodiconIcon,
	focusObserver,
} from '../../utilities/storybook/index';

export type ButtonArgs = {
	label: string;
	appearance?: ButtonAppearance;
	isDisabled: boolean;
	isAutoFocused: boolean;
	startIcon: boolean;
	endIcon: boolean;
	iconOnly: boolean;
	onClick: any;
};

export function createButton({
	label,
	appearance,
	isDisabled,
	isAutoFocused,
	startIcon,
	endIcon,
	iconOnly,
	onClick,
}: ButtonArgs) {
	const button = new VSCodeButton();

	if (label && !iconOnly) {
		button.textContent = label;
	}
	if (appearance) {
		button.setAttribute('appearance', appearance.toLowerCase());
	}
	if (isDisabled) {
		button.setAttribute('disabled', '');
	}
	if (isAutoFocused) {
		button.setAttribute('autofocus', '');
		// Focus observer will force focus if button focus is lost after page load
		focusObserver(button);
	}
	if (startIcon) {
		const start = createCodiconIcon({
			iconName: 'git-merge',
			slotName: 'start',
		});
		button.appendChild(start);
	}
	if (endIcon) {
		const end = createCodiconIcon({
			iconName: 'chevron-right',
			slotName: 'end',
		});
		button.appendChild(end);
	}
	if (iconOnly) {
		const icon = createCodiconIcon({iconName: 'check'});
		button.appendChild(icon);
	}
	button.addEventListener('click', onClick);

	return button;
}