import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="border border-brand-indigo/20 rounded-xl bg-brand-navy/50">
            <button
              className="w-full flex items-center justify-between px-5 py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="text-white font-semibold">{item.question}</span>
              <ChevronDown
                size={20}
                className={`text-brand-ice/70 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
            {isOpen && <div className="px-5 pb-5 text-brand-ice/70 text-sm leading-relaxed">{item.answer}</div>}
          </div>
        );
      })}
    </div>
  );
}
