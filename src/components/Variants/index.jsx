import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "../Icon";
import { Block, Content, ContentBlock } from "./style";

export const Variants = ({ arr, active, h, id }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    return <Block onClick={() => setIsOpen(!isOpen)} active={isOpen}>
        <span>Варианты номера</span>
        <Icon name="plus" color="#FFF6F0"/>
        {isOpen && <ContentBlock>
            {arr.map((item) => <Content
                key={item}
                active={active === item}
                onClick={()=> navigate(`/room/${h}/${id}/${item}`)}>{item}</Content>)}
        </ContentBlock>}
    </Block>
}