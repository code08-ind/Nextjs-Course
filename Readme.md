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

## Rendering Paradigms in Next.js

Nowadays, Next.js uses both of the CSR and SSR. SSG is the part of SSR where the SSG is Static Site Generation.

In React, all the different JS, CSS files are converted into the Single JS File and Single CSS File that really makes it easy to run the files accordingly and the server serves the same files even when we change the route as the files are bundled up together.

Next.js has a cache service where the files are served accordingly and the server renders the HTML files separately and server only works and client did n't do anything. Next.js Production mode is important to understand and not the Dev Mode. To Start the Production Mode, we can use: npm run build and then npm start.

When the Site loads for the first time, it's home page loads using SSR and all the files are loaded accordingly and it is a fast process. While if we go to other pages, they are rendered using Client Side. If we reload the website with some other link, so it will again load all the files. This provides the better SEO.

Also in Next.js, we have react server components by default and by server rendering, server sends us the Virtual DOM like structure to use after being loaded up by the client, we can see the server generated Virtual DOM here.

The webpage we stay on, we get the requested HTML from it and also we get the rsc payload for the other pages on which we are not present for now.

Next.js only fetches the data for the Data of only of the Pages whose links are not present on the screen, Next.js does not load them properly and rsc payload that is in the form of text/x-component is used to build up the Page and browser can understand this code to build up the files over the browser.

## Static or Dynamic Rendering

The pages which are static, they are rendered statically and the pages or links that are dynamic based on the dynamic routes, those routes or pages are rendered dynamically. Also the console logs gets printed at the server side and they will print inside the development mode and not inside the production mode.

Static Page's codes only get run one time only when the application is getting build on build command.

When we run the server and operate over build operation, we can see all these statically and dynamically created web pages.

Static Rendering happens at the build time and it happens at server. Dynamic Rendering happens over the server and full page renders on the run time when we make request over the dynamic route.

When we make a request on the dynamic page, the id is fetched and a json response is sent by the server to the client to show the page and it is the fetch API call where the action is performed or a button or a link is clicked on.

This is how the CSR and SSR work inside the Next.js web application.

## SSG: Static Site Generation

We will make use of generateStaticParams to generate the pages by using SSG. We will have all the pages rendered beforehand itself. generateStaticParams will return the array with objects and passing of key which is the same slug we are using.

We can also make the fetch API request inside the generateStaticParams function and it will send us the data that we can work on or operate over. SSG happens at the build time and it is pretty quick and fast as the content or file is already have been generated fully.

dynamicParams: It will be used to show the notFound page when we go on page that is not generated using SSG and we need to keep it as true. If we want that we should not generate any page id on fly and we want it to be kept as false, so now the pages will not be generated and we will see notFound Page.

## ISR: Incremental Site Re-Generation

revalidate: It is used to tell the number of seconds and it will revalidate the page after x number of seconds and that page will regenerated only after the user came to that particular screen or component. By default's it's value is false. We need to only revalidate our page only when our page changes frequently after particular time. We can also pass the revalidate the same using the fetch inside the next property inside the fetch and it will work in similar way. When we refresh the page, it gets generated by server after x seconds when revalidate after x seconds and the updated page is reflected after we click on refresh again.

## Dynamic Rendering of Static Pages

By default, the static pages are generated statically and dynamic pages are generated dynamically. This can be done using:

export const dynamic = 'force-dynamic';

dynamic: It has by default value as auto by default. If we have any of the methods used such as cookies(), headers() or useSearchParams(), then if we use dynamic property as auto, so then it makes that page render dynamically. We can also set it as force-static, so a page becomes as static by default. If we set it as force-static, no effect will be made even if we use headers(), cookies() or useSearchParams(), then also it will not show any results.

If we take searchParams out of the props by destructuring the props and use them just to take out, then also the component or page is rendered dynamically.

We can also make a component or page to be rendered dynamically, we can do so by using the:
const myCookies = await cookies(); and bringing cookies from 'next/headers' package, then also the component becomes the dynamic component. Even if we use headers() to get the headers, then also our page will become as dynamically rendered.

If we give dynamic as error and we have provided any of these functions such as searchParams, headers() or cookies(), then we will get error as we want to render that page statically and if use any of the methods for dynamic rendering, so it will throw the error.

## Streaming in Next.js

It is a new rendering paradigm. We can have a component that takes time, we can use the Suspense for this and show a fallback for time being after wrapping that component inside the Suspense. This will prevent the page from getting stuck and it will have our page loaded fully.

This is called as Streaming in Next.js and that is how the data comes up in the component from the API and we should keep those kinds of components inside the Suspense block. inside the suspense, we can pass the fallback with the children prop inside it.

## Client vs Server Components

Server components run over the server and by default all the components in Next.js are server components.

Client components are executed on the server as well and then we will send the code over the client or the browser.

We will make a component as client component when we want to interact with the browser or browser APIs. We can make use of "use client" directive and this will make our component as client component. In browser dev tools, in source file we can see the jsx code only because due to the source maps.

Accessing this on server side may then also give us the error and this error can be prevented using:

if(typeof localStorage !=="undefined"){
    console.log(localStorage);
}

If we want interactivity or using event handlers or using hooks or using browser API's, we need to make the component as client component. Also, this makes the server to skip the client code totally. If we use console.log() inside {}, the server will give undefined as the return value. In React, same code will not give any value as returned.

If we make a parent component as client component, all the child components inside the parent component becomes the client components.

We should not send all the data to the client by making all the content as client components as it will put a lot of load over the client.

We should make the smallest component as the client component itself.

## Hydration

It is the process where we interactivity to the pre-rendered HTML.

Server will add the HTML code and at the client side component has the JS added already over the client side code.

In the Link component, the Default behavior of the a tag has been removed and the users are transferred to the other page.

Start From 04:00 Mins.
