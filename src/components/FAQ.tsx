import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="mx-auto mb-24 w-full max-w-4xl px-4 py-4 text-xl sm:px-6 sm:py-8 lg:px-8">
      <h1 className="mb-6 text-center font-audiowide text-2xl font-semibold uppercase tracking-tight md:text-3xl">
        Frequently Asked Questions
      </h1>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-2xl">
            Is it styled?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-2xl">
            Is it animated?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQ;
