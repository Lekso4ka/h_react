import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { BrandColumn, BrandLink, BrandSection, ColumnLink, Grid } from "./style";

const BURGUNDY = "#8b2318";

function MenuLink({ href, children, onNavigate }) {
    const isRoute = href?.startsWith("/");
    const handleClick = (e) => {
        if (!onNavigate) return;
        e.preventDefault();
        onNavigate(href);
    };
    return (
        <ItemLink
            as={ isRoute ? Link : "a" }
            to={ isRoute ? href : undefined }
            href={ isRoute ? undefined : href ?? "#" }
            onClick={ handleClick }
        >
            { children }
        </ItemLink>
    );
}

export const BrandPanel = ({ data = [], onNavigate }) => {
    return (
        <Grid>
            { data.map((brand, index) => (
                <BrandSection key={ brand.title } $withLeftBorder={ index === 0 } cnt={ brand.items.length }>
                    <h3>{ brand.title }</h3>
                    
                    { brand.items.map((item, itemIndex) => (
                        <BrandColumn key={ item.label } $withLeftBorder={ itemIndex > 0 }>
                            <BrandLink href={ item.href } onNavigate={ onNavigate } pic={ item.image }>
                                <div className="img">
                                    <div className="label">{ item.label }</div>
                                </div>
                            </BrandLink>
                        </BrandColumn>
                    )) }
                
                </BrandSection>
            )) }
        </Grid>
    );
}

const ItemLink = styled.a`
    display: block;
    color: inherit;
    text-decoration: none;
    transition: opacity 160ms ease;

    &:hover {
        opacity: 0.82;
    }
`;

const Media = styled.div`
    aspect-ratio: 1 / 1;
    background: #e8e2dc;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
`;

const MediaPlaceholder = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #ece6e0, #ded8d2);
`;

const ItemLabel = styled.span`
    display: block;
    margin-top: 16px;
    font-family: inherit;
    font-size: 13px;
    font-weight: 500;
    line-height: 1.35;
    letter-spacing: 0.1em;
    text-transform: uppercase;
`;
