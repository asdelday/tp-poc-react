import React from 'react';
import expect from 'expect';
import {createRenderer} from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import Navigation from '../Navigation.jsx';

describe('Navigation', () => {
  it('render works', () => {
    let renderer = createRenderer();
    renderer.render(<Navigation title="Heroes" items={ ['item1', 'item2', 'item3'] } />);
    let actualElement = renderer.getRenderOutput();
    let expectedElement = (
      <nav className="Navigation">
        <h1 className="Navigation-title">HEROES</h1>
      </nav>
    );
    expect(actualElement).toEqualJSX(expectedElement);
  });
});
