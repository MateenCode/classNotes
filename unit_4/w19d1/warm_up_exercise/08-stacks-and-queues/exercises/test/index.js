const expect = require('chai').expect;
const { bracketMatching } = require('../stacksAndQueues');

describe('bracketMatching', () => {
    it('should return true with matching brackets', () => {
        const valid = bracketMatching("(hello hello)");
        expect(valid).to.be.true;
        const valid2 = bracketMatching("'a{b}{c(1[2]3)}'")
        expect(valid2).to.be.true;
        const valid3 = bracketMatching('a[bc(123)]')
        expect(valid3).to.be.true;
        const valid4 = bracketMatching('()')
        expect(valid4).to.be.true;
        const valid5 = bracketMatching('no brackets here')
        expect(valid5).to.be.true;
    });
    it('should return false with improperly matched brackets', () => {
        const invalid = bracketMatching('a[bc(12]3)')
        expect(invalid).to.be.false;
        const invalid2 = bracketMatching('a{b}{c(1}[2]3)')
        expect(invalid2).to.be.false;
        const invalid3 = bracketMatching("'[]]')}")
        expect(invalid3).to.be.false;
        const invalid4 = bracketMatching("'abc(123')}")
        expect(invalid4).to.be.false;
    });
})