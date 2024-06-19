# Namaste React


# parcel

-Development Build
-Local Server
-HMR = Hot Module Replacement
-File Watching Algorithm (written in C++)
-Caching = Faster Builds
-Image Optimization
-Minification
-Bundling
-Compressed
-Consistent Matching
-Code Splitting
-Differential Bundling => support older browser
-Diagnostic
-Error Handling
-HTTPs
-Tree Shaking(remove unused code)
 

  // APP STRUCTURE

/**
 * Header
 *  -logo
 *  -Nav Items
 * Body
 *  -Search
 *  -Restro Container
 *    -RestaurantCard
 *      -Name of Res , Star Rating , Delivery type
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 */


Two types of Export and Import :

 1. Default Export/Import

  export default Component;
  import Component from "path";

 2. Named Export/Import => when there are two or  more things to export then we use it.

   export const component;
   import {component} from "path";


 # React Hooks
-Normal js utility function 
 2 imp hooks
-useState() = superpowerful state variables in react
  -useEffect()