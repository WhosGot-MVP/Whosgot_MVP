import { useEffect, useState } from 'react';

export default function Requests() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/requests')
      .then(r => r.json())
      .then(setItems)
      .catch(() => setItems([]));
  }, []);

  return (
    <main style={{padding: 24}}>
      <h1>All requests</h1>
      <ul>
        {items.map(x => <li key={x.id}>{x.title} — <em>{x.tag}</em></li>)}
      </ul>
    </main>
  );
}
