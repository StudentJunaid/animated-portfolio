import './App.css'
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Parallax from './Components/Parallax/Parallax';
import Sidebar from './Components/Sidebar/Sidebar';

const App = () => {
  return <div>
    <section id='Homepage'>
      <Navbar/>
      <Sidebar/>
      <Hero/>
    </section>
    <section id='Services' ><Parallax type="services"/></section>
    <section>Service</section>
    <section id='portfolio' ><Parallax type="potfolio"/></section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id='Contact'>Contact</section>
  </div>;
};

export default App;
