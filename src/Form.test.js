import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

test('render two inputs and a button', () => {
  // render the component

  render(<Form />);

  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('form should not be in the document', () => {
  const form = screen.queryByRole('form');

  expect(form).not.toBeInTheDocument();
});

test('it calls addFormData when the form is submitted', async () => {
  // const mock = jest.fn();
  // render(<Form addFormData={mock} />);
  // const nameInput = screen.getByRole('textbox', { name: /name/i });
  // const emailInput = screen.getByRole('textbox', { name: /email/i });
  // await userEvent.click(nameInput);
  // await userEvent.keyboard('jesus');
  // await userEvent.click(emailInput);
  // await userEvent.keyboard('jesus@heaven.com');
  // const button = screen.getByRole('button');
  // await userEvent.click(button);
  // expect(mock).toHaveBeenCalled();
  // expect(mock).toHaveBeenCalledWith({
  //   email: 'jesus@heaven.com',
  //   name: 'jesus',
  // });

  const mock = jest.fn();

  render(<Form addFormData={mock} />);

  const emailInput = screen.getByRole('textbox', { name: /email/i });

  const nameInput = screen.getByRole('textbox', { name: /name/i });

  await userEvent.click(nameInput);
  await userEvent.keyboard('jesus');

  await userEvent.click(emailInput);
  await userEvent.keyboard('jesus@heaven.com');

  const button = screen.getByRole('button');

  await userEvent.click(button);

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    email: 'jesus@heaven.com',
    name: 'jesus',
  });
});

test('when the form is submitted the value should empty', async () => {
  render(<Form addFormData={() => {}} />);

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
