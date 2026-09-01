import React, { useEffect, useRef, useState } from "react";
import { Icon } from "../Icon";
import { Container, Image, Images } from "./style";

export const Lightbox = ({ data, active, index, close }) => {
    const [img, setImg] = useState(data);
    const [activeIndex, setActiveIndex] = useState(active + 1);
    const [right, setRight] = useState(false);
    const ref = useRef();
    useEffect(() => {
        if (active) {
            const arr = [...data]
            for (let i = 0; i < index; i++) {
                arr.push(arr.shift());
            }
            arr.unshift(arr[arr.length - 1]);
            setImg(arr);
            console.log(arr)
        }
    }, [active]);
    useEffect(() => {
        if (activeIndex !== 1) {
            const r = ref.current
            
            console.log(activeIndex)
            if (r) {
                for (let i = 0; i < r.children.length; i++) {
                    let img = r.children[i];
                    img.classList.add(right ? "active-r" : "active");
                }
                setTimeout(() => {
                    let arr = [...img];
                    console.log(arr)
                    arr.pop()
                    if (right) {
                        arr.unshift(arr.pop())
                        arr.push(arr[0])
                    } else {
                        arr.push(arr.shift())
                        arr.push(arr[0])
                    }
                    console.log(arr)
                    for (let i = 0; i < r.children.length; i++) {
                        let img = r.children[i];
                        img.classList.remove("active");
                        img.classList.remove("active-r");
                    }
                    setImg([...arr]);
                    setRight(false)
                    setActiveIndex(1)
                }, 1000)
            }
        }
    }, [activeIndex]);
   
    
    const arrowHandler = (left) => {
        setActiveIndex(left
            ? activeIndex === data.length - 1 ? 0 : activeIndex + 1
            : activeIndex === 0 ? data.length - 1 : activeIndex - 1);
        setRight(!left)
    }
    
    return <Container active={active}>
        <svg
            className={"close"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 34 34"
            fill="none"
            onClick={close}
        >
            <rect width="34" height="34" fill="#FFF6F0"/>
            <path
                d="M11 23L15.8023 16.9333L11.1047 11H13.5698L17.0116 15.4L20.4186 11H22.8837L18.186 16.9333L23 23H20.5233L17.0116 18.4667L13.4767 23H11Z"
                fill="#55532E"/>
        </svg>
        <span
            className="arrow"
            onClick={ () => arrowHandler(true) }
        ><Icon name={ "arrow" } color="#FFF"/></span>
        <span
            className="arrow right"
            onClick={ () => arrowHandler() }
        ><Icon name={ "arrow" } left={ false } color="#FFF"/></span>
        <Images cnt={data.length + 1} >
            <div className="inner" ref={ref}>
                { img.map((el, i) => <Image key={i} bg={el} active={activeIndex === i} />) }
            </div>
        </Images>
    </Container>
}