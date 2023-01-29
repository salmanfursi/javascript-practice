var mark=40;
if (mark>=80 && mark<=100){
    console.log("you got A+")
}
else if (mark>=70 && mark<=79){
    console.log("you got A")
}
else if (mark>=60 && mark<=69){
    console.log("you got A-")
}
else if (mark>=50 && mark<=59){
    console.log("you got c+")
}
else if(mark>32 && mark<=49){
    console.log("you got d+")
}
else if(mark>=0 && mark<=32) 
console.log('you are fail ')
else{
    console.log('please enter a valid mark')
}