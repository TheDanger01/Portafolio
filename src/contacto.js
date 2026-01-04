document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const error = document.getElementById("formError");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita recargar la página

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    error.textContent = "";
    form.classList.add("enviado"); // Activa los estilos de validación

    /* ===== VALIDAR NOMBRE ===== */
    const nameNoSpaces = name.replace(/\s+/g, "");
    const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (nameNoSpaces.length < 3) {
      error.textContent = "El nombre debe tener al menos 3 letras.";
      //nameImput.focus();
      return;
    }

    if (!nameRegex.test(name)) {
      error.textContent = "El nombre solo puede contener letras.";
      return;
    }


    /* ===== VALIDAR EMAIL ===== */
    const emailRegex = /^[^\s@]+@[^\s@]{2,}\.[^\s@]{2,}$/;

    if (!emailRegex.test(email)) {
      error.textContent = "Ingresa un correo electrónico válido.";
      //emailInput.focus();
      return;
    }

    /* ===== VALIDAR MENSAJE ===== */
    const messageNoSpaces = message.replace(/\s+/g, "");

    if (messageNoSpaces.length < 5) {
      error.textContent = "El mensaje debe tener al menos 5 caracteres.";
      messageInput.focus();
      return;
    }

    /* ===== ENVIAR CORREO ===== */
    emailjs.send("service_hulzuwb", "template_xn1m1oi", {
      name: name,
      email: email,
      message: message,
    })
    .then(() => {
      alert("Mensaje enviado correctamente");
      form.reset();
      form.classList.remove("enviado");
    })
    .catch(() => {
      error.textContent = "Error al enviar el mensaje. Intenta nuevamente.";
    });

    // Si todo es válido
    form.reset();
    form.classList.remove("enviado"); // Desactiva los estilos de validación
  });

  // VALIDACIÓN EN TIEMPO REAL (al corregir)
  const inputs = form.querySelectorAll("input, textarea");

  inputs.forEach(input => {
    input.addEventListener("input", () => {
        if (form.classList.contains("enviado")) {
            input.reportValidity();
        }
    });
  });

});