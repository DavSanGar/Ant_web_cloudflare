/**
 * DAVID SÁNCHEZ - CORTADOR PROFESIONAL DE JAMÓN IBÉRICO
 * Interacciones, Adaptación de Color SVG, Calculadora y Navegación
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Control del Header en Scroll ---
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-link');

  const handleHeaderScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleHeaderScroll);
  handleHeaderScroll();

  // --- 2. Menú Móvil ---
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isExpanded = navLinks.classList.contains('active');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    navItems.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- 3. Filtros de Galería / Proyectos ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // --- 5. Calculadora Dinámica de Presupuesto Rápido ---
  const serviceSelect = document.getElementById('calcService');
  const guestsInput = document.getElementById('calcGuests');
  const piecesSelect = document.getElementById('calcPieces');
  const estimateDisplay = document.getElementById('estimateAmount');
  const quoteForm = document.getElementById('quoteForm');

  const calculateEstimate = () => {
    if (!serviceSelect || !estimateDisplay) return;

    const service = serviceSelect.value;
    const guests = parseInt(guestsInput ? guestsInput.value : 100) || 100;
    const pieces = parseInt(piecesSelect ? piecesSelect.value : 1) || 1;

    let basePrice = 220; // Tarifa base corte directo 1 pieza

    switch (service) {
      case 'boda':
        // Evento boda con cortador en directo, soporte y presentación mesa
        basePrice = 280 + (pieces > 1 ? (pieces - 1) * 120 : 0);
        break;
      case 'evento':
        // Evento corporativo o fiesta privada
        basePrice = 240 + (pieces > 1 ? (pieces - 1) * 110 : 0);
        break;
      case 'envasado':
        // Servicio de loncheado a cuchillo y envasado al vacío de pieza del cliente (65€/pieza aprox)
        basePrice = pieces * 65;
        break;
      case 'cata':
        // Taller y degustación
        basePrice = 180 + Math.max(0, guests - 15) * 12;
        break;
      default:
        basePrice = 250;
    }

    estimateDisplay.textContent = `Desde ${basePrice} €`;
  };

  if (serviceSelect) serviceSelect.addEventListener('change', calculateEstimate);
  if (guestsInput) guestsInput.addEventListener('input', calculateEstimate);
  if (piecesSelect) piecesSelect.addEventListener('change', calculateEstimate);

  // Inicializar cálculo
  calculateEstimate();

  // --- 6. Envío del Formulario a WhatsApp / Contacto ---
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('formName')?.value.trim() || 'Cliente';
      const phone = document.getElementById('formPhone')?.value.trim() || '';
      const service = serviceSelect ? serviceSelect.options[serviceSelect.selectedIndex].text : 'Corte de Jamón';
      const date = document.getElementById('formDate')?.value || 'Fecha a convenir';
      const guests = guestsInput ? guestsInput.value : '100';
      const notes = document.getElementById('formNotes')?.value.trim() || '';
      const estimatedCost = estimateDisplay ? estimateDisplay.textContent : '';

      // Crear mensaje personalizado para WhatsApp
      const message = `¡Hola David! Quiero solicitar presupuesto para un servicio de cortador de jamón:\n\n` +
        `👤 *Nombre:* ${name}\n` +
        `📞 *Teléfono:* ${phone}\n` +
        `🍷 *Servicio:* ${service}\n` +
        `📅 *Fecha prevista:* ${date}\n` +
        `👥 *Invitados/Piezas:* ${guests}\n` +
        `💬 *Detalles:* ${notes || 'Sin observaciones adicionales'}\n` +
        `🏷️ *Presupuesto estimado en web:* ${estimatedCost}\n\n` +
        `¿Podrías confirmarme disponibilidad? Gracias.`;

      // Número de teléfono de contacto (puede ser configurado o personalizado)
      const whatsappNumber = '34600000000'; // Formato internacional
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      showToast('¡Información lista! Redirigiendo a WhatsApp...');
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 900);
    });
  }

  // --- 7. Resaltado de Navegación Activa (ScrollSpy) ---
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-links a[href*="${sectionId}"]`);

      if (matchingLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          matchingLink.classList.add('active');
        } else {
          matchingLink.classList.remove('active');
        }
      }
    });
  });

  // --- 8. Helper: Notificación Toast Flotante ---
  function showToast(message) {
    let toast = document.querySelector('.toast-msg');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast-msg';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
});
