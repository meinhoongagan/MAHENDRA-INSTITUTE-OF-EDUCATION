import FAQItem from "../components/FAQItem"

const FAQSection = () => {
  const faqs = [
    {
      question: "How long does each course take to complete?",
      answer: "Our courses are designed to be completed in 8-12 weeks, depending on your pace and prior experience. Each module includes approximately 5-10 hours of content including videos, readings, and hands-on exercises."
    },
    {
      question: "Are there any prerequisites for enrolling?",
      answer: "Most of our beginner courses don't require any prior knowledge. For intermediate and advanced courses, we recommend checking the specific prerequisites listed on each course page."
    },
    {
      question: "Do you offer certificates upon completion?",
      answer: "Yes! After successfully completing all required modules and assignments, you'll receive a digital certificate that you can share on platforms like LinkedIn or include in your resume."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-300 text-white shadow-md">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};


export default FAQSection