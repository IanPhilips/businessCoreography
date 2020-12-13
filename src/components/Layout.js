import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/new-age.scss';

class Layout extends Component {
  render() {
    const { children, image:metaImage} = this.props;
    const image=metaImage && metaImage.src ? `${site.siteMetadata.siteUrl}${metaImage.src}` : null;
    let meta =[];
  const description = 'Improving Human Connection Over Video';
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}

        render={data => (
          <>


            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: `description`,
                  content: description,
                },
                { name: 'keywords', content: 'coreography, video chat, zoom, business coreography' },
                {
                  property: `og:title`,
                  content: data.site.siteMetadata.title,
                },
                {
                  property: `og:description`,
                  content: description,
                },
                {
                  property: `og:type`,
                  content: `website`,
                },
                {
                  name: `twitter:title`,
                  content: data.site.siteMetadata.title,
                },
                {
                  name: `twitter:description`,
                  content: description,
                },
              ]
                .concat(
                  metaImage
                    ? [
                      {
                        property: "og:image",
                        content: image,
                      },
                      {
                        property: "og:image:width",
                        content: 1362,
                      },
                      {
                        property: "og:image:height",
                        content: 805,
                      },
                      {
                        name: "twitter:card",
                        content: "summary_large_image",
                      },
                    ]
                    : [
                      {
                        name: "twitter:card",
                        content: "summary",
                      },
                    ]
                )
                .concat(meta)}

            >
              <html lang="en" />
            </Helmet>
            <div className={'page-top'}>{children}</div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noFooter: PropTypes.bool,
  noHeader: PropTypes.bool,
  noSiteHeader: PropTypes.bool,
  activeLink: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
};

export default Layout;
