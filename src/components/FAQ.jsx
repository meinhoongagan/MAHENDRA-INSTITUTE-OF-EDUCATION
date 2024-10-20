import React from 'react';

function FAQ() {
  return (
    <div className="bg-[#B1E8FD] py-8 mt-10">
    <h1 className='text-3xl font-bold mb-8 flex justify-center border rounded-xl bg-blue-200 py-5'>FAQ</h1>
      <div className='mx-36'>
      <p className="text-6xl font-bold">FAQs: What students usually ask us?</p>
      <p className="text-3xl mt-5 mb-5">Career Counselling is a specialized service that needs multiple resources ranging from trained counsellors, to an updated database and psychometric tests. We combine this all and bundle it as a service for schools of repute eager to benefit their students.</p>

      <details>
        <summary className='text-2xl font-semibold'>What is Career Counseling & Guidance?</summary>
        <p className="text-xl mt-2 mb-2">Career Guidance is a comprehensive, right-based development approach that assists individuals in making informed educational and occupational choices, leading to their social, financial, and emotional well-being.</p>
      </details>

      <details>
        <summary className='text-2xl font-semibold'>Why is Career Counselling important?</summary>
        <p className="text-xl mt-2 mb-2">All of us are bound to get stuck at some point in our life. It is at such self-introspective times that we become more aware of ourselves and take actions accordingly. So, when it comes to deciding about our future, should we follow a trend or discover what works best for us?</p>
      </details>
      </div>
    </div>
  );
}

export default FAQ;