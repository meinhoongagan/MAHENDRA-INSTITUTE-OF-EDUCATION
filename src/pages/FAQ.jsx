// FAQ.js
import React from 'react';
import FAQItem from '../components/FAQItem';


function FAQ() {

  const faqData = [
    {
      question: "What is Career Counseling & Guidance?",
      answer: "Career Guidance is a comprehensive, right-based development approach that assists individuals in making informed educational and occupational choices, leading to their social, financial, and emotional well-being."
    },
    {
      question: "Why is Career Counselling important?",
      answer: "All of us are bound to get stuck at some point in our life. It is at such self-introspective times that we become more aware of ourselves and take actions accordingly. So, when it comes to deciding about our future, should we follow a trend or discover what works best for us?"
    },
    {
      question: "How can Career Counseling help students?",
      answer: "Career counseling helps students understand their strengths, skills, and areas of interest, enabling them to make more informed career decisions."
    }
  ];

  return (
    <div className="bg-[#B1E8FD] py-8 mt-10">
      <h1 className="text-3xl font-bold mb-8 flex justify-center border rounded-xl bg-blue-200 py-5 md:text-4xl sm:text-2xl">
        FAQ
      </h1>
      <div className="mx-4 sm:mx-8 md:mx-20 lg:mx-36">
        <p className="text-2xl md:text-3xl font-bold">
          FAQs: What students usually ask us?
        </p>
        <p className="text-lg md:text-xl mt-5 mb-5">
          Career Counselling is a specialized service that needs multiple resources ranging from trained counsellors, to an updated database and psychometric tests. We combine this all and bundle it as a service for schools of repute eager to benefit their students.
        </p>

        {/* Map over the faqData array to render FAQItem components */}
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

export default FAQ;
