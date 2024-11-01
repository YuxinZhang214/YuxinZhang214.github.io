import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="py-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                {/* Logo */}
                <div className="text-2xl mb-4 md:mb-0">Yuxin</div>

                {/* Navigation Links */}
                <div className="flex space-x-6 mb-4 md:mb-0">
                    <a href="#" className="hover:underline transition-colors">Home</a>
                    <a href="#" className="hover:underline transition-colors">Skills</a>
                    <a href="#" className="hover:underline transition-colors">Service</a>
                    <a href="#" className="hover:underline transition-colors">Experience</a>
                    <a href="#" className="hover:underline transition-colors">Projects</a>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-4">
                    <a href="https://github.com/YuxinZhang214" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-opacity">
                        <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/yuxinzhang214/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-opacity">
                        <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white-700 my-4"></div>

            {/* Copyright */}
            <p className="text-center text-gray-400 text-sm mt-4">
                © 2024 Yuxin Zhang. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;