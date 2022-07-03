import "./styles.css";
import { replaceWithJSON } from "./replaceTemplate";

const str = "My name is {name} and my age is {{age}}";
const A = '{"name" : "John" , "age": "18" }';

const ans = replaceWithJSON(A, str);

document.getElementById("app").innerHTML = ans;
