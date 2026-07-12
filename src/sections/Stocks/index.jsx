import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCtx } from "../../Ctx";
import { getStocks } from "../../data";
import { Line } from "../../ui/Line";
import { Link } from "../../ui/Link";
import { nToZero } from "../../utils/parseDate";
import { Container, Data, Item, Modal } from "./style";

export const StocksContent = () => {
    const [active, setActive] = useState(0)
    const { id } = useParams();
    const { mob } = useCtx()
    const data = getStocks(id)
    const getMainDates = ({ start, end }) => {
        const st = new Date(start)
        const en = new Date(end)
        return `с ${ nToZero(st.getDate()) }.${ nToZero(st.getMonth() + 1) } по ${ nToZero(en.getDate()) }.${ nToZero(en.getMonth() + 1) }.${ en.getFullYear() }`
    }
    const getDates = ({ start, end }) => {
        const st = new Date(start)
        const en = new Date(end)
        return `с ${ nToZero(st.getDate()) }.${ nToZero(st.getMonth() + 1) }.${ st.getFullYear() } по ${ nToZero(en.getDate()) }.${ nToZero(en.getMonth() + 1) }.${ en.getFullYear() }`
    }
    useEffect(() => {
        if (active !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = null;
        }
    }, [active]);
    return <Container>
        <div className="hero">
            <h1>Акции отеля</h1>
            <div className="divider"/>
        </div>
        <div className="content">
            { data.map((el, i) => <Item key={ i } pic={ el.img }>
                { mob ? <>
                    { el.type === "offer" ? <h4>{ el.tooltip_main }</h4> : <Line/> }
                    <h2 dangerouslySetInnerHTML={ { __html: el.name } }/>
                </> : <>
                    { el.type === "offer" ? <h4>{ el.tooltip_main }</h4> : <h5>{ el.tooltip_main }</h5> }
                </> }
                <div className="img"/>
                <div className="left">
                    { !mob && <h2 dangerouslySetInnerHTML={ { __html: el.name } }/> }
                    <p>{ el.text }</p>
                    <ul>
                        { el.type === "offer" ? <>
                            <li>
                                <div className="circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="10" viewBox="0 0 2 10"
                                         fill="none">
                                        <path d="M0 1.36V0H1.48308V1.36H0ZM0 9.01538V2.36923H1.48308V9.01538H0Z"
                                              fill="white"/>
                                    </svg>
                                </div>
                                <span>{ el.advantages[0] }</span>
                            </li>
                            <li>
                                <div className="circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 10"
                                         fill="none">
                                        <path d="M0 1.36V0H1.48308V1.36H0ZM0 9.01538V2.36923H1.48308V9.01538H0Z"
                                              fill="white"/>
                                    </svg>
                                </div>
                                <span>Проживание { getMainDates(el.dates_of_stay) }</span>
                            </li>
                        
                        </> : el.conditions.map((it, j) => <li key={ j }>
                            <div className="circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="10" viewBox="0 0 2 10"
                                     fill="none">
                                    <path d="M0 1.36V0H1.48308V1.36H0ZM0 9.01538V2.36923H1.48308V9.01538H0Z"
                                          fill="white"/>
                                </svg>
                            </div>
                            <span>{ it }</span>
                        </li>) }
                    </ul>
                    <div className="links">
                        <Link to={`/rooms/${id}`}>Выбрать номер</Link>
                        { el.type === "offer" && <Link to={""} onClick={(e) => {
                            e.preventDefault()
                            setActive(i)
                        }}>Подробнее</Link>}
                    </div>
                </div>
            </Item>) }
        </div>
        <Modal
            className={typeof active === "number" ? "active" : "" }
            onClick={e => e.currentTarget === e.target ? setActive(null) : null}
        >
            <div className="modal-content">
                <svg
                    className={"x"}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 34 34"
                    fill="none"
                    onClick={() => setActive(null)}
                >
                    <rect width="34" height="34" fill="#2F3034"/>
                    <path
                        d="M11 23L15.8023 16.9333L11.1047 11H13.5698L17.0116 15.4L20.4186 11H22.8837L18.186 16.9333L23 23H20.5233L17.0116 18.4667L13.4767 23H11Z"
                        fill="#FFF6F0"/>
                </svg>
                {typeof active === "number" && <Data pic={ data[active].img }>
                    <div className="img">
                        <div className="tooltip">{ data[active].tooltip }</div>
                    </div>
                    <h3 dangerouslySetInnerHTML={ { __html: data[active].name } }/>
                    <p>{ data[active].text }</p>
                    <h4>Преимущества предложения:</h4>
                    <ul className="advantages">
                        { data[active].advantages.map((el, i) => <li key={ i }>{ el }</li>) }
                    </ul>
                    <div className="line">
                        <div>
                            <h4>Срок бронирования: </h4>
                            <p>{ getDates(data[active].reservation_period) }</p>
                        </div>
                        <div>
                            <h4>Даты проживания: </h4>
                            <p>{ getDates(data[active].dates_of_stay) }</p>
                        </div>
                    </div>
                    <div className="line">
                        <Link color="dark" hover="dark" to={ `/rooms/${ id }` }>Выбрать номер</Link>
                        { <Link color="dark" hover="dark" to={ data[active].link }>Задать вопрос</Link> }
                    </div>
                    <h4>Дополнительные условия</h4>
                    <ul className="conditions">
                        { data[active].conditions.map((el, i) => <li key={ i }>
                            <div className="circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="10" viewBox="0 0 2 10"
                                     fill="none">
                                    <path d="M0 1.36V0H1.48308V1.36H0ZM0 9.01538V2.36923H1.48308V9.01538H0Z"
                                          fill="white"/>
                                </svg>
                            </div>
                            <span>{ el }</span>
                        </li>) }
                    </ul>
                </Data> }
            </div>
        </Modal>
    </Container>
}
