import React from "react";
import { useParams } from "react-router-dom";
import { ArticleContent } from "../components/ArticleContent";
import { Container } from "../components/Container";
import { Seo } from "../components/Seo";
import { getArticleById } from "../data";

export const Article = ({}) => {
    const { article } = useParams();
    return <Container hh>
        <Seo {...getArticleById(article)?.seo} />
        <ArticleContent/>
    </Container>
}