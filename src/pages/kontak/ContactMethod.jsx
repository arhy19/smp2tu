import React from 'react';

function ContactMethod({ type }) {
  const methods = {
    telegram: {
      label: 'Chat (Telegram)',
      link: 'https://t.me/spentwo19',
      className: 'telegram-btn',
    },
  };

  const method = methods[type];

  return (
    <a
      href={method.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`contact-btn ${method.className}`}
    >
      {method.label}
    </a>
  );
}

export default ContactMethod;
