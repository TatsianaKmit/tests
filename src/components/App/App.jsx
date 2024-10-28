import { useState, useEffect } from 'react';
import List from '../List';
import Search from '../Search/Search';
import './App.css';

const data = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Vue',
  'Angular',
  'NodeJS',
];

function App() {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState(data); // Fixed the typo here

  useEffect(() => {
    setItems(data.filter(el => el.toLowerCase().includes(search.toLowerCase()))); // Fixed the missing closing parenthesis
  }, [search]);

  return (
    <div className="App">
      <div className="App-header">
        <Search value={search} onChange={(e) => setSearch(e.target.value)}>
          Find course:
        </Search>
        <List items={items} />
      </div>
    </div>
  );
}

export default App;