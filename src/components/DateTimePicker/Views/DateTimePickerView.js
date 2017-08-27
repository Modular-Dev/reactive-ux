import React from 'react';
import OptionalTopContent from './OptionalTopContent';
import OptionalBottomContent from './OptionalBottomContent';
import Moment from 'react-moment';
import HeaderView from './Header';
import classNames from 'classnames';
import '../datetime-picker.css';
import Views from './index';
import utils from 'utils/DateTimePickerUtils';


class DateTimePickerView extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			selectedView: {
				viewType: props.startView,
				title: utils.momentFormatMap(props.value, props.startView)
			}
		}
		this.state = Object.assign({}, this.state, this.props);
		
	}

	setView(e) {
		console.log ('setView:: ', e)
    	//e.preventDefault()
		// this.setState({
		//   someVar: someValue
		// })
	}

	handleKeyDown(e) {
		console.log ('handleKeyDown:: ', e)
		//e.preventDefault()
		// this.setState({
		//   someVar: someValue
		// })
	}

	toggleCalendarView(e) {
		e.preventDefault();
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
	
	render() {
		const {format, showHeader, additions, htmlId, value} = this.props;
		const containerClasses = classNames({
		'datetime-picker-disabled': this.props.disabled,
		'open': this.state.isOpen,
		'datetime-picker-container': true,
		[`${this.state.selectedView.viewType}-view`]: this.state.selectedView.viewType
		});
		const CurrentView = Views[this.state.selectedView.viewType];

		console.log ('this.state:: ', this.state)
		return (
			<div id={htmlId}>
				<Moment onClick={this.toggleCalendarView.bind(this)} date={value} format={format} />
				{
					this.state.isOpen && 
					<div className={containerClasses}>
						{additions.top && <OptionalTopContent content={additions.top} />}
						{showHeader && <HeaderView setView={this.setView} selectedView={this.state.selectedView}/>}
						{/* views go here*/}
						<CurrentView />
						{additions.bottom && <OptionalBottomContent content={additions.bottom} />}
					</div>
				}
			</div>
		)
	}
}

export default DateTimePickerView;