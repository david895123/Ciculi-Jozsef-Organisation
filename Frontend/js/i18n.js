async function loadLanguage(lang) {
  const res = await fetch(`lang/${lang}.json`);
  const dict = await res.json();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
}

const saved = localStorage.getItem('lang');
const browserLang = navigator.language.slice(0, 2);
const supported = ['en', 'ro', 'hu'];
const initial = saved || (supported.includes(browserLang) ? browserLang : 'hu');
loadLanguage(initial);