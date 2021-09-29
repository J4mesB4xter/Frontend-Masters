import { readFile, writeFile } from 'fs/promises';

let template = await readFile(new URL('template.html', import.meta.url));


let data = {
    title : "SUCCESS",
    body : "where's waldo",
};

for (const [k, v] of Object.entries(data)) {
    template = template.toString().replace(`{${k}}`, v);
}

await writeFile(new URL('index2.html', import.meta.url), template);