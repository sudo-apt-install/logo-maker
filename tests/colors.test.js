const validateColor  = require('validate-color').default;

const validColor = (color) => {
    switch(validateColor) {
        case "undefined":
            console.error('Not a valid color');
            break;
        default:
            break;
    }
}
describe('color-testing', () => {
    it('should make sure that that a real color input returns valid', () => {
        const testedColor = validateColor('blue');
        expect(testedColor).toBe(true);
    });
});

describe('color-testing', () => {
    it('should make sure that that a valid hexadecimal color input returns valid', () => {
        const testedColor = validateColor('#58FCEC');
        expect(testedColor).toBe(true);
    });
});

describe('color-testing', () => {
    it('should make sure that that an invalid color input returns invalid', () => {
        const testedColor = validateColor('fhdjsakl');
        expect(testedColor).toBe(false);
    });
});



module.exports = validColor;