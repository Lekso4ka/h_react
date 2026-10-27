import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";
import { lines } from "../../utils/lines";

export const Breadcrumbs = ({data}) => {
    return <Container>
        {data.map((el, i, arr) => <Fragment key={i}>
            { i !== 0 && <span className="divider">/</span> }
            {i === arr.length - 1
                ? <span className={"active"}>{lines(el.text)}</span>
                : <Link to={el.link}>{lines(el.text)}</Link>
            }
        </Fragment>)}
    </Container>
}