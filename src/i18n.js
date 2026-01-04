document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    es: {
      title: "Ingeniero Civil en Informática",
      about: "Desarrollador enfocado en aplicaciones web y móviles."
    },
    en: {
      title: "Civil Engineer in Computer Science",
      about: "Developer focused on web and mobile applications."
    }
  };

  let currentLang = "es";

  const btn = document.getElementById("langToggle");
  const esSpan = btn.querySelector(".lang-es");
  const enSpan = btn.querySelector(".lang-en");

  function setLanguage(lang) {
    currentLang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      el.textContent = translations[lang][key];
    });

    // Estilo activo
    esSpan.classList.toggle("active", lang === "es");
    enSpan.classList.toggle("active", lang === "en");
  }

  btn.addEventListener("click", () => {
    setLanguage(currentLang === "es" ? "en" : "es");
  });

  setLanguage("es");
});