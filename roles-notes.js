[
  {
    content:
      "import {render, screen}  from '@testing-library/react';\r\n\r\nfunction RoleExample(){\r\n  return <div>\r\n  <a href='/'>Link</a>\r\n  <button>Button</button>\r\n  <footer>Content Info</footer>\r\n  <h1>Heading</h1>\r\n  <header>Banner</header>\r\n  <img alt='description'/> img\r\n  <input type='checkbox'/> CheckBox\r\n  <input type='number'/> Number\r\n  <input type='radio'/> Radio\r\n  <input type='text'/> TextBox\r\n  <li>List Item</li>\r\n  <ul>List Group</ul>\r\n  </div>\r\n}\r\n\r\n\r\nrender(<RoleExample/>);",
    type: 'code',
    id: 'l0sl8',
  },
  {
    content:
      "test('can find elements', () => {\r\n  render(<RoleExample/>);\r\n\r\n\r\nconst roles = [\r\n  'link',\r\n  'button',\r\n  'contentinfo',\r\n  'heading',\r\n  'banner',\r\n  'img',\r\n  'checkbox',\r\n  'spinbutton',\r\n  'radio',\r\n  'textbox',\r\n  'listitem',\r\n  'list'\r\n]\r\n\r\n\r\nfor(let role of roles){\r\n  const element = screen.getByRole(role);\r\n\r\n  expect(element).toBeInTheDocument();\r\n\r\n}\r\n\r\n})",
    type: 'code',
    id: 'agjis',
  },
  {
    content:
      "function AccessibleName() {\n\nconst style = {\n  padding:'10px 12px',\n  backgroundColor:'crimson',\n  color:'white',\n  border:'none',\n  borderRadius:'10px',\n  margin:'10px'\n}\n\n  return (\n    <div>\n      <button style={style}>Submit</button>\n      <button style={style}>Cancel</button>\n    </div>\n  );\n}\n\nrender(<AccessibleName />);",
    type: 'code',
    id: 'lpsyf',
  },
  {
    content:
      "test('can select by accessbile name', () => {\r\n  render(<AccessibleName/>);\r\n\r\n\r\n  const submitButton = screen.getByRole('button', {name:/submit/i});\r\n\r\n  const cancelButton = screen.getByRole('button', {name: /cancel/i});\r\n\r\n  expect(submitButton).toBeInTheDocument();\r\n  expect(cancelButton).toBeInTheDocument();\r\n})",
    type: 'code',
    id: '2cnsi',
  },
  {
    content:
      "function MoreNames() {\n  return (\n    <div>\n      <label htmlFor='email'>Email</label>\n      <input id='email' />\n      <label htmlFor='name'>Name</label>\n      <input id='name'/>\n    </div>\n  );\n}\n\n\n\nrender(<MoreNames/>)",
    type: 'code',
    id: 'to5gt',
  },
  {
    content:
      "test('shows a email and search input', () => {\n  render(<MoreNames />);\n\n  const emailInput = screen.getByRole('textbox', { name: /email/i });\n\n  const nameInput = screen.getByRole('textbox', { name: /name/i });\n});",
    type: 'code',
    id: '8l54o',
  },
  {
    content:
      "function IconButtons() {\n  return (\n    <div>\n      <button aria-label='sign in'>\n        <svg />\n      </button>\n      <button aria-label='sign out'>\n        <svg />\n      </button>\n    </div>\n  );\n}\n\nrender(<IconButtons/>)",
    type: 'code',
    id: '2vxlb',
  },
  {
    content:
      "test('find elements based on label', () => {\r\n  render(<IconButtons/>);\r\n\r\n\r\n  const signInButton = screen.getByRole('button', {name:/sign in/i});\r\n\r\n\r\n  const signOutButton= screen.getByRole('button', {name: /sign out/i})\r\n\r\n\r\n  expect(signInButton).toBeInTheDocument();\r\n\r\n  expect(signOutButton).toBeInTheDocument();\r\n\r\n\r\n\r\n\r\n})",
    type: 'code',
    id: '0fvzu',
  },
  {
    content:
      'function Inputs() {\n  return (\n    <div>\n      <label htmlFor="email">Email</label>\n      <input id="email" />\n      <label htmlFor="name">Name</label>\n      <input id="name" />\n    </div>\n  );\n}\n\nrender(<Inputs />);',
    type: 'code',
    id: 'odj67',
  },
  {
    content:
      "test('two input fields are there', ()=> {\r\n  render(<Inputs/>);\r\n\r\n  const inputs = screen.queryAllByRole('textbox');\r\n  const emailInput = screen.findByRole('textbox', {name : /email/i});\r\n  const nameInput = screen.findByRole('textbox', {name : /name/i});\r\n\r\n})",
    type: 'code',
    id: 'b9lbr',
  },
  {
    content:
      "import { render, screen } from '@testing-library/react';\n\nfunction ColorList() {\n  return (\n    <ul>\n      <li>Red</li> \n      <li>Blue</li>\n      <li>Green</li>\n    </ul>\n  );\n}\n\nrender(<ColorList />);",
    type: 'code',
    id: 'g9a9u',
  },
  {
    content:
      "test('getBy, queryBy, findBy finding 0 elements', async () => {\n  render(<ColorList />);\n\n  expect(() => screen.getByRole('textbox')).toThrow();\n\n  expect(screen.queryByRole('textbox')).toEqual(null);\n\n  let errorThrown = false;\n  try {\n    await screen.findByRole('textbox');\n  } catch (error) {\n    errorThrown = true;\n  }\n\n  expect(errorThrown).toEqual(true);\n});",
    type: 'code',
    id: 'ckbha',
  },
  {
    content:
      "test('getBy, queryBy, findBy when finding 1 elements', async () => {\r\n\r\n  render(<ColorList/>);\r\n\r\n  expect(screen.getByRole('list')).toBeInTheDocument();\r\n\r\n  expect(screen.queryByRole('list')).toBeInTheDocument();\r\n\r\n  expect(await screen.findByRole('list')).toBeInTheDocument();\r\n\r\n\r\n})",
    type: 'code',
    id: 'zyaiq',
  },
  {
    content:
      "test('getBy, queryBy, findBy finding > 1 elements',  async () => {\r\n  \r\n  render(<ColorList/>);\r\n\r\n\r\n  expect(() => screen.getByRole('listitem')).toThrow();\r\n\r\n  expect(() => screen.querByRole('listitem')).toThrow();\r\n \r\n\r\n  let errorThrown = false;\r\n\r\n  try{\r\n    await screen.findByRole('listitem')\r\n  }catch(err){\r\n    errorThrown = true;\r\n  }\r\n\r\n  expect(errorThrown).isEqual(true);\r\n\r\n\r\n\r\n\r\n\r\n\r\n})",
    type: 'code',
    id: '5dj76',
  },
  {
    content:
      "test('getAllBy, queryAllBy, findAllBy', async() => {\r\n\r\n  render(<ColorList/>)\r\n\r\n\r\n  expect(screen.getAllByRole('listitem')).toHaveLength(3);\r\n\r\n  expect(screen.queryAllByRole('listitem')).toHaveLength(3);\r\n\r\n  expect(await screen.findAllByRole('listitem')).toHaveLength(3);\r\n\r\n\r\n\r\n})",
    type: 'code',
    id: 'gyg5u',
  },
  {
    content:
      "test('favour getBy when providing an element does exists', () => {\r\n  render(<ColorList/>);\r\n\r\n  const element = screen.getByRole('list');\r\n\r\n  expect(element).toBeInTheDocument();\r\n\r\n})",
    type: 'code',
    id: 'mrbzn',
  },
  {
    content:
      "test('favour querBy when providing an element does not exists', () => {\n  render(<ColorList />);\n\n  const element = screen.queryByRole('textbox');\n\n  expect(element).not.toBeInTheDocument();\n});",
    type: 'code',
    id: 'bt261',
  },
  {
    content:
      "import { useState, useEffect } from 'react';\n\nfunction fakeFetchColors() {\n  return Promise.resolve(['red', 'green', 'blue']);\n}\n\nfunction LoadableColorList() {\n  const [colors, setColors] = useState([]);\n\n  useEffect(() => {\n    fakeFetchColors().then((c) => setColors(c));\n  }, []);\n\n  const renderedColors = colors.map((color) => {\n    return <li key={color}>{color}</li>;\n  });\n\n  return <ul>{renderedColors}</ul>;\n}\n\nrender(<LoadableColorList />);",
    type: 'code',
    id: 'fb7nu',
  },
  {
    content:
      'test(\'favour findBy or findAllBy when data fetching\', async () => {\r\n\r\n\r\n  render(<LoadableColorList/>)\r\n\r\n\r\n  const elements = await screen.findAllByRole("listitem");\r\n\r\n  expect(elements).toHaveLength(3);\r\n\r\n\r\n\r\n})',
    type: 'code',
    id: 't3pi1',
  },
];
