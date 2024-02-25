import { render, screen } from '@testing-library/react';
import Props from './Props';

function renderComponent() {
  const nameList = [
    {
      listName: 'Kvn',
    },
    {
      listName: 'Viji',
    },
  ];
  render(<Props nameList={nameList} />);

  return { nameList };
}

describe('render a list of data', () => {
  test('show a list of data', () => {
    const { nameList } = renderComponent();

    for (let name of nameList) {
      const heading = screen.getByRole('heading', {
        name: new RegExp(name.listName),
      });

      expect(heading).toBeInTheDocument();
    }
  });
});
