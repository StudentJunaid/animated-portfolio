import './App.css'
import Contact from './Components/Contact/Contact';
import Cursor from './Components/Cursor/Cursor';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Parallax from './Components/Parallax/Parallax';
import Services from './Components/Services/Services';
import Sidebar from './Components/Sidebar/Sidebar';
import Portfolio from './Components/portfolio/Portfolio';

const App = () => {
  return <div>
    {/* <Cursor/> */}
    <section id='Homepage'>
      <Navbar/>
      <Sidebar/>
      <Hero/>
    </section>
    <section id='Services' ><Parallax type="services"/></section>
    <section><Services/></section>
    <section id='portfolio' ><Parallax type="potfolio"/></section>
    <Portfolio/>
    <section id='Contact'><Contact/></section>
  </div>;
};

export default App;
