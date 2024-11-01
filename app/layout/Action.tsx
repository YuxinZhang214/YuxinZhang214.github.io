import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Action = () => {
    return (
        <div>
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6 mb-16">
                <a
                    href="https://github.com/YuxinZhang214"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity duration-300 hover:opacity-70"
                >
                    <FontAwesomeIcon icon={faGithub} className="w-10 h-10 text-gray-800" />
                </a>
                <a
                    href="https://www.linkedin.com/in/yuxinzhang214/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity duration-300 hover:opacity-70"
                >
                    <FontAwesomeIcon icon={faLinkedin} className="w-10 h-10 text-gray-800" />
                </a>
            </div>
            <h2 className="text-6xl font-satoshi-regular text-gray-800 mb-16">
                Looking for a Frontend Engineer?
            </h2>
            <a
                href="mailto:yuxin.zhang.project@outlook.com"
                className="inline-block px-6 py-2 text-gray-800 border-2 border-gray-800 rounded-full transition-colors duration-300 hover:bg-gray-800 hover:text-white"
            >
                Get in Touch
            </a>
        </div>
    );
};

export default Action