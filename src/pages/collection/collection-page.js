import React from "react";

// react-redux redux
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop-selector";

// component
import CollectionItem from "../../components/collection-item/collection-item";

// style
import "./collection-page.styles.scss";

const CollectionPage = ({ collection }) => {
  const { items, title } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
