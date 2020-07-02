import {selectorsGen, selectorsCnt} from './../data/selectors.json';
import {expectedGen, expectedCnt} from './../data/expected.json';


describe('Complex Counter App', function () {
    describe('Getting to the page', function () {
        it('TC-001 Page title is Complex Counter App', function () {
            browser.url('');
            expect(browser).toHaveTitle(expectedGen.title)
        })
    });

    describe('verify elements exist', function () {
        it('TC-002 Header', function () {
            expect($(selectorsGen.header)).toBeDisplayed();
        })

        it('TC-003 Total Result', function () {
            expect($(selectorsGen.totalResult)).toBeDisplayed();
        })

        it('TC-004 Add Name Field', function () {
            expect($(selectorsGen.addNameField)).toBeDisplayed();
        })

        it('TC-005 Label for Add Name Field', function () {
            const element = $$(selectorsGen.addNameFieldLabel);
            const index = element.length - 2;
            expect(element[index]).toBeDisplayed();
        })

        it('TC-006 Default Value Field', function () {
            expect($(selectorsGen.defaultValueField)).toBeDisplayed();
        })

        it('TC-007 Label for Default Value Field', function () {
            const element = $$(selectorsGen.addNameFieldLabel);
            const index = element.length - 1;
            expect(element[index]).toBeDisplayed();
        })

        it('TC-008 Add Counter', function () {
            expect($(selectorsGen.addCounterBtn)).toBeDisplayed();
        })
    });

    describe('verify elements value', function () {
        it('TC-009 Header = Counter', function () {
            expect($(selectorsGen.header)).toHaveText(expectedGen.header);
        })

        it('TC-010 Total Result = Total: 0', function () {
            expect($(selectorsGen.totalResult)).toHaveText(expectedGen.totalResult);
        })

        it('TC-011 Label for Add Name Field = Enter Counter Title:', function () {
            const element = $$(selectorsGen.addNameFieldLabel);
            const index = $$(selectorsGen.addNameFieldLabel).length - 2;
            expect(element[index]).toHaveText(expectedGen.addNameFieldLabel);
        })

        it('TC-012 Placeholder for Add Name Field = Counter Name', function () {
            expect($(selectorsGen.addNameField)).toHaveValue(expectedGen.addNameField);
        })

        it('TC-013 Label for Default Value Field = Enter Initial Count:', function () {
            const element = $$(selectorsGen.defaultValueFieldLabel);
            const index = $$(selectorsGen.defaultValueFieldLabel).length - 1;
            expect(element[index]).toHaveText(expectedGen.defaultValueFieldLabel);
        })

        it('TC-014 Placeholder for Default Value Field = 50', function () {
            expect($(selectorsGen.defaultValueField)).toHaveValue(expectedGen.defaultValueField);
        })

        it('TC-015 Add Counter = ADD COUNTER', function () {
            expect($(selectorsGen.addCounterBtn)).toHaveText(expectedGen.addCounterBtn);
        })
    });

    describe('Default Elements Counter exist', function () {
        it('TC-016 Counter Name', function () {
            expect($$(selectorsCnt.counterName)[1]).toBeDisplayed();
        })

        it('TC-017 Count Value', function () {
            expect($(selectorsCnt.countValue)).toBeDisplayed();
        })

        it('TC-018 LLF', function () {
            expect($(selectorsCnt.lowerLimitField)).toBeDisplayed();
        })

        it('TC-019 ULF', function () {
            expect($(selectorsCnt.upperLimitField)).toBeDisplayed();
        })

        it('TC-020, TC-021 Default Sub & Add Buttons', function () {
            const elementsList = $$(selectorsCnt.blackBtn);
            elementsList.forEach(el => expect(el).toBeDisplayed(),
                {message: `black button not Displayed on a page`});
        })

        it('TC-021 Label for Default Value Field', function () {
            const element = $$(selectorsGen.defaultValueFieldLabel)
            const index = element.length - 1;
            expect(element[index]).toBeDisplayed();
        })

        it('TC-022 Add Counter', function () {
            expect($(selectorsGen.addCounterBtn)).toBeDisplayed();
        })
    });
});