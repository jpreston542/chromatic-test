---
to: src/components/atoms/<%= name %>/<%= name %>.js
---
import React from "react";
import PropTypes from "prop-types";

import { useStyles } from "./<%= name %>.styles"

const <%= name %> = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root} aria-label="<%= name %>-root">
            
        </div>
    );
};

<%= name %>.propTypes = {

};

<%= name %>.defaultProps = {
    
};

export default <%= name %>;



