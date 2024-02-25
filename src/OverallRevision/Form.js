import { useState } from 'react';

function Form({ onUserAdd }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const formHandler = (e) => {
    e.preventDefault();
    onUserAdd({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          type='text'
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='text'
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
