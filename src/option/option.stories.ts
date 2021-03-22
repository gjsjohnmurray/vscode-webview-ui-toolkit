import {VSCodeDesignSystemProvider} from '../design-system-provider/index';
import {createOption, OptionArgs} from './fixtures/createOption';
import {VSCodeOption} from './index';

// Prevent tree-shaking
VSCodeOption;
VSCodeDesignSystemProvider;

export default {
	title: 'Library/Option',
	argTypes: {
		label: {control: 'text'},
		isDisabled: {control: 'boolean'},
		isFocused: {control: 'boolean'},
	},
	parameters: {
		actions: {
			disabled: true,
		},
	},
};

const Template = ({...args}: OptionArgs) => {
	return createOption({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	label: 'Option Label',
	isDisabled: false,
	isFocused: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-option>Option Label</vscode-option>`,
		},
	},
};
