import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/shared/navbar';
import Shiba from './components/shiba';

function App() {
  return (
    <>
      <Navbar/>
      <main className='shiba-container'>
        <Shiba/>
      </main>
    </>
  );
}

export default App;
