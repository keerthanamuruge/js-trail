import { v2 } from '@google-cloud/translate';
const { Translate } = v2;
const translate = new Translate();
const text = 'Hello world';
const target = 'es';
translate.translate(text, target).then(results => {
  const translation = results[0];
  console.log(`Text: ${text}`);
  console.log(`Translation: ${translation}`);
}).catch(err => {
  console.error('ERROR:', err);
});