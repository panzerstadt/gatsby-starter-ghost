import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { Layout, PostCard, Pagination } from "../components/common";
import { MetaData } from "../components/common/meta";

/**
 * Author page (/author/:slug)
 *
 * Loads all posts for the requested author incl. pagination.
 *
 */
const Author = ({ data, location, pageContext }) => {
    const author = data.ghostAuthor || "dude";
    const twitterUrl = author.twitter
        ? `https://twitter.com/${author.twitter.replace(/^@/, ``)}`
        : null;
    const facebookUrl = author.facebook
        ? `https://www.facebook.com/${author.facebook.replace(/^\//, ``)}`
        : null;

    return (
        <>
            <MetaData data={data} location={location} type="profile" />
            <Layout>
                <div className="container">
                    <header className="author-header">
                        <div className="author-header-content">
                            <h1>{author.name}</h1>
                            {author.bio && <p>{author.bio}</p>}
                            <div className="author-header-meta">
                                {author.website && (
                                    <a
                                        className="author-header-item"
                                        href={author.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Website
                                    </a>
                                )}
                                {twitterUrl && (
                                    <a
                                        className="author-header-item"
                                        href={twitterUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Twitter
                                    </a>
                                )}
                                {facebookUrl && (
                                    <a
                                        className="author-header-item"
                                        href={facebookUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Facebook
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className="author-header-image">
                            {author.profile_image && (
                                <img
                                    src={author.profile_image}
                                    alt={author.name}
                                />
                            )}
                        </div>
                    </header>
                    <h4>an about page</h4>

                    <Pagination pageContext={pageContext} />
                </div>
            </Layout>
        </>
    );
};

export default Author;
