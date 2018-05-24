const test = require('ava');
const type = require('easytype');
const m = require('.');

test('check-npm-dependents', async t => {
    const n = await m('ava');
    t.true(type.isNumber.finite(n));
    t.true(n >= 0);
    t.is(await m('_ABC'), -1);
});
