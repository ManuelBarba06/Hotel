import { useEffect, useState } from "react";

import serverAxios from "../config/serverAxios";

export const useAbout = () => {
    const [aboutState, setAboutState] = useState({
        about:null
    })
    const [isLoading, setIsLoading] = useState(true)
    
    const getAbout = async () => {
        
        const responseAbout = await serverAxios.get('/about')
        
        
        setAboutState({
            about: responseAbout.data.data
        })
        
        setIsLoading(false)
    }
    
    useEffect(() => {
        getAbout()
    },[])
    
    return {
        ...aboutState,
        isLoading
    }
}