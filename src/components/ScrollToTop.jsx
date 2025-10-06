import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
}



export default ScrollToTop