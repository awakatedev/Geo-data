# SRC directory (Structure of frontend)

Here you can see the standard of how Uptly handles its platform using React.js, below you will see a list of standards of use of the library, and how it connects with technologies such as the css pre-processor "sass" to give styles to the platform , Redux to handle state, and the way to create components, folders and the correct handling of JSX within Uptly projects.

# Table of content:
- [Structure of React.js](#structure-of-react.js)
- [Redux](#redux)
- [Structure of SASS](#structure-of-sass)

# Structure of React.js
- [Eslint standar rules](#)
- [Naming](#naming)
- [Coments](#)


## Naming
Extensions: Use .jsx extension for React components. eslint: react/jsx-filename-extension

Filename: Use PascalCase for filenames. E.g., ReservationCard.jsx.

Reference Naming: Use PascalCase for React components and camelCase for their instances. eslint: react/jsx-pascal-case
```
// bad
import reservationCard from './ReservationCard';

// good
import ReservationCard from './ReservationCard';

// bad
const ReservationItem = <ReservationCard />;

// good
const reservationItem = <ReservationCard />;
```
Component Naming: Use the filename as the component name. For example, ReservationCard.jsx should have a reference name of ReservationCard. However, for root components of a directory, use index.jsx as the filename and use the directory name as the component name:

// bad
import Footer from './Footer/Footer';

// bad
import Footer from './Footer/index';

// good
import Footer from './Footer';
Higher-order Component Naming: Use a composite of the higher-order component’s name and the passed-in component’s name as the displayName on the generated component. For example, the higher-order component withFoo(), when passed a component Bar should produce a component with a displayName of withFoo(Bar).

Why? A component’s displayName may be used by developer tools or in error messages, and having a value that clearly expresses this relationship helps people understand what is happening.

// bad
export default function withFoo(WrappedComponent) {
  return function WithFoo(props) {
    return <WrappedComponent {...props} foo />;
  }
}

// good
export default function withFoo(WrappedComponent) {
  function WithFoo(props) {
    return <WrappedComponent {...props} foo />;
  }

  const wrappedComponentName = WrappedComponent.displayName
    || WrappedComponent.name
    || 'Component';

  WithFoo.displayName = `withFoo(${wrappedComponentName})`;
  return WithFoo;
}
Props Naming: Avoid using DOM component prop names for different purposes.

Why? People expect props like style and className to mean one specific thing. Varying this API for a subset of your app makes the code less readable and less maintainable, and may cause bugs.

```
// bad
<MyComponent style="fancy" />

// bad
<MyComponent className="fancy" />

// good
<MyComponent variant="fancy" />
```
# Redux
# Structure of SASS
- [Ordering](#)
- [Importations](#)
- [Nesting](#)
- [Variables](#)
- [Mixins](#)
- [Place holders](#)
