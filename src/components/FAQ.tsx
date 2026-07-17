import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: 'What is GitGud?',
    answer:
      'GitGud is a hands-on community workshop where developers practice real Git workflows, collaboration habits, and open-source contribution basics in a low-pressure environment.',
  },
  {
    question: 'Do I need prior Git experience?',
    answer:
      'Not at all. The sessions are designed for beginners and experienced developers alike, with guided examples and plenty of support for anyone who wants to sharpen their workflow.',
  },
  {
    question: 'Is the event open to beginners?',
    answer:
      'Yes. We welcome newcomers who are curious about Git, as well as experienced contributors looking to strengthen their team practices and collaboration confidence.',
  },
  {
    question: 'Will I need to bring my own laptop?',
    answer:
      'A laptop is recommended so you can follow along with the live demos and exercises. If you are unable to bring one, let us know and we will help you get set up.',
  },
  {
    question: 'What should I expect from the workshop?',
    answer:
      'Expect a combination of short talks, live demos, and practical exercises focused on branching, commits, pull requests, conflict resolution, and collaboration etiquette.',
  },
  {
    question: 'Can I attend if I cannot stay the full time?',
    answer:
      'Absolutely. You are welcome to join for the sections that fit your schedule, and we will make sure the material is easy to follow even if you arrive late or leave early.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section id="faq" className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-extrabold text-slate-900 md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mb-10 text-slate-600">
          Browse the most common questions below and expand any topic you want to explore.
        </p>

        <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
          {faqItems.map((item, index) => {
            const isOpen = index === openIndex;

            return (
              <div key={item.question} className="overflow-hidden rounded-xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between bg-white px-5 py-4 text-left text-slate-800 transition hover:bg-slate-50"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold">{item.question}</span>
                  <span
                    className={`ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.06 1.08l-4.24 4.38a.75.75 0 01-1.06 0L5.21 8.31a.75.75 0 01.02-1.1z" />
                    </svg>
                  </span>
                </button>

                {isOpen ? (
                  <div id={`faq-answer-${index}`} className="border-t border-slate-200 bg-slate-50 px-5 py-4 text-left text-sm leading-7 text-slate-600">
                    {item.answer}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
