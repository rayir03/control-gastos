import { create } from "zustand";
import { MostrarUsuarios } from "../index";

export const useUsuariosStore = create((set) => ({
    datausuarios: [],
    mostrarUsuarios: async () => {
        const response = await MostrarUsuarios();
        set({ datausuarios: response});
        return response || [];
    }
    
}

));