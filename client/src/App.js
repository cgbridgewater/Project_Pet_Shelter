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
import './css/EventBanner.css';
import './css/PetCards.css';
import './css/Login.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import BadLink from './components/BadLink';
import Indexpage from './components/Index';
import Navibar from './components/Navibar';
import LiveFeed from './components/LiveFeed';
import PetDetail from './components/PetDetail';
import Footer from './components/Footer';
import Construction from './components/Construction';
import DontBuy from './components/DontBuy';
import Careers from './components/Careers';
import TypeSort from './components/TypeSort';
import PetShow from './components/PetShow';
import ContactUs from './components/ContactUs';
import WishList from './components/WishList';
import Stories from './components/Stories';
import Adopting from './components/Adopting';
import AboutMe from './components/AboutMe';
import AdminPetForm from './components/AdminPetForm';
import AdminViewAll from './components/AdminViewAll';
import AdminUpdatePet from './components/AdminUpdatePet';
import AdminEventForm from './components/AdminEventForm';
import EventsViewAll from './components/EventsViewAll';
import AdminUpdateEvent from './components/AdminUpdateEvent';
import AdoptInfo from './components/AdminAdoptInfo';
import OurStory from './components/OurStory';
import Login from './components/AdminLogin';
import Register from './components/AdminRegister';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navibar/>
          <Routes>
            {/* Landing */}
            <Route path="/" default element={<Indexpage/>}/>
            {/* admin routes */}
            <Route path="/admin/signin" element={<Login/>}/>
            <Route path="/admin/register" element={<Register/>}/>
            <Route path="/admin/viewall" element={<AdminViewAll/>}/>
            <Route path="/admin/new/pet" element={<AdminPetForm/>}/>
            <Route path="/admin/new/event" element={<AdminEventForm/>}/>
            <Route path="/admin/edit/event/:id" element={<AdminUpdateEvent/>}/>
            <Route path="/admin/edit/pet/:id" element={<AdminUpdatePet/>}/>
            <Route path="/admin/adopt/:id" element={<AdoptInfo/>}/>
            <Route path="/admin/:bad" element={<BadLink/>}/>
            {/* user routes */}
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
            <Route path="/petshelter/events" element={<EventsViewAll/>}/>
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
