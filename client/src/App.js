import './css/App.css';
import './css/Buttons.css';
import './css/Forms.css';
import './css/Containers.css';
import './css/Footer.css';
import './css/contactUs.css';
import './css/ourStory.css';
import './css/dontbuy.css';
import './css/wishList.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import BadLink from './components/extras/BadLink';
import Indexpage from './components/Index';
import Update from './components/Update';
import Navibar from './components/Navibar';
import LiveFeed from './components/extras/LiveFeed';
import PetDetail from './components/PetDetail';
import Footer from './components/extras/Footer';
import Construction from './components/extras/Construction';
import DontBuy from './components/extras/DontBuy';
import Careers from './components/extras/Careers';
import TypeSort from './components/TypeSort';
import PetShow from './components/PetShow';
import PetForm from './components/PetForm';
import ContactUs from './components/extras/ContactUs';
import OurStory from './components/extras/ourStory'
import WishList from './components/extras/WishList';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navibar/>
          <Routes>
            <Route element={<Indexpage/>} path="/" default/>
            <Route element={<PetShow/>} path="/petshelter" />
            <Route element={<PetForm/>} path="/petshelter/new" />
            <Route element={<PetDetail/>} path="/petshelter/:id" />
            <Route element={<Update/>} path="/petshelter/edit/:id"/>
            <Route element={<TypeSort/>} path="/petshelter/sort/:type" />
            <Route element={<LiveFeed/>} path="/petshelter/liveFeed" />
            <Route element={<OurStory/>} path="/petshelter/ourstory"/>
            <Route element={<ContactUs/>} path="/petshelter/contactus"/>
            <Route element={<Construction/>} path="/petshelter/construction"/>
            <Route element={<DontBuy/>} path="/petshelter/adopt"/>
            <Route element={<WishList/>} path="/petshelter/wishlist"/>
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
