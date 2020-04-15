// redux react-redux
import { connect } from "react-redux";
import { selectIsCollectionsFetching } from "../../redux/shop/shop-selector";
import { compose } from "redux";
// HOC
import WithSpinner from "../with-spinner/with-spinner";

// other module
import { createStructuredSelector } from "reselect";

// component
import CollectionsOverview from "./collections-overview";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
