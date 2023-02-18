import './App.css';
import Header from './components/Header';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  );
}

export default App;
