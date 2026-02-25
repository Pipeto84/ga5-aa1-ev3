import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
import tiktok from '../assets/tiktok.png'
import whatsapp from '../assets/whatsapp.png'
import '../styles/Footer.css'
  
export const Footer = () => {
  return (
    <div className="footer">
      <img src={facebook} className="facebook" alt="facebook" />
      <img src={instagram} className="instagram" alt="instagram" />
      <img src={twitter} className="twitter" alt="twitter" />
      <img src={linkedin} className="linkedin" alt="linkedin" />
      <img src={tiktok} className="tiktok" alt="tiktok" />
      <img src={whatsapp} className="whatsapp" alt="whatsapp" />
    </div>
  )
}
