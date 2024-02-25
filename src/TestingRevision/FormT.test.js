import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormT from './FormT';

function renderComponent() {
  render(<FormT />);
}

describe('to check for input elements', () => {
  test('check for name and email input', () => {
    renderComponent();

    const nameInput = screen.getByRole('textbox', {
      name: /name/i,
    });

    const emailInput = screen.getByRole('textbox', {
      name: /email/i,
    });

    expect(nameInput).toBeInTheDocument();

    expect(emailInput).toBeInTheDocument();
  });
});

describe('to check for a button', () => {
  test('to check for a button element', () => {
    render(<FormT />);

    const button = screen.getByRole('button', {
      name: /submit/i,
    });

    expect(button).toBeInTheDocument();
  });
});

describe('check for element which is not there', () => {
  test('check for an element which is not there in the DOM', () => {
    render(<FormT />);

    const linkButton = screen.queryByRole('link', {
      name: /click/i,
    });

    expect(linkButton).not.toBeInTheDocument();
  });
});

describe('check for two input elements', () => {
  test('check for two input textboxes', () => {
    render(<FormT />);

    const inputs = screen.getAllByRole('textbox');

    expect(inputs).toHaveLength(2);
  });
});

describe.only('check for the mock function', () => {
  test('check for the mock function work', async () => {
    const mock = jest.fn();

    render(<FormT onUserAdd={mock} />);

    const nameInput = screen.getByRole('textbox', {
      name: /name/i,
    });

    const emailInput = screen.getByRole('textbox', {
      name: /email/i,
    });

    await userEvent.click(nameInput);
    await userEvent.keyboard('jesus');

    await userEvent.clear(emailInput);
    await userEvent.keyboard('jesus@heaven.com');

    const button = screen.getByRole('button', {
      name: /submit/i,
    });

    await userEvent.click(button);

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({
      name: 'jesus',
      email: 'jesus@heaven.com',
    });
  });
});
