import React from "react";

import { List } from "./style";

import { Item } from "./Item";

export const Faq = ({ items = [], className, reset= 0 }) => {
    if (items.length === 0) return null;
    
    return (
        <List className={className}>
            {items.map((item, index) => (
                <Item
                    key={item.id ?? index}
                    i = {index}
                    question={item.name}
                    tooltip={item.tooltip}
                    answer={item.text}
                    reset={reset}
                />
            ))}
        </List>
    );
}