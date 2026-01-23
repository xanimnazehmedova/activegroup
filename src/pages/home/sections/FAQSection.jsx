
import React, { useEffect, useState } from 'react';
import '../scss/faqsection/FAQSection.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        {
            question: "Active Group ehtiyat hissələri hansı üstünlüklərə malikdir?",
            answer: "Active Group avtomobil sənayesinə uyğun geniş çeşiddə ehtiyat hissələri təklif edir. Məhsullarımız yüksək keyfiyyət standartlarına cavab verir, beynəlxalq sertifikatlara sahibdir və uzunömürlü istifadəsi ilə seçilir. İstər minik avtomobilləri, istərsə də kommersiya nəqliyyat vasitələri üçün ehtiyaclarınızı qarşılaya biləcək orijinal və alternativ variantlarımız mövcuddur."
        },
        {
            question: "Active Group hansı beynəlxalq brendlərlə əməkdaşlıq edir?",
            answer: "Active Group avtomobil sənayesində dünya miqyasında tanınmış markaların rəsmi tərəfdaşıdır. Portfelimizdə Bosch, Total, ZF, Schaeffler, Valeo, Mahle, NGK, Delphi kimi lider brendlərlə yanaşı, Brembo, Osram, Corteco, Dayco, UFI və s. kimi yüksək keyfiyyətli istehsalçılar da yer alır. Bu geniş seçim müştərilərimizə həm etibarlı, həm də bazar ehtiyaclarına uyğun məhsullar təqdim etməyə imkan verir."
        },
        {
            question: "Active Group ilə əməkdaşlıq etmək üçün nə etməliyəm?",
            answer: "Active Group ilə əməkdaşlıq etmək istəyən tərəfdaşlar rəsmi saytımız üzərindən müraciət formunu doldura və ya əlaqə bölməsində göstərilən kanallar vasitəsilə bizimlə birbaşa əlaqə saxlaya bilərlər. Müraciətiniz qısa müddətdə dəyərləndiriləcək və əməkdaşlıq şərtləri barədə ətraflı məlumat təqdim olunacaq."
        }
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    
     useEffect(() => {
          AOS.init({
              duration: 750, 
              once: false, 
              easing: 'ease-out', 
              offset: 100, 
          });
      }, []); 
    

    return (
        <section className="ui-faq">
            <div className="container">
                <h2 className="ui-faq-heading"  data-aos="fade-up">Tez-tez verilən suallar</h2>
                <div className="ui-faq-list">
                    {faqData.map((item, index) => (
                        <div
                            className={`ui-faq-item ${openIndex === index ? 'open' : ''}`}
                            key={index}
                        >
                            <div className="ui-faq-question" onClick={() => handleToggle(index)}>
                                <span>{item.question}</span>
                                <span className="ui-faq-toggle-icon">
                                    {openIndex === index ? '-' : '+'}
                                </span>
                            </div>
                            {openIndex === index && (
                                <div className="ui-faq-answer">
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;