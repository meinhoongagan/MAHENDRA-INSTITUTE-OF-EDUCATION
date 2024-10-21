// FAQItem.js
import React from 'react';

function FAQItem({ question, answer }) {
  return (
    <details className="mt-4">
      <summary className="text-lg sm:text-xl md:text-2xl font-semibold">
        {question}
      </summary>
      <p className="text-md sm:text-lg md:text-xl mt-2 mb-2">
        {answer}
      </p>
    </details>
  );
}

export default FAQItem;
