import React, { useEffect, useRef, useState } from "react";
import { getMain } from "../../../data";
import { Line } from "../../../ui/Line";
import { Content } from "./style";
import { lines } from "../../../utils/lines";

export const Images = () => {
    const [isVisibleImg, setIsVisibleImg] = useState(false);
    const imgRef = useRef(null);
    const data = getMain()?.atmosphere || {};
    const images = data.images || [];
    
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
        bg1={ images[0] }
        bg2={ images[1] }
        bg3={ images[2] }
        
        visible={isVisibleImg}
    >
        <Line/>
        <h4>{ lines(data.label) }</h4>
        <p>
            { lines(data.text) }{" "}
            { data.text_accent && <span>{ lines(data.text_accent) }</span> }
        </p>
        <div className="img img1"></div>
        <div className="img img2" ref={imgRef}></div>
        <div className="img img3"></div>
        <div className="tooltip">{ lines(data.tooltip) }</div>
        <Line/>
    </Content>
}
