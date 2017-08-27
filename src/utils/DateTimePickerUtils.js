import moment from 'moment';

export const KEYS = { up: 38, down: 40, left: 37, right: 39, escape: 27, enter: 13 };
export const isValidMoment = (value) => moment.isMoment(value) && value.isValid();
export const momentToValue = (momentObject, format) => {
	if (!isValidMoment(momentObject)) return undefined;
	return !format ? momentObject.valueOf() : momentObject.format(format);
};
export const toValue = (date, format, locale) => {
    return !isValidMoment(date) ? toMoment(date, format, locale) : momentToValue(moment(date), format);
};

export const toMoment = (date, format, locale) => {
	let momentDate = moment(date, format, locale);
	return !isValidMoment(momentDate) ? undefined : momentDate;
};

// export const setValue = (value) => {
// 	let modelValue = isValidMoment(value) ? value.clone() : valueToMoment(value),
// 		viewValue = momentToValue(modelValue, $scope.format);
// 	$scope.model = updateMoment($scope.model, modelValue, $scope);
// 	$ctrl.$modelValue = updateMoment($ctrl.$modelValue, modelValue, $scope);
// 	if ($attrs['ngModel'] != $attrs['momentPicker']) $scope.value = viewValue;
// 	if ($attrs['ngModel']) {
// 		$ctrl.$setViewValue(viewValue);
// 		$ctrl.$render(); // render input value
// 	}
// };

/**
 * Have some questions that need to be addressed for this function
 * Do we need to set the precision here for all the views or can 
 * we do it on a per view basis?
 * @param {*} formattedValue 
 * @param {*} format 
 */
// export const valueToMoment = (formattedValue, format) => {
// 	let momentValue;
// 	if (!formattedValue) return momentValue;
// 	if (!$scope.format) momentValue = moment(formattedValue);
// 	else momentValue = moment(formattedValue, $scope.format, $scope.locale);
// 	if ($scope.model) {
// 		// set value for each view precision (from Decade View to minView)
// 		const views = $scope.views.all.slice(0, $scope.views.all.indexOf($scope.detectedMinView));
// 		angular.forEach(views, (view: ViewString) => {
// 			const precision = $scope.views.precisions[view];
// 			momentValue[precision]($scope.model[precision]());
// 		});
// 	}
// 	return momentValue;
// };


/**
 * Offset getter method from jQuery: https://github.com/jquery/jquery/blob/3.1.1/src/offset.js#L78
 */
export const getOffset = (element)  => {
	if (!element) return;
	if (!element.getClientRects().length) return { top: 0, left: 0 };

	// https://github.com/jquery/jquery/blob/3.1.1/src/core.js#L220
	const isWindow = (obj)  => obj != null && obj === obj.window;
	const getWindow = (elem)  => isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;

	let rect = element.getBoundingClientRect();
	if (!rect.width && !rect.height) return rect;
	
	let doc = element.ownerDocument;
	let win = getWindow(doc);
	let docElem = doc.documentElement;

	return {
		top: rect.top + win.pageYOffset - docElem.clientTop,
		left: rect.left + win.pageXOffset - docElem.clientLeft
	};
};

export const momentFormatMap = (momentObj, viewType) => {
	const formats = {
		year: momentObj.format('YYYY')
	}
	return formats[viewType];
}

export default {
	momentFormatMap
}