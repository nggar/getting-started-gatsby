import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/layout';

const BlogPost = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            {data.allMdx.nodes.map((node) => (
                <article key={node.id}>
                    <h2>
                        <Link to={`./${node.slug}`}>
                            {node.frontmatter.title}
                        </Link>
                    </h2>
                    <p>{node.frontmatter.date}</p>
                </article>
            ))}
        </Layout>
    );
};

export const query = graphql`
    query {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                }
                id
                slug
            }
        }
    }
`;

export default BlogPost;
