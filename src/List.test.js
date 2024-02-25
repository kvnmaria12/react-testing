import { render, screen, within } from '@testing-library/react';
import List from './List';

test('should render eight headings ', () => {
  render(<List />);

  const headings = screen.getAllByRole('heading');

  expect(headings).toHaveLength(8);
});
