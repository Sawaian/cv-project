
const EditText = require ('./Components/EditText');

test('"editField"', () => {
    expect(EditText.editField(2, 2)).toBe(4);
});