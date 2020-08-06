var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(chocolateBars, element){return [element, ...chocolateBars]}
function destructivelyAddElementToBeginningOfArray(chocolateBars, element){return chocolateBars.unshift(element)}
function addElementToEndOfArray(chocolateBars, element){return[...chocolateBars, element]}
function destructivelyAddElementToEndOfArray(chocolateBars, element){return chocolateBars.push(element)}
