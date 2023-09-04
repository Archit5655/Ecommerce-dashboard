import { create } from "zustand";

interface useStoreinterface{
    isOpen:boolean,
    onOpen:()=>void ,
    onClose:()=>void,

}

export const useStoreModal=create<useStoreinterface>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false}),

}))