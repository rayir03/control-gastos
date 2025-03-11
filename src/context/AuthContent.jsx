import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../index";

const AuthContext = createContext();
export const AuthContextProvider = ({children})=> {
    const [ user, setUser ] = useState([]);

    useEffect(()=>{
        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (session) =>  {
                if (session == null) {
                    setUser(null);
                
                } else {
                    setUser(session);
                    console.log("session", session);
                }
            }
        )
        return () => {
            authListener.subscription;
        }
    },[])
    return (
        <AuthContext.Provider value={{user}} >{children}</AuthContext.Provider>
    )
};

export const UserAuth = () => {
    return useContext(AuthContext)
}