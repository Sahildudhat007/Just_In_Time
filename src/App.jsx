import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';

// css import
import './App.css';

// components import 
import AboutUs from './Pages/AboutUs/AboutUs';
import AllBrand from './Components/AllBrand/AllBrand';
import ArrivalWatches from './Pages/ArrivalWatches/ArrivalWatches';
import AutomaticWatches from "./Pages/AutomaticWatches/AutomaticWatches";
import Contact from './Pages/Contact/Contact';
import CorporateGift from './Pages/CorporateGift/CorporateGift';
import Findstores from './Components/Findstores/Findstores';
import Footer from './Components/Footer/Footer';
import Franchise from './Pages/Franchise/Franchise';
import Gifting from './Pages/Gifting/Gifting';
import GShockWatches from "./Pages/GShockWatches/GShockWatches";
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import LeatherWatches from "./Pages/LeatherWatches/LeatherWatches";
import MensWatches from './Pages/MensWatches/MensWatches';
import Offers from './Pages/Offers/Offers';
import PressReleases from './Pages/PressReleases/PressReleases';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import ReturnRefunds from './Pages/ReturnRefunds/ReturnRefunds';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import SearchBar from "./Components/SearchBar/SearchBar";
import SignUp from "./Components/SignUp/SignUp";
import SmartWatches from './Pages/SmartWatches/SmartWatches';
import Store from './Store';
import SwissWatches from "./Pages/SwissWatches/SwissWatches";
import TermsCondition from './Pages/TermsCondition/TermsCondition';
import User from './Components/User/User';
import VintageWatches from "./Pages/VintageWatches/VintageWatches";
import WatchAccessories from './Pages/WatchAccessories/WatchAccessories';
import WatchJournal from "./Pages/WatchJournal/WatchJournal";
import WatchServicing from './Pages/WatchServicing/WatchServicing';
import Wishlist from './Components/Wishlist/Wishlist';
import WomensWatches from './Pages/WomensWatches/WomensWatches';

// react toastify
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
          <ScrollToTop />
          <Header />

          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboutUs' element={<AboutUs />} />
            <Route path='/allBrand' element={<AllBrand />} />
            <Route path='/arrivalWatches' element={<ArrivalWatches />} />
            <Route path='/automaticWatches' element={<AutomaticWatches />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/corporateGift' element={<CorporateGift />} />
            <Route path='/findStores' element={<Findstores />} />
            <Route path='/franchise' element={<Franchise />} />
            <Route path='/gifting' element={<Gifting />} />
            <Route path='/gShockWatches' element={<GShockWatches />} />
            <Route path='/leatherWatches' element={<LeatherWatches />} />
            <Route path='/mensWatches' element={<MensWatches />} />
            <Route path='/offers' element={<Offers />} />
            <Route path='/pressReleases' element={<PressReleases />} />
            <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
            <Route path='/productDetails/:id' element={<ProductDetails />} />
            <Route path='/returnRefunds' element={<ReturnRefunds />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/searchBar' element={<SearchBar />} />
            <Route path='/smartWatches' element={<SmartWatches />} />
            <Route path='/swissWatches' element={<SwissWatches />} />
            <Route path='/termsCondition' element={<TermsCondition />} />
            <Route path='/user' element={<User />} />
            <Route path='/vintageWatches' element={<VintageWatches />} />
            <Route path='/watchAccessories' element={<WatchAccessories />} />
            <Route path='/watchJournal' element={<WatchJournal />} />
            <Route path='/watchServicing' element={<WatchServicing />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/womensWatches' element={<WomensWatches />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App