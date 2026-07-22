/* ============================================================
   CONFIGURACIÓN DEL PRODUCTO — Water Shield · Sellador Impermeabilizante 1L
   VG Shop · Editá SOLO este archivo para precio, textos, IDs e imágenes.
   ============================================================ */
const PRODUCT_CONFIG = {
  id: "water-shield-1l",
  origin: "landing_sellador_water_shield",
  category: "Hogar / Impermeabilización",
  brand: "VG Shop",
  name: "Water Shield · Sellador Impermeabilizante 1L",
  shortName: "Water Shield",

  // Precio ÚNICO visible en toda la página (guaraníes, sin puntos).
  price: 135000,
  currency: "PYG",

  // ====== ANALYTICS (reutilizados de la infra VG Shop) ======
  metaPixelId: "2412226475899711",       // Meta Pixel VG Shop (activo)
  tiktokPixelId: "D9C46VBC77U7PB56S7NG", // TikTok Pixel (activo)
  ga4Id: "G-8WM6CYEB73",                 // GA4 real compartido VG Shop
  gtmId: "GTM-XXXXXXX",                  // ← PLACEHOLDER: pegá tu contenedor GTM (opcional)
  clarityId: "PEGAR_AQUI",               // ← PLACEHOLDER: Microsoft Clarity ID (opcional)
  whatsapp: "595972738779",              // Contacto WhatsApp VG Shop

  // ====== BACKEND (Supabase compartido con las demás landings) ======
  supabaseUrl: "https://roruinqorwgolcrhhmpm.supabase.co",
  supabaseAnonKey: "sb_publishable_aRPb1yNunMEheat00BxwtQ_Uft732KJ",
  supabaseTable: "pedidos_web",

  // ====== IMAGEN PRINCIPAL + GALERÍA ======
  hero: "img/hero-shield.png",
  gallery: [
    { src: "img/g-producto.jpg", cap: "Water Shield 1L · Agente sellador impermeabilizante Leisel" },
    { src: "img/g-pared.jpg", cap: "Sella filtraciones en paredes y ladrillos" },
    { src: "img/g-grieta.jpg", cap: "Penetra y sella grietas del cemento" },
    { src: "img/g-liquido.jpg", cap: "Fórmula lista para usar, no necesita diluirse" },
    { src: "img/g-ventana.jpg", cap: "Ideal para marcos de ventanas y juntas expuestas" },
    { src: "img/g-aplicacion.jpg", cap: "Fácil aplicación con brocha o rodillo" }
  ],

  // ====== PANEL DE FUNCIONES (editable en vivo con ?config=1 o Ctrl+Shift+C) ======
  features: {
    announcementBar: true,   // Barra superior con beneficios
    stickyMobileBar: true,   // Barra fija de compra en mobile
    stockUrgency: true,      // Contador de stock "Quedan XX unidades"
    floatingWhats: true,     // Botón flotante de WhatsApp
    backToTop: true          // Botón "volver arriba"
  },

  urgency: {
    stockStart: 38,          // Unidades iniciales del contador (stock real, sin temporizadores falsos)
    stockMin: 6              // No baja de este número
  }
};

// Ciudades de Paraguay para autocompletar y prueba social
const PY_CITIES = [
  "Asunción", "Ciudad del Este", "San Lorenzo", "Luque", "Capiatá",
  "Lambaré", "Fernando de la Mora", "Limpio", "Ñemby", "Encarnación",
  "Mariano Roque Alonso", "Villa Elisa", "Itauguá", "Caaguazú",
  "Coronel Oviedo", "Presidente Franco", "Villarrica", "Hernandarias",
  "San Antonio", "Concepción", "Pilar", "Caacupé", "Areguá",
  "Paraguarí", "Villa Hayes", "Itá", "Guarambaré", "Pedro Juan Caballero"
];

// Zonas con delivery a domicilio (el resto va por transportadora)
const DELIVERY_CITIES = [
  "Asunción", "San Lorenzo", "Luque", "Capiatá", "Lambaré",
  "Fernando de la Mora", "Limpio", "Ñemby", "Mariano Roque Alonso",
  "Villa Elisa", "Itauguá", "San Antonio", "Areguá", "Itá",
  "Guarambaré", "Villa Hayes", "Ypané"
];

// Exponer en window
window.PRODUCT_CONFIG = PRODUCT_CONFIG;
window.PY_CITIES = PY_CITIES;
window.DELIVERY_CITIES = DELIVERY_CITIES;
