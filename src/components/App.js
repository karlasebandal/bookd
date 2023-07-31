import '../assets/styles/App.css'
import NavBar from './NavBar';
import Banner from './Banner';
import Footer from './Footer';

function App() {
  return (
    <div className="App" class="flex flex-col">
      <NavBar />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
