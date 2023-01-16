import { clearContents, getInputValue, getNode, insertLast } from './lib/index.js'

import {  } from "./data/data.js";
import { jujeobData } from '../../data/data.js';

const submit = getNode('#submit');
const resultArea = getNode('.result')

console.log(submit);



function clickSubmitHandler(e){
  e.preventDefault();
  
  let name = getInputValue('#nameFiled');
  let list = jujeobData(name);
  let pick = list[getRandom(list.length-1)];

  console.log(pick);

  clearContents(resultArea);
  insertLast(resultArea, pick)

}

submit.addEventListener('click', clickSubmitHandler)