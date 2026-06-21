import React, { useState, useRef, useEffect } from "react";
import { VideoContainer, VideoWrapper, VideoSt } from "./style";

import img from "../../assets/img";

export const Video = ({ data, index, h }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const videoRefs = useRef([]);
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    useEffect(() => {
        const video = videoRefs.current[0];
        if (video) {
            video.currentTime = 0;
            video.play().catch(() => {
            });
        }
    }, []);
    
    useEffect(() => {
        if (index === activeIndex || isTransitioning) return;
        setIsTransitioning(true);
        const currentVideo = videoRefs.current[activeIndex];
        if (currentVideo) {
            currentVideo.pause();
            currentVideo.currentTime = 0;
        }
        setActiveIndex(index);
        
        setTimeout(() => {
            const newVideo = videoRefs.current[index];
            if (newVideo) {
                newVideo.currentTime = 0;
                newVideo.play()
                    .then(() => {
                        setIsTransitioning(false);
                    })
                    .catch(() => {
                        setIsTransitioning(false);
                    });
            }
        }, 300);
    }, [index])
    
    return <VideoContainer h={h} className="video">
        { data?.map((video, index) => (
            <VideoWrapper key={ `video_${index}` } active={ activeIndex === index }>
                <VideoSt
                    ref={ el => videoRefs.current[index] = el }
                    muted
                    loop
                    playsInline
                    preload="auto"
                >
                    <source src={ img[video] } type="video/mp4"/>
                    <source src={ img[video].replace(".mp4", ".webm") } type="video/webm"/>
                </VideoSt>
            </VideoWrapper>
        )) }
    </VideoContainer>;
}