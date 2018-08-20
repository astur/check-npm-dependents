const test = require('ava');
const type = require('easytype');
const m = require('.');

test('main', async t => {
    const n = await m('ava');
    t.true(type.isNumber.finite(n));
    t.true(n >= 0);
});

test('errors', async t => {
    const e2 = await t.throws(m('only.for.test'));
    t.is(e2.message, 'Bad name : "only.for.test"');
});

test('parse', t => {
    t.is(m.parse('<a href="?activeTab=dependents">1 2test <p>3</p></a>'), 123);
});
