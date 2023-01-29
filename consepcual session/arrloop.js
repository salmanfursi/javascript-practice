//  const fursi = ['thar','salman', 'nihad', 'zihad'];
// fursi.pop()
// fursi.push('tharin')
// fursi.unshift('tharin')
// fursi.shift()

//  console.log(fursi.indexOf('nihad'));
//  fursi[2]='kawser'
//  delete fursi[2] //delete mathod not recomanded we use to replace anay item using with push pop
//  etc
//  console.log(fursi.join(" * "))


// exploring splice
//we use push pop to include elament in last in an array and shift unshif for include begining in ana array but we can also use splice to include elament in the center on any position of an array
/***
 * if we want ad some value or add elament in the center or anyposition of an array then we can  use splice jbecuse splice can include an elament on any position oif array thats at
 * 
 */


var fursi = [1, 2, 3, 4, 5];
// fursi[2]=(5);
fursi.splice( 2,1)
console.log(fursi)
