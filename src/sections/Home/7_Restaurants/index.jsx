import React, { useEffect, useRef, useState } from "react";
import img from "../../../assets/img";
import { Tour } from "../../../components/Tour";
import { Icon } from "../../../ui/Icon";
import { Link } from "../../../ui/Link";
import { Content, Img } from "./style";

const rest = [
    "home_r_1",
    "home_r_2",
    "home_r_3",
    "home_r_4",
    "home_r_5",
    "home_r_6",
    "home_r_7",
    "home_r_8",
]

export const Restaurants = () => {
    const [restImages, setRestImages] = useState(rest)
    const [btns, setBtns] = useState([...rest.map((el, index) => ({ index, src: el })), { index: 8, src: "res_1" }])
    const [right, setRight] = useState(null)
    const [activeBtn, setActiveBtn] = useState(0);
    const restRef = useRef()
    
    const [activeRest, setActiveRest] = useState(0)
    
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
    return <Content>
        <div className={ "bg" }>
            { restImages.map((el, i) => <img className={ activeRest === i ? "active" : "" } key={ i } src={ img[el] }
                                             alt=""/>) }
        </div>
        <h2>{ Math.floor(rest.indexOf(restImages[activeRest]) / 4) === 0 ? "Бранше" : "Амстердам" }</h2>
        <Link
            className="link"
            color={ "light" }
            hover={ "light" }
            to={ `/restaurant/${ Math.floor(rest.indexOf(restImages[activeRest]) % 4) === 0 ? "golden-tulip" : "tulip-inn" }` }
        >О ресторане</Link>
        <Tour pos className="tour"/>
        <span
            className="arrow"
            onClick={ () => arrowHandler(activeRest === 7 ? 0 : activeRest + 1) }
        ><Icon name={ "arrow" } color="#FFF"/></span>
        <span
            className="arrow right"
            onClick={ () => arrowHandler(activeRest === 0 ? 7 : activeRest - 1, true) }
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
            <span className="active">0{ rest.indexOf(restImages[activeRest]) + 1 }/</span>
            <span>0{ rest.length }</span>
        </div>
    </Content>
}