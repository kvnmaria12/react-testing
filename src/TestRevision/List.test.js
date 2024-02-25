import { render, screen, within } from '@testing-library/react';
import List from './List';

function renderComponent() {
  const users = [
    { name: 'kvn', age: 23 },
    {
      name: 'daniel',
      age: 53,
    },

    {
      name: 'viji',
      age: 47,
    },
  ];

  render(<List users={users} />);

  return { users };
}

test('see whether all the list is getting rendered', () => {
  renderComponent();

  const heading = screen.getAllByRole('heading');

  expect(heading).toHaveLength(6);
});
