import React, { useEffect, useRef, useState } from "react";
import img from "../../../assets/img";
import { Tour } from "../../../components/Tour";
import { Icon } from "../../../ui/Icon";
import { Link } from "../../../ui/Link";
import { Content } from "./style";
const rest = [
    "res_1",
    "res_2",
    "res_3",
    "res_4",
    "res_5",
    "res_6",
    "res_7",
    "res_8",
]

export const Restaurants = () => {
    const [restImages, setRestImages] = useState(rest)
    const [btns, setBtns] = useState([...rest.map((el,index) => ({index, src: el})), {index: 8, src: "res_1"}])
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
                if (i!== activeBtn) {
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
                const a = activeBtn - 1
                for (let i = 0; i < ref.children.length; i++) {
                    let img = ref.children[i];
                    img.classList.remove("active");
                    img.classList.remove("active-r");
                    img.classList.remove("clicked");
                    if (i === a) {
                        img.classList.add("clicked");
                    }
                    setRight(false)
                }
            }, 1000)
        }
    }, [activeRest]);
    const clickHandler = (e, i, a) => {
        e.currentTarget.classList.add("clicked");
        setActiveRest(i)
        setActiveBtn(a)
    }
    const arrowHandler = (i, right) => {
        setActiveRest(i);
        setRight(right)
        //setActiveBtn(right)
    }
    return <Content>
        <div className={ "bg" }>
            { restImages.map((el, i) => <img className={ activeRest === i ? "active" : "" } key={ i } src={ img[el] } alt=""/>) }
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
              onClick={() => arrowHandler(activeRest === 7 ? 0 : activeRest + 1)}
        ><Icon name={ "arrow" } color="#FFF"/></span>
        <span
            className="arrow right"
            onClick={() => arrowHandler(activeRest === 0 ? 7 : activeRest - 1, true)}
        ><Icon name={ "arrow" } left={ false } color="#FFF"/></span>
        <div className="list-container">
            <div className="list" ref={ restRef }>
                { btns.map(((el, i) => <img
                    key={ i }
                    src={ img[el.src] }
                    className="img"
                    alt=""
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