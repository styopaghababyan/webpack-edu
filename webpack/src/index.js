import {List} from './List/List.js'
const app = new List();
let listItems = ["Angular", "React", "Vue", "Next", "Python"];
app.render(...listItems);