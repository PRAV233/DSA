//1. Write a program to find all pairs of an integer array whose sum is equal to a given number?
// JavaScript implementation of simple method to
// find print pairs with given sum.

// Returns number of pairs in arr[0..n-1]
// with sum equal to 'sum'
function printPairs(arr, n, sum)
{
	let count = 0; // Initialize result

	// Consider all possible pairs and check
	// their sums
	for (let i = 0; i < n; i++)
		for (let j = i + 1; j < n; j++)
			if (arr[i] + arr[j] == sum)
				document.write("(" + arr[i] + ", "
					+ arr[j] + ")" + "<br>");
}

// Driver function to test the above function

	let arr = [ 1, 5, 7, -1, 5 ];
	let n = arr.length;
	let sum = 6;
	printPairs(arr, n, sum);

//2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.
// Iterative Javascript program to reverse an array

/* Function to reverse arr[] from start to end*/
function rvereseArray(arr,start,end)
{
	while (start < end)
	{
		var temp = arr[start];
		arr[start] = arr[end];
		arr[end] = temp;
		start++;
		end--;
	}
}	

/* Utility function to print an array */
function printArray(arr,size)
{
for (var i = 0; i < size; i++){
console.log(arr[i]);
}
}

/* Driver function to test above functions */
	var arr= [1, 2, 3, 4, 5, 6];
	var n = 6;
	// To print original array
	printArray(arr, n);
	
	// Function calling
	rvereseArray(arr, 0, n-1);
	
	console.log("Reversed array is");
	
	// To print the Reversed array
	printArray(arr, n);

//3. Write a program to check if two strings are a rotation of each other?

function checkString(s1, s2, indexFound, Size)
{
	for(let i = 0; i < Size; i++)
	{
	
		//check whether the character is equal or not
		if(s1[i] != s2[(indexFound + i) % Size])return false;
		
		// %Size keeps (indexFound+i) in bounds, since it ensures it's value is always less than Size
	}

	return true;
}

// driver code
let s1 = "abcd";
let s2 = "cdab";

if(s1.length != s2.length)
{
	document.write("s2 is not a rotation on s1");
}
else
{
	
	let indexes = []; //store occurrences of the first character of s1
	let Size = s1.length;
	let firstChar = s1[0];
	for(let i = 0; i < Size; i++)
	{
		if(s2[i] == firstChar)
		{
			indexes.push(i);
		}
	}

	let isRotation = false;

	// check if the strings are rotation of each other for every occurrence of firstChar in s2
	for(let idx of indexes)
	{
		isRotation = checkString(s1, s2, idx, Size);

		if(isRotation)
			break;
	}

	if(isRotation)document.write("s2 is rotation of s1")
	else document.write("s2 is not a rotation of s1")
}

//4. Write a program to print the first non-repeated character from a string?

const string = "geeksforgeeks";
let index = -1;
let fnc = ' ';

if(string.length == 0){
console.log("EMPTY STRING");
}

for (let i of string) {
	if (string.split(i).length - 1 === 1) {
		fnc = i;
		break;
	} else {
		index += 1;
	}
}
if (index === string.length-1) {
	console.log("All characters are repeating.");
} else {
	console.log(`First non-repeating character is ${fnc}`);
}

//5. Read about the Tower of Hanoi algorithm. Write a program to implement it.


// javascript recursive function to
// solve tower of hanoi puzzle
function towerOfHanoi(n, from_rod, to_rod, aux_rod)
{
		if (n == 0)
		{
			return;
		}
		towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
		document.write("Move disk " + n + " from rod " + from_rod +
		" to rod " + to_rod+"<br/>");
		towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
	}

	// Driver code
	var N = 3;
	
	// A, B and C are names of rods
	towerOfHanoi(N, 'A', 'C', 'B');


//6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.
	/* Javascript implementation to convert
	infix expression to postfix*/
	
	//Function to return precedence of operators
	function prec(c) {
		if(c == '^')
			return 3;
		else if(c == '/' || c=='*')
			return 2;
		else if(c == '+' || c == '-')
			return 1;
		else
			return -1;
	}

	// The main function to convert infix expression
	//to postfix expression
	function infixToPostfix(s) {

		let st = []; //For stack operations, we are using JavaScript built in stack
		let result = "";

		for(let i = 0; i < s.length; i++) {
			let c = s[i];

			// If the scanned character is
			// an operand, add it to output string.
			if((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9'))
				result += c;

			// If the scanned character is an
			// ‘(‘, push it to the stack.
			else if(c == '(')
				st.push('(');

			// If the scanned character is an ‘)’,
			// pop and to output string from the stack
			// until an ‘(‘ is encountered.
			else if(c == ')') {
				while(st[st.length - 1] != '(')
				{
					result += st[st.length - 1];
					st.pop();
				}
				st.pop();
			}

			//If an operator is scanned
			else {
				while(st.length != 0 && prec(s[i]) <= prec(st[st.length - 1])) {
					result += st[st.length - 1];
					st.pop();
				}
				st.push(c);
			}
		}

		// Pop all the remaining elements from the stack
		while(st.length != 0) {
			result += st[st.length - 1];
			st.pop();
		}

		document.write(result + "</br>");
	}
	
	let exp = "a+b*(c^d-e)^(f+g*h)-i";
	infixToPostfix(exp);

//7. Write a program to convert prefix expression to infix expression.


	// Javascript program to convert prefix to Infix
	
	// Function to check if character
	// is operator or not
	function isOperator(x)
	{
		switch(x)
		{
			case '+':
			case '-':
			case '*':
			case '/':
			case '^':
			case '%':
				return true;
		}
		return false;
	}

	// Convert prefix to Infix expression
	function convert(str)
	{
		let stack = [];

		// Length of expression
		let l = str.length;

		// Reading from right to left
		for(let i = l - 1; i >= 0; i--)
		{
			let c = str[i];

			if (isOperator(c))
			{
				let op1 = stack[stack.length - 1];
				stack.pop()
				let op2 = stack[stack.length - 1];
				stack.pop()

				// Concat the operands and operator
				let temp = "(" + op1 + c + op2 + ")";
				stack.push(temp);
			}
			else
			{

				// To make character to string
				stack.push(c + "");
			}
		}
		return stack[stack.length - 1];
	}
	
	let exp = "*-A/BC-/AKL";
	
	document.write("Infix : " + convert(exp));
	
//8. Write a program to check if all the brackets are closed in a given code snippet.

// JavaScript program for the above approach

// Function to check if
// parenthesis are balanced
function isBalanced(exp){

	// Initialising Variables
	let flag = true
	let count = 0

	// Traversing the Expression
	for(let i=0;i<exp.length;i++){
		if (exp[i] == '(')
			count += 1
		else
			
			// It is a closing parenthesis
			count -= 1

		if (count < 0){

			// This means there are
			// more closing parenthesis
			// than opening
			flag = false
			break
		}
	}
	// If count is not zero ,
	// it means there are more
	// opening parenthesis
	if (count != 0)
		flag = false

	return flag
}

// Driver code
	
let exp1 = "((()))()()"

if (isBalanced(exp1))
	document.write("Balanced","</br>")
else
	document.write("Not Balanced","</br>")

let exp2 = "())((())"

if (isBalanced(exp2))
	document.write("Balanced","</br>")
else
	document.write("Not Balanced","</br>")



//9. Write a program to reverse a stack.


// JavaScript code to reverse a
// stack using recursion

// using Stack class for
// stack implementation
let st = [];

// Below is a recursive function
// that inserts an element
// at the bottom of a stack.
function insert_at_bottom(x)
{
	if(st.length==0)
		st.push(x);
	else
	{
		// All items are held in Function
			// Call Stack until we reach end
			// of the stack. When the stack becomes
			// empty, the st.size() becomes 0, the
			// above if part is executed and
			// the item is inserted at the bottom
			let a = st.pop();
			insert_at_bottom(x);

			// push allthe items held
			// in Function Call Stack
			// once the item is inserted
			// at the bottom
			st.push(a);
	}
	
	
}

// Below is the function that
	// reverses the given stack using
	// insert_at_bottom()
function reverse()
{
	if(st.length > 0)
		{
			
			// Hold all items in Function
			// Call Stack until we
			// reach end of the stack
			let x = st.pop();
			reverse();
			
			// Insert all the items held
			// in Function Call Stack
			// one by one from the bottom
			// to top. Every item is
			// inserted at the bottom
			insert_at_bottom(x);
		}
}

// Driver Code

// push elements into
// the stack
st.push('1');
st.push('2');
st.push('3');
st.push('4');

document.write("Original Stack<br>");

document.write(st.join(" ")+"<br>");

// function to reverse
// the stack
reverse();

document.write("Reversed Stack<br>");

document.write(st.join(" "));


// 10. Write a program to find the smallest number using a stack.


// Javascript implementation
// of simple algorithm to find
// smaller element on left side


// Prints smaller elements on
// left side of every element
function printPrevSmaller( arr, n)
{
	// Always print empty or '_' for first element
	document.write("_, ");

	// Start from second element
	for (let i=1; i<n; i++)
	{
		// look for smaller element on left of 'i'
		let j;
		for (j=i-1; j>=0; j--)
		{
			if (arr[j] < arr[i])
			{
				document.write(arr[j] + ", ");
				break;
			}
		}

		// If there is no smaller element on left of 'i'
		if (j == -1)
		document.write("_, ");
	}
}

	// Driver program
	
	let arr = [ 1, 3, 0, 2, 5 ];
	let n = arr.length;
	printPrevSmaller(arr, n);
	
