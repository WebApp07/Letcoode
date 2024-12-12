// JavaScript Program to add two number represented
// as linked list by creating a new list

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

// Function to reverse the linked list
function reverse(head) {
  let prev = null;
  let curr = head;
  let next;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

// Function to add two numbers represented by linked list
function addTwoLists(num1, num2) {
  let res = null;
  let curr = null;
  let carry = 0;

  num1 = reverse(num1);
  num2 = reverse(num2);

  // Iterate till either num1 is not empty or num2 is
  // not empty or carry is greater than 0
  while (num1 !== null || num2 !== null || carry !== 0) {
    let sum = carry;

    // If num1 linked list is not empty, add it to sum
    if (num1 !== null) {
      sum += num1.data;
      num1 = num1.next;
    }

    // If num2 linked list is not empty, add it to sum
    if (num2 !== null) {
      sum += num2.data;
      num2 = num2.next;
    }

    // Create a new node with sum % 10 as its value
    let newNode = new Node(sum % 10);

    // Store the carry for the next nodes
    carry = Math.floor(sum / 10);

    // If this is the first node, then make this node
    // as the head of the resultant linked list
    if (res === null) {
      res = newNode;
      curr = newNode;
    } else {
      // Append new node to resultant linked list
      // and move to the next node
      curr.next = newNode;
      curr = curr.next;
    }
  }

  // Reverse the resultant linked list to get the
  // required linked list
  return reverse(res);
}

function printList(head) {
  let curr = head;
  let result = "";
  while (curr !== null) {
    result += curr.data + " ";
    curr = curr.next;
  }
  console.log(result.trim());
}

// Creating first linked list: 1 -> 2 -> 3
// (represents 123)
let num1 = new Node(1);
num1.next = new Node(2);
num1.next.next = new Node(3);

// Creating second linked list: 9 -> 9 -> 9
// (represents 999)
let num2 = new Node(9);
num2.next = new Node(9);
num2.next.next = new Node(9);

let sum = addTwoLists(num1, num2);
printList(sum);
