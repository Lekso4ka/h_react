import React from "react";
import { Link } from "react-router-dom";
import { Column, ColumnLink, Grid } from "./style";

export const ColumnsPanel = ({
    data = [],
    onNavigate
}) => {
    return (
        <Grid>
            { data.map((col, index) => (
                <Column key={ col.title } $withLeftBorder={ index === 0 }>
                    <ColumnLink
                        as={ col.href?.startsWith("/") ? Link : "a" }
                        to={ col.href?.startsWith("/") ? col.href : undefined }
                        href={ col.href?.startsWith("/") ? undefined : col.href ?? "#" }
                        pic={ col.image }
                        onClick={ (e) => {
                            if (!onNavigate) return;
                            e.preventDefault();
                            onNavigate(col.href);
                        } }
                    >
                        <h3>{ col.title }</h3>
                        <div
                            className="img"
                        >
                            { col.digit && <span className="digit">{ col.digit }</span> }
                            { col.seasonLabel && <span className="label">{ col.seasonLabel }</span> }
                        </div>
                    </ColumnLink>
                </Column>
            )) }
        </Grid>
    );
}




