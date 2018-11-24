var a = true;
var b = 100 ;
var c = "Hi";
var d = [5 , "false"];

console.log(a);
console.log(b);
console.log(c);
console.log(d);

//typeOf my variables

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

// JS sensetive with capitalizition  correct : typeof / Wrong : typeOf

/* ( kind of Advance) ! let yourOption = prompt();

 compare your option */

 //compare typeof a with others
 
 if (typeof a === typeof b){
 	alert(" 'a' and 'b' are the same type!");
 } else if (typeof a === typeof c){
 	alert(" 'a' and 'c' are the same type!");
 } else if (typeof a === typeof d) {
 	alert(" 'a' and 'd' are the same type!");
 }else{
 	alert(" 'a' is not same match with other variables types");
 }

 // compare typeof b with other Copy/paste ... lol

  if (typeof b === typeof a){
 	alert(" 'b' and 'a' are the same type!");
 } else if (typeof b === typeof c){
 	alert(" 'b' and 'c' are the same type!");
 } else if (typeof b === typeof d) {
 	alert(" 'b' and 'd' are the same type!");
 }else{
 	alert(" 'b' is not same match with other variables types");
 }

// Again !!!??

  if (typeof c === typeof a){
 	alert(" 'c' and 'a' are the same type!");
 } else if (typeof c === typeof b){
 	alert(" 'c' and 'b' are the same type!");
 } else if (typeof c === typeof d) {
 	alert(" 'c' and 'd' are the same type!");
 }else{
 	alert(" 'c' is not same match with other variables types");
 }

// Last Copy

  if (typeof d === typeof a){
 	alert(" 'd' and 'a' are the same type!");
 } else if (typeof d === typeof b){
 	alert(" 'd' and 'b' are the same type!");
 } else if (typeof d === typeof c) {
 	alert(" 'd' and 'c' are the same type!");
 }else{
 	alert(" 'd' is not same match with other variables types");
 }