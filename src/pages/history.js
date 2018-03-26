/* global graphql */

import React from 'react';
import Features from '../components/features';
import Breadcrumb from '../components/breadcrumb';
import MenuItems from '../components/page-blocks/menu-items';
import Nav from '../components/nav';
import GetSheetDone from 'get-sheet-done';
import { FaCutlery } from 'react-icons/lib/fa';
import Spinner from 'react-spinkit';

class MenuPage extends React.Component {
  constructor() {
    super();
    this.state = {
      entrees: [],
      drinks: [],
      desserts: [],
      loading: true
    };
  }

  componentDidMount() {
    GetSheetDone.labeledCols(
      '1y9YVhJJCYs7NBj2a-aql7JJPFI6mmXW06efDaXBGYkc',
      1
    ).then(sheet => {
      console.log(sheet);
      this.setState({ entrees: sheet.data });
    });
    GetSheetDone.labeledCols(
      '1y9YVhJJCYs7NBj2a-aql7JJPFI6mmXW06efDaXBGYkc',
      2
    ).then(sheet => {
      console.log(sheet);
      this.setState({ drinks: sheet.data });
    });
    GetSheetDone.labeledCols(
      '1y9YVhJJCYs7NBj2a-aql7JJPFI6mmXW06efDaXBGYkc',
      3
    ).then(sheet => {
      console.log(sheet);
      this.setState({ desserts: sheet.data, loading: false });
    });
  }

  render() {
    return (
      <main>
        <Nav />
        <div style={{ height: 70 }} />
        <div className="container">
          <div className="row" style={{ margin: '0 auto' }}>
            <h1>History</h1>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <h4 className="title">Expert chefs for stunning dishes</h4>
              <div className="home-info">
                Contemporarium is a locally owned, locally sourced restaurant.
              </div>
              <div className="home-info">
                Our chefs are specially trained and specialize in meals that are
                suitable for all diets and health-minded individuals.
              </div>
              <div className="home-info">
                We believe in supporting local suppliers and purchase all of our
                produce and meats from local farmers.
              </div>
              <div className="home-info">
                You’ll love our fresh meals for lunch or dinner, bring the whole
                family to our beautiful locale!
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: 70 }} />
      </main>
    );
  }
}

export default MenuPage;

// used with the first commented out line of Menu Items
export const pageQuery = graphql`
  query MenuQuery {
    allDataJson {
      edges {
        node {
          menu {
            title
            description
            price
            calories
          }
        }
      }
    }
  }
`;
