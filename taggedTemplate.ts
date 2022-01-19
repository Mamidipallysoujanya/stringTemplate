let person = "sony";
let age=25;
function myTag(string, personExp,ageExp){
    let str0=string[0];
    let str1=string[1];
    let str2=string[2];
    let agestr;
    if(agestr>90){
    agestr= `centenarian`;
}else{
    agestr= `yongster`;
}
return `${str0}${personExp}${str1}${agestr}${str2}`;
}
let output= myTag`That ${person} is a ${age}.`;
console.log(output);