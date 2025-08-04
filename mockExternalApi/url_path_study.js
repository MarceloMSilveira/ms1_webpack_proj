import path from "path";
import url from 'node:url';

console.log(`The file url: ${import.meta.url}`);

const filePath = url.fileURLToPath(import.meta.url);

console.log(`The file path: ${filePath}`);

const dirname = path.dirname(filePath);

console.log(`The dirname: ${dirname}`);