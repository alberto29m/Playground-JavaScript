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
printLowest(numbers);

function printBiggest(array){
    array.sort(function(a, b){return a+b});
    console.log(array[0])
}
printBiggest(numbers);

var aleatoryNumbers = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var index = 1;
function selectTheNumber(array, number){
    console.log(array[number])
}
selectTheNumber(aleatoryNumbers, index);

function numbersRepeat(array){
    var array2=[];
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
function convertArrayInString(array){
    console.log(array.toString())
}
convertArrayInString(myColor);


/*Primero convierto el número en un string, después convierto el string en un array con un string por número con la función .split; utilizo .reverse y finalmente .join para convertir el array en un solo string*/
function reverseNumbers(x){
    x = x + "";
    return x.split("").reverse().join("");
}
console.log(reverseNumbers(32443));


function alphabeticalOrder(a){
    return a.split("").sort().join("");
}
console.log(alphabeticalOrder("webmaster"));



/*Primero defino el array1, que no es más que el string recibido transformado en array con ''. Defino un nuevo array(newarray1) sin valor, que será el resultado. Utilizo un loop for que me haga un push de( la primera letra de cada array, usando chartAt, convertida en mayúsculas(.toUpperCase), más una expecificación con un .slice de que afecte solo al primer elemento del array). Finalemente, cierro el loop y hago que me retorne el nuevo array convirtiéndolo en string otra vez(.join). */
function firstLetterUppercase(str){
    var array1 = str.split(' ');
    var newarray1=[];
    for(var x=0; x < array1.length; x++){
        newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
    }
    return newarray1.join(' ');
}
console.log(firstLetterUppercase("prince of persia"));  



/*Función en la que defino una variable(el string dado pasado a array con la función .split); otra numérica para saber cual es la mayor, con un valor inicial de 0; y otra llamada word sin valor. Utilizo .forEach(para que la función de dentro afecte una por una a cada palabra dentro del array) del nuevo array. Dentro de la función, comparo con un if la variable longest con valor 0 y el tamaño de cada array(palabra). Si longuest<tamaño de la palabra, longuest pasa de ser 0 a las letras que tenga la palabra, y la variable word le doy el nuevo valor del newString.*/
function longestWord(str){
    var newString = str.split(" ");
    var longest = 0;
    var word;
    newString.forEach(function(newString) {
        if (longest < newString.length) {
            longest = newString.length;
            word = newString;
        }
    });
    return word;
}
console.log(longestWord("Web Development Tutorial"));


/*JavaScript Exercises 2
Exercise 1
Now let's add content to an HTML document instead of writing to the console.
Write a function called addBands(myBandList) that will list your favorite bands.
Start with an empty HTML page that contains a level 1 heading "My Favorite Bands"
and an empty unordered list with ID band-list.
Your function should use the JavaScript DOM to create list items and add them
to the unordered list, with one list item for each string in array myBandList.
For example, if I call:
  addBands(['Dire Straits', 'Kansas', 'Steely Dan']);
The function will add three list items to the unordered list.*/

/*function addBands(myBandList){
    var ul = document.getElementById("band-list");
    console.log(ul)
    for(var i=0; i < myBandList.length; i++){
        var listItem = document.createElement('li');
        listItem.textContent = myBandList[i];
        ul.appendChild(listItem);
    }
}
addBands(['Dire Straits', 'Kansas', 'Steely Dan']);*/


/*Exercise 2
Write a function called addMultTable(rows, cols) that will create a multiplication
table like this. Start with an empty HTML page that only contains a level 1 heading.
Your function should use the JavaScript DOM to insert an HTML table after the heading.
For example, if I call:
    addMultTable(4, 8);
It will create an HTML table with 4 rows
and 8 columns, and append it after the level 1 heading.*/

function addMultTable(rows, cols){
    var table1 = document.createElement("table");
    for(var i = 0; i < rows; i++){
        var tr = document.createElement("rows");
        table1.appendChild(tr);
        for(j = 0; j < cols; j++){
            var td = document.createElement("columns");
            tr.appendChild(td);
        }
    }
    
}
addMultTable(4,8)





