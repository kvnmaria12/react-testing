import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

function renderComponent() {
  const mock = jest.fn();
  render(<Form onUserAdd={mock} />);

  return { mock };
}

describe('two input and button visibe', () => {
  test('two input button', () => {
    renderComponent();

    const inputs = screen.getAllByRole('textbox');

    expect(inputs).toHaveLength(2);
  });

  test('show one button', () => {
    renderComponent();
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  test('check the button click', async () => {
    renderComponent();
    const button = screen.getByRole('button');
    await userEvent.click(button);
  });

  test.only('check for keyboard event', async () => {
    const { mock } = renderComponent();

    const nameInput = screen.getByRole('textbox', {
      name: /name/i,
    });

    const emailInput = screen.getByRole('textbox', {
      name: /email/i,
    });

    await userEvent.click(nameInput);
    await userEvent.keyboard('jesus');

    await userEvent.click(emailInput);
    await userEvent.keyboard('jesus@heaven.com');

    const button = screen.getByRole('button');

    await userEvent.click(button);

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({
      name: 'jesus',
      email: 'jesus@heaven.com',
    });
  });
});

describe.only('check for not visible elements', () => {
  test('check for not visible element', () => {
    renderComponent();

    const link = screen.queryByRole('link');

    expect(link).not.toBeInTheDocument();
  });
});
