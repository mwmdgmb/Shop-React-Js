// redux react-redux
import { connect } from "react-redux";
import { compose } from "redux";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop-selector";

// other module
import { createStructuredSelector } from "reselect";

// HOC
import WithSpinner from "../../components/with-spinner/with-spinner";

// component
import CollectionPage from "./collection-page";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
