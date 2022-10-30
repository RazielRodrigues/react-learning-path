import logo from './logo.svg';
import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <MyForm user={{ name: 'raziel', email: 'razielx3@live.com', bio: 'TA LIGADO', role: 'night' }} />
    </div>
  );
}

export default App;
