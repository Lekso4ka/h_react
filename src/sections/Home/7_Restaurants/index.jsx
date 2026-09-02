import React, { useEffect, useRef, useState } from "react";
import { getMain } from "../../../data";
import { mediaUrl } from "../../../utils/mediaUrl";
import { Tour } from "../../../components/Tour";
import { Icon } from "../../../ui/Icon";
import { Link } from "../../../ui/Link";
import { Content, Img } from "./style";

export const Restaurants = () => {
    const data = getMain()?.restaurants || {};
    const slides = data.slides || [];
    const preview = data.preview_image;
    const [btns, setBtns] = useState(() => [
        ...slides.map((el, index) => ({ index, src: el.image })),
        ...(preview ? [{ index: slides.length, src: preview }] : []),
    ]);
    const [right, setRight] = useState(null)
    const [activeBtn, setActiveBtn] = useState(0);
    const restRef = useRef()
    
    const [activeRest, setActiveRest] = useState(0)
    const activeSlide = slides[activeRest] || {};
    
    useEffect(() => {
        const ref = restRef.current
        if (ref) {
            for (let i = 0; i < ref.children.length; i++) {
                let img = ref.children[i];
                img.classList.add(right ? "active-r" : "active");
                if (i !== activeBtn) {
                    img.classList.remove("clicked");
                }
            }
            setTimeout(() => {
                let arr = [...btns];
                arr.pop()
                if (right) {
                    arr.unshift(arr.pop())
                    arr.push(arr[0])
                } else {
                    arr.push(arr.shift())
                    arr.push(arr[0])
                }
                setBtns([...arr]);
                setRight(false)
            }, 1000)
        }
    }, [activeRest]);
    useEffect(() => {
        const ref = restRef.current
        if (ref) {
            const n = btns.findIndex(el => el.index === activeRest)
            for (let i = 0; i < ref.children.length; i++) {
                let img = ref.children[i];
                img.classList.remove("active");
                img.classList.remove("active-r");
                if (i === n) {
                    img.classList.add("clicked");
                } else {
                    img.classList.remove("clicked");
                }
            }
        }
    }, [btns])
    const clickHandler = (e, i, a) => {
        e.currentTarget.classList.add("clicked");
        setActiveRest(i)
        setActiveBtn(a)
    }
    const arrowHandler = (i, right) => {
        setActiveRest(i);
        setRight(right)
    }
    const lastIndex = Math.max(slides.length - 1, 0);
    return <Content>
        <div className={ "bg" }>
            { slides.map((el, i) => <img className={ activeRest === i ? "active" : "" } key={ i } src={ mediaUrl(el.image) }
                                             alt=""/>) }
        </div>
        <h2>{ activeSlide.name }</h2>
        <Link
            className="link"
            color={ "light" }
            hover={ "light" }
            to={ `/restaurant/${ activeSlide.hotel || "golden-tulip" }` }
        >О ресторане</Link>
        <Tour pos className="tour"/>
        <span
            className="arrow"
            onClick={ () => arrowHandler(activeRest === 0 ? lastIndex : activeRest - 1, true) }
        ><Icon name={ "arrow" } color="#FFF"/></span>
        <span
            className="arrow right"
            onClick={ () => arrowHandler(activeRest === lastIndex ? 0 : activeRest + 1) }
        ><Icon name={ "arrow" } left={ false } color="#FFF"/></span>
        <div className="list-container">
            <div className="list" ref={ restRef }>
                { btns.map(((el, i) => <Img
                    key={ i }
                    bg={ el.src }
                    onClick={ (e) => clickHandler(e, el.index, i) }
                />)) }
            </div>
        </div>
        <div className="cnt">
            <span className="active">0{ (slides.indexOf(activeSlide) >= 0 ? slides.indexOf(activeSlide) : 0) + 1 }/</span>
            <span>0{ slides.length }</span>
        </div>
    </Content>
}
