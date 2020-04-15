import React from "react";
// redux react-redux
import { connect } from "react-redux";
import { selectDirecSection } from "../../redux/directory/direc-selector";

// other module
import { createStructuredSelector } from "reselect";

// component
import MenuItem from "../menu-item/menu-item";
// style
import "./directory.styles.scss";
const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirecSection
});

export default connect(mapStateToProps)(Directory);
