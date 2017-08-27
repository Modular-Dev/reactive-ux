import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class PreviousArrow extends React.Component {

  render() {
    const { selectable } = this.props;
    const isVisible = classNames({ 'disabled': !selectable });
    return (
      <th className={isVisible} onClick={this.props.setView}>
        <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24" disabled={!selectable}>
          <path fill="#000000" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
        </svg>
      </th>
    )
  }
}

// label: this.$sce.trustAsHtml($scope.leftArrow),
// selectable: true,
// set: () => {
//   if ($scope.view.previous.selectable) {
//     $scope.view.moment.subtract($scope.view.unit(), $scope.view.precision());
//     $scope.view.update();
//     $scope.view.render();
//   }
// }

PreviousArrow.propTypes = {
  label: PropTypes.string,
  selectable: PropTypes.bool
}

PreviousArrow.defaultProps = {
  selectable: true
}

export default PreviousArrow;

