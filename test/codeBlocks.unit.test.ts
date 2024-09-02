import { ObsidianMarkdownPreprocessor } from 'src/obsidianMarkdownPreprocessor';
import { obsidianUtils as utilsInstance } from './__mocks__/mockObsidianUtils';
import { prepare } from './testUtils';

test('Code Block Syntax > Headers', () => {
	const input = `
\`\`\`
USER $USER_NAME:$USER_NAME
\`\`\`

The above does not show backticks
`;

	const { options, markdown } = prepare(input);
	const sut = new ObsidianMarkdownPreprocessor(utilsInstance);

	return expect(sut.process(markdown, options)).toMatchSnapshot();
});

test('Code Block Syntax > Headers', () => {
	const input = ` \`\`\`
USER $USER_NAME:$USER_NAME
\`\`\`

The above does show backticks
`;

	const { options, markdown } = prepare(input);
	const sut = new ObsidianMarkdownPreprocessor(utilsInstance);

	return expect(sut.process(markdown, options)).toMatchSnapshot();
});

test('Code Block Syntax > Headers', () => {
	const input = `\`\`\`
USER $USER_NAME:$USER_NAME
\`\`\`

The above does not show backticks
`;

	const { options, markdown } = prepare(input);
	const sut = new ObsidianMarkdownPreprocessor(utilsInstance);

	return expect(sut.process(markdown, options)).toMatchSnapshot();
});