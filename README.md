# Web Components

Creating encapsulated components without using any frameworks (framework agnostic). This could be a UI component, or any part of your your app that needs components. etc., search bar, header, blog post.

Web components are set of web platform API's that allow us to create custom, reusable and encapsulated html tags to use in web pages and web apps. This does not require and 3rd party libraries or frameworks. In fact, you may use web components in other frameworks, react, vue..

## 3 main building blocks of Web components

* Custom Elements
  ** LifeCycle Methods
    * constructor(): called when an instance of the element is created or upgraded
    * connectedCallback(): called every time when the element is inserted into the DOM
    * disconnectedCallback(): called every time the element is removed from the DOM
    * attributeChangedCallback(attributeName, oldValue, newValue): called when an attribute is added, removed, updated or replaced.
* Shadow DOM
  * used for self-contained components
  * encapsulated styles and markup
  * create with element.attachShadow({mode:open})
  * creates a "shadowRoot" that we can reference and interact with
* HTML Templates
  * defines the encapsulated markup of our web component
  * template tag stores markup on page
  * include both HTML and CSS in templates
  * use slots to add custom text