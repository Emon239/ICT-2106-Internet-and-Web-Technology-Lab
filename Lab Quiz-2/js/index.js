// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set up event listeners
    document.getElementById('arrayBtn').addEventListener('click', demoArrayMethods);
    document.getElementById('loopBtn').addEventListener('click', demoLoops);
    document.getElementById('objectBtn').addEventListener('click', demoObjects);
    document.getElementById('forEachBtn').addEventListener('click', demoForEach);
    document.getElementById('combinedBtn').addEventListener('click', combinedExample);
});

// Array examples
function demoArrayMethods() {
    const output = document.getElementById('arrayOutput');
    output.innerHTML = '';
    
    // Create an array
    const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
    output.innerHTML += `<p>Original array: ${fruits.join(', ')}</p>`;
    
    // Add to array
    fruits.push('Elderberry');
    output.innerHTML += `<p>After push: ${fruits.join(', ')}</p>`;
    
    // Remove from array
    const removed = fruits.pop();
    output.innerHTML += `<p>After pop (removed ${removed}): ${fruits.join(', ')}</p>`;
    
    // Map to new array
    const fruitLengths = fruits.map(fruit => fruit.length);
    output.innerHTML += `<p>Fruit name lengths: ${fruitLengths.join(', ')}</p>`;
    
    // Filter array
    const longFruits = fruits.filter(fruit => fruit.length > 5);
    output.innerHTML += `<p>Fruits with more than 5 letters: ${longFruits.join(', ')}</p>`;
}

// Loop examples
function demoLoops() {
    const output = document.getElementById('loopOutput');
    output.innerHTML = '';
    
    const numbers = [10, 20, 30, 40, 50];
    
    // For loop
    output.innerHTML += '<p>For loop:</p><ul>';
    for (let i = 0; i < numbers.length; i++) {
        output.innerHTML += `<li>Index ${i}: ${numbers[i]}</li>`;
    }
    output.innerHTML += '</ul>';
    
    // While loop
    output.innerHTML += '<p>While loop:</p><ul>';
    let j = 0;
    while (j < numbers.length) {
        output.innerHTML += `<li>Index ${j}: ${numbers[j]}</li>`;
        j++;
    }
    output.innerHTML += '</ul>';
    
    // For...of loop
    output.innerHTML += '<p>For...of loop:</p><ul>';
    for (const num of numbers) {
        output.innerHTML += `<li>Value: ${num}</li>`;
    }
    output.innerHTML += '</ul>';
}

// Object examples
function demoObjects() {
    const output = document.getElementById('objectOutput');
    output.innerHTML = '';
    
    // Create an object
    const person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        hobbies: ['reading', 'hiking', 'coding'],
        address: {
            street: '123 Main St',
            city: 'Anytown',
            state: 'CA'
        },
        fullName: function() {
            return `${this.firstName} ${this.lastName}`;
        }
    };
    
    output.innerHTML += `<p>Person object: ${JSON.stringify(person, null, 2).replace(/\n/g, '<br>').replace(/ /g, '&nbsp;')}</p>`;
    output.innerHTML += `<p>Full name: ${person.fullName()}</p>`;
    output.innerHTML += `<p>City: ${person.address.city}</p>`;
    
    // Add new property
    person.email = 'john.doe@example.com';
    output.innerHTML += `<p>Added email: ${person.email}</p>`;
    
    // Loop through object properties
    output.innerHTML += '<p>Object properties:</p><ul>';
    for (const key in person) {
        if (typeof person[key] !== 'function') {
            output.innerHTML += `<li>${key}: ${typeof person[key] === 'object' ? JSON.stringify(person[key]) : person[key]}</li>`;
        }
    }
    output.innerHTML += '</ul>';
}

// forEach examples
function demoForEach() {
    const output = document.getElementById('forEachOutput');
    output.innerHTML = '';
    
    const colors = ['red', 'green', 'blue', 'yellow'];
    
    output.innerHTML += '<p>Colors array:</p><ul>';
    
    // Using forEach
    colors.forEach((color, index) => {
        output.innerHTML += `<li>Color ${index + 1}: ${color}</li>`;
    });
    
    output.innerHTML += '</ul>';
    
    // forEach with object array
    const students = [
        { name: 'Alice', grade: 95 },
        { name: 'Bob', grade: 88 },
        { name: 'Charlie', grade: 92 }
    ];
    
    output.innerHTML += '<p>Students:</p><ul>';
    students.forEach(student => {
        output.innerHTML += `<li>${student.name}: ${student.grade}</li>`;
    });
    output.innerHTML += '</ul>';
}

// Combined example
function combinedExample() {
    const output = document.getElementById('combinedOutput');
    output.innerHTML = '';
    
    // Array of objects
    const products = [
        { id: 1, name: 'Laptop', price: 999.99, inStock: true },
        { id: 2, name: 'Phone', price: 699.99, inStock: false },
        { id: 3, name: 'Tablet', price: 399.99, inStock: true },
        { id: 4, name: 'Headphones', price: 149.99, inStock: true }
    ];
    
    output.innerHTML += '<h3>Product Inventory</h3>';
    
    // Using forEach to display products
    products.forEach(product => {
        output.innerHTML += `
            <div style="margin-bottom: 10px; padding: 10px; background: ${product.inStock ? '#e8f8e8' : '#f8e8e8'}; border-radius: 3px;">
                <strong>${product.name}</strong><br>
                Price: $${product.price.toFixed(2)}<br>
                Status: ${product.inStock ? 'In Stock' : 'Out of Stock'}
            </div>
        `;
    });
    
    // Using filter to get in-stock products
    const inStockProducts = products.filter(product => product.inStock);
    output.innerHTML += `<p>Number of in-stock products: ${inStockProducts.length}</p>`;
    
    // Using map to get prices
    const prices = products.map(product => product.price);
    output.innerHTML += `<p>All prices: $${prices.join(', $')}</p>`;
    
    // Using reduce to calculate total value
    const totalValue = products.reduce((sum, product) => sum + product.price, 0);
    output.innerHTML += `<p>Total inventory value: $${totalValue.toFixed(2)}</p>`;
}