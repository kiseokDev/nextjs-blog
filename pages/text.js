import React from 'react'
import { getText } from './api/hello';

export default function Text({text}) {
  return (
    <div>
      {text.text}!!!!!
    </div>
  )
}

export async function getStaticProps() {
    // Add the "await" keyword like this:
    const text = await getText();

    return {
        props: {
            text,
        },
    };
}
