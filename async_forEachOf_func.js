// execute sync parse file for each iteration
import {forEachOf} from 'async'

let validConfigFileMap = {dev: 'anu', test: 'uio', prod: 'uhnju'};
let configs = {};
function parseFile(file, key, callback) {
    configs[key] = file + " " + file;
    callback();
}


forEachOf(validConfigFileMap, parseFile, function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log(configs);
    }
});

forEachOf(validConfigFileMap, parseFile).then(()=>{
    console.log(configs)
}).catch(err=> console.log(err))