# App.css vs Index.css
1. The App component is the top most component in a React-based application, from whom all other components are children of
2. The best practice for structuring a React-based app is to have each component in it's own separate directory with its own index.js file, index.css file and index.test.js or however you want to structure your test files.
3. "Index.js" is the first file looked for in a directory when you call an ES6 import statement for that directory, so you can write:

import HUD from './HUD'

instead of:

import HUD from './HUD/HUD.js'

4. So using index.css just helps to make clear that this index.css file is for this Component, since this index.js only refers to this Component

5. A src level index.css file would be a good place to put top-level container DOM element CSS style rules, since the src level index.js is the initial place in a React-based application where you tell React to physically mount the App Component to the actual HTML DOM, on a container element, something like this and say that 'root' is an ID of an element already on the page before your JavaScript loads:

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render( <App />, document.getElementById('root'))



# CSS ordering
The order of precedence is :

inline CSS ( html style attribute ) overrides CSS rules in style tag and CSS files

a more specific selector takes precedence over a less specific one

rules that appear later in the code override earlier rules if both have the same specificity.

For single selectors from highest to lowest:
ids (example: #main selects <div id="main">)
classes and pseudo-classes (examples: .myclass, :hover
elements and pseudo-elements (examples: div, ::before)
