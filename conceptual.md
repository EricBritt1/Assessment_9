### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

My version:
The purpose of react router is to allow for your react app to have routes. These routes then generate different components when end point is requested. This can all be done on one page.

ChatGPT version (To help me learn):
- Main purpose is to enable navigation and routing within single-page-applications.



- What is a single page application?

My version:
I don't know exactly. I believe it's when no other external pages are generated but rather all routes are handled in one page. 

ChatGPT version:
- A web application that operates within a single HTML page. Instead of loadiong entire new pages from the server as the user interacts with the application, SPAs dynamically update portions of the page, typically using JavaScript frameworks like React, Angular, or Vue.js.

- What are some differences between client side and server side routing?
My version:

I am not sure myself as it has been quite long. Only thing I know is client side doesn't require page to reload but, server side does require entire page to reload. 

ChatGPT version (To help me learn):

CLient-Side:
Routing is handled within the browswer
Page does not reload switching between different routes
SPA support
More front end logic

Server-Side:
Each navigation request from the client results in a new page being rendered and sent from the server
Full page reload
Less front end logic



- What are two ways of handling redirects with React Router? When would you use each?

This is what I've been using: 

useNaviage():
You'd want to useNavigate() to take a user after an event is sucessful. After placing an order. You don't want the user to access this page without having placed an order. Renders a NEW componenet.


Navigate hook:
You'd want to use a Navigate hook when an individual is trying to access a page they don't have permission to view. This will take them back to permitted areas of the single page application. The key difference is that that's actually a page that can be accessed rather than an order placed page. Not rendering a new component


ChatGPT:
(I will personally start implementing this but, springboard did not go over):
Redirect componenet from react-router-dom

useHistory


- What are two different ways to handle page-not-found user experiences using React Router? 

First in foremost in App, being the last thing in Browser.router, you can place a <Route path='*' element={<Navigate to='*'/>} />. This is a fallback route for routes that don't match any of the other Routes listed in the <Routes> <Routes /> tag.

You can also create a page not found component and render that. <Route path='*' element={<NotFound />} />.

- How do you grab URL parameters from within a component using React Router?

Example:

<Route path='/home/::form>

In component:

import { useParams } from 'react-router-dom';

const { form } = useParams()

- What is context in React? When would you use it?
Context in React is a object that can be consumed by whichever components you'd like. This is suppose to ease the access of would be prop information across components. You'd use it when you have multiple state, functions or data you'd like to share among multiple components.

- Describe some differences between class-based components and function
  components in React.
Class-based components:
Are classes
Needs to extend component
Need constructors for state and to call methods
Must use render() function to render the HTML and data onto page

functional components:
Declared by using a function
Doesn't need to EXTEND component
Can use hooks and custom hooks
Can use useState 
No render needed 
No constructor needed (Because it's not a class)
Return the HTML


- What are some of the problems that hooks were designed to solve?

To better control side effects
The complex class syntax
To minimize reuse and sharing of logic