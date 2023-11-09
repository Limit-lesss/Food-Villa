import { useNavigate, useRouteError } from "react-router-dom";
import ErrorImg from '../assets/404.png'

const Error = () => {
    const err = useRouteError();
    const navigate = useNavigate();
    return(
        <div className="border relative">
            <img src={ErrorImg} alt="404 error" className="block mx-auto"/>
            <p onClick={e => navigate('/')} className="absolute bottom-3 left-2/4 text-2xl font-semibold bg-green-100 text-red-800 cursor-pointer border-2 border-green-800 p-3 px-6  rounded-full">Go back to homepage</p>
        </div>
    );
}
export default Error ;