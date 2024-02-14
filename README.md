Namaste React Course


# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File monitoring algorithm
- Caching - Faster build
- Image Optimization
- Bundling
- Compress files
- Consistent Hashing
- Code Splitting
- Differential bundling - support older browser
- Good Error suggestion
- Gives HTTPS support
- Tree Shaking - removes unused code

# Babel
- Helps to transpile the code(converts jsx to react element, which then again gets converted to html & js when rendered)
- It is one of the packages used by parcel while bundling the code

# Default Export/Import
- export default Component;
- import Component from 'path';

# Named export / import
- export const Component;
- import {Component} from 'path';

# React Hooks
(Normal JS utility function)
- useState() - Helps create state variables
- useEffect():
    - If no dependency array => useEffect is called on every render.
    - If dependency array is empty [] => useEffect is called on initial render
    - If dependency array contains some variable => useEffect will be called everytime the variable changes
    - (NOTE: useEffect is called on initial render everytime doesn't matter the dependency array)

# rfce is used to create boilerplate of a react functional component in vs code.

# There are 2 types of Routing-
- Server side routing - Whenever we route to a different path a request is sent to the server to get that web page.
- Client side routing - We already have the components for every Link used within the page, so no request is made to the server to get the web page instead the components are just refreshed.

