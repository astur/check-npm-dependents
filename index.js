const got = require('got');
const load = require('cheerio').load;

const parse = body => {
    const $ = load(body);
    const depLink = $('a[href="?activeTab=dependents"]');
    return +depLink.text().replace(/\D/g, '');
};

module.exports = async name => {
    const response = await got(`https://www.npmjs.com/package/${name}`).catch(_ => {
        throw new Error(`Bad name : "${name}"`);
    });
    return parse(response.body);
};

module.exports.parse = parse;
