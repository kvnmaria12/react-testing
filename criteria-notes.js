[{"content":"import { screen, render } from '@testing-library/react';\nimport { useState } from 'react';\n\nfunction DataForm() {\n  const [email, setEmail] = useState('asdf@asdf.com');\n\n  return (\n    <form>\n      <h3>Enter Data</h3>\n      <div data-testid='image-wrapper'>\n        <img alt='image' src='data.jpg'/>\n      </div>\n\n    <label htmlFor='email'>Email</label>\n    <input id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>\n\n  <label htmlFor='color'>Color</label>\n\n  <input id='color' placeholder='Red'/>\n\n  <button title=\"Click when ready to submit\">Submit</button>\n\n\n    </form>\n  );\n}\n\nrender(<DataForm />);","type":"code","id":"7wirx"},{"content":"test('selecting different elements', () => {\n  render(<DataForm />);\n\n  const elements = [\n    screen.getByRole('button'),\n    screen.getByLabelText('Email'),\n    screen.getByPlaceholderText('Red'),\n    screen.getByText('Enter Data'),\n    screen.getByDisplayValue('asdf@asdf.com'),\n    screen.getByAltText('image'),\n    screen.getByTitle('Click when ready to submit'),\n    screen.getByTestId('image-wrapper'),\n  ];\n\n  for (let element of elements) {\n    expect(element).toBeInTheDocument();\n  }\n});","type":"code","id":"unsca"}]