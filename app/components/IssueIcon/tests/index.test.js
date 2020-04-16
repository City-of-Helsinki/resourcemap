import React from 'react';
import { render } from 'tests/utils';

import IssueIcon from '../index';

describe('<IssueIcon />', () => {
  it('should render a SVG', () => {
    const { container } = render(<IssueIcon />);
    expect(container.querySelector('svg')).not.toBeNull();
  });
});
