import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserForm from './UserForm';

test('it shows two inputs and a button', () => {
  //1. render the component
  render(<UserForm />);

  //2.Manipulate the component or find the element in it
  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  // Assertion - make sure the component is doing
  // what it's expected to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('it calls onUserAdd when the form is submitted', async () => {
  //   creating a mock function
  const mock = jest.fn();

  // Try to render the component
  render(<UserForm onUserAdd={mock} />);
  //Find two inputs
  //   const [nameInput, emailInput] = screen.getAllByRole('textbox');

  const emailInput = screen.getByRole('textbox', { name: /email/i });

  const nameInput = screen.getByRole('textbox', { name: /name/i });

  //Simulate typing in a name
  await userEvent.click(nameInput);
  await userEvent.keyboard('jesus');

  // Simulate typing in a email
  await userEvent.click(emailInput);
  await userEvent.keyboard('jesus@heaven.com');

  //   Find the button
  const button = screen.getByRole('button');

  // Simulate clicking the button
  await userEvent.click(button);

  //Assertion to make sure 'onUserAdd' gets called with email and name

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: 'jesus',
    email: 'jesus@heaven.com',
  });
});

test('it empties the two inputs when the form is submitted', async () => {
  render(<UserForm onUserAdd={() => {}} />);

  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });

  await userEvent.click(nameInput);
  await userEvent.keyboard('jesus');

  await userEvent.click(emailInput);
  await userEvent.keyboard('jesus@heaven.com');

  const button = screen.getByRole('button');

  await userEvent.click(button);

  expect(nameInput).toHaveValue('');
  expect(emailInput).toHaveValue('');
});
