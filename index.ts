import axios from 'axios'

const test = await axios.get(`https://bluearchive.wiki/wiki/Main_Page`)

console.log(test.data)