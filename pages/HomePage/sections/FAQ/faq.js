"use client";
import React, { useState } from 'react';
import './FAQSection.scss';

const FAQSection = () => {
  const [activeItem, setActiveItem] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "Які основні переваги вашого сервісу?",
      answer: "Наш сервіс надає швидкі та надійні рішення з високим рівнем безпеки, професійною підтримкою 24/7 та гнучкими тарифними планами для будь-яких потреб."
    },
    {
      id: 2,
      question: "Як швидко можна розпочати роботу?",
      answer: "Реєстрація займає лише кілька хвилин. Після підтвердження облікового запису ви можете одразу розпочати користуватися всіма функціями платформи."
    },
    {
      id: 3,
      question: "Чи є безкоштовний пробний період?",
      answer: "Так, ми пропонуємо 14-денний безкоштовний пробний період без обмежень функціоналу. Жодних прихованих платежів чи комісій."
    },
    {
      id: 4,
      question: "Які способи оплати ви приймаєте?",
      answer: "Ми приймаємо всі основні банківські карти, PayPal, банківські перекази та криптовалюти. Всі платежі захищені SSL-шифруванням."
    },
    {
      id: 5,
      question: "Як працює технічна підтримка?",
      answer: "Наша команда підтримки працює цілодобово через чат, електронну пошту та телефон. Середній час відповіді становить менше 15 хвилин."
    },
    {
      id: 6,
      question: "Чи можна змінити тарифний план?",
      answer: "Звичайно! Ви можете змінити тарифний план в будь-який момент через особистий кабінет. Зміни набувають чинності негайно."
    }
  ];


  const toggleItem = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  const FAQItem = ({ item }) => {
    const isActive = activeItem === item.id;
    
    return (
      <div 
        className={`faq-item ${isActive ? 'active' : ''}`}
        onClick={() => toggleItem(item.id)}
      >
        <div className="faq-header">
          <h3 className="faq-question">{item.question}</h3>
          <div className="faq-icon"></div>
        </div>
        <div className="faq-answer">
          <p>{item.answer}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="faq-container-wrapper">
      <div className="faq-container">
        <h2 className="faq-title">Часті запитання FAQ?</h2>
        
        <div className="faq-grid">
          {faqData.map((item) => (
            <FAQItem 
              key={item.id} 
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;