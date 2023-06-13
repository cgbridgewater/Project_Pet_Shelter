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
import './css/CardFlip.css';
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
import AdminViewAll from './components/AdminViewAll';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navibar/>
          <Routes>
            <Route path="/" default element={<Indexpage/>}/>
            {/* admin pages */}
            <Route path="/admin/viewall" element={<AdminViewAll/>}/>
            <Route path="/admin/new" element={<PetForm/>}/>
            <Route path="/admin/edit/:id" element={<Update/>}/>
            <Route path="/admin/:bad" element={<BadLink/>}/>
            {/* user pages */}
            <Route path="/petshelter" element={<PetShow/>}/>
            <Route path="/petshelter/aboutme" element={<AboutMe/>}/>
            <Route path="/petshelter/adopting"element={<Adopting/>}/>
            <Route path="/petshelter/sort/:type" element={<TypeSort/>}/>
            <Route path="/petshelter/liveFeed" element={<LiveFeed/>}/>
            <Route path="/petshelter/ourstory" element={<OurStory/>}/>
            <Route path="/petshelter/contactus" element={<ContactUs/>}/>
            <Route path="/petshelter/construction" element={<Construction/>}/>
            <Route path="/petshelter/adopt" element={<DontBuy/>}/>
            <Route path="/petshelter/wishlist" element={<WishList/>}/>
            <Route path="/petshelter/stories" element={<Stories/>}/>
            <Route path="/petshelter/careers" element={<Careers/>}/>
            <Route path="/petshelter/:id" element={<PetDetail/>}/>
            <Route path="/:bad" element={<BadLink/>}/>
            {/* trash ?? */}
            {/* <Route path="/petshelter/:bad"  element={<BadLink/>}/> */}
            {/* <Route path="/admin/edit/:bad" element={<BadLink/>}/> */}
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
