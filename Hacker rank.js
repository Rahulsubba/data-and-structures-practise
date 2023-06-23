// A left rotation operation on an array of size n shifts each of the array's elements 1 unit to the left. Given an integer, D , 
// rotate the array that many steps left and return the result.


// rotation LEFT = 3 times

    

//SOLUTION //
// takes two parameter array and the  K times//
//K times i needs to iterate for making the reverse i.e( if "K" is 5 and "I" is zero "I" needs to iterate to equal to "K" times //

let array = [1, 2, 3, 4, 5, 6] 
function koll(array, k){
    for(i = 0; i < k; i++){
        const back = array.pop()
        array.unshift(back)
    }
    console.log(array)
}
koll(array, 2 )




//REFERENCE FOR LOOP//
class Students{
    constructor(name, marks){
        this.name = name;
        this.marks = marks;
    }
}
 let A  = new Students ( "Mercy", "37")
 let B  = new Students("jack","48")
 let C = new Students("Rancho","79")
                                                                   
function call(){
    for(i= 0 ; i < 1; i ++){
        console.log(A)
        console.log(B)
        console.log(C)
    }
}
call ()




     



let numbers = [1,2,3,4,5];
//(numbers.length);
console.log(numbers.reverse());
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Two friends like to pool their money and go to the ice cream parlor.
//  They always choose two distinct flavors and they spend all of their money.
// Given a list of prices for the flavors of ice cream, select the two that will cost all of the money they have. Indice of 1
 

function Calculate(Totalcost, flavors){
    let indice = {};
   for(i = 0; i < flavors.length; i++){
    let firstprice = flavors[i]
    let secondprice = Totalcost - firstprice
    indice = i;

    for (j = 0; j < flavors.length; j++){
        if(i !== j && flavors[j] === secondprice){
            return [ i + 1, j + 1 ]
        }
    }
   }
}  
let flavors = [ 1, 2, 3, 4, 5]
let cost= Calculate(4, flavors)
console.log(cost)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

// The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

let Alice = [1 ,2 ,3];
let Bob = [2, 1, 4];
function ComparesTriplets(arr, brr){
    let bob = 0;
    let alice = 0;
    for (let i = 0; i < brr.length; i++){
        if(brr[i] > arr[i]){
            bob = bob + 1;
        }else{
            if(brr[i] < arr[i]){
                alice = alice + 1;
            }
        }
    }
    console.log (bob, alice)
}
ComparesTriplets(Alice, Bob)


/////////////////////////////////////////////////////////////////////////////////////
// A left rotation operation on an array of size n shifts each
//  of the array's elements 1 unit to the left. Given an integer,d ,
//   rotate the array that many steps left and return the result.

arr = [ 1 , 2, 3, 4, 5]
function rotateLeft(d, arr) {
    let count = [...arr]
    for (let i = 0;i < d ; i++){
        let store = count.splice(0, 1)
        count.push(store[0])
    }
    return count;
       
}
rotateLeft(4, arr)




// Code wars////

// Check if the numbers are divisible by 3 and 5 if the num of list is 10


function check (num){
    if(num < 0){
        return 0
    }
    let sum = 0
    for(i = 1; i < num; i++ ){
        if( i % 3 === 0 || i % 5 === 0 ){
            sum += i
        }

    }
    console.log(sum) 
}

check(10)



// Make a function that reverses the words and splits it

function reverse(num){
    num = num.split("")
    for(i = 0 ; i < num.length; i++){
        num[i] = num[i].split("").reverse().join("");
    }
    return num.join("")

}

console.log(reverse("Hello world"))





// CREATING A FUNCTION TO REVERSE
// Making an integer to string


function reverse(num){
    num = num.toString().split("")
    
    for( let i = 0; i < num.length; i++){
        num[i] = num[i].split("").reverse().join("")
    }
    return num.toString().split("").reverse().join("")
}
console.log(reverse(1234567))


// Staircase detail

// This is a staircase of size :

//    #
//   ##
//  ###
// ####
// Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size n.



function tree(n){
    for (let i = 0; i <= n ; i++){
        let spaces = n - i;
        let stairs = " ";

        for (let j = 0; j < spaces; j++){
             stairs += " ";
        }
        for (let j = 0; j < i; j++){
            stairs += "K";
        }

        console.log(stairs)
    }
}

tree(4)

// In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

// Function Description

// Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

// aVeryBigSum has the following parameter(s):

// int ar[n]: an array of integers .
// Return

// long: the sum of all array elements
// Input Format

// The first line of the input consists of an integer .
// The next line contains  space-separated integers contained in the array.

// Output Format

// Return the integer sum of the elements in the array.



function sum_big_number(arr){
    let total = BigInt(0)
    for(i = 0; i < arr.length; i++){
        total += BigInt(arr[i])
    }
    return total
}

let mack = [50000,60000000,70000000,888888]
let host = sum_big_number(mack)
console.log(host.toString())



