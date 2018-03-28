var money = 0;
var friendMoney = 0;
var friendLimit = 10;
var friendDoesChore = false;

function chore(){
    money += 1;
    document.getElementById("money").innerHTML = money;
};

function askFriend() {
  if (friendMoney === 0) {
    window.alert("On it!")
    friendDoesChore = true;
  } else if (friendMoney === friendLimit) {
    window.alert("I already got the money! Go collect it!")
  }

function collectMoney() {
    money += friendMoney;
    friendMoney = 0;
    document.getElementById("money").innerHTML = money;
    document.getElementById("friendMoney").innerHTML = friendMoney;
}

};

function friendChore() {
 if (friendDoesChore) {
   if (friendMoney === friendLimit) {
     friendDoesChore = false;
     friendMoney -= 1;
   }
   friendMoney += 1;
 }
 document.getElementById("friendMoney").innerHTML = friendMoney;
}

var books = 0;

function printBook(){
    var bookCost = Math.floor(10 * Math.pow(1.1,books));     //works out the cost of this book
    if(money >= bookCost){                                   //checks that the player can afford the book
        books = books + 1;                                   //increases number of books
    	money = money - bookCost;                          //removes the money spent
        document.getElementById('books').innerHTML = books;  //updates the number of books for the user
        document.getElementById('money').innerHTML = money;  //updates the number of money for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,books));       //works out the cost of the next book
    document.getElementById('bookCost').innerHTML = nextCost;  //updates the book cost for the user
};

window.setInterval(function(){

  friendChore();
  document.getElementById("friendLimit").innerHTML = friendLimit;

}, 1000);
