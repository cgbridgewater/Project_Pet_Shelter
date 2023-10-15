import {BadLink,Indexpage,Navibar, LiveFeed, PetDetail, Footer, Construction, DontBuy, Careers, TypeSort, PetShow, ContactUs, WishList, Stories,Adopting, AboutMe, AdminPetForm, AdminViewAll, AdminUpdatePet, AdminEventForm, EventsViewAll, AdminUpdateEvent,AdoptInfo,OurStory,Login, Register,AdminLogout,ThingsToKnow} from './components/_Imports'
import { useState } from 'react';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'

function App() {

  const [authorized, setAuthorized] = useState("");
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navibar/>
          <Routes>
            {/* Landing */}
            <Route path="/" default element={<Indexpage/>}/>
            {/* admin routes - LOCKED DOWN!! */}
            <Route path="/admin" element={<Navigate to="/admin/signin"/>}/>
            <Route path="/admin/signin" element={<Login authorized={authorized} setAuthorized={setAuthorized}/>}/>
            <Route path="/admin/register" element={<Register authorized={authorized} setAuthorized={setAuthorized}/>}/>
            <Route path="/admin/viewall" element={<AdminViewAll setAuthorized={setAuthorized}/>}/>
            <Route path="/admin/logout" element={<AdminLogout setAuthorized={setAuthorized}/>}/>
            <Route path="/admin/new/pet" element={<AdminPetForm setAuthorized={setAuthorized}/>}/>
            <Route path="/admin/new/event" element={<AdminEventForm setAuthorized={setAuthorized}/>}/>
            <Route path="/admin/edit/event/:id" element={<AdminUpdateEvent setAuthorized={setAuthorized}/>}/>
            <Route path="/admin/edit/pet/:id" element={<AdminUpdatePet setAuthorized={setAuthorized}/>}/>
            <Route path="/admin/adopt/:id" element={<AdoptInfo setAuthorized={setAuthorized}/>}/>
            <Route path="/admin/:bad/*" element={<Navigate to="/admin/signin"/>}/>
            {/* user routes */}
            <Route path="/petshelter" element={<PetShow/>}/>
            <Route path="/petshelter/aboutme" element={<AboutMe/>}/>
            <Route path="/petshelter/adoptdontbuy" element={<DontBuy/>}/>
            <Route path="/petshelter/adopting"element={<Adopting/>}/>
            <Route path="/petshelter/thingstoknow"element={<ThingsToKnow/>}/>
            <Route path="/petshelter/sort/:type" element={<TypeSort/>}/>
            <Route path="/petshelter/liveFeed" element={<LiveFeed/>}/>
            <Route path="/petshelter/ourstory" element={<OurStory/>}/>
            <Route path="/petshelter/visitus" element={<ContactUs/>}/>
            <Route path="/petshelter/construction" element={<Construction/>}/>
            <Route path="/petshelter/wishlist" element={<WishList/>}/>
            <Route path="/petshelter/events" element={<EventsViewAll/>}/>
            <Route path="/petshelter/stories" element={<Stories/>}/>
            <Route path="/petshelter/careers" element={<Careers/>}/>
            <Route path="/petshelter/:id" element={<PetDetail/>}/>
            <Route path="/:bad/*" element={<BadLink/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
