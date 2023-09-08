// import translate from 'translate';

// async function f() {
//   const translatedText = await translate('Hello World', { from: 'en', to: 'ja' });
//   console.log("translatedText")
//   console.log(translatedText); // こんにちは世界
// }
// f().then(console.log("translatedText"));

import { translate } from '@vitalets/google-translate-api';

const { text } = await translate('Привет, мир! Как дела?', { to: 'ta' });

console.log(text)
