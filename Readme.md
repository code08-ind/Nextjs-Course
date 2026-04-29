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

## Nested Routing

We can also nest the routes by creating the various of the services inside it. Routes are case sensitive and it will directly depend on the casing of characters we have followed up.

In Child Route, we can get the slug of the parent route and nested route both as slugs of both can be obtained.

## Catch All Routes

We can have all the routes captured with us and we can achieve this easily by having used the catch all routes using [...files] which will the required catch all routes. Also we can have optional catch routes using [[...files]] where the exact page.js is not required at that certain level and even it will run if we are on /files path route and in required catch all routes, we should have a path after /.

Catch all routes cannot be kept at the route level inside the app folder such as creating a folder [[...id]] and it will give error at the route app level and we can have the catch all routes only under a folder as it will have same path as / which is home route corresponding to page.js and it will have same specificity then so it will give error as it has conflicts.

## Layout File

It helps us to add certain SEO features that are really helpful and also helps us to add the children by getting them from the children props.

## notFound Page

When we do not have a page present, so we can show custom not-found page and also call a method notFound() from next/navigation and this will show the not-found page based on certain url params or some conditions.

## Route Groups

We can have different routes collected together by using (<group-name>) and here is how we can have different routes present in the form of route groups.

We can also have the route groups and based on them as well, we can also show the layout files as well and it will check for the nearest layout file and transform the layout as we want it to look.

## Private Folders

When we want a file not to become a page itself and we want to prevent it, so we create the private folders. This can be done so by using the _<folder-name> and it will not be shown as a page. To make it work, we can have for example components folder and if we want it to be displayed, then we will make it start the folder name with %5F.

In General we will create the components folder outside the pages folder so that it is not coming inside or interfering with the pages or routing.

























