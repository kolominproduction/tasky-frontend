import { render, screen } from '@testing-library/react';

import { TestComponent } from './TestComponent';

describe('Test', () => {
  test('Test render component', async () => {
    render(<TestComponent prop="Text" />);

    expect(screen.getByText('Test component!')).toBeInTheDocument();
  });
});
