"use client"
import { Storemodal } from '@/components/modals/store-modal';
import {useState,useEffect} from 'react'


export const MOdalProvider=()=>{
    const [isMounted, setisMounted] = useState(false)
    useEffect(() => {
     setisMounted(true);

    }, []);

    if(!isMounted){
        return null
    }
    
    return(
        <>
<Storemodal/>

        </>
    )
}