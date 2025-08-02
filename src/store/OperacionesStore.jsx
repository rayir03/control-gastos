import { create } from "zustand";
import { v } from "../index";

export const useOperaciones = create((set, get) => ({
   
    tituloBtnDes:"Categoria ingresos",
    colorCategoria: () => v.colorIngresos,
    bgCategoria: () => v.colorbgingresos,
    setTipo: (p) => {
        
        set({
            tituloBtnDes: p.text
        });
        set({
            colorCategoria: p.color
        });
        set({
            bgCategoria: p.bgcolor
        });
        
    },
}));