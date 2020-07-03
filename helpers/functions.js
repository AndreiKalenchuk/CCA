import {selectorsGen, selectorsCnt} from './../data/selectors.json';

function inputNumber (str, value) {
    if (str === "left") {
        if ($(selectorsCnt.lowerLimitField).isDisplayed()) {
            $(selectorsCnt.lowerLimitField).click();
        }
        $(selectorsCnt.lowerInputField).click();
        browser.keys('Backspace');
        browser.keys(value);
    } else {
        if ($(selectorsCnt.upperLimitField).isDisplayed()) {
            $(selectorsCnt.upperLimitField).click();
        }
        $(selectorsCnt.upperInputField).click();
        browser.keys('Backspace');
        browser.keys(value);
    }
}

module.exports = inputNumber;