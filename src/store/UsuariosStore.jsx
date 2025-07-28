import { create } from "zustand";
import { EditarTemaMoneda, MostrarUsuarios } from "../index";

export const useUsuariosStore = create((set) => ({
    datausuarios: [],
    mostrarUsuarios: async () => {
        const response = await MostrarUsuarios();
        set({ datausuarios: response});
        return response || [];
    },
    editartemamonedauser: async (p) => {
        await EditarTemaMoneda(p);
    },
    
}

));