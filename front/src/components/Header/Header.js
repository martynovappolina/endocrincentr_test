import './Header.css';

const Header = () => {
    return <div className='header'>
        <div className='container'>
            <div className='header-content'>
                <div className='header-logo-icon' />
                <a 
                className='header-tel'
                href='tel:+74955000090'>
                    +7 495 500-00-90
                </a>
            </div>
        </div>
    </div>
};

export default Header;