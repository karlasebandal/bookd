import '../assets/styles/App.css'
import NavBar from './NavBar';
import Banner from './Banner';
import Footer from './Footer';

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App" class="flex flex-col">
      <NavBar />
      <Banner />
      
      {/* <Router>
        <Switch>
          <Route>
            <Banner />
          </Route>
        </Switch>
      </Router> */}

      <Footer />
    </div>
  );
}

export default App;
