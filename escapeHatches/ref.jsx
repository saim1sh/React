// Like state, refs are retained by React between re-renders. However, setting state re-renders a component. Changing a ref does not! You can access the current value of that ref through the ref.current property.

// A ref is like a secret pocket of your component that React doesn’t track. For example, you can use refs to store timeout IDs, DOM elements, and other objects that don’t impact the component’s rendering output.


import { useRef } from 'react';

export default function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}
