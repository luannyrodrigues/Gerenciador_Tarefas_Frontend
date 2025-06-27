// public/service-worker.js

// Evento de instalação do service worker
self.addEventListener('install', (event) => {
  console.log('Service Worker instalado');
  self.skipWaiting(); // ativa o SW imediatamente
});

// Evento de ativação do service worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker ativado');
  return self.clients.claim(); // assume controle das abas abertas
});

// Evento de interceptação de requisições de rede
self.addEventListener('fetch', (event) => {
  console.log('Interceptando requisição:', event.request.url);
  // Aqui você pode implementar cache ou outras lógicas
  // Por enquanto, deixa passar normalmente
});
