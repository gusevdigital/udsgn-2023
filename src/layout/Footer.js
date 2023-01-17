import Form from '../components/Form';
import Socials from '../components/Socials';
import Copyright from '../components/Copyright';

const Footer = () => {
    return (
        <footer className="footer section" id="contact" data-scroll-section>
            <div className="container">
                <Form />
                <Socials />
                <Copyright />
            </div>
        </footer>
    );
};

export default Footer;
