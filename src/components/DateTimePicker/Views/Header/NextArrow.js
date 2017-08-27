import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class NextArrow extends React.Component {

  render() {
    const { selectable } = this.props;
    const isVisible = classNames({ 'disabled': !selectable });
    return (
      <th className={isVisible} onClick={this.props.setView}>
        <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
          <path fill="#000000" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
      </th>
    )
  }
}

NextArrow.propTypes = {
  label: PropTypes.string
}

NextArrow.defaultProps = {
  selectable: true
}

export default NextArrow;



