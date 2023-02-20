import './App.css';
import Header from './components/Header';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';
import data from './data/data.json';
function App() {
  return (
    <div className="App">
      <Header data={data}/>
      <div className='main'>
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  );
}

export default App;
