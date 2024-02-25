import { useState } from 'react';

function FormT({ onUserAdd }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function submitHandler(e) {
    e.preventDefault();
    onUserAdd({ name, email });
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FormT;
