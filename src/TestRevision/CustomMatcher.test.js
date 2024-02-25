import { render, screen, within } from '@testing-library/react';
import CustomMatcher from './CustomMatcher';

function toContainRole(container, role, quantity = 1) {
  const elements = within(container).getAllByRole(role);

  if (elements.length == quantity) {
    return {
      pass: true,
    };
  }

  return {
    pass: false,
    message: () =>
      `Expected to find ${quantity} ${role} elements. Found ${elements.length} instead`,
  };
}

expect.extend({
  toContainRole,
});

test('to get the form elemente from custom matcher component', () => {
  render(<CustomMatcher />);

  const form = screen.getByRole('form', { name: /form/i });

  expect(form).toContainRole('button', 2);
});
