import React from 'react';
import App from '@/Layouts/App';
import { Head } from '@inertiajs/inertia-react';
import Header from '@/Components/Header';
import Container from '@/Components/Container';
import ArticleBlock from '@/Components/ArticleBlock';
import Grid from '@/Components/Grid';
import Pagination from '@/Components/Pagination';

export default function Show({ user, ...props }) {
    const { data: articles, meta, links } = props.articles;
    return (
        <div>
            <Head title={user.name} />
            <Header>
                <Header.Title>{user.name}</Header.Title>
                <Header.Subtitle>Joined {user.joined}.</Header.Subtitle>
            </Header>

            <Container>
                {articles.length ? (
                    <>
                        <Grid>
                            {articles.map((article) => (
                                <ArticleBlock
                                    article={article}
                                    key={article.slug}
                                />
                            ))}
                        </Grid>
                        <Pagination {...{ meta, links }} />
                    </>
                ) : (
                    <p>No articles yet.</p>
                )}
            </Container>
        </div>
    );
}

Show.layout = (page) => <App children={page} />;
