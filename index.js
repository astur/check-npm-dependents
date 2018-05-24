const scra = require('scra');
const load = require('cheerio').load;

module.exports = async name => {
    const response = await scra(`https://www.npmjs.com/package/${name}`);
    const err = () => new Error(`Unable to determine dependents for package: "${name}"`);
    if(response.statusCode !== 200) throw err();
    const $ = load(response.body);
    const depLink = $('a[href="?activeTab=dependents"]');
    if(depLink.length !== 1) throw err();
    return +depLink.text().replace(/[^0-9]/g, '');
};
