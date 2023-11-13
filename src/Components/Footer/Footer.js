const Footer = ({ isHomePage }) => {
    const footerClass = isHomePage ? 'footer-home' : 'footer-standard';

    return (
        <footer className={footerClass}>
            <p> Copyright BrendanParisse @2023</p>
        </footer>
    );
};

export default Footer;