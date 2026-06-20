import React, { useEffect, useRef, useState } from "react";
import { Line } from "../../../ui/Line";
import { Content } from "./style";

export const Images = () => {
    const [isVisibleImg, setIsVisibleImg] = useState(false);
    const imgRef = useRef(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisibleImg(true);
                    }, 0);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px 50px 0px'
            }
        );
        
        const currentRef = imgRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }
        
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);
    
    return <Content
        bg1={ "home_1" }
        bg2={ "h_banner" }
        bg3={ "home_2" }
        
        visible={isVisibleImg}
    >
        <Line/>
        <h4>[ Атмосфера и пространство ]</h4>
        <p>Комфортный отдых среди горных склонов курорта.
            Архитектура отеля продолжает природный пейзаж, <span>а светлые интерьеры, натуральные материалы и выверенные пропорции создают спокойную и сдержанную атмосферу</span>.
        </p>
        <div className="img img1"></div>
        <div className="img img2" ref={imgRef}></div>
        <div className="img img3"></div>
        <div className="tooltip">Архитектура, свет и тишина формируют атмосферу отеля.</div>
        <Line/>
    </Content>
}