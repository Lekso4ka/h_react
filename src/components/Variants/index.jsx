import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "../Icon";
import { Block, Content, ContentBlock } from "./style";
import { VariantItem } from "./VariantItem";

export const Variants = ({ arr, active, h, id }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    return <Block onClick={() => setIsOpen(!isOpen)} active={isOpen}>
        <span>Варианты номера</span>
        <Icon name="plus" color="#FFF6F0"/>
        {isOpen && <ContentBlock>
            {arr.map((item) => <VariantItem
                key={item}
                isActive={active === item}
                clickHandler={()=> navigate(`/room/${h}/${id}/${item}`)}>{item}</VariantItem>)}
        </ContentBlock>}
    </Block>
}