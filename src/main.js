// event handlers // обработчики событий
// event listeners // прослушиватели событий
const { head, startBody, scripts, endBody } = require('./const');
const fs = require('fs/promises');

const urlGoogleTabDataKey = 'https://docs.google.com/spreadsheets/d/1X5Qa8wG7eFJ4PXrVpPNqDYqAm1GlQ4sD/edit#gid=352767914';
const srcFileName = './data_files/key_data.tsv';
const distFileName = '../index.html';

const parseFile = data => {
    return data.split('\n').map(row => {
        const arrRows = row.replace('\r', '').split('\t');
        arrRows.length = 6; // count columns
        return arrRows;
    });
}

const createHtmlFile = dataArray => {
    const s = (className, text) => `<span class="${className}">${text}</span>`;
    const sColor = color => `<span class="color ${color ? `${color}_mod` : ''}"></span>`;

    let list = '';
    dataArray.forEach(arr => {
        const [numKey, color, codeDuplicate, address, name, descriptions] = arr;
        list += `\t\t<li class="object_item js-item">
            ${sColor(color)}
            ${numKey        ? s('num_key', numKey) : ''}
            ${codeDuplicate ? s('code', `(код ${codeDuplicate})`) : ''}
            ${address       ? s('address', address) : ''}
            ${name          ? s('name', name) : ''}
            ${descriptions  ? s('descriptions', `(${descriptions})`) : ''}\r\t\t</li>\r`
            // для красивой записи в файле html делаем отступы
            .replace(/>\s+</g, '>\r\t\t\t<')
            .replace(/\t\t\t<\/li>/g, '\t\t</li>')
            .replace(/\t\t\t<li/g, '\t\t<li');
    });

    return `${head}${startBody}${list}${scripts}${endBody}`;
}

async function example() {
    try {
        const data = await fs.readFile(srcFileName, 'utf8');
        const arrayStrings = parseFile(data);
        const content = createHtmlFile(arrayStrings);
        await fs.writeFile(distFileName, content);
    } catch (err) {
        console.log(err);
    }
}
example();






