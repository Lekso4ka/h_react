import React from "react";
import { useParams } from "react-router-dom";
import { ArticleContent } from "../components/ArticleContent";
import { Container } from "../components/Container";
import { Seo } from "../components/Seo";
import { getArticleById } from "../data";
import { NotFound } from "./NotFound";

export const Article = ({}) => {
    const { article } = useParams();
    const data = getArticleById(article);
    if (!data) return <NotFound />;
    return <Container hh>
        <Seo {...data.seo} />
        <ArticleContent/>
    </Container>
}