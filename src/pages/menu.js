/* global graphql */

import React from "react";
import Features from "../components/features";
import MenuItems from "../components/page-blocks/menu-items";
import Nav from "../components/nav";
import GetSheetDone from "get-sheet-done";

class MenuPage extends React.Component {
  constructor() {
    super();
    this.state = {
      entrees: [],
      drinks: []
    };
  }

  componentDidMount() {
    GetSheetDone.labeledCols(
      "1y9YVhJJCYs7NBj2a-aql7JJPFI6mmXW06efDaXBGYkc",
      1
    ).then(sheet => {
      console.log(sheet);
      this.setState({ entrees: sheet.data });
    });
    GetSheetDone.labeledCols(
      "1y9YVhJJCYs7NBj2a-aql7JJPFI6mmXW06efDaXBGYkc",
      2
    ).then(sheet => {
      console.log(sheet);
      this.setState({ drinks: sheet.data });
    });
  }

  render() {
    return (
      <main>
        <Nav />
        <div style={{ height: 70 }} />
        {/* <MenuItems data={this.props.data.allDataJson.edges[0].node.menu} /> */}
        <MenuItems data={this.state.entrees} title="Entrees" />
        <MenuItems data={this.state.drinks} title="Drinks" />
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
