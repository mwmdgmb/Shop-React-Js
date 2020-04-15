import React from "react";

// react-router-dom
import { withRouter } from "react-router-dom";

// component
import CollectionItem from "../collection-item/collection-item";

// style
import "./preview-collections.styles.scss";

const PreviewCollection = ({ title, items, history, match, routeName }) => (
  <div className="collection-preview">
    <h1
      className="title"
      onClick={() => history.push(`${match.path}/${routeName}`)}
    >
      {title.toUpperCase()}
    </h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(PreviewCollection);
