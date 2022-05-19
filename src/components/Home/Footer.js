import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer =()=>{
    return(
        <div className="footer">
            <div className="border">

            </div>
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    <h4>company </h4>
                    <ul>
                        <li className='footer-li'><a href="#">about us</a></li>
                        <li className='footer-li'><a href="#">our services</a></li>
                        <li className='footer-li'><a href="#">privacy policy</a></li>
                        <li className='footer-li'><a href="#">affiliate program</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>get help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">shipping</a></li>
                        <li><a href="#">returns</a></li>
                        <li><a href="#">order status</a></li>
                        <li><a href="#">payment options</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>products</h4>

                    <ul>
                        <li><a href="#">chew blister pack</a></li>
                        <li><a href="#">chew zero</a></li>
                        <li><a href="#">chew cinnamon zero</a></li>

                    </ul>

                </div>
                <div className="footer-col">
                    <h4> follow us</h4>
                    <div className="social-link">
                        <a href="#"><FacebookRoundedIcon /></a>
                        <a href="#"><TwitterIcon /></a>
                        <a href="#"><InstagramIcon/></a>
                        <a href="#"><LinkedInIcon/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer