import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import axios from 'axios';
import moxios from 'moxios';

import NewsWidget from './index';

describe(NewsWidget, () => {
	configure({ adapter: new Adapter() });

	beforeEach(() => {
		moxios.install(axios);
	});

	afterEach(() => {
		moxios.uninstall(axios);
	});

	it('should render the component correctly and match snapshot', () => {
		const component = renderer.create(<NewsWidget />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
