import React from 'react';
import AccordianItem from './AccordianItem';

const Faq = () => {
  const faqData = [
    {
      question: "How does it works?",
      answer: "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna. Augue aliquet varius faucibus ut integer tristique ut. Pellentesque id nibh sed nulla non nulla"
    },
    {
      question: "Can I rent a car without a credit card?",
      answer: "Yes, in most locations we offer alternatives, though specific documentation like a valid debit card and proof of insurance may be required."
    },
    {
      question: "What are the requirements for renting a car?",
      answer: "Generally, you need a valid driver's license held for at least one year, a major credit card, and to meet the minimum age requirement for the specific vehicle category."
    },
    {
      question: "Does Car Rental allow me to tow with or attach a hitch to the rental vehicle?",
      answer: "Towing is generally not permitted with standard rental vehicles. Please contact our support for specialized commercial vehicle options."
    },
    {
      question: "Does Car Rental offer coverage products for purchase with my rental?",
      answer: "We offer several protection plans including Loss Damage Waiver (LDW) and Supplemental Liability Insurance to provide peace of mind during your trip."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16 mt-[-50px]">
        Top Car Rental Questions
      </h2>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <AccordianItem 
            key={index} 
            question={item.question} 
            answer={item.answer} 
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;