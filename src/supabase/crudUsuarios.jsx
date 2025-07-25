import { ObtenerIdAuthSupabase, supabase } from "../index"


export const InsertarUsuarios = async(p)=> {
    try {
        const { data } = await supabase.from("usuarios").insert(p).select();
        return data;
        
    } catch (error) {
        
    }
};
export const MostrarUsuarios = async () => {
    try {
        const idAuthSupabase = await ObtenerIdAuthSupabase();
        const {error, data } = await supabase.
        from("usuarios").select().eq("idauth_supabase", idAuthSupabase);
        if(error) {
            alert("mostrar usuarios", error); 
        }
        
        if(data) {
            
            return data[0];
        }
    } catch (error) {
        alert(error.error_description || error.message + "MostrarUsuarios");
    }
}