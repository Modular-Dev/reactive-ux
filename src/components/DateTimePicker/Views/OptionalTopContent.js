import React from 'react';
import PropTypes from 'prop-types';


const OptionalTopContent = ({content}) => {
  return (
    <div className="datetime-picker-addition top">{content}</div>
  )
}


OptionalTopContent.PropTypes = {
  content: PropTypes.string.isRequired
}

export default OptionalTopContent;