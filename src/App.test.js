const GeneralInfo = require('./App');

test('"HandleChange"', () => {
    expect(GeneralInfo.handleChange('butt')).toBe("butt");
});