import { render, screen } from '@testing-library/react';
import DataFetching from './DataFetching';

test('favour findBy or findAllBy when data fetching', async () => {
  render(<DataFetching />);

  const listItems = await screen.findAllByRole('listitem');

  expect(listItems).toHaveLength(3);
});
