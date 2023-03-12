import Navbar from './components/Navbar/Navbar';
import Button from './components/Button/Button';
import './index.css';
import Socials from './components/Socials/Socials';
import { links } from './helpers/data';
import HeroSection from './components/HeroSection/HeroSection';

function App() {
    return (
        <div className="container">
            <Navbar extras={<Button btnText="download app" />} />
            <HeroSection />
            <Navbar extras={<Socials links={links} />} />
        </div>
    );
}

export default App;
