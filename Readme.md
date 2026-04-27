# Next.js vs React

## Basics

In React.js, all the content is being created by using the Client while in Next.js, all the content is being created by the server and files are rendered over the server and even if we disable JS, it will still run the code properly.

Behind the scenes, Node.js server is required to deploy the files and this Node.js server is a static server for the React.js and For Next.js, it is thd Dynamic Server and it does a lot of hard work as it also renders the code at the server itself.

Babel will convert the JSX code into the HTML code and JS code that will be served to the browser so that it can run that code.

In Next.js, the code inside the public folder is rendered publically and we can see all the files there such as icons and images.

In Next.js, we can run the client level code or server level code as we want. Client code is run first, converted to the simple executable code and then again run into the client side after being run into the server side as by default all the components run over the server side.

In server side components, we cannot use browser related web api's inside server components and we would need 'use client' directive to run the client side components.

## Routing

All the code is rendered through the layout.js file.

If we use typescript, we have to use .tsx extension.
















