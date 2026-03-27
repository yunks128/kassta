import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Activities from './pages/Activities'
import Webinars from './pages/Webinars'
import Announcements from './pages/Announcements'
import Leadership from './pages/Leadership'
import Membership from './pages/Membership'
import Donation from './pages/Donation'
import Media from './pages/Media'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/media" element={<Media />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
