  document.addEventListener('DOMContentLoaded', function() {
      const savedPosition = localStorage.getItem('balkPositie');
      if (savedPosition) {
          const blocks = document.querySelector('.blocks');
          blocks.style.position = 'fixed';
  
          switch (savedPosition) {
              case 'top':
                  blocks.style.top = '0';
                  blocks.style.bottom = 'auto';
                  blocks.style.left = '0';
                  blocks.style.right = '0';
                  blocks.style.width = '100%';
                  break;
              case 'bottom':
                  blocks.style.bottom = '0';
                  blocks.style.top = 'auto';
                  blocks.style.left = '0';
                  blocks.style.right = '0';
                  blocks.style.width = '100%';
                  break;
              case 'left':
                  blocks.style.left = '0';
                  blocks.style.right = 'auto';
                  blocks.style.top = '0';
                  blocks.style.bottom = '0';
                  blocks.style.height = '100%';
                  break;
              case 'right':
                  blocks.style.right = '0';
                  blocks.style.left = 'auto';
                  blocks.style.top = '0';
                  blocks.style.bottom = '0';
                  blocks.style.height = '100%';
                  break;
          }
  
          // Voeg deze regel toe om de backdrop-filter op het juiste element toe te passen
          document.body.style.backdropFilter = 'blur(10px)';
      }
  });