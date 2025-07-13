import { create } from "zustand";
import { supabase } from "../index"
export const useAuthStore = create((set) => ({
    isAuth: false,
    signInWithGoogle: async () => {
        try {
            const {data, error} = await supabase.auth.signInWithOAuth(
                {provider: "google",}
            );
            if(error) throw new Error("A ocurrido un error durante la autenticacion")
            set({isAuth:true});
            return data;
            
        } catch (error) {
            console.error("Error en signInWithGoogle:", error.message);
            throw error;
        }
    },
    signout: async() => {
        try {
            console.log("Ejecutando signout...")
            const {error} = await supabase.auth.signOut();
            
            if(error) throw new Error("A ocurrido un error durante el cierre de sesion")
            set({isAuth:false})
            
        } catch (error) {
            console.error("Error en signout:", error.message);
            throw error;
        }
    },
}));