import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Router, Switch } from 'react-router-dom';
import About from './pages/AboutPage/About';
import Contact from './pages/ContactPage/Contact';
import Error from './pages/ErrorPage/Error';
import Home from './pages/HomePage/Home';
import Projects from './pages/ProjectsPage/Projects';

function App() {
  	return (
		<div>
			<Navbar />
				<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/about'>
					<About />
				</Route>
				<Route path='/projects'>
					<Projects />
				</Route>
				<Route path='/contact'>
					<Contact />
				</Route>
				<Route path='/*'>
					<Error />
				</Route>
			</Switch>

		</div>


	)

}

export default App;
