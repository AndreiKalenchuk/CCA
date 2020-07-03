import {selectorsGen, selectorsCnt} from './../data/selectors.json';
import {expectedGen, expectedDCF} from './../data/expected.json'

function open() {
    browser.url('https://likejean.github.io/homework-5/');
    expect(browser).toHaveTitle(expectedGen.title,
        {message: 'Wrong page title'})
}

function createRandomFromRange() {
    const min = expectedDCF.inputMin;
    const max = expectedDCF.inputMax;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const createRandomInputInt = function () {
    const min = createRandomFromRange()
    const max = createRandomFromRange();
    let randomULF;
    let randomLLF;
    if (max <= min) {
        randomULF = min
        randomLLF = max;
    } else {
        randomULF = max
        randomLLF = min;
    }
    return {
        ULF: randomULF,
        LLF: randomLLF
    }
}

function inputNumber(str, value) {
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

function clickOnBlackBtn(index) {
    const button = $$(selectorsCnt.blackBtn)[index];
    button.click();
}


export {inputNumber, open, createRandomInputInt,
    clickOnBlackBtn};