import * as React from 'react';
import { shallow } from 'enzyme';
import { Line } from './line';

const defaultProps = {
  x1: 1, y1: 2, x2: 3, y2: 4,
};

describe('Line', () => {
  it('should render line', () => {
    const { d } = shallow((
      <Line {...defaultProps} />
    )).find('path').props();

    expect(d).toBe('M 1 2 L 3 4');
  });

  it('should pass the className prop to the root element', () => {
    const tree = shallow(<Line {...defaultProps} className="custom-class" />);

    expect(tree.is('.custom-class.dx-c-bs4-stroke-current-color.dx-c-bs4-crisp-edges.dx-c-bs4-axis-opacity'))
      .toBeTruthy();
  });

  it('should pass the rest property to the root element', () => {
    const tree = shallow(<Line {...defaultProps} customProperty />);
    const { customProperty } = tree.find('path').props();
    expect(customProperty).toBeTruthy();
  });
});
