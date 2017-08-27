import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DateTimePickerView from './Views/DateTimePickerView';


/**
 * 
 * Mini all-in-one DateTime picker that allows you
 * to select a date followed by a time without 
 * having a bulky interface
 */
class DateTimePicker extends React.Component {

  render() {
    
    return (
      <div className="datetime-picker">
        <DateTimePickerView {...this.props}/>
      </div>
    )
  }
}

DateTimePicker.propTypes = {
  /** datetime moment object. */
  value: PropTypes.object,
  /** Locale code. */
  locale: PropTypes.string,
  /** Shows the header in the view. */
  showHeader: PropTypes.bool,
  /** Open/closes the picker when set to true or false. */
  isOpen: PropTypes.bool,
  /** Closes the picker after selecting a date. */
  autoclose: PropTypes.bool,
  /** Views the picker inline. */
  inline: PropTypes.bool,
  /** Updates picker model after selecting a date in each view. */
  setOnSelect: PropTypes.bool,
  /** Highlights the current day. */
  today: PropTypes.bool,
  /** Allows using the keyboard to navigate the picker. */
  keyboard: PropTypes.bool,
  /** Format of the output value and min/max date. */
  format: PropTypes.string,
  /** Minimum navigable view. */
  minView: PropTypes.string,
  /** Maximum navigable view. */
  maxView: PropTypes.string,
  /** Initial view when the picker is open. */
  startView: PropTypes.string,
  /** Represents the minimum selectable date (as String in the same format of the value, or as a Moment.js object). */
  minDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  /** Represents the maximum selectable date (as String in the same format of the value, or as a Moment.js object). */
  maxDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  startDate:   PropTypes.string,
  /** Disables the picker if true */
  disabled: PropTypes.bool,
  /** Sets a fixed position for the picker ["top left", "top right", "bottom left", "bottom right"] */
  position: PropTypes.string,
  /** Forces picker value between the range minDate and maxDate. */
  validate: PropTypes.bool,
  /** Custom content above and below picker view. { top: undefined, bottom: undefined }*/
  additions: PropTypes.object,
  /** Function fired upon change in picker value. */
  change: PropTypes.func,
  /** Return true if the given date can be selected in the current view (called for every date in the view) */
  selectable: PropTypes.func,
  /** A unique html id attribute  */
  htmlId: PropTypes.string.isRequired,
  /** Is the a required form input field */
  required: PropTypes.bool
}

/** Defaults */
const locale = 'en', format = 'LL LTS';
DateTimePicker.defaultProps = {
  locale: locale,
  showHeader:  true,
  isOpen: false,
  autoclose: false,
  inline: false,
  setOnSelect: true,
  today: true,
  keyboard: false,
  format: format,
  minView: 'decade',
  maxView: 'minute',
  startView: 'year',
  value:  moment().locale(locale),
  disabled: false,
  validate: false,
  additions: {top: undefined, bottom: undefined}
}


export default DateTimePicker;