import { useState } from 'react';

export default function Create() {
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('Heartwarming');

  const submit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/api/requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, tag })
    });
    alert('Request created! Open /requests to see it.');
    setTitle('');
  };

  return (
    <main style={{padding: 24}}>
      <h1>Post a request</h1>
      <form onSubmit={submit}>
        <label>Title<br/>
          <input value={title} onChange={e=>setTitle(e.target.value)} required style={{width:'100%', padding:8}}/>
        </label>
        <br/><br/>
        <label>Tag<br/>
          <select value={tag} onChange={e=>setTag(e.target.value)}>
            <option>Urgent</option>
            <option>Heartwarming</option>
            <option>Rare find</option>
          </select>
        </label>
        <br/><br/>
        <button type="submit">Create</button>
      </form>
    </main>
  );
}
