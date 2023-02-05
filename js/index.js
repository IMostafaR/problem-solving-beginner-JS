/* 
1- Write a program that allow to user enter number then print it
*/
var inputOne = document.getElementById("qOne");

function getInputOne() {
  var contentOne = "";

  if (Object.is(Number(inputOne.value), NaN) || inputOne.value.length == 0) {
    // using Object.is to check inputOne is NaN or not https://medium.com/coding-in-simple-english/how-to-check-for-nan-in-javascript-4294e555b447#:~:text=In%20JavaScript%2C%20the%20best%20way,NaN%20will%20always%20return%20true%20.
    // inputOne.value.length == 0 to check if the input is empty
    contentOne += `<div class="alert alert-danger" role="alert">
    &#x274C;	INVALID INPUT. Please Enter a VALID number!
  </div>`;
    document.getElementById("contentOne").innerHTML = contentOne;

    // window.alert("INVALID INPUT. Please Enter a VALID number");
  } else {
    console.log(inputOne.value);
    contentOne +=
      `<div class="alert alert-success" role="alert">
    &#x270C;	Thanks, your input is` +
      " " +
      inputOne.value +
      " " +
      `!
  </div>`;
    document.getElementById("contentOne").innerHTML = contentOne;
    // window.alert("Thanks, your input is" + " " + inputOne.value);
  }
}

/*
2- Write a program that take number from user then print yes if that number can divide by 3
and 4 otherwise print no
*/

var inputTwo = document.getElementById("qTwo");

function getInputTwo() {
  var contentTwo = "";

  if (Object.is(Number(inputTwo.value), NaN) || inputTwo.value.length == 0) {
    contentTwo += `<div class="alert alert-danger" role="alert">
    &#x274C;	INVALID INPUT. Please Enter a VALID number!
  </div>`;
    document.getElementById("contentTwo").innerHTML = contentTwo;
  } else if (Number(inputTwo.value) == 0) {
    console.log("Yes");
    contentTwo +=
      `<div class="alert alert-warning" role="alert">
      &#x1F60A;	Yes,` +
      " " +
      inputTwo.value +
      " " +
      `could be divided by 3 and 4, but the answer will be 0!
</div>`;
    document.getElementById("contentTwo").innerHTML = contentTwo;
  } else if (
    Number(inputTwo.value) % 4 == 0 &&
    Number(inputTwo.value) % 3 == 0
  ) {
    console.log("Yes");
    contentTwo +=
      `<div class="alert alert-success" role="alert">
      &#x1F60A;	Yes,` +
      " " +
      inputTwo.value +
      " " +
      `could be divided by 3 and 4!
</div>`;
    document.getElementById("contentTwo").innerHTML = contentTwo;
  } else {
    console.log("No");
    contentTwo +=
      `<div class="alert alert-info" role="alert">
      &#x1F914;		No,` +
      " " +
      inputTwo.value +
      " " +
      `couldn't be divided by 3 and 4!
</div>`;
    document.getElementById("contentTwo").innerHTML = contentTwo;
  }
}

/*
3- Write a program that allows the user to insert 2 integers then print the max
*/
var inputThreeA = document.getElementById("qThreeA");
var inputThreeB = document.getElementById("qThreeB");

function getInputThree() {
  var contentThree = "";

  if (
    Object.is(Number(inputThreeA.value), NaN) ||
    Object.is(Number(inputThreeB.value), NaN) ||
    inputThreeA.value.length == 0 ||
    inputThreeB.value.length == 0
  ) {
    contentThree += `<div class="alert alert-danger" role="alert">
    &#x274C;	INVALID INPUT. Please Enter a VALID number!
  </div>`;
    document.getElementById("contentThree").innerHTML = contentThree;
  } else if (Number(inputThreeA.value) == Number(inputThreeB.value)) {
    console.log(inputThreeA.value);
    contentThree +=
      `<div class="alert alert-info" role="alert">
    &#x1F914;` +
      " " +
      inputThreeA.value +
      " " +
      "is equal to " +
      +inputThreeB.value +
      " " +
      `!
</div>`;
    document.getElementById("contentThree").innerHTML = contentThree;
  } else if (Number(inputThreeA.value) > Number(inputThreeB.value)) {
    console.log(inputThreeA.value);
    contentThree +=
      `<div class="alert alert-success" role="alert">
    &#x1F914;` +
      " " +
      inputThreeA.value +
      " " +
      "is bigger than " +
      +inputThreeB.value +
      " " +
      `!
</div>`;
    document.getElementById("contentThree").innerHTML = contentThree;
  } else {
    console.log(inputThreeB.value);
    contentThree +=
      `<div class="alert alert-success" role="alert">
  &#x1F914;` +
      " " +
      inputThreeB.value +
      " " +
      "is bigger than " +
      +inputThreeA.value +
      " " +
      `!
</div>`;
    document.getElementById("contentThree").innerHTML = contentThree;
  }
}

/*
4- WWrite a program that allows the user to insert an integer then print negative if it is
negative number otherwise print positive.
*/
var inputFour = document.getElementById("qFour");

function getInputFour() {
  var contentFour = "";

  if (Object.is(Number(inputFour.value), NaN) || inputFour.value.length == 0) {
    contentFour += `<div class="alert alert-danger" role="alert">
    &#x274C;	INVALID INPUT. Please Enter a VALID number!
  </div>`;
    document.getElementById("contentFour").innerHTML = contentFour;
  } else if (Number(inputFour.value) == 0) {
    console.log("Not Positive nor Negative");
    contentFour +=
      `<div class="alert alert-info" role="alert">
    &#x1F914;` +
      " " +
      inputFour.value +
      " " +
      `don't have a sign i.e. it's zero !
</div>`;
    document.getElementById("contentFour").innerHTML = contentFour;
  } else if (Number(inputFour.value) > 0) {
    console.log("Positive");
    contentFour +=
      `<div class="alert alert-success" role="alert">
    &#x1F914;` +
      " " +
      inputFour.value +
      " " +
      `has a positive value !
</div>`;
    document.getElementById("contentFour").innerHTML = contentFour;
  } else {
    console.log("Negative");
    contentFour +=
      `<div class="alert alert-success" role="alert">
    &#x1F914;` +
      " " +
      inputFour.value +
      " " +
      `has a negative value !
</div>`;
    document.getElementById("contentFour").innerHTML = contentFour;
  }
}

/*
5- Write a program that allows the user to insert 2 integers then print the max
*/
var inputFiveA = document.getElementById("qFiveA");
var inputFiveB = document.getElementById("qFiveB");
var inputFiveC = document.getElementById("qFiveC");

function getInputFive() {
  var contentFive = "";

  if (
    Object.is(Number(inputFiveA.value), NaN) ||
    Object.is(Number(inputFiveB.value), NaN) ||
    Object.is(Number(inputFiveC.value), NaN) ||
    inputFiveA.value.length == 0 ||
    inputFiveB.value.length == 0 ||
    inputFiveC.value.length == 0
  ) {
    contentFive += `<div class="alert alert-danger" role="alert">
    &#x274C;	INVALID INPUT. Please Enter a VALID number!
  </div>`;
    document.getElementById("contentFive").innerHTML = contentFive;
  } else {
    console.log(
      "max element= ",
      Math.max(inputFiveA.value, inputFiveB.value, inputFiveC.value),
      " ",
      "min element= ",
      Math.min(inputFiveA.value, inputFiveB.value, inputFiveC.value)
    );
    contentFive +=
      `<div class="alert alert-success" role="alert">
  &#x1F914;max element= ` +
      " " +
      Math.max(inputFiveA.value, inputFiveB.value, inputFiveC.value) +
      ", min element= " +
      Math.min(inputFiveA.value, inputFiveB.value, inputFiveC.value) +
      ` !
</div>`;
    document.getElementById("contentFive").innerHTML = contentFive;
  }
}

/*
6- Write a program that allows the user to insert integer number then
check If a number is oven or odd
*/
var inputSix = document.getElementById("qSix");

function getInputSix() {
  var contentSix = "";

  if (Object.is(Number(inputSix.value), NaN) || inputSix.value.length == 0) {
    contentSix += `<div class="alert alert-danger" role="alert">
    &#x274C;	INVALID INPUT. Please Enter a VALID number!
  </div>`;
    document.getElementById("contentSix").innerHTML = contentSix;
  } else if (Number(inputSix.value) == 0) {
    console.log("Not even or odd");
    contentSix +=
      `<div class="alert alert-info" role="alert">
    &#x1F914;` +
      " " +
      inputSix.value +
      " " +
      `isn't even or odd i.e. it's zero !
</div>`;
    document.getElementById("contentSix").innerHTML = contentSix;
  } else if (inputSix.value % 2 == 0) {
    console.log("Even");
    contentSix +=
      `<div class="alert alert-success" role="alert">
&#x1F914; ` +
      inputSix.value +
      " " +
      "is an even number" +
      ` !
</div>`;
    document.getElementById("contentSix").innerHTML = contentSix;
  } else {
    console.log("Odd");
    contentSix +=
      `<div class="alert alert-success" role="alert">
&#x1F914; ` +
      inputSix.value +
      " " +
      "is an odd number" +
      ` !
</div>`;
    document.getElementById("contentSix").innerHTML = contentSix;
  }
}

/*
7- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
then print vowel otherwise print consonant
*/
var inputSeven = document.getElementById("qSeven"); // couldn't avoid special char. inputs

function getInputSeven() {
  var contentSeven = "";

  if (
    inputSeven.value / 0 == Infinity || // to avoid numbered values
    inputSeven.value.length > 1 || // to validate single input value
    inputSeven.value == 0 ||
    inputSeven.value.length == 0
  ) {
    contentSeven += `<div class="alert alert-danger" role="alert">
    &#x274C;	INVALID INPUT. Please Enter a single letter!
  </div>`;
    document.getElementById("contentSeven").innerHTML = contentSeven;
  } else if (
    inputSeven.value == "a" ||
    inputSeven.value == "A" ||
    inputSeven.value == "e" ||
    inputSeven.value == "E" ||
    inputSeven.value == "i" ||
    inputSeven.value == "I" ||
    inputSeven.value == "o" ||
    inputSeven.value == "O" ||
    inputSeven.value == "u" ||
    inputSeven.value == "U"
  ) {
    console.log("Vowel");
    contentSeven +=
      `<div class="alert alert-success" role="alert">
&#x1F914; ` +
      inputSeven.value +
      " " +
      "is a Vowel letter" +
      ` !
</div>`;
    document.getElementById("contentSeven").innerHTML = contentSeven;
  } else {
    console.log("Constant");
    contentSeven +=
      `<div class="alert alert-success" role="alert">
&#x1F914; ` +
      inputSeven.value +
      " " +
      "is a constant letter" +
      ` !
</div>`;
    document.getElementById("contentSeven").innerHTML = contentSeven;
  }
}

/*
8- Write a program that allows user to insert integer then print all numbers between 1 to
that’s number
*/

var inputEight = document.getElementById("qEight");

function getInputEight() {
  var dorpDown = "";
  var contentEight = "";
  if (
    Object.is(Number(inputEight.value), NaN) ||
    inputEight.value.length == 0
  ) {
    contentEight += `<div class="alert alert-danger" role="alert">
    &#x274C;	INVALID INPUT. Please Enter a VALID number!
  </div>`;
    document.getElementById("contentEight").innerHTML = contentEight;
    // window.alert("INVALID INPUT. Please Enter a VALID number");
  } else {
    for (var i = 1; i < Number(inputEight.value) + 1; i++) {
      dorpDown += "<option>" + i + "</option>";
      document.getElementById("dMenu").innerHTML = dorpDown;

      console.log(i);
    }
    contentEight +=
      `<div class="alert alert-success" role="alert">
&#x1F914; The dropdown menu is generated from 1 to ` +
      inputEight.value +
      " " +
      ` !
</div>`;
    document.getElementById("contentEight").innerHTML = contentEight;
  }
}

/*
9- Write a program that allows user to insert integer then print a multiplication table up to 12
*/

var inputNine = document.getElementById("qNine");

function getInputNine() {
  var contentNine = "";
  if (Object.is(Number(inputNine.value), NaN) || inputNine.value.length == 0) {
    contentNine += `<div class="alert alert-danger" role="alert">
    &#x274C;	INVALID INPUT. Please Enter a VALID number!
  </div>`;
    document.getElementById("contentNine").innerHTML = contentNine;
  } else {
    for (var i = 1; i < 13; i++) {
      contentNine +=
        `<tr>
        <td>` +
        inputNine.value +
        `</td>
        <td>x</td>
        <td>` +
        i +
        `</td>
        <td>=</td>
        <td>` +
        inputNine.value * i +
        `</td>
      </tr>`;
      document.getElementById("contentNine").innerHTML = contentNine;

      console.log(Number(inputNine.value) * i);
    }
  }
}

/*
10- Write a program that allows to user to insert number then print all even numbers
between 1 to this number
*/
var inputTen = document.getElementById("qTen");

function getInputTen() {
  var contentTen = "";
  if (Object.is(Number(inputTen.value), NaN) || inputTen.value.length == 0) {
    contentTen += `<div class="alert alert-danger" role="alert">
    &#x274C;	INVALID INPUT. Please Enter a VALID number!
  </div>`;
    document.getElementById("contentTen").innerHTML = contentTen;
  } else {
    for (var i = 1; i < Number(inputTen.value) + 1; i++) {
      if (i % 2 == 0) {
        console.log(i);
        contentTen +=
          `<tr> 
        <td>` +
          i +
          `</td>
      </tr>`;
        document.getElementById("contentTen").innerHTML = contentTen;
      }
    }
  }
}

/*
11- Write a program that take two integers then print the power
*/
var inputElevenA = document.getElementById("qElevenA");
var inputElevenB = document.getElementById("qElevenB");

function getInputEleven() {
  var contentEleven = "";

  if (
    Object.is(Number(inputElevenA.value), NaN) ||
    Object.is(Number(inputElevenB.value), NaN) ||
    inputElevenA.value.length == 0 ||
    inputElevenB.value.length == 0
  ) {
    contentEleven += `<div class="alert alert-danger" role="alert">
    &#x274C;	INVALID INPUT. Please Enter a VALID number!
  </div>`;
    document.getElementById("contentEleven").innerHTML = contentEleven;
  } else {
    console.log(inputElevenA.value ** inputElevenB.value);
    contentEleven +=
      `<div class="alert alert-success" role="alert">
  &#x1F914; ` +
      " " +
      inputElevenA.value +
      "^" +
      inputElevenB.value +
      "= " +
      inputElevenA.value ** inputElevenB.value +
      `
</div>`;
    document.getElementById("contentEleven").innerHTML = contentEleven;
  }
}

/*
12- Write a program to enter marks of five subjects and calculate total, average and
percentage.
*/

var inputTwelveA = document.getElementById("qTwelveA");
var inputTwelveB = document.getElementById("qTwelveB");
var inputTwelveC = document.getElementById("qTwelveC");
var inputTwelveD = document.getElementById("qTwelveD");
var inputTwelveE = document.getElementById("qTwelveE");

function getInputTwelve() {
  var contentTwelve = "";

  if (
    Object.is(Number(inputTwelveA.value), NaN) ||
    Object.is(Number(inputTwelveB.value), NaN) ||
    Object.is(Number(inputTwelveC.value), NaN) ||
    Object.is(Number(inputTwelveD.value), NaN) ||
    Object.is(Number(inputTwelveE.value), NaN) ||
    inputTwelveA.value.length == 0 ||
    inputTwelveB.value.length == 0 ||
    inputTwelveC.value.length == 0 ||
    inputTwelveD.value.length == 0 ||
    inputTwelveE.value.length == 0
  ) {
    contentTwelve += `<div class="alert alert-danger" role="alert">
    &#x274C;	INVALID INPUT. Please Enter a VALID number!
  </div>`;
    document.getElementById("contentTwelve").innerHTML = contentTwelve;
  } else {
    var subjectNum = 5;
    var fullMark = 100;
    var total =
      Number(inputTwelveA.value) +
      Number(inputTwelveB.value) +
      Number(inputTwelveC.value) +
      Number(inputTwelveD.value) +
      Number(inputTwelveE.value);
    var avg = total / subjectNum;
    var percent = (total / (fullMark * 5)) * 100;
    console.log(
      "Total marks= ",
      total,
      "\n Average marks = ",
      avg,
      "\n Percentage= ",
      percent + "%"
    );
    contentTwelve +=
      `<div class="alert alert-success" role="alert">
      &#x1F947; ` +
      "Total marks= " +
      total +
      ",  Average marks = " +
      avg +
      ",  Percentage= " +
      percent +
      "%" +
      `</div>`;
    document.getElementById("contentTwelve").innerHTML = contentTwelve;
  }
}

/*
13- Write a program to enter marks of five subjects and calculate total, average and
percentage.
*/
var inputThirteen = document.getElementById("qThirteen");

// function getDays(month) {
//   var year = {
//     1: "Days in Month: 31",
//     2: "Days in Month: 28",
//     3: "Days in Month: 31",
//     4: "Days in Month: 30",
//     5: "Days in Month: 31",
//     6: "Days in Month: 30",
//     7: "Days in Month: 31",
//     8: "Days in Month: 31",
//     9: "Days in Month: 30",
//     10: "Days in Month: 31",
//     11: "Days in Month: 30",
//     12: "Days in Month: 31",
//   };
//   return year;
// }

function getInputThirteen() {
  var contentThirteen = "";
  if (
    Object.is(Number(inputThirteen.value), NaN) ||
    inputThirteen.value.length == 0 ||
    inputThirteen.value <= 0 ||
    inputThirteen.value > 12
  ) {
    contentThirteen += `<div class="alert alert-danger" role="alert">
    &#x274C;	INVALID INPUT. Please Enter a VALID number!
  </div>`;
    document.getElementById("contentThirteen").innerHTML = contentThirteen;
  } else if (inputThirteen.value == 1) {
    console.log("Days in Month: 31");
    contentThirteen +=
      `<div class="alert alert-success" role="alert">
  &#x1F4C5; Days in Month ` +
      inputThirteen.value +
      `: 31 Days</div>`;
    document.getElementById("contentThirteen").innerHTML = contentThirteen;
  } else if (inputThirteen.value == 2) {
    console.log("Days in Month: 28");
    contentThirteen +=
      `<div class="alert alert-success" role="alert">
  &#x1F4C5; Days in Month ` +
      inputThirteen.value +
      `: 28 Days</div>`;
    document.getElementById("contentThirteen").innerHTML = contentThirteen;
  } else if (inputThirteen.value == 3) {
    console.log("Days in Month: 31");
    contentThirteen +=
      `<div class="alert alert-success" role="alert">
  &#x1F4C5; Days in Month ` +
      inputThirteen.value +
      `: 31 Days</div>`;
    document.getElementById("contentThirteen").innerHTML = contentThirteen;
  } else if (inputThirteen.value == 4) {
    console.log("Days in Month: 30");
    contentThirteen +=
      `<div class="alert alert-success" role="alert">
  &#x1F4C5; Days in Month ` +
      inputThirteen.value +
      `: 30 Days</div>`;
    document.getElementById("contentThirteen").innerHTML = contentThirteen;
  } else if (inputThirteen.value == 5) {
    console.log("Days in Month: 31");
    contentThirteen +=
      `<div class="alert alert-success" role="alert">
  &#x1F4C5; Days in Month ` +
      inputThirteen.value +
      `: 31 Days</div>`;
    document.getElementById("contentThirteen").innerHTML = contentThirteen;
  } else if (inputThirteen.value == 6) {
    console.log("Days in Month: 30");
    contentThirteen +=
      `<div class="alert alert-success" role="alert">
  &#x1F4C5; Days in Month ` +
      inputThirteen.value +
      `: 30 Days</div>`;
    document.getElementById("contentThirteen").innerHTML = contentThirteen;
  } else if (inputThirteen.value == 7) {
    console.log("Days in Month: 31");
    contentThirteen +=
      `<div class="alert alert-success" role="alert">
  &#x1F4C5; Days in Month ` +
      inputThirteen.value +
      `: 31 Days</div>`;
    document.getElementById("contentThirteen").innerHTML = contentThirteen;
  } else if (inputThirteen.value == 8) {
    console.log("Days in Month: 31");
    contentThirteen +=
      `<div class="alert alert-success" role="alert">
  &#x1F4C5; Days in Month ` +
      inputThirteen.value +
      `: 31 Days</div>`;
    document.getElementById("contentThirteen").innerHTML = contentThirteen;
  } else if (inputThirteen.value == 9) {
    console.log("Days in Month: 30");
    contentThirteen +=
      `<div class="alert alert-success" role="alert">
  &#x1F4C5; Days in Month ` +
      inputThirteen.value +
      `: 30 Days</div>`;
    document.getElementById("contentThirteen").innerHTML = contentThirteen;
  } else if (inputThirteen.value == 10) {
    console.log("Days in Month: 31");
    contentThirteen +=
      `<div class="alert alert-success" role="alert">
  &#x1F4C5; Days in Month ` +
      inputThirteen.value +
      `: 31 Days</div>`;
    document.getElementById("contentThirteen").innerHTML = contentThirteen;
  } else if (inputThirteen.value == 11) {
    console.log("Days in Month: 30");
    contentThirteen +=
      `<div class="alert alert-success" role="alert">
  &#x1F4C5; Days in Month ` +
      inputThirteen.value +
      `: 30 Days</div>`;
    document.getElementById("contentThirteen").innerHTML = contentThirteen;
  } else if (inputThirteen.value == 12) {
    console.log("Days in Month: 31");
    contentThirteen +=
      `<div class="alert alert-success" role="alert">
  &#x1F4C5; Days in Month ` +
      inputThirteen.value +
      `: 31 Days</div>`;
    document.getElementById("contentThirteen").innerHTML = contentThirteen;
  }
}

/*
14- Write a program to input marks of five subjects
Physics, Chemistry, Biology, Mathematics and Computer
, Find percentage and grade
*/

var inputFourteenA = document.getElementById("qFourteenA");
var inputFourteenB = document.getElementById("qFourteenB");
var inputFourteenC = document.getElementById("qFourteenC");
var inputFourteenD = document.getElementById("qFourteenD");
var inputFourteenE = document.getElementById("qFourteenE");

function getInputFourteenA() {
  var contentFourteenA = "";
  if (
    Object.is(Number(inputFourteenA.value), NaN) ||
    inputFourteenA.value.length == 0 ||
    inputFourteenA.value < 0 ||
    inputFourteenA.value > 100
  ) {
    contentFourteenA += `<div class="alert alert-danger" role="alert">
    &#x274C;	INVALID INPUT. Please Enter a VALID number!
  </div>`;
    document.getElementById("contentFourteenA").innerHTML = contentFourteenA;
  } else if (inputFourteenA.value >= 90) {
    console.log("Grad A");
    contentFourteenA += `<div class="alert alert-success" role="alert">
    &#x1F947; Grad A 
      </div>`;
    document.getElementById("contentFourteenA").innerHTML = contentFourteenA;
  } else if (inputFourteenA.value >= 80) {
    console.log("Grad B");
    contentFourteenA += `<div class="alert alert-success" role="alert">
    &#x1F60C; Grad B 
      </div>`;
    document.getElementById("contentFourteenA").innerHTML = contentFourteenA;
  } else if (inputFourteenA.value >= 70) {
    console.log("Grad C");
    contentFourteenA += `<div class="alert alert-success" role="alert">
    &#x1F610; Grad C 
      </div>`;
    document.getElementById("contentFourteenA").innerHTML = contentFourteenA;
  } else if (inputFourteenA.value >= 60) {
    console.log("Grad D");
    contentFourteenA += `<div class="alert alert-success" role="alert">
    &#x1F615; Grad D 
      </div>`;
    document.getElementById("contentFourteenA").innerHTML = contentFourteenA;
  } else if (inputFourteenA.value >= 40) {
    console.log("Grad E");
    contentFourteenA += `<div class="alert alert-warning" role="alert">
    &#x1F630; Grad E 
      </div>`;
    document.getElementById("contentFourteenA").innerHTML = contentFourteenA;
  } else if (inputFourteenA.value < 40) {
    console.log("Grad F");
    contentFourteenA += `<div class="alert alert-warning" role="alert">
    &#x1F62D; Grad F 
      </div>`;
    document.getElementById("contentFourteenA").innerHTML = contentFourteenA;
  }
}

function getInputFourteenB() {
  var contentFourteenB = "";
  if (
    Object.is(Number(inputFourteenB.value), NaN) ||
    inputFourteenB.value.length == 0 ||
    inputFourteenB.value < 0 ||
    inputFourteenB.value > 100
  ) {
    contentFourteenB += `<div class="alert alert-danger" role="alert">
    &#x274C;	INVALID INPUT. Please Enter a VALID number!
  </div>`;
    document.getElementById("contentFourteenB").innerHTML = contentFourteenB;
  } else if (inputFourteenB.value >= 90) {
    console.log("Grad A");
    contentFourteenB += `<div class="alert alert-success" role="alert">
    &#x1F947; Grad A 
      </div>`;
    document.getElementById("contentFourteenB").innerHTML = contentFourteenB;
  } else if (inputFourteenB.value >= 80) {
    console.log("Grad B");
    contentFourteenB += `<div class="alert alert-success" role="alert">
    &#x1F60C; Grad B 
      </div>`;
    document.getElementById("contentFourteenB").innerHTML = contentFourteenB;
  } else if (inputFourteenB.value >= 70) {
    console.log("Grad C");
    contentFourteenB += `<div class="alert alert-success" role="alert">
    &#x1F610; Grad C 
      </div>`;
    document.getElementById("contentFourteenB").innerHTML = contentFourteenB;
  } else if (inputFourteenB.value >= 60) {
    console.log("Grad D");
    contentFourteenB += `<div class="alert alert-success" role="alert">
    &#x1F615; Grad D 
      </div>`;
    document.getElementById("contentFourteenB").innerHTML = contentFourteenB;
  } else if (inputFourteenB.value >= 40) {
    console.log("Grad E");
    contentFourteenB += `<div class="alert alert-warning" role="alert">
    &#x1F630; Grad E 
      </div>`;
    document.getElementById("contentFourteenB").innerHTML = contentFourteenB;
  } else if (inputFourteenB.value < 40) {
    console.log("Grad F");
    contentFourteenB += `<div class="alert alert-warning" role="alert">
    &#x1F62D; Grad F 
      </div>`;
    document.getElementById("contentFourteenB").innerHTML = contentFourteenB;
  }
}

function getInputFourteenC() {
  var contentFourteenC = "";
  if (
    Object.is(Number(inputFourteenC.value), NaN) ||
    inputFourteenC.value.length == 0 ||
    inputFourteenC.value < 0 ||
    inputFourteenC.value > 100
  ) {
    contentFourteenC += `<div class="alert alert-danger" role="alert">
    &#x274C;	INVALID INPUT. Please Enter a VALID number!
  </div>`;
    document.getElementById("contentFourteenC").innerHTML = contentFourteenC;
  } else if (inputFourteenC.value >= 90) {
    console.log("Grad A");
    contentFourteenC += `<div class="alert alert-success" role="alert">
    &#x1F947; Grad A 
      </div>`;
    document.getElementById("contentFourteenC").innerHTML = contentFourteenC;
  } else if (inputFourteenC.value >= 80) {
    console.log("Grad B");
    contentFourteenC += `<div class="alert alert-success" role="alert">
    &#x1F60C; Grad B 
      </div>`;
    document.getElementById("contentFourteenC").innerHTML = contentFourteenC;
  } else if (inputFourteenC.value >= 70) {
    console.log("Grad C");
    contentFourteenC += `<div class="alert alert-success" role="alert">
    &#x1F610; Grad C 
      </div>`;
    document.getElementById("contentFourteenC").innerHTML = contentFourteenC;
  } else if (inputFourteenC.value >= 60) {
    console.log("Grad D");
    contentFourteenC += `<div class="alert alert-success" role="alert">
    &#x1F615; Grad D 
      </div>`;
    document.getElementById("contentFourteenC").innerHTML = contentFourteenC;
  } else if (inputFourteenC.value >= 40) {
    console.log("Grad E");
    contentFourteenC += `<div class="alert alert-warning" role="alert">
    &#x1F630; Grad E 
      </div>`;
    document.getElementById("contentFourteenC").innerHTML = contentFourteenC;
  } else if (inputFourteenC.value < 40) {
    console.log("Grad F");
    contentFourteenC += `<div class="alert alert-warning" role="alert">
    &#x1F62D; Grad F 
      </div>`;
    document.getElementById("contentFourteenC").innerHTML = contentFourteenC;
  }
}

function getInputFourteenD() {
  var contentFourteenD = "";
  if (
    Object.is(Number(inputFourteenD.value), NaN) ||
    inputFourteenD.value.length == 0 ||
    inputFourteenD.value < 0 ||
    inputFourteenD.value > 100
  ) {
    contentFourteenD += `<div class="alert alert-danger" role="alert">
    &#x274C;	INVALID INPUT. Please Enter a VALID number!
  </div>`;
    document.getElementById("contentFourteenD").innerHTML = contentFourteenD;
  } else if (inputFourteenD.value >= 90) {
    console.log("Grad A");
    contentFourteenD += `<div class="alert alert-success" role="alert">
    &#x1F947; Grad A 
      </div>`;
    document.getElementById("contentFourteenD").innerHTML = contentFourteenD;
  } else if (inputFourteenD.value >= 80) {
    console.log("Grad B");
    contentFourteenD += `<div class="alert alert-success" role="alert">
    &#x1F60C; Grad B 
      </div>`;
    document.getElementById("contentFourteenD").innerHTML = contentFourteenD;
  } else if (inputFourteenD.value >= 70) {
    console.log("Grad C");
    contentFourteenD += `<div class="alert alert-success" role="alert">
    &#x1F610; Grad C 
      </div>`;
    document.getElementById("contentFourteenD").innerHTML = contentFourteenD;
  } else if (inputFourteenD.value >= 60) {
    console.log("Grad D");
    contentFourteenD += `<div class="alert alert-success" role="alert">
    &#x1F615; Grad D 
      </div>`;
    document.getElementById("contentFourteenD").innerHTML = contentFourteenD;
  } else if (inputFourteenD.value >= 40) {
    console.log("Grad E");
    contentFourteenD += `<div class="alert alert-warning" role="alert">
    &#x1F630; Grad E 
      </div>`;
    document.getElementById("contentFourteenD").innerHTML = contentFourteenD;
  } else if (inputFourteenD.value < 40) {
    console.log("Grad F");
    contentFourteenD += `<div class="alert alert-warning" role="alert">
    &#x1F62D; Grad F 
      </div>`;
    document.getElementById("contentFourteenD").innerHTML = contentFourteenD;
  }
}

function getInputFourteenE() {
  var contentFourteenE = "";
  if (
    Object.is(Number(inputFourteenE.value), NaN) ||
    inputFourteenE.value.length == 0 ||
    inputFourteenE.value < 0 ||
    inputFourteenE.value > 100
  ) {
    contentFourteenE += `<div class="alert alert-danger" role="alert">
    &#x274C;	INVALID INPUT. Please Enter a VALID number!
  </div>`;
    document.getElementById("contentFourteenE").innerHTML = contentFourteenE;
  } else if (inputFourteenE.value >= 90) {
    console.log("Grad A");
    contentFourteenE += `<div class="alert alert-success" role="alert">
    &#x1F947; Grad A 
      </div>`;
    document.getElementById("contentFourteenE").innerHTML = contentFourteenE;
  } else if (inputFourteenE.value >= 80) {
    console.log("Grad B");
    contentFourteenE += `<div class="alert alert-success" role="alert">
    &#x1F60C; Grad B 
      </div>`;
    document.getElementById("contentFourteenE").innerHTML = contentFourteenE;
  } else if (inputFourteenE.value >= 70) {
    console.log("Grad C");
    contentFourteenE += `<div class="alert alert-success" role="alert">
    &#x1F610; Grad C 
      </div>`;
    document.getElementById("contentFourteenE").innerHTML = contentFourteenE;
  } else if (inputFourteenE.value >= 60) {
    console.log("Grad D");
    contentFourteenE += `<div class="alert alert-success" role="alert">
    &#x1F615; Grad D 
      </div>`;
    document.getElementById("contentFourteenE").innerHTML = contentFourteenE;
  } else if (inputFourteenE.value >= 40) {
    console.log("Grad E");
    contentFourteenE += `<div class="alert alert-warning" role="alert">
    &#x1F630; Grad E 
      </div>`;
    document.getElementById("contentFourteenE").innerHTML = contentFourteenE;
  } else if (inputFourteenE.value < 40) {
    console.log("Grad F");
    contentFourteenE += `<div class="alert alert-warning" role="alert">
    &#x1F62D; Grad F 
      </div>`;
    document.getElementById("contentFourteenE").innerHTML = contentFourteenE;
  }
}

// ******************************** Using switch case*******************************

/*
15- Write a program to print total number of days in month
*/

var inputFifteen = document.getElementById("qFifteen");

function getInputFifteen() {
  var contentFifteen = "";
  switch (Number(inputFifteen.value)) {
    case 1:
      console.log("Days in Month: 31");
      contentFifteen +=
        `<div class="alert alert-success" role="alert">
      &#x1F4C5; Days in Month ` +
        inputFifteen.value +
        `: 31 Days</div>`;
      document.getElementById("contentFifteen").innerHTML = contentFifteen;
      break;
    case 2:
      console.log("Days in Month: 28");
      contentFifteen +=
        `<div class="alert alert-success" role="alert">
  &#x1F4C5; Days in Month ` +
        inputFifteen.value +
        `: 28 Days</div>`;
      document.getElementById("contentFifteen").innerHTML = contentFifteen;
      break;
    case 3:
      console.log("Days in Month: 31");
      contentFifteen +=
        `<div class="alert alert-success" role="alert">
    &#x1F4C5; Days in Month ` +
        inputFifteen.value +
        `: 31 Days</div>`;
      document.getElementById("contentFifteen").innerHTML = contentFifteen;
      break;
    case 4:
      console.log("Days in Month: 30");
      contentFifteen +=
        `<div class="alert alert-success" role="alert">
      &#x1F4C5; Days in Month ` +
        inputFifteen.value +
        `: 30 Days</div>`;
      document.getElementById("contentFifteen").innerHTML = contentFifteen;
      break;
    case 5:
      console.log("Days in Month: 31");
      contentFifteen +=
        `<div class="alert alert-success" role="alert">
        &#x1F4C5; Days in Month ` +
        inputFifteen.value +
        `: 31 Days</div>`;
      document.getElementById("contentFifteen").innerHTML = contentFifteen;
      break;
    case 6:
      console.log("Days in Month: 30");
      contentFifteen +=
        `<div class="alert alert-success" role="alert">
      &#x1F4C5; Days in Month ` +
        inputFifteen.value +
        `: 30 Days</div>`;
      document.getElementById("contentFifteen").innerHTML = contentFifteen;
      break;
    case 7:
      console.log("Days in Month: 31");
      contentFifteen +=
        `<div class="alert alert-success" role="alert">
  &#x1F4C5; Days in Month ` +
        inputFifteen.value +
        `: 31 Days</div>`;
      document.getElementById("contentFifteen").innerHTML = contentFifteen;
      break;
    case 8:
      console.log("Days in Month: 31");
      contentFifteen +=
        `<div class="alert alert-success" role="alert">
          &#x1F4C5; Days in Month ` +
        inputFifteen.value +
        `: 31 Days</div>`;
      document.getElementById("contentFifteen").innerHTML = contentFifteen;
      break;
    case 9:
      console.log("Days in Month: 30");
      contentFifteen +=
        `<div class="alert alert-success" role="alert">
  &#x1F4C5; Days in Month ` +
        inputFifteen.value +
        `: 30 Days</div>`;
      document.getElementById("contentFifteen").innerHTML = contentFifteen;
      break;
    case 10:
      console.log("Days in Month: 31");
      contentFifteen +=
        `<div class="alert alert-success" role="alert">
      &#x1F4C5; Days in Month ` +
        inputFifteen.value +
        `: 31 Days</div>`;
      document.getElementById("contentFifteen").innerHTML = contentFifteen;
      break;
    case 11:
      console.log("Days in Month: 30");
      contentFifteen +=
        `<div class="alert alert-success" role="alert">
      &#x1F4C5; Days in Month ` +
        inputFifteen.value +
        `: 30 Days</div>`;
      document.getElementById("contentFifteen").innerHTML = contentFifteen;
      break;
    case 12:
      console.log("Days in Month: 31");
      contentFifteen +=
        `<div class="alert alert-success" role="alert">
        &#x1F4C5; Days in Month ` +
        inputFifteen.value +
        `: 31 Days</div>`;
      document.getElementById("contentFifteen").innerHTML = contentFifteen;
      break;

    default:
      contentFifteen += `<div class="alert alert-danger" role="alert">
      &#x274C;	INVALID INPUT. Please Enter a VALID number!
      </div>`;
      document.getElementById("contentFifteen").innerHTML = contentFifteen;
      break;
  }
}

/*
16- Write a program to check whether an alphabet is vowel or consonant
*/

var inputSixteen = document.getElementById("qSixteen"); // couldn't validate the special characters

function getInputSixteen() {
  var contentSixteen = "";

  switch (
    inputSixteen.value == "a" ||
    "A" ||
    "e" ||
    "E" ||
    "i" ||
    "I" ||
    "o" ||
    "O" ||
    "u" | "U"
  ) {
    case true:
      console.log("Vowel");
      contentSixteen +=
        `<div class="alert alert-success" role="alert">
&#x1F914; ` +
        inputSixteen.value +
        " " +
        "is a Vowel letter" +
        ` !
</div>`;
      document.getElementById("contentSixteen").innerHTML = contentSixteen;
      break;

    default:
      switch (
        inputSixteen.value / 0 == Infinity || // to avoid numbered values
        inputSixteen.value.length > 1 || // to validate single input value
        inputSixteen.value == 0 ||
        inputSixteen.value.length == 0
      ) {
        case true:
          contentSixteen += `<div class="alert alert-danger" role="alert">
          &#x274C;	INVALID INPUT. Please Enter a single letter!
        </div>`;
          document.getElementById("contentSixteen").innerHTML = contentSixteen;
          break;

        default:
          console.log("Constant");
          contentSixteen +=
            `<div class="alert alert-success" role="alert">
  &#x1F914; ` +
            inputSixteen.value +
            " " +
            "is a constant letter" +
            ` !
  </div>`;
          document.getElementById("contentSixteen").innerHTML = contentSixteen;
          break;
      }

      break;
  }
}

/*
17- Write a program to find maximum between two numbers
*/

var inputSeventeenA = document.getElementById("qSeventeenA");
var inputSeventeenB = document.getElementById("qSeventeenB");

function getInputSeventeen() {
  var contentSeventeen = "";

  switch (Number(inputSeventeenA.value) > Number(inputSeventeenB.value)) {
    case true:
      console.log(inputSeventeenA.value);
      contentSeventeen +=
        `<div class="alert alert-success" role="alert">
    &#x1F914;` +
        " " +
        inputSeventeenA.value +
        " " +
        "is bigger than " +
        +inputSeventeenB.value +
        " " +
        `!
</div>`;
      document.getElementById("contentSeventeen").innerHTML = contentSeventeen;
      break;
    default:
      switch (Number(inputSeventeenA.value) == Number(inputSeventeenB.value)) {
        case true:
          console.log(
            inputSeventeenB.value,
            " equal to ",
            inputSeventeenA.value
          );
          contentSeventeen +=
            `<div class="alert alert-success" role="alert">
        &#x1F914;` +
            " " +
            inputSeventeenB.value +
            " " +
            "is equal to " +
            +inputSeventeenA.value +
            " " +
            `!
    </div>`;
          document.getElementById("contentSeventeen").innerHTML =
            contentSeventeen;
          break;
        default:
          switch (
            Number(inputSeventeenA.value) < Number(inputSeventeenB.value)
          ) {
            case true:
              console.log(inputSeventeenB.value);
              contentSeventeen +=
                `<div class="alert alert-success" role="alert">
    &#x1F914;` +
                " " +
                inputSeventeenB.value +
                " " +
                "is bigger than " +
                +inputSeventeenA.value +
                " " +
                `!
</div>`;
              document.getElementById("contentSeventeen").innerHTML =
                contentSeventeen;
              break;

            default:
              contentSeventeen += `<div class="alert alert-danger" role="alert">
            &#x274C;	INVALID INPUT. Please Enter a VALID number!
          </div>`;
              document.getElementById("contentSeventeen").innerHTML =
                contentSeventeen;
              break;
          }
          break;
      }

      break;
  }
}

/*
18- Write a program to check whether a number is even or odd
*/

var inputEighteen = document.getElementById("qEighteen");

function getInputEighteen() {
  var contentEighteen = "";

  switch (inputEighteen.value % 2 == 0) {
    case true:
      console.log("Even");
      contentEighteen +=
        `<div class="alert alert-success" role="alert">
  &#x1F914; ` +
        inputEighteen.value +
        " " +
        "is an even number" +
        ` !
  </div>`;
      document.getElementById("contentEighteen").innerHTML = contentEighteen;
      break;

    default:
      switch (
        Object.is(Number(inputEighteen.value), NaN) ||
        inputEighteen.value.length == 0
      ) {
        case true:
          contentEighteen += `<div class="alert alert-danger" role="alert">
          &#x274C;	INVALID INPUT. Please Enter a VALID number!
        </div>`;
          document.getElementById("contentEighteen").innerHTML =
            contentEighteen;
          break;

        default:
          console.log("Odd");
          contentEighteen +=
            `<div class="alert alert-success" role="alert">
&#x1F914; ` +
            inputEighteen.value +
            " " +
            "is an odd number" +
            ` !
</div>`;
          document.getElementById("contentEighteen").innerHTML =
            contentEighteen;
          break;
      }
      break;
  }
}

/*
19- Write a program to check whether a number is positive or negative or zero
*/

var inputNineteen = document.getElementById("qNineteen");

function getInputNineteen() {
  var contentNineteen = "";

  switch (Number(inputNineteen.value) < 0) {
    case true:
      console.log("Negative");
      contentNineteen +=
        `<div class="alert alert-info" role="alert">
    &#x1F914;` +
        " " +
        inputNineteen.value +
        " " +
        `has a negative value !
</div>`;
      document.getElementById("contentNineteen").innerHTML = contentNineteen;
      break;

    default:
      switch (
        Object.is(Number(inputNineteen.value), NaN) ||
        inputNineteen.value.length == 0
      ) {
        case true:
          contentNineteen += `<div class="alert alert-danger" role="alert">
          &#x274C;	INVALID INPUT. Please Enter a VALID number!
        </div>`;
          document.getElementById("contentNineteen").innerHTML =
            contentNineteen;
          break;

        default:
          switch (Number(inputNineteen.value) > 0) {
            case true:
              console.log("Positive");
              contentNineteen +=
                `<div class="alert alert-success" role="alert">
    &#x1F914;` +
                " " +
                inputNineteen.value +
                " " +
                `has a positive value !
</div>`;
              document.getElementById("contentNineteen").innerHTML =
                contentNineteen;
              break;

            default:
              console.log("Not Positive nor Negative. it's zero");
              contentNineteen +=
                `<div class="alert alert-info" role="alert">
    &#x1F914;` +
                " " +
                inputNineteen.value +
                " " +
                `don't have a sign i.e. it's zero !
</div>`;
              document.getElementById("contentNineteen").innerHTML =
                contentNineteen;
              break;
          }
          break;
      }
      break;
  }
}

/*
20- Write a program to create Simple Calculator
*/

var inputTwentyA = document.getElementById("qTwentyA");
var inputTwentyB = document.getElementById("qTwentyB");
var inputTwentyOperator = document.getElementById("operators");

function getInputTwenty() {
  var contentTwenty = "";

  switch (
    Object.is(Number(inputTwentyA.value), NaN) ||
    inputTwentyA.value.length == 0 ||
    Object.is(Number(inputTwentyB.value), NaN) ||
    inputTwentyB.value.length == 0
  ) {
    case true:
      contentTwenty += `<div class="alert alert-danger" role="alert">
      &#x274C;	INVALID INPUT. Please Enter a VALID number!
    </div>`;
      document.getElementById("contentTwenty").innerHTML = contentTwenty;
      break;
    default:
      switch (inputTwentyOperator.value) {
        case "+":
          console.log(Number(inputTwentyA.value) + Number(inputTwentyB.value));
          contentTwenty +=
            `<div class="alert alert-info" role="alert">
        &#x1F4F1;` +
            " " +
            inputTwentyA.value +
            "+" +
            inputTwentyB.value +
            "=" +
            (Number(inputTwentyA.value) + Number(inputTwentyB.value)) +
            `</div>`;
          document.getElementById("contentTwenty").innerHTML = contentTwenty;
          break;
        case "-":
          console.log(Number(inputTwentyA.value) - Number(inputTwentyB.value));
          contentTwenty +=
            `<div class="alert alert-info" role="alert">
        &#x1F4F1;` +
            " " +
            inputTwentyA.value +
            "-" +
            inputTwentyB.value +
            "=" +
            (Number(inputTwentyA.value) - Number(inputTwentyB.value)) +
            `</div>`;
          document.getElementById("contentTwenty").innerHTML = contentTwenty;
          break;
        case "*":
          console.log(Number(inputTwentyA.value) * Number(inputTwentyB.value));
          contentTwenty +=
            `<div class="alert alert-info" role="alert">
        &#x1F4F1;` +
            " " +
            inputTwentyA.value +
            "×" +
            inputTwentyB.value +
            "=" +
            Number(inputTwentyA.value) * Number(inputTwentyB.value) +
            `</div>`;
          document.getElementById("contentTwenty").innerHTML = contentTwenty;
          break;
        case "/":
          console.log(Number(inputTwentyA.value) / Number(inputTwentyB.value));
          contentTwenty +=
            `<div class="alert alert-info" role="alert">
        &#x1F4F1;` +
            " " +
            inputTwentyA.value +
            "÷" +
            inputTwentyB.value +
            "=" +
            Number(inputTwentyA.value) / Number(inputTwentyB.value) +
            `</div>`;
          document.getElementById("contentTwenty").innerHTML = contentTwenty;
          break;
      }
  }
}
