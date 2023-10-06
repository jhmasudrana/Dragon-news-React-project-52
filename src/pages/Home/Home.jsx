import Login from "../Login/Login";
import Header from "../Shared/Header/Header";
import LeftsiteNave from "../Shared/LeftsiteNave/LeftsiteNave";
import Navber from "../Shared/Navber/Navber";
import RightsiteNave from "../Shared/Ridesitenave/RightsiteNave";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navber></Navber>
           
            <h2 className="text-3xl font-poppins font-bold">
               This is home
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftsiteNave></LeftsiteNave>
                </div>
                <div className="md:col-span-2">
                    <h2 className="text4xl ">News coming soon..</h2>
                </div>
                <div className="border">
                    <RightsiteNave></RightsiteNave>
                </div>
            </div>
        </div>
    );
};

export default Home;