import React from 'react';
import PropTypes from 'prop-types';


const OptionalBottomContent = ({content}) => {
  return (
    <div className="datetime-picker-addition bottom">{content}</div>
  )
}


OptionalBottomContent.PropTypes = {
  content: PropTypes.string.isRequired
}

export default OptionalBottomContent;