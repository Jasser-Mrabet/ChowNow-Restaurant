import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage'
import About  from './pages/About'
import Work from './pages/Work'
import Testimonials from './pages/Testimonial'
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <NavBar />

      <HomePage />

      <Work />

<About />

<Testimonials />

<Footer />
    </div>
  );
}

export default App;
