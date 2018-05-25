const scra = require('scra');
const load = require('cheerio').load;

const parse = body => {
    const $ = load(body);
    const depLink = $('a[href="?activeTab=dependents"]');
    if(depLink.length !== 1) return -1;
    return +depLink.text().replace(/[^0-9]/g, '');
};

module.exports = async name => {
    const response = await scra(`https://www.npmjs.com/package/${name}`);
    const err = () => new Error(`Unable to determine dependents for package: "${name}"`);
    if(response.statusCode !== 200) throw err();
    const count = parse(response.body);
    if(count === -1) throw err();
    return count;
};

module.exports.parse = parse;
