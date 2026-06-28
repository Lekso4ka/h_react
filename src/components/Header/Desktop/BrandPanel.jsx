import React from "react";
import { Link } from "react-router-dom";
import { BrandColumn, BrandLink, BrandSection, ColumnLink, Grid } from "./style";

export const BrandPanel = ({ data = [], onNavigate }) => {
    return (
        <Grid>
            { data.map((brand, index) => (
                <BrandSection key={ brand.title } $withLeftBorder={ index === 0 } cnt={ brand.items.length }>
                    <h3>{ brand.title }</h3>
                    
                    { brand.items.map((item, itemIndex) => (
                        <BrandColumn key={ item.label } $withLeftBorder={ itemIndex > 0 }>
                            <BrandLink
                                as={ item.href?.startsWith("/") ? Link : "a" }
                                to={ item.href?.startsWith("/") ? item.href : undefined }
                                href={ item.href?.startsWith("/") ? undefined : item.href ?? "#" }
                                pic={ item.image }
                                onClick={ (e) => {
                                    if (!onNavigate) return;
                                    e.preventDefault();
                                    onNavigate(item.href);
                                } }
                            >
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

