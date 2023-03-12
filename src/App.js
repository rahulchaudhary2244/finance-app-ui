import Navbar from './components/Navbar/Navbar';
import Button from './components/Button/Button';
import './index.css';
import Socials from './components/Socials/Socials';
import { links } from './helpers/data';

function App() {
    return (
        <div className="container">
            <Navbar extras={<Button btnText="download app" />} />
            <Navbar extras={<Socials links={links} />} />
        </div>
    );
}

export default App;
