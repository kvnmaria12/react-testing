import { screen, render, within } from '@testing-library/react';

import FormData from './FormData';

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

expect.extend({ toContainRole });

test('on render should display two buttons', () => {
  render(<FormData />);

  const form = screen.getByRole('form');

  expect(form).toContainRole('button', 2);
});

test('getBy when we find 0 elements', async () => {
  expect(() => screen.getByRole('listitem')).toThrow();

  expect(screen.queryByRole('listitem')).toEqual(null);

  let errorThrow = false;

  try {
    await screen.findByRole('listitem');
  } catch (error) {
    errorThrow = true;
  }

  expect(errorThrow).toEqual(true);
});
