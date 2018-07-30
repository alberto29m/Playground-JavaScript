var text = "Starting javascript...";
console.log(text);
var myName="Alberto";
console.log(myName);
var age = 24;
console.log(age);
var ignasiAge=32;
var ageDiff= ignasiAge - age;
console.log(ageDiff);
if(age > 21){
    console.log("You are older than 21");
} else{
    console.log("You are not older than 21")
}
if(ignasiAge>age){
    console.log("Ignasi is older than you");
} else if(ignasiAge<age){
    console.log("Ignasi is younger than you");
}else if(ignasiAge==age){
    console.log("You have the same age as Ignasi");
}
var classNames = ["Alberto","Esneider","Mica","Oscar"];
console.log(classNames[0]);
console.log(classNames[3]);
for( var n = 0; n < 3; n++){
	console.log(classNames[n]);
}
var studentsAges = [24, 29, 31];
var l=0;
while(l<studentsAges.length){
    if(studentsAges[l]%2==0){
        console.log(studentsAges[l]);
    }
    l ++ ;
}
for(var j = 0; j < studentsAges.length; j++){
    if(studentsAges[j]%2==0){
        console.log(studentsAges[j]);
    }
}
var numbers=[5, 6, 8, 9, 12, 9, 13, 3, 24]
function printLowest(array){
    array.sort(function(a, b){return a-b});
    console.log(array[0])
}
printLowest(numbers)
function printBiggest(array){
    array.sort(function(a, b){return a+b});
    console.log(array[0])
}
printBiggest(numbers)
var aleatoryNumbers = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var index = 1;
function selectTheNumber(array, number){
    console.log(array[number])
}
selectTheNumber(aleatoryNumbers, index)

function numbersRepeat(array){
    var array2=[]
   for(i = 0; i < array.length; i++){
    for(j = i+1; j < array.length; j++){
      if(array[i] == array[j]){
          console.log(array[i]);
          array2.push(array[i])
      }
    }
 }
    console.log(array2)
}
numbersRepeat(aleatoryNumbers)
var myColor = ["Red", "Green", "White", "Black"];