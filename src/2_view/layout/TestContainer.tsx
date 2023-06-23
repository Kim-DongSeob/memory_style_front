'use client';
import React from 'react';
import HeaderLayout from "@/2_view/layout/HeaderLayout";

const TestContainer = () => {

  return (
    <div>
      <div>Test SSR Container and this is CSR component</div>
      {/*<button onClick={onClick}>Test SSR Button</button>*/}
      <HeaderLayout onClick={() => console.log('saldkfjasd')} />
    </div>
  )
}

export default TestContainer;
