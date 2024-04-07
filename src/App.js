import './App.css';

import {useEffect, useState} from 'react';

function Child({parentCount}) {
  const [childCount, setChildCount] = useState(0);

  useEffect(() => {
    setChildCount(parentCount * 2);

    console.log('useEffect logic ran');
  }, [parentCount]); // 👈️ add props as dependencies

  return (
    <div>
      <button>Child count {childCount}</button>
    </div>
  );
}

export default function Parent() {
  const [parentCount, setParentCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => setParentCount(current => current + 1)}
      >
        Parent count: {parentCount}
      </button>

      <hr />

      <Child parentCount={parentCount} />
    </div>
  );
}
