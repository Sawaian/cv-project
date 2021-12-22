
const experience = require ('./index');

test('"editField"', () => {
    expect(experience.changeInfo('red')).toBe('red');
});