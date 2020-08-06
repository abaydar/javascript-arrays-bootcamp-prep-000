var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(chocolateBars, element){return [...chocolateBars, element]}
function destructivelyAddElementToBeginningOfArray(chocolateBars, element){return chocolateBars.unshift(element)}
function addElementToEndOfArray(chocolateBars, element){return[element, ...chocolateBars]}
function destructivelyAddElementToEndOfArray(chocolateBars, element){return chocolateBars.push(element)}
