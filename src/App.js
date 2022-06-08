
import { About, Footer, Header, Skils, Testimonial, Work } from './container'
import { Navbar } from './components'

import './App.scss';

function App() {
  return (
    <div className='app'>
		<Navbar/>
		<Header />
		<About />
		<Work />
		<Skils />
		<Testimonial />
		<Footer />
    </div>
  );
}

export default App;
