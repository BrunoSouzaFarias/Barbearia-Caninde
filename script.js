// ========================================
// BARBEARIA CANINDÉ - JavaScript
// ========================================

// Número do WhatsApp - EDITÁVEL
// Substitua pelo número real no formato: 5511999999999 (código do país + DDD + número)
const WHATSAPP_NUMBER = '5511962455048';
const WHATSAPP_MESSAGE = 'Olá! Gostaria de agendar um horário na Barbearia Canindé.';

// Função para gerar link do WhatsApp
function gerarLinkWhatsApp() {
    const mensagemEncoded = encodeURIComponent(WHATSAPP_MESSAGE);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${mensagemEncoded}`;
}

// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona todos os botões de agendamento
    const btnAgendarHero = document.getElementById('btnAgendarHero');
    const btnAgendarTopo = document.getElementById('btnAgendarTopo');
    const btnWhatsApp = document.getElementById('btnWhatsApp');
    
    // Adiciona evento de clique no botão do hero
    if (btnAgendarHero) {
        btnAgendarHero.addEventListener('click', function() {
            window.open(gerarLinkWhatsApp(), '_blank');
        });
    }
    
    // Adiciona evento de clique no botão do topo
    if (btnAgendarTopo) {
        btnAgendarTopo.addEventListener('click', function() {
            window.open(gerarLinkWhatsApp(), '_blank');
        });
    }
    
    // Adiciona evento de clique no botão do WhatsApp
    if (btnWhatsApp) {
        btnWhatsApp.addEventListener('click', function() {
            window.open(gerarLinkWhatsApp(), '_blank');
        });
    }
    
    // Navegação e indicador de seção ativa
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    const sections = document.querySelectorAll('section[id]');
    
    // Função para atualizar seção ativa no menu
    function updateActiveSection() {
        const scrollPosition = window.pageYOffset + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Animação suave ao clicar nos links do menu
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = nav.offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Atualiza seção ativa após o scroll
                setTimeout(updateActiveSection, 500);
            }
        });
    });
    
    // Efeito de scroll no menu de navegação
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Adiciona sombra quando rola para baixo
        if (currentScroll > 50) {
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
        } else {
            nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        }
        
        // Atualiza seção ativa
        updateActiveSection();
        
        lastScroll = currentScroll;
    });
    
    // Atualiza seção ativa no carregamento
    updateActiveSection();
    
    // Animação de fade-in ao rolar a página (opcional - efeito visual)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Aplica animação nas seções
    const animatedSections = document.querySelectorAll('.sobre, .servicos, .galeria, .depoimentos, .contato');
    animatedSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // ===== LIGHTBOX PARA GALERIA =====
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const galleryItems = document.querySelectorAll('.galeria-item[data-lightbox]');
    
    let currentImageIndex = 0;
    const images = Array.from(galleryItems).map(item => ({
        src: item.querySelector('img').src,
        alt: item.querySelector('img').alt
    }));
    
    function openLightbox(index) {
        currentImageIndex = index;
        lightboxImage.src = images[index].src;
        lightboxCaption.textContent = images[index].alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        lightboxImage.src = images[currentImageIndex].src;
        lightboxCaption.textContent = images[currentImageIndex].alt;
    }
    
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        lightboxImage.src = images[currentImageIndex].src;
        lightboxCaption.textContent = images[currentImageIndex].alt;
    }
    
    // Adiciona eventos aos itens da galeria
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(index));
    });
    
    // Eventos do lightbox
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    if (lightboxNext) {
        lightboxNext.addEventListener('click', showNextImage);
    }
    
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', showPrevImage);
    }
    
    // Fechar ao clicar no fundo
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
    
    // Navegação com teclado
    document.addEventListener('keydown', function(e) {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            }
        }
    });
    
    // Menu hambúrguer
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Fechar menu ao clicar em um link
        const mobileNavLinks = navMenu.querySelectorAll('a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Fechar menu ao clicar fora
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Botão voltar ao topo
    const backToTop = document.getElementById('backToTop');
    
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
        
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
});

