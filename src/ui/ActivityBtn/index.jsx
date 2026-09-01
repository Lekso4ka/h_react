import React from 'react';
import { Button } from "./style";

export const ActivityBtn = ({active, variant = 1, children, ...rest}) => {
    return <Button
        active={active}
        variant={variant}
        {...rest}
    >
        {children}
    </Button>
}