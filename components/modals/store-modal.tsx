"use client"

import { useStoreModal } from "@/hooks/use-store-modal"
import { Modal } from "../ui/modal"

 export const Storemodal=()=>{
    const storemodal=useStoreModal()

    return(

    
        <Modal title="Create Store" descriiption="Add a new store to manage products and categories " onClose={storemodal.onClose} isOpen={storemodal.isOpen}>

        Future Create Store form

    </Modal>
               ) 
 }