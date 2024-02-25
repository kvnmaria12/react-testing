import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormR from './FormR';

test('show to inputs and one button', () => {
  render(<FormR />);

  // const inputs = screen.getAllByRole('textbox');

  // expect(inputs).toHaveLength(2);

  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();

  const button = screen.getByRole('button');

  expect(button).toBeInTheDocument();
});

test('check for user events', async () => {
  const mock = jest.fn();

  render(<FormR onSubmit={mock} />);

  const nameInput = screen.getByRole('textbox', {
    name: /name/i,
  });

  const emailInput = screen.getByRole('textbox', {
    name: /email/i,
  });

  const button = screen.getByRole('button', {
    name: /submit/i,
  });

  await userEvent.click(nameInput);
  await userEvent.keyboard('jesus');

  await userEvent.click(emailInput);
  await userEvent.keyboard('jesus@heaven.com');

  await userEvent.click(button);

  // expect(nameInput).toHaveValue('');
  // expect(emailInput).toHaveValue('');

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenLastCalledWith({
    name: 'jesus',
    email: 'jesus@heaven.com',
  });
});
