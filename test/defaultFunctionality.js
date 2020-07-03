import {selectorsGen, selectorsCnt} from './../data/selectors.json';
import {expectedGen, expectedCnt, expectedDCF} from './../data/expected.json';
import {
    open, inputNumber, createRandomInputInt,
    clickOnBlackBtn
} from "../helpers/functions";

const randomULF = createRandomInputInt().ULF.toString();
const randomLLF = createRandomInputInt().LLF.toString();

describe('DEFAULT FUNCTIONALITY', () => {
    before('open App', function () {
        open();
    })

    it('TC-040 Subtract 1 gives -1', function () {
        clickOnBlackBtn(0);
        expect($(selectorsCnt.countValue)).toHaveText(expectedDCF.countValueTC040);
    })
    it('TC-041 Add 3 gives 2', function () {
        clickOnBlackBtn(0);
        expect($(selectorsCnt.countValue)).toHaveText(expectedDCF.countValueTC040);
    })

    it('TC-042 LLF accept 1', function () {
        inputNumber('left', expectedDCF.inputMin.toString());
        expect($(selectorsCnt.errorMsg)).not.toBeDisplayed();
    })
});