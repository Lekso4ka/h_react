import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useT } from "../../Ctx";
import { Icon } from "../../ui/Icon";
import { Block, Content, ContentBlock } from "./style";
import { VariantItem } from "./VariantItem";
import { lines } from "../../utils/lines";

export const Variants = ({ arr, active, h, id }) => {
    const t = useT();
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    return <Block onClick={() => setIsOpen(!isOpen)} active={isOpen}>
        <span>{ lines(t("roomVariants")) }</span>
        <Icon name="plus" color="#FFF6F0"/>
        {isOpen && <ContentBlock>
            {arr.map((item) => <VariantItem
                key={item}
                isActive={active === item}
                clickHandler={()=> navigate(`/room/${h}/${id}/${item}`)}>{lines(item)}</VariantItem>)}
        </ContentBlock>}
    </Block>
}