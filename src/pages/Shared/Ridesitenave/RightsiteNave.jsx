import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightsiteNave = () => {
    return (
        <div>
            <div className='p-4 space-y-4'>
                <h2 className="text-3xl"> Login With</h2>
                <button className="btn btn-outline w-full ">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full ">
                    <FaGithub></FaGithub>
                    Login With Github
                </button>
            </div>


            <div className='p-4 '>
                <h2 className="text-3xl"> Find Us on</h2>
                <a className='p-4 flex mr-2 items-center gap-3 font-semibold text-lg border rounded-t-lg' href="">
                    <FaFacebook></FaFacebook>
                    Facebook
                </a>
                <a className='p-4 mr-2 flex items-center gap-3 font-semibold text-lg border-x' href="">
                    <FaTwitter></FaTwitter>
                    Twiter
                </a>
                <a className='p-4 mr-2 flex items-center gap-3 font-semibold text-lg border rounded-b-lg' href="">
                    <FaInstagram></FaInstagram>
                    Instragram
                </a>
            </div>

             {/* Q-Zone  */}
            <div className='p-4 '>
                <h2 className="text-3xl"> Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightsiteNave;