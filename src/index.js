module.exports = function solveEquation(equation) {
  // your implementation
var ur = equation.split([' ']);
var a = ur[0];
var b = (ur[3]+ur[4])*1;
var c = (ur[7]+ur[8])*1;
 //console.log(ur); 
// console.log('a=' + a + 'b=' + b+ 'c=' + c ); 
 var x = new Array();
 var D = b*b - 4 * a * c;
 
 if (D > 0)
 {
	 x.push(Math.round((-b + Math.sqrt(D)) / (2 * a)));
	 x.push(Math.round((-b - Math.sqrt(D)) / (2 * a)));
  
 }

 return  x.sort(function(a,b) { return a - b; });
 
  }

