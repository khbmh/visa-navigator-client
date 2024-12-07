function Faq() {
  const faqs = [
    {
      question: 'How do I apply for a visa through the Visa Navigator Portal?',
      answer:
        "To apply for a visa, follow these steps:\n1. Log in or Register if you don't have an account.\n2. Navigate to the All Visas page and find the visa you are interested in.\n3. Click the See Details button to view comprehensive information about the visa.\n4. On the visa details page, click the Apply for Visa button.\n5. Fill out the application form in the modal and submit it.",
    },
    {
      question: 'Can I add a new visa entry to the portal?',
      answer:
        'Yes, you can add a new visa entry if you are logged in. Follow these steps:\n1. Click on the Add Visa link in the navbar.\n2. Fill out the form with the required details.\n3. Click the Add Visa button to submit the form.\n4. A success message will confirm that your visa entry has been added.',
    },
    {
      question: 'How do I manage my added visas?',
      answer:
        'To manage your added visas:\n1. Log in to your account.\n2. Navigate to the My Added Visas page.\n3. Here, you can view all the visas you have added.\n4. Use the Update button to edit a visa entry or the Delete button to remove it.',
    },
    {
      question: 'What should I do if I want to cancel a visa application?',
      answer:
        'To cancel a visa application:\n1. Log in to your account.\n2. Go to the My Visa Applications page.\n3. Find the application you wish to cancel.\n4. Click the Cancel button next to the application.\n5. The application will be removed from both the portal and the database.',
    },
  ];
  return (
    <div className="container mx-auto px-4 lg:w-[70vw] my-16">
      <h1 className="text-3xl lg:text-5xl text-center font-bold my-8">
        Frequently Asked Questions
      </h1>
      {faqs.map((faq, id) => (
        <div key={id} className="collapse collapse-arrow my-3 border">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            <h2>{faq.question}</h2>
          </div>
          <div className="collapse-content">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Faq;
