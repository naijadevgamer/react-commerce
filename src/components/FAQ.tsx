import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Define a type for the FAQ items
interface FAQItem {
  question: string;
  answer: string;
  value: string; // This will be used as the value for AccordionItem
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "What is your return policy?",
    answer:
      "We offer hassle-free returns within 30 days of your purchase. Items must be unworn, unwashed, and in their original packaging. To start a return, visit our Returns page for detailed instructions.",
    value: "item-1",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping typically takes 3-7 business days, depending on your location. We also offer expedited shipping options at checkout for faster delivery.",
    value: "item-2",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to select countries worldwide. Shipping fees and delivery times vary based on your location. Check our Shipping Information page for more details on international shipping.",
    value: "item-3",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, we will send you a tracking number via email. You can use this number to track your package on our website or directly through the carrier’s site.",
    value: "item-4",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and other popular payment options. All transactions are secure and encrypted for your safety.",
    value: "item-5",
  },
  {
    question: "Can I cancel or change my order after it's placed?",
    answer:
      "If you need to cancel or make changes to your order, please contact our customer support team within 24 hours of placing your order. Once the order is processed, we may not be able to make modifications.",
    value: "item-6",
  },
];

const FAQ = () => {
  return (
    <section className="mx-auto mb-24 w-full max-w-4xl px-4 py-4 text-xl sm:px-6 sm:py-8 lg:px-8">
      <h1 className="mb-6 text-center font-audiowide text-2xl font-semibold uppercase tracking-tight md:text-3xl">
        Frequently Asked Questions
      </h1>
      {/* Use map to dynamically generate AccordionItems from the faqData array */}
      <Accordion type="multiple">
        {FAQ_DATA.map((faq) => (
          <AccordionItem key={faq.value} value={faq.value}>
            {/* AccordionTrigger displays the FAQ question */}
            <AccordionTrigger className="text-start font-audiowide text-xl font-semibold hover:decoration-primary sm:text-2xl">
              {faq.question}
            </AccordionTrigger>
            {/* AccordionContent displays the FAQ answer */}
            <AccordionContent className="text-lg">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
