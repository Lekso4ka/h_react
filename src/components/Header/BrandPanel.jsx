import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const BURGUNDY = "#8b2318";

function MenuLink({ href, children }) {
    const isRoute = href?.startsWith("/");
    
    return (
        <ItemLink
            as={isRoute ? Link : "a"}
            to={isRoute ? href : undefined}
            href={isRoute ? undefined : href ?? "#"}
        >
            {children}
        </ItemLink>
    );
}

export const BrandPanel = ({ datq = [] }) => {
    return (
        <HotelsGrid>
            {datq.map((brand, index) => (
                <BrandSection key={brand.title} $withLeftBorder={index > 0}>
                    <BrandTitle>{brand.title}</BrandTitle>
                    <ItemsRow>
                        {brand.items.map((item, itemIndex) => (
                            <ItemColumn key={item.label} $withLeftBorder={itemIndex > 0}>
                                <MenuLink href={item.href}>
                                    <Media>
                                        {item.image ? (
                                            <img src={item.image} alt="" draggable={false} loading="lazy" />
                                        ) : (
                                            <MediaPlaceholder aria-hidden="true" />
                                        )}
                                    </Media>
                                    <ItemLabel>{item.label}</ItemLabel>
                                </MenuLink>
                            </ItemColumn>
                        ))}
                    </ItemsRow>
                </BrandSection>
            ))}
        </HotelsGrid>
    );
}

const HotelsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	min-height: 558px;
	border-top: 1px solid rgba(28, 26, 23, 0.08);

`;

const BrandSection = styled.div`
	padding: 36px 40px 40px;
	border-left: ${(p) => (p.$withLeftBorder ? "1px solid rgba(28, 26, 23, 0.08)" : "none")};

	@media (max-width: ${(p) => p.theme.breakpoints.lg}px) {
		border-left: none;
		border-top: ${(p) => (p.$withLeftBorder ? "1px solid rgba(28, 26, 23, 0.08)" : "none")};
		padding: 28px 24px 32px;
	}
`;

const BrandTitle = styled.h3`
	margin: 0 0 28px;
	font-family: inherit;
	font-size: clamp(22px, 2vw, 28px);
	font-weight: 500;
	line-height: 1.1;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: ${BURGUNDY};
`;

const ItemsRow = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 0;
`;

const ItemColumn = styled.div`
	border-left: ${(p) => (p.$withLeftBorder ? "1px solid rgba(28, 26, 23, 0.08)" : "none")};
	padding-left: ${(p) => (p.$withLeftBorder ? "28px" : "0")};
	padding-right: 28px;

	@media (max-width: ${(p) => p.theme.breakpoints.sm}px) {
		padding-right: 0;
		padding-left: ${(p) => (p.$withLeftBorder ? "16px" : "0")};
	}
`;

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
