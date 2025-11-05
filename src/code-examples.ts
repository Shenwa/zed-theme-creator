export const codeExamples: Record<string, string> = {
  typescript: `// TypeScript Example
interface User {
  id: number;
  name: string;
  email?: string;
}

function createUser(user: User): User {
  console.log("Creating user: " + user.name);
  return user;
}

const myUser: User = {
  id: 1,
  name: "Alice",
};

createUser(myUser);

// A comment with some keywords: const let var function class interface
const isActive: boolean = true;
if (isActive) {
  console.log("User is active");
}

/*
  Multi-line comment example.
  This can span multiple lines.
*/

enum Status { Active, Inactive, Pending }
const currentStatus: Status = Status.Active;

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");
console.log(greeter.greet());

const numbers: number[] = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num * 2));

const complexObject = {
  key1: "value1",
  key2: 123,
  key3: true,
  nested: {
    item: "nested item"
  }
};

function calculate(a: number, b: number): number {
  return a + b * 2;
}

const result = calculate(10, 5);
console.log(\`Result: \`);
`,
  javascript: `// JavaScript Example
function greet(name) {
  console.log("Hello, " + name + "!");
}

const message = "Welcome to Zed Theme Creator";
greet(message);

// This is a comment
const num = 12345;

/*
  Another multi-line comment.
  This is also a comment.
*/

let count = 0;
for (let i = 0; i < 5; i++) {
  count += i;
}

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
};

if (person.age > 18) {
  console.log(person.firstName + " is an adult.");
}

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " makes a sound.");
  }
}

const dog = new Animal("Buddy");
dog.speak();

const arr = ["apple", "banana", "cherry"];
arr.map(item => item.toUpperCase());

const isValid = true && false;
const sum = 10 + 20 - 5;
`,
  python: `# Python Example
def greet(name):
    print(f"Hello, {name}!")

message = "Welcome to Zed Theme Creator"
greet(message)

# This is a comment
number = 12345

"""
This is a multi-line string,
which can also serve as a multi-line comment.
"""

class MyClass:
    def __init__(self, value):
        self.value = value

    def get_value(self):
        return self.value

my_object = MyClass(100)
print(my_object.get_value())

def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

result = factorial(5)
print(f"Factorial of 5 is: {result}")

my_list = [10, 20, 30, 40]
for item in my_list:
    if item > 25:
        print(item)

my_dict = {"name": "Alice", "age": 30}
print(my_dict["name"])

if True and False:
    pass
elif True or False:
    print("Conditional logic")
else:
    print("Else block")
`,
  html: `<!-- HTML Example -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="home">
            <h2>Home Section</h2>
            <p>This is the home section content.</p>
            <img src="image.jpg" alt="Example Image" width="500" height="300">
        </section>

        <section id="about">
            <h2>About Us</h2>
            <p>Learn more about our company.</p>
            <button type="button">Click Me</button>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 My Website</p>
    </footer>
</body>
</html>
`,
  css: `/* CSS Example */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  color: #333;
}

/* Header styles */
header {
  background-color: #333;
  color: white;
  padding: 1rem 0;
  text-align: center;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 0.5em;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin: 0 15px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

/* Main content styles */
main {
  padding: 20px;
  max-width: 800px;
  margin: 20px auto;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #0056b3;
  border-bottom: 2px solid #0056b3;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

p {
  line-height: 1.6;
}

/* Footer styles */
footer {
  text-align: center;
  padding: 20px;
  background-color: #333;
  color: white;
  position: relative;
  bottom: 0;
  width: 100%;
}

.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
}

#special-id {
  font-style: italic;
}

@media (max-width: 600px) {
  body {
    font-size: 14px;
  }
}
`,
  rust: `// Rust Example
// This is a single-line comment

/*
  This is a multi-line comment
  in Rust.
*/

fn main() {
    // Declare a mutable variable
    let mut x = 5;
    println!("The value of x is: {}", x);
    x = 6;
    println!("The value of x is now: {}", x);

    // Constants
    const MAX_POINTS: u32 = 100_000;
    println!("Max points: {}", MAX_POINTS);

    // Shadowing
    let y = 5;
    let y = y + 1;
    let y = y * 2;
    println!("The value of y is: {}", y);

    // Data types
    let guess: u32 = "42".parse().expect("Not a number!");
    let floating_point = 2.0; // f64
    let boolean_value = true;
    let character_value = 'z';

    // Tuples
    let tup: (i32, f64, u8) = (500, 6.4, 1);
    let (a, b, c) = tup;
    println!("The value of b is: {}", b);

    // Arrays
    let arr = [1, 2, 3, 4, 5];
    let months = ["January", "February", "March", "April", "May", "June", "July",
                  "August", "September", "October", "November", "December"];

    // Functions
    another_function(5);

    // Control flow
    let number = 3;
    if number < 5 {
        println!("condition was true");
    }

    let condition = true;
    let number = if condition { 5 } else { 6 };
    println!("The value of number is: {}", number);

    // Loops
    let mut counter = 0;
    let result = loop {
        counter += 1;
        if counter == 10 {
            break counter * 2;
        }
    };
    println!("The loop result is: {}", result);

    for number in (1..4).rev() {
        println!("{}!", number);
    }
    println!("LIFTOFF!!!");
}

fn another_function(x: i32) {
    println!("Another function. The value of x is: {}", x);
}

struct Point {
    x: i32,
    y: i32,
}

impl Point {
    fn new(x: i32, y: i32) -> Point {
        Point { x, y }
    }

    fn distance(&self, other: &Point) -> f64 {
        let dx = (self.x - other.x) as f64;
        let dy = (self.y - other.y) as f64;
        (dx.powi(2) + dy.powi(2)).sqrt()
    }
}

let p1 = Point::new(0, 0);
let p2 = Point::new(3, 4);
println!("Distance: {}", p1.distance(&p2));
`,
  go: `// Go Example
package main

import (
	"fmt"
	"math"
)

// This is a single-line comment

/*
	This is a multi-line comment
	in Go.
*/

func main() {
	// Declare and initialize variables
	var a int = 10
	var b = 20
	c := 30

	fmt.Println("a, b, c:", a, b, c)

	// Constants
	const PI = 3.14159
	const greeting string = "Hello"
	fmt.Println("PI:", PI, "Greeting:", greeting)

	// Data types
	var f float64 = 3.14
	var isTrue bool = true
	var r rune = 'G'
	var s string = "Go language"

	fmt.Printf("f: %T %v\n", f, f)
	fmt.Printf("isTrue: %T %v\n", isTrue, isTrue)
	fmt.Printf("r: %T %v\n", r, r)
	fmt.Printf("s: %T %v\n", s, s)

	// Arrays
	var arr [5]int
	arr[0] = 1
	fmt.Println("Array:", arr)

	slices := []int{1, 2, 3}
	slices = append(slices, 4, 5)
	fmt.Println("Slice:", slices)

	// Maps (dictionaries)
	m := make(map[string]int)
	m["apple"] = 1
	m["banana"] = 2
	fmt.Println("Map:", m)

	// Control flow - if-else
	if a > b {
		fmt.Println("a is greater than b")
	} else if a < b {
		fmt.Println("a is less than b")
	} else {
		fmt.Println("a is equal to b")
	}

	// Control flow - for loop
	for i := 0; i < 5; i++ {
		fmt.Println("Loop iteration:", i)
	}

	// Functions
	result := add(5, 3)
	fmt.Println("Sum:", result)

	// Pointers
	i := 7
	p := &i // p points to i
	fmt.Println("Value of i through pointer:", *p)
	*p = 10 // Change i through the pointer
	fmt.Println("New value of i:", i)

	// Structs
	type Circle struct {
		radius float64
	}

	c1 := Circle{radius: 5}
	fmt.Println("Circle area:", c1.area())
}

func add(x, y int) int {
	return x + y
}

// Method for Circle struct
func (c Circle) area() float64 {
	return math.Pi * c.radius * c.radius
}
`,
  cpp: `// C++ Example
#include <iostream>
#include <vector>
#include <string>

// This is a single-line comment

/*
  This is a multi-line comment
  in C++.
*/

// Function declaration
int add(int a, int b);

class MyClass {
public:
    int value;
    MyClass(int val) : value(val) {}
    void printValue() {
        std::cout << "Value: " << value << std::endl;
    }
};

int main() {
    std::cout << "Hello, C++!" << std::endl;

    // Variable declaration and initialization
    int x = 10;
    double pi = 3.14159;
    char grade = 'A';
    bool is_active = true;
    std::string name = "World";

    std::cout << "x: " << x << std::endl;
    std::cout << "pi: " << pi << std::endl;
    std::cout << "grade: " << grade << std::endl;
    std::cout << "is_active: " << std::boolalpha << is_active << std::endl;
    std::cout << "name: " << name << std::endl;

    // Arrays and vectors
    int arr[5] = {1, 2, 3, 4, 5};
    std::vector<int> vec = {10, 20, 30};
    vec.push_back(40);

    for (int i : vec) {
        std::cout << i << " ";
    }
    std::cout << std::endl;

    // Pointers
    int* ptr = &x;
    std::cout << "Value of x through pointer: " << *ptr << std::endl;

    // Conditional statements
    if (x > 5) {
        std::cout << "x is greater than 5" << std::endl;
    } else {
        std::cout << "x is not greater than 5" << std::endl;
    }

    // Loops
    for (int i = 0; i < 3; ++i) {
        std::cout << "Loop: " << i << std::endl;
    }

    int count = 0;
    while (count < 2) {
        std::cout << "While loop: " << count << std::endl;
        count++;
    }

    // Function call
    int sum_result = add(5, 7);
    std::cout << "Sum: " << sum_result << std::endl;

    // Class object
    MyClass obj(123);
    obj.printValue();

    return 0;
}

int add(int a, int b) {
    return a + b;
}
`,
  java: `// Java Example
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

// This is a single-line comment

/*
 * This is a multi-line comment
 * in Java.
 */

public class Main {

    // Constants
    public static final int MAX_VALUE = 100;

    public static void main(String[] args) {
        System.out.println("Hello, Java!");

        // Variable declaration and initialization
        int number = 10;
        double price = 99.99;
        char grade = 'B';
        boolean isActive = true;
        String message = "Welcome";

        System.out.println("Number: " + number);
        System.out.println("Price: " + price);
        System.out.println("Grade: " + grade);
        System.out.println("Is Active: " + isActive);
        System.out.println("Message: " + message);

        // Arrays
        int[] numbers = {1, 2, 3, 4, 5};
        for (int i = 0; i < numbers.length; i++) {
            System.out.print(numbers[i] + " ");
        }
        System.out.println();

        // Lists
        List<String> names = new ArrayList<>();
        names.add("Alice");
        names.add("Bob");
        System.out.println("Names: " + names);

        // Maps
        Map<String, Integer> ages = new HashMap<>();
        ages.put("Alice", 30);
        ages.put("Bob", 24);
        System.out.println("Ages: " + ages);

        // Conditional statements
        if (number > 5) {
            System.out.println("Number is greater than 5");
        } else if (number < 5) {
            System.out.println("Number is less than 5");
        } else {
            System.out.println("Number is 5");
        }

        // Loops
        for (int i = 0; i < 3; i++) {
            System.out.println("For loop: " + i);
        }

        int count = 0;
        while (count < 2) {
            System.out.println("While loop: " + count);
            count++;
        }

        // Object creation and method call
        Calculator calc = new Calculator();
        int sum = calc.add(10, 20);
        System.out.println("Sum: " + sum);
    }
}

class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
}
`,
  tsx: `// TSX/React Example
import React, { useState, useEffect } from 'react';

// Type definitions
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

interface UserCardProps {
  user: User;
  onDelete: (id: number) => void;
}

/**
 * UserCard component displays user information
 */
const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <span className="badge">{user.role}</span>
      <button onClick={() => onDelete(user.id)}>
        Delete
      </button>
    </div>
  );
};

// Main App Component
export const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    // Simulate API call
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = (id: number): void => {
    setUsers(users.filter(user => user.id !== id));
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Conditional rendering
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <header>
        <h1>User Management</h1>
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      <main>
        {filteredUsers.length === 0 ? (
          <p>No users found</p>
        ) : (
          <div className="user-grid">
            {filteredUsers.map(user => (
              <UserCard
                key={user.id}
                user={user}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </main>

      <footer>
        <p>Total Users: {users.length}</p>
      </footer>
    </div>
  );
};

export default App;
`,
};
