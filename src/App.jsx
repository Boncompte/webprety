import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

const Section = ({ title, description }) => (
  <div className="bg-white bg-opacity-5 p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition-all">
    <h2 className="text-2xl font-semibold mb-2 text-lime-300">{title}</h2>
    <p className="text-white">{description}</p>
  </div>
);

function App() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('ca')) i18n.changeLanguage('ca');
    else if (browserLang.startsWith('es')) i18n.changeLanguage('es');
    else i18n.changeLanguage('en');
    setLanguage(i18n.language);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <div className="space-y-10">
      <div className="flex justify-end gap-4">
        <button onClick={() => changeLanguage('ca')} className="text-sm hover:underline text-lime-300">Català</button>
        <button onClick={() => changeLanguage('es')} className="text-sm hover:underline text-lime-300">Castellano</button>
        <button onClick={() => changeLanguage('en')} className="text-sm hover:underline text-lime-300">English</button>
      </div>
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-lime-400">{t('title')}</h1>
        <p className="text-xl mt-4 text-slate-300">{t('subtitle')}</p>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Section title={t('theory_title')} description={t('theory_desc')} />
        <Section title={t('corpus_title')} description={t('corpus_desc')} />
        <Section title={t('applications_title')} description={t('applications_desc')} />
        <Section title={t('records_title')} description={t('records_desc')} />
        <Section title={t('author_title')} description={t('author_desc')} />
        <Section title={t('contact_title')} description={t('contact_desc')} />
      </main>
    </div>
  );
}

export default App;
