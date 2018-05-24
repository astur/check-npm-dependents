const scra = require('scra');
const load = require('cheerio').load;

module.exports = async name => {
    const response = await scra(`https://www.npmjs.com/package/${name}`);
    if(response.statusCode !== 200) return -1;
    const $ = load(response.body);
    const depLink = $('a[href="?activeTab=dependents"]');
    if(depLink.length !== 1) return -1;
    return +depLink.text().replace(/[^0-9]/g, '');
};
