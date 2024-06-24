
import './App.css';
import BgAnimation from './componat/BgAnimation';
import Blank from './componat/Blank';
import BottomGrid from './componat/BottomGrid';
import Hero from './componat/Hero';
import NavBar from './componat/NavBar';


function App() {
  return (
    <>
    <div className='relative h-screen overflow-hidden ' >

      <BgAnimation />
     <NavBar />
     <BottomGrid />
     <Hero />

    </div>
    <Blank />
    </>
  );
}

export default App;
