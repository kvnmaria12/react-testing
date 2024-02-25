import { render, screen } from '@testing-library/react';
import TextContent from './TextContent';

test('render a name', () => {
  render(<TextContent name='Kevin' />);

  const divElement = screen.getByTestId('container');

  expect(divElement).toHaveTextContent('Name is Kevin');
});
