import React from 'react';
import PreviousArrow from './PreviousArrow';
import NextArrow from './NextArrow';
import utils from 'utils/DateTimePickerUtils';

class HeaderView extends React.Component {
  render() {
    return (
      <table className="header-view">
        <thead>
          <tr>
            <PreviousArrow  {...this.props} />
            <th onClick={this.props.setView}>{this.props.selectedView.title}</th>
            <NextArrow {...this.props}/>
          </tr>
        </thead>
      </table>
    )
  }
}

export default HeaderView;


