import { createContext, useContext, useState, useEffect } from "react";
import { supabase, InsertarUsuarios } from "../index";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session == null) {
          setUser(null);
        } else {
          setUser(session?.user.user_metadata);
          await InsertarUsuarios(session?.user.user_metadata, session?.user.id);
          console.log("event", event);
          console.log("session", session?.user.user_metadata);
        }
      }
    );
    return () => {
      authListener.subscription;
    };
  }, []);

  const InsertarUsuarios = async (dataProvider, idAuthSupabase) => {
    const p = {
      nombres: dataProvider.name,
      foto: dataProvider.picture,
      idauth_supab: idAuthSupabase,
    };
    // await InsertarUsuarios(p);
    const { data, error } = await supabase.from("usuarios").insert([p]);

    if (error) {
      console.error("Error insertando usuario:", error);
      return null;
    }

    return data;
  }
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
