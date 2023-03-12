import Navbar from './components/Navbar/Navbar';
import Button from './components/Button/Button';
import './index.css';
import Socials from './components/Socials/Socials';
import { links } from './helpers/data';
import HeroSection from './components/HeroSection/HeroSection';

function App() {
    return (
        <>
            <div style={{ background: 'var(--color-background)' }}>
                <div className="container">
                    <header className="header-container">
                        <Navbar extras={<Button btnText="download app" />} />
                    </header>
                    <HeroSection />
                    <hr
                        style={{
                            marginTop: '55px',
                            border: '1px solid #9A9A9A ',
                        }}
                    />
                </div>
            </div>
            <footer
                className="container"
                style={{
                    paddingTop: '32px',
                    paddingBottom: '32px',
                }}
            >
                <Navbar extras={<Socials links={links} />} />
            </footer>
        </>
    );
}

export default App;
