import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Bar from '../Bar';

describe('A suite', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<Bar />).contains(<div className="foo">Bar</div>)).toBe(true);
  });

  it('should be selectable by class "foo"', function() {
    expect(shallow(<Bar />).is('.foo')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<Bar />).find('.foo').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<Bar />).text()).toEqual('Bar');
  });
});
