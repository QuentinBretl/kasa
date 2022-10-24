import { ReactComponent as Logo } from './assets/LOGO-footer.svg';

function Footer({ position }) {
  return (
    <footer className='footer'>
      <Logo className='footer-logo' width='300px' fill='#ffffff' />
      <p className='footer-text'>© 2022 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
