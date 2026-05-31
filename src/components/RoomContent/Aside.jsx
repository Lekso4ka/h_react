import * as PropTypes from "prop-types";
import React, { useId, useRef, useState } from "react";
import styled from "@emotion/styled";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { Icon } from "../Icon";
import { AccP, Button, Info, List1, List2, MainText, Options, SecondaryText, TextTop } from "./style";

gsap.registerPlugin(useGSAP);

const OPEN_DURATION = 0.45;
const CLOSE_DURATION = 0.35;

export const RoomAside = ({ room, v, infoRef, onLayoutChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const rootRef = useRef(null);
    const bodyRef = useRef(null);
    const panelRef = useRef(null);
    const panelInnerRef = useRef(null);
    const triggerRef = useRef(null);
    const iconRef = useRef(null);
    const panelId = useId();
    const mountedRef = useRef(false);
    const expandedRef = useRef(0);
    
    const notifyLayout = (phase) => {
        onLayoutChange?.({ phase, expanded: expandedRef.current });
    };
    
    useGSAP(
        () => {
            const panel = panelRef.current;
            const inner = panelInnerRef.current;
            const icon = iconRef.current;
            if (!panel || !inner) return;
            
            if (!mountedRef.current) {
                mountedRef.current = true;
                if (!isOpen) {
                    gsap.set(panel, { height: 0, marginTop: 0, overflow: "hidden" });
                    gsap.set(inner, { opacity: 0 });
                    gsap.set(icon, { rotate: 0 });
                }
                if (!isOpen) return;
            }
            
            gsap.killTweensOf([panel, inner, icon]);
            
            const syncExpanded = () => {
                expandedRef.current = panel.offsetHeight;
                notifyLayout("animating");
            };
            
            if (isOpen) {
                gsap.set(panel, { height: 0, marginTop: 0, overflow: "hidden" });
                gsap.set(inner, { opacity: 0 });
                
                const targetHeight = inner.offsetHeight;
                
                const tl = gsap.timeline({
                    onComplete: () => {
                        expandedRef.current = targetHeight;
                        gsap.set(panel, {
                            height: "auto",
                            //marginTop: -targetHeight,
                            overflow: "visible"
                        });
                        notifyLayout("complete");
                    }
                });
                
                tl.to(
                    panel,
                    {
                        height: targetHeight,
                        //marginTop: -targetHeight,
                        duration: OPEN_DURATION,
                        ease: "power2.out",
                        onUpdate: syncExpanded
                    },
                    0
                );
                tl.to(
                    inner,
                    { opacity: 1, duration: 0.35, delay: 0.06, ease: "power2.out" },
                    0
                );
                tl.to(icon, { rotate: 45, duration: 0.35, ease: "power2.out" }, 0);
            } else {
                const currentHeight = panel.offsetHeight || expandedRef.current;
                
                gsap.set(panel, {
                    height: currentHeight,
                    //marginTop: -currentHeight,
                    overflow: "hidden"
                });
                
                const tl = gsap.timeline({
                    onComplete: () => {
                        expandedRef.current = 0;
                        gsap.set(panel, { height: 0, marginTop: 0 });
                        notifyLayout("complete");
                    }
                });
                
                tl.to(inner, { opacity: 0, duration: 0.2, ease: "power2.in" }, 0);
                tl.to(
                    panel,
                    {
                        height: 0,
                        //marginTop: 0,
                        duration: CLOSE_DURATION,
                        ease: "power2.inOut",
                        onUpdate: syncExpanded
                    },
                    0
                );
                tl.to(icon, { rotate: 0, duration: 0.3, ease: "power2.inOut" }, 0);
            }
        },
        { scope: rootRef, dependencies: [isOpen] }
    );
    
    return <Info ref={ infoRef }>
        <div ref={ bodyRef }>
            <TextTop>
                <h2>Основные параметры</h2>
                <div className={ "tl" }>
                    <span>{ room[v].size }</span>
                    <span>м<sup>2</sup></span>
                </div>
                <div className={ "tr" }>
                    <span>до</span>
                    <span>{ room[v].cnt }</span>
                    м<sup>гостей</sup>
                </div>
                <div className={ "bl" }>
                    { room[v].beds }
                </div>
                <div className={ "br" }>
                    { room[v].view }
                </div>
            </TextTop>
            <MainText>
                { room[v].text.map((el, i) => <p key={ i }>{ el }</p>) }
            </MainText>
            <SecondaryText>
                { room[v].tooltip }
            </SecondaryText>
            { room[v].options.length > 0 && <Options>
                <h2>Оснащение номера</h2>
                <ul>
                    { room[v].options.map(item => <li key={ item }>
                        <Icon name={ "check-circle" }/>
                        <span>{ item }</span>
                    </li>) }
                </ul>
            </Options> }
            { room[v].options.length === 0
                ? <List1>
                    <ul>
                        { room[v].all_options.map((el, i) => <li key={ el.title }>
                            <div>{ el.title }</div>
                            <ul>
                                { el.list.map((item, j) => <li key={ j }>{ item }</li>) }
                            </ul>
                        </li>) }
                    </ul>
                </List1>
                : <List1>
                    <h2
                        ref={ triggerRef }
                        onClick={ () => setIsOpen((v) => !v) }
                        aria-expanded={ isOpen }
                        aria-controls={ panelId }
                    >
                        Всё оснащение номера
                         {/*<Icon name={ "plus" } ref={ iconRef }/>*/}
                    </h2>
                    <ul ref={ panelInnerRef }>
                        { room[v].all_options.map((el, i) => <li key={ el.title }>
                            <div>{ el.title }</div>
                            <ul>
                                { el.list.map((item, j) => <li key={ j }>{ item }</li>) }
                            </ul>
                        </li>) }
                    </ul>
                    {/*<div ref={ rootRef }>*/}
                    {/*    <AccP*/}
                    {/*        ref={ panelRef }*/}
                    {/*        id={ panelId }*/}
                    {/*        role="region"*/}
                    {/*        aria-hidden={ !isOpen }*/}
                    {/*    >*/}
                    {/*    */}
                    {/*    </AccP>*/}
                    {/*</div>*/}
                </List1>
            }
            
             <List2 >
                 <h2 >
                     Услуги по запросу 
                     {/*<Icon name={ "plus" }/> */}
                 </h2> 
                 <ul> 
                     { room[v].services.map(el => <li key={ el }>{ el }</li>) }
                 </ul>
             </List2>
            <Button>Проверить доступность</Button>
        </div>
    </Info>
    
}


