import React, {useState} from "react";
import { Icon } from "../Icon";
import { Block, Content, ContentBlock } from "./style";

export const Variants = ({ arr, active, setActive }) => {
    const [isOpen, setIsOpen] = useState(false);
    return <Block onClick={() => setIsOpen(!isOpen)} active={isOpen}>
        <span>Варианты номера</span>
        <Icon name="plus" color="#FFF6F0"/>
        {isOpen && <ContentBlock>
            {arr.map((item) => <Content key={item} active={active === item} onClick={()=> setActive(item)}>{item}</Content>)}
        </ContentBlock>}
    </Block>
}