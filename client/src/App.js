import './css/App.css';
import './css/Buttons.css';
import './css/Forms.css';
import './css/Containers.css';
import './css/Footer.css';
import './css/contactUs.css';
import './css/ourStory.css';
import './css/dontbuy.css';
import './css/wishList.css';
import './css/Counter.css';
import './css/AdoptForm.css';
import './css/Adopting.css';
import './css/Donate.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import BadLink from './components/BadLink';
import Indexpage from './components/Index';
import Update from './components/Update';
import Navibar from './components/Navibar';
import LiveFeed from './components/LiveFeed';
import PetDetail from './components/PetDetail';
import Footer from './components/Footer';
import Construction from './components/Construction';
import DontBuy from './components/DontBuy';
import Careers from './components/Careers';
import TypeSort from './components/TypeSort';
import PetShow from './components/PetShow';
import PetForm from './components/PetForm';
import ContactUs from './components/ContactUs';
import OurStory from './components/ourStory'
import WishList from './components/WishList';
import Stories from './components/Stories';
import Adopting from './components/Adopting';
import AboutMe from './components/AboutMe';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navibar/>
          <Routes>
            <Route element={<Indexpage/>} path="/" default/>
            <Route element={<AboutMe/>} path="/petshelter/aboutme"/>
            <Route element={<PetShow/>} path="/petshelter" />
            <Route element={<PetForm/>} path="/petshelter/new" />
            <Route element={<Adopting/>} path="/petshelter/adopting" />
            <Route element={<PetDetail/>} path="/petshelter/:id" />
            <Route element={<Update/>} path="/petshelter/edit/:id"/>
            <Route element={<TypeSort/>} path="/petshelter/sort/:type" />
            <Route element={<LiveFeed/>} path="/petshelter/liveFeed" />
            <Route element={<OurStory/>} path="/petshelter/ourstory"/>
            <Route element={<ContactUs/>} path="/petshelter/contactus"/>
            <Route element={<Construction/>} path="/petshelter/construction"/>
            <Route element={<DontBuy/>} path="/petshelter/adopt"/>
            <Route element={<WishList/>} path="/petshelter/wishlist"/>
            <Route element={<Stories/>} path="/petshelter/stories"/>
            <Route element={<Careers/>} path="/petshelter/careers"/>
            <Route element={<BadLink/>} path="/petshelter/:bad" />
            <Route element={<BadLink/>} path="/petshelter/edit/:bad" />
            <Route element={<BadLink/>} path="/:bad" />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
