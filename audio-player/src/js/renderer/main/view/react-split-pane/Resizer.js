// https://github.com/tomkp/react-split-pane/blob/master/src/Resizer.js

import React, { Component, PropTypes } from 'react';


class Resizer extends Component {
    constructor(...args) {
        super(...args);

        this.onMouseDown = this.onMouseDown.bind(this);
    }

    onMouseDown(event) {
        this.props.onMouseDown(event);
    }

    render() {
        const { split, className } = this.props;
        const classes = ['Resizer', split, className];
        return (
            <span className={classes.join(' ')} onMouseDown={this.onMouseDown} />
        );
    }
}

Resizer.propTypes = {
    onMouseDown: PropTypes.func.isRequired,
    split: PropTypes.oneOf(['vertical', 'horizontal']),
    className: PropTypes.string.isRequired,
};

export default Resizer;
