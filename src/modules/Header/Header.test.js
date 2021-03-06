import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

// import { render } from '../../utils/jest/jestUtils';
import Header from './Header';

describe('Header Tests', () => {
  it('should render without errors with default props', async () => {
      const { container } = render(<Header />);

      const results = await axe(container);
      expect(results).toHaveNoViolations();
  });
});