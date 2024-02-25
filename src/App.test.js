import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('can recieve a new user and show it on a list', async () => {
  render(<App />);

  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });

  await userEvent.click(nameInput);
  await userEvent.keyboard('jesus');

  await userEvent.click(emailInput);
  await userEvent.keyboard('jesus@heaven.com');

  const button = screen.getByRole('button');

  await userEvent.click(button);

  const name = screen.getByRole('cell', { name: 'jesus' });
  const email = screen.getByRole('cell', { name: 'jesus@heaven.com' });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
