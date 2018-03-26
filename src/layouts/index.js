import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/header';
import Footer from '../components/footer';

import '../../sass/style.scss';

class TemplateWrapper extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Image Strategies">
          <link
            href="https://fonts.googleapis.com/css?family=Caesar+Dressing"
            rel="stylesheet"
          />
        </Helmet>
        <Header test="test" headerImage={this.props.data.imageSharp} />
        {this.props.children()}
        <Footer />
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const pageQuery = graphql`
  query HeaderImageQuery {
    imageSharp(id: { regex: "/header/" }) {
      sizes(maxWidth: 10000) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
