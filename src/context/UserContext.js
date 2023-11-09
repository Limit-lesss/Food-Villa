import { createContext, useContext } from "react";

export const UserContext = createContext({
    user:{
        name:"dummy",
        email:"dummy@gmail.com"
    }
})
UserContext.displayName = "UserContext";
const useUser = () => {
    return useContext(UserContext);
}
export default useUser; 