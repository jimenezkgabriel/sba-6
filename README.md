1. How did you implement TypeScript features and OOP principles?
> When constructing the product class, I used TypeScript's type enforcing to detail the class member's typing such as id being of type 'number' and name being of type 'string.' Simply having a Product class enables me to use abstraction as an OOP principle by invoking .getProductDetails() to just retrieve relevant product information. I created a custom Error class by inhereting the base Error class and using polymorphism to alter the base Error class to fit what I needed for my custom Error class. I used more TypeScript type enforcing capabilities to declare a return Promise type for my products.

2. What are the challenges you encountered and how you overcame them?
> Still a bit hazy on error handling, where to put the try catch statements; do I put them within the fetch function in apiServices? Or do I put them on main where I'm calling the fetching of products function? I had to guard type an undefined just in case there's a network error and needing to handle that undefined by using an if statement to check if the list of products is empty or not.

3. How did you handle asynchronous operations and error management?
> I chose to use async functions instead of functions that returne Promises (as async fucntions implicitly return Promises anyway) which enables me to use the await keyword which improves readability and organization as I do not need to do a bunch of promise chains using the .then() callback. Error management was done in main where I wrapped a promise await call in a try/catch to catch any errors. I used a custom error class to classify failing to fetch products as a NetworkError type.

node src/main.ts to run the code