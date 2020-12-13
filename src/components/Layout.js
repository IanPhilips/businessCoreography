import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import '../assets/sass/new-age.scss';

class Layout extends Component {
  render() {
    const { children} = this.props;
  const description = 'Virtual Coreography for Business - Improving Human Connection Over Video by Rachel Cossar';
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                siteUrl:url
              }
            }
          }
        `}


        render={data => (
          <>


            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'keywords', content: 'coreography, video chat, zoom, business coreography' },
              ]
              }

            >
              <meta property='og:image' content={"https://www.virtualbycfb.com/assessment.png"} />
              <meta property='twitter:image' content={"https://www.virtualbycfb.com/assessment.png"} />
              <meta property='og:image:width' content={1052} />
              <meta property='og:image:height' content={1032} />
              <meta property='description' content={description} />
              <meta property='og:description' content={description} />
              <meta property='twitter:description' content={description} />
              <meta property='twitter:card' content={"summary_large_image"} />
              <meta property='twitter:title' content={data.site.siteMetadata.title} />
              <meta property='og:title' content={data.site.siteMetadata.title} />

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
