import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

function renderComponent() {
  // create a mock users
  const users = [
    { name: 'kvn', email: 'kvn@gmail.com' },
    {
      name: 'david',
      email: 'david@hotmail.com',
    },
  ];

  //Render the Component
  render(<UserList users={users} />);

  return users;
}

test('render one row per user', () => {
  // Render the Component
  renderComponent();

  //   find all the rows in the table
  //   screen.logTestingPlaygroundURL();
  //   const rows = screen.getAllByRole('row');
  // const rows = within(screen.getByTestId('users')).getAllByRole('row');

  // using query selector
  // const rows = container.querySelectorAll('tbody tr');

  // using data-testid
  const rows = within(screen.getByTestId('users')).getAllByRole('row');

  //   Assertion : correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test('render the email and name of each user', () => {
  const users = renderComponent();

  for (let user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
