import React from "react";
// redux react-redux
import { connect } from "react-redux";
import { selectCollectionForPreview } from "../../redux/shop/shop-selector";

// other module
import { createStructuredSelector } from "reselect";

// component
import PreviewCollection from "../preview-collection/preview-collections";

// style
import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
