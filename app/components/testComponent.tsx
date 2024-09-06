// components/TestComponent.tsx
"use client";

import { useEffect } from 'react';

const TestComponent = () => {
  useEffect(() => {
    console.log("TestComponent mounted");
  }, []);

  return <div>Test Component</div>;
};

export default TestComponent;
