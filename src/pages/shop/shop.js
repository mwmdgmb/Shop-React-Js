import React from "react";

// react-router-dom
import { Route } from "react-router-dom";
// component
import CollectionsOverview from "../../components/collections-overview/collections-overview";
import CollectionPage from "../collection/collection-page";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
