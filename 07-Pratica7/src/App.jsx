import './App.css';
import List from './components/List/List';

function App() {

  const users = [
    {
      id:0,
      name: 'Siri'
    },
    {
      id:1,
      name: 'Cortana'
    },
    {
      id:2,
      name: 'Copilot'
    },
    {
      id:3,
      name: 'Alexa'
    },
    {
      id:4,
      name: 'Google Assistente'
    },
  ]

  return (
    <div>
      <List items={users}/>
    </div>
  );
}

export default App;
