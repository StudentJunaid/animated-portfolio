import './App.css'
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';

const App = () => {
  return <div>
    <section id='Homepage'>
      <Navbar/>
      <Sidebar/>
      <Hero/>
    </section>
    <section id='Service'>Parallex</section>
    <section>Service</section>
    <section id='portfolio'>Perallex</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id='Contact'>Contact</section>
  </div>;
};

export default App;
