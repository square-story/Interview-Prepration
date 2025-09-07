import { Code, Hash, FileCode, BookOpen } from "lucide-react";

// Define the problem interface
export interface Problem {
  id: number;
  title: string;
  description: string;
  category: string;
  framework: string;
  difficulty: string;
  path: string;
  tags: string[];
  icon: any; // Using any for simplicity with Lucide icons
  code?: string;
}

// Define the categories and frameworks
export const categories = ["All", "DSA", "JavaScript", "React", "OOP", "Node.js"];
export const frameworks = [
  "All", 
  "Array", 
  "String", 
  "Stack", 
  "Queue", 
  "Recursion", 
  "Sorting", 
  "React Hooks", 
  "Components", 
  "OOP Concepts"
];

// Sample problems data with actual code examples
export const problems: Problem[] = [
  {
    id: 1,
    title: "Find average of even numbers in an array",
    description: "Calculate the average of all even numbers in a given array",
    category: "DSA",
    framework: "Array",
    difficulty: "Easy",
    path: "/DSA/Array/Find average of even numbers in an array.js",
    tags: ["array", "math", "iteration"],
    icon: Hash,
    code: `// Find average of even numbers in an array
function findAverageOfEvenNumbers(arr) {
  if (!arr || arr.length === 0) return 0;
  
  let sum = 0;
  let count = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
      count++;
    }
  }
  
  return count > 0 ? sum / count : 0;
}

// Example usage
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const average = findAverageOfEvenNumbers(numbers);
console.log(average); // Output: 5 (average of 2, 4, 6, 8)`
  },
  {
    id: 2,
    title: "Flatten a multidimensional array",
    description: "Convert a nested array into a single-level array",
    category: "DSA",
    framework: "Array",
    difficulty: "Medium",
    path: "/DSA/Array/Flatten a multidimensional array.js",
    tags: ["array", "recursion", "iteration"],
    icon: Hash,
    code: `// Flatten a multidimensional array
function flattenArray(arr) {
  let result = [];
  
  function flatten(item) {
    if (Array.isArray(item)) {
      for (let i = 0; i < item.length; i++) {
        flatten(item[i]);
      }
    } else {
      result.push(item);
    }
  }
  
  flatten(arr);
  return result;
}

// Example usage
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattened = flattenArray(nestedArray);
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]`
  },
  {
    id: 3,
    title: "useCounter Hook",
    description: "Custom React hook for managing counter state",
    category: "React",
    framework: "React Hooks",
    difficulty: "Beginner",
    path: "/react/src/hooks/useCounter.tsx",
    tags: ["hooks", "state", "custom hook"],
    icon: Code,
    code: `// Custom React hook for counter functionality
import { useState } from 'react';

interface UseCounterProps {
  initialValue?: number;
  step?: number;
  min?: number;
  max?: number;
}

export const useCounter = ({
  initialValue = 0,
  step = 1,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
}: UseCounterProps = {}) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prevCount) => {
      const newValue = prevCount + step;
      return newValue <= max ? newValue : prevCount;
    });
  };

  const decrement = () => {
    setCount((prevCount) => {
      const newValue = prevCount - step;
      return newValue >= min ? newValue : prevCount;
    });
  };

  const reset = () => {
    setCount(initialValue);
  };

  return { count, increment, decrement, reset };
};

// Example usage
// const { count, increment, decrement, reset } = useCounter({ initialValue: 0, step: 1, min: 0, max: 10 });`
  },
  {
    id: 4,
    title: "Inheritance Implementation",
    description: "Example of inheritance in TypeScript",
    category: "OOP",
    framework: "OOP Concepts",
    difficulty: "Intermediate",
    path: "/OOP/Inheritance.ts",
    tags: ["inheritance", "classes", "typescript"],
    icon: FileCode,
    code: `// Inheritance example in TypeScript

// Base class
class Animal {
  protected name: string;
  
  constructor(name: string) {
    this.name = name;
  }
  
  public makeSound(): void {
    console.log('Some generic animal sound');
  }
  
  public describe(): string {
    return \`This animal is called \${this.name}\`;
  }
}

// Derived class
class Dog extends Animal {
  private breed: string;
  
  constructor(name: string, breed: string) {
    super(name); // Call the parent constructor
    this.breed = breed;
  }
  
  // Override the parent method
  public makeSound(): void {
    console.log('Woof! Woof!');
  }
  
  // Add a new method
  public getBreed(): string {
    return this.breed;
  }
  
  // Override and extend parent method
  public describe(): string {
    return \`\${super.describe()} and is a \${this.breed}\`;
  }
}

// Usage example
const genericAnimal = new Animal('Generic');
genericAnimal.makeSound(); // Output: Some generic animal sound
console.log(genericAnimal.describe()); // Output: This animal is called Generic

const dog = new Dog('Rex', 'German Shepherd');
dog.makeSound(); // Output: Woof! Woof!
console.log(dog.describe()); // Output: This animal is called Rex and is a German Shepherd
console.log(dog.getBreed()); // Output: German Shepherd`
  },
  {
    id: 5,
    title: "Find Duplicates in Deeply Nested Array",
    description: "Algorithm to find duplicate values in a deeply nested array structure",
    category: "JavaScript",
    framework: "Array",
    difficulty: "Hard",
    path: "/javaScript/problems/findDuplicateinDeeplyNestedArray.js",
    tags: ["array", "recursion", "objects"],
    icon: BookOpen,
    code: `// Find duplicates in a deeply nested array
function findDuplicatesInNestedArray(arr) {
  const seen = new Set();
  const duplicates = new Set();
  
  function traverse(item) {
    if (Array.isArray(item)) {
      for (let i = 0; i < item.length; i++) {
        traverse(item[i]);
      }
    } else {
      // Skip non-primitive values like objects
      if (item !== null && typeof item !== 'object') {
        if (seen.has(item)) {
          duplicates.add(item);
        } else {
          seen.add(item);
        }
      }
    }
  }
  
  traverse(arr);
  return Array.from(duplicates);
}

// Example usage
const complexArray = [1, [2, 3, [4, 1]], [2, [5, 6]], 7, [8, [9, [10, 5]]]];
const duplicates = findDuplicatesInNestedArray(complexArray);
console.log(duplicates); // Output: [1, 2, 5]`
  },
  {
    id: 6,
    title: "Check Palindrome using Recursion",
    description: "Determine if a string is a palindrome using recursive approach",
    category: "DSA",
    framework: "Recursion",
    difficulty: "Medium",
    path: "/DSA/Recursion/checkPalindrome.js",
    tags: ["recursion", "string", "algorithm"],
    icon: Hash,
    code: `// Check if a string is a palindrome using recursion
function isPalindrome(str) {
  // Base case: empty string or single character is a palindrome
  if (str.length <= 1) {
    return true;
  }
  
  // Compare first and last characters
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  
  // Recursive case: check the substring without first and last characters
  return isPalindrome(str.substring(1, str.length - 1));
}

// Example usage
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("level")); // Output: true`
  },
  {
    id: 7,
    title: "Debounce Hook Implementation",
    description: "Custom React hook for debouncing function calls",
    category: "React",
    framework: "React Hooks",
    difficulty: "Intermediate",
    path: "/react/src/hooks/useDebounce.tsx",
    tags: ["hooks", "debounce", "performance"],
    icon: Code,
    code: `// Custom React hook for debouncing values
import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Set up a timer to update the debounced value after the specified delay
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean up the timer if the value changes before the delay has passed
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Example usage
// const [searchTerm, setSearchTerm] = useState('');
// const debouncedSearchTerm = useDebounce(searchTerm, 500);
// 
// useEffect(() => {
//   // This effect will only run when debouncedSearchTerm changes
//   // not on every searchTerm change
//   performSearch(debouncedSearchTerm);
// }, [debouncedSearchTerm]);`
  },
  {
    id: 8,
    title: "Stack Implementation using Linked List",
    description: "Implementation of a stack data structure using a linked list",
    category: "DSA",
    framework: "Stack",
    difficulty: "Medium",
    path: "/DSA/Stack/StackUsingLinkedList.js",
    tags: ["stack", "linked list", "data structure"],
    icon: Hash,
    code: `// Stack implementation using a linked list

// Node class for the linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Stack class
class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  // Push a new element onto the stack
  push(value) {
    const newNode = new Node(value);
    
    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    
    this.size++;
    return this.size;
  }

  // Remove the top element from the stack
  pop() {
    if (!this.top) {
      return null;
    }
    
    const poppedNode = this.top;
    this.top = this.top.next;
    this.size--;
    
    return poppedNode.value;
  }

  // View the top element without removing it
  peek() {
    return this.top ? this.top.value : null;
  }

  // Check if the stack is empty
  isEmpty() {
    return this.size === 0;
  }

  // Get the size of the stack
  getSize() {
    return this.size;
  }

  // Print the stack contents
  print() {
    let current = this.top;
    const elements = [];
    
    while (current) {
      elements.push(current.value);
      current = current.next;
    }
    
    return elements.join(' -> ');
  }
}

// Example usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.print()); // Output: 30 -> 20 -> 10
console.log(stack.peek()); // Output: 30
console.log(stack.pop()); // Output: 30
console.log(stack.print()); // Output: 20 -> 10`
  },
];