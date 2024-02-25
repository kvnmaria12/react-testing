import { render, screen, within } from '@testing-library/react';
import Buttons from './Buttons';

test('to show a button', () => {
  render(<Buttons />);

  const button1 = screen.getByRole('button', { name: /button1/i });
  const button2 = screen.getByRole('button', { name: /button2/i });

  expect(button1).toBeInTheDocument();
  expect(button2).toBeInTheDocument();
});

test('no link and no button to be shown on screen', () => {
  render(<Buttons />);

  const noLink = screen.queryByRole('link');

  const noHeading = screen.queryByRole('heading');

  expect(noLink).not.toBeInTheDocument();
  expect(noHeading).not.toBeInTheDocument();
});

test('getBy, querBy and findBy finding 0 element', async () => {
  render(<Buttons />);

  expect(() => screen.getByRole('link')).toThrow();

  expect(screen.queryByRole('link')).toEqual(null);

  let errorThrown = false;

  try {
    await screen.findByRole('link');
  } catch (error) {
    errorThrown = true;
  }

  expect(errorThrown).toEqual(true);
});
