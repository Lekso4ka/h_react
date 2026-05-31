import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";

export const Breadcrumbs = ({data}) => {
    return <Container>
        {data.map((el, i, arr) => <Fragment key={i}>
            { i !== 0 && <span>/</span> }
            {i === arr.length - 1
                ? <span className={"active"}>{el.text}</span>
                : <Link to={el.link}>{el.text}</Link>
            }
        </Fragment>)}
    </Container>
}