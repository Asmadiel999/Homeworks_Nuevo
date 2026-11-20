require('dotenv').config()
const fs = require('fs')

const dir = './src/environments'

if (!fs.existsSync(dir)) fs.mkdirSync(dir, {recursive: true});

const content = `export const environment = {\n giphyApiKey: '${process.env.GIPHY_API_KEY}', \n}; \n`

fs.writeFileSync(`${dir}/environment.ts`, content)
fs.writeFileSync(`${dir}/environment.development.ts`, content)
console.log("Archivos environment generados")