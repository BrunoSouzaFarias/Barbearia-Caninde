# 💇‍♂️ Barbearia Canindé - Site Institucional

Site one-page moderno e responsivo desenvolvido para a **Barbearia Canindé**, localizada em São Paulo - SP. Desenvolvido com HTML5, CSS3 e JavaScript puro (sem frameworks).

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Características](#-características)
- [Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Usar](#-como-usar)
- [Personalização](#-personalização)
- [Seções do Site](#-seções-do-site)
- [Paleta de Cores](#-paleta-de-cores)
- [Recursos Implementados](#-recursos-implementados)
- [Autor](#-autor)

## 🎯 Sobre o Projeto

Site institucional desenvolvido para a **Barbearia Canindé**, uma barbearia tradicional localizada em São Paulo. O projeto foi desenvolvido com tecnologias web puras (HTML, CSS e JavaScript) sem uso de frameworks, garantindo leveza, performance e facilidade de manutenção.

O site apresenta uma interface moderna, elegante e totalmente responsiva, proporcionando uma excelente experiência tanto em dispositivos desktop quanto mobile.

## ✨ Características

- ✂️ **Design moderno e profissional** - Interface elegante com paleta de cores dourado e preto
- 📱 **Totalmente responsivo** - Layout adaptável para todos os tamanhos de tela (mobile-first)
- 🖼️ **Galeria interativa** - Lightbox para visualização ampliada das imagens
- 💬 **Integração com WhatsApp** - Botões de agendamento que direcionam para WhatsApp
- ⭐ **Depoimentos reais** - Seção com avaliações de clientes do Google
- 🗺️ **Google Maps** - Link direto para localização no Google Maps
- 🍔 **Menu hambúrguer** - Navegação otimizada para dispositivos móveis
- ⬆️ **Botão "Voltar ao topo"** - Facilita a navegação em páginas longas
- 🎨 **Animações suaves** - Efeitos hover e transições elegantes
- ⚡ **Performance otimizada** - Lazy loading de imagens para melhor desempenho
- 🔍 **SEO otimizado** - Meta tags para melhor indexação nos mecanismos de busca
- 📍 **Indicador de seção ativa** - Menu de navegação destaca a seção atual durante o scroll

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica do site
- **CSS3** - Estilização com Custom Properties, Grid Layout e Flexbox
- **JavaScript (ES6+)** - Funcionalidades interativas sem dependências externas
- **Google Fonts** - Fonte Inter para tipografia moderna

## 📁 Estrutura do Projeto

```
Barbearia-Caninde/
│
├── index.html          # Estrutura HTML principal
├── style.css           # Estilos CSS (variáveis, layout, responsividade)
├── script.js           # Funcionalidades JavaScript
└── README.md           # Documentação do projeto
```

## 🚀 Como Usar

### Pré-requisitos

Nenhum! O site funciona diretamente no navegador sem necessidade de servidor ou dependências.

### Instalação e Execução

1. **Clone o repositório:**
```bash
git clone https://github.com/BrunoSouzaFarias/Barbearia-Caninde.git
```

2. **Navegue até a pasta do projeto:**
```bash
cd Barbearia-Caninde
```

3. **Abra o arquivo `index.html` no navegador:**
   - Opção 1: Duplo clique no arquivo `index.html`
   - Opção 2: Arraste o arquivo para uma aba do navegador
   - Opção 3: Clique com botão direito → "Abrir com" → Seu navegador

## 🎨 Personalização

### Alterar Número do WhatsApp

Edite o arquivo `script.js` na linha 7:

```javascript
const WHATSAPP_NUMBER = '5511999999999'; // Formato: código do país + DDD + número
const WHATSAPP_MESSAGE = 'Olá! Gostaria de agendar um horário na Barbearia Canindé.';
```

### Alterar Cores

Edite as variáveis CSS no arquivo `style.css` (linhas 8-17):

```css
:root {
    --cor-preto: #1a1a1a;
    --cor-cinza-escuro: #2d2d2d;
    --cor-dourado: #d4af37;        /* Cor principal - pode ser alterada */
    --cor-dourado-hover: #f5d76e;
    /* ... outras cores ... */
}
```

### Substituir Imagens

1. Crie uma pasta `imagens/` na raiz do projeto
2. Adicione suas imagens nessa pasta
3. Substitua as URLs do Unsplash por caminhos locais:

**No `style.css` (linha ~40):**
```css
background-image: url('imagens/hero-bg.jpg');
```

**No `index.html`:**
```html
<img src="imagens/barbearia-sobre.jpg" alt="Interior da Barbearia Canindé" loading="lazy">
<img src="imagens/galeria1.jpg" alt="Barbeiro trabalhando" loading="lazy">
```

### Editar Textos e Conteúdo

- **Título e subtítulo:** `index.html` (linhas 33-34)
- **Seção Sobre:** `index.html` (linhas 50-58)
- **Serviços e preços:** `index.html` (linhas 83-102)
- **Depoimentos:** `index.html` (linhas 157-189)
- **Endereço e horários:** `index.html` (linhas 209-220)

## 📄 Seções do Site

### 1. Hero / Cabeçalho
- Apresentação principal com título e subtítulo
- Botão de call-to-action para agendamento
- Menu de navegação fixo no topo
- Imagem de fundo com overlay

### 2. Sobre
- História e valores da barbearia
- Layout lado a lado com imagem e texto
- Responsivo (imagem acima no mobile)

### 3. Serviços
- Cards com os serviços oferecidos
- Preços destacados
- Ícones visuais
- Efeitos hover elegantes

### 4. Galeria
- Grid responsivo de imagens
- Lightbox para visualização ampliada
- Navegação com setas e teclado
- Ícone de lupa no hover

### 5. Depoimentos
- Avaliações reais de clientes
- Sistema de estrelas
- Nomes e informações dos clientes
- Cards com borda dourada

### 6. Contato
- Endereço completo
- Link para Google Maps
- Horário de funcionamento
- Botão grande para WhatsApp

## 🎨 Paleta de Cores

| Cor | Hexadecimal | Uso |
|-----|-------------|-----|
| Preto | `#1a1a1a` | Fundo principal |
| Cinza Escuro | `#2d2d2d` | Seções alternadas |
| Dourado | `#d4af37` | Cor de destaque (títulos, botões, links) |
| Dourado Hover | `#f5d76e` | Estados hover |
| Branco | `#ffffff` | Textos principais |
| Cinza Claro | `#b8b8b8` | Textos secundários |

## 🎯 Recursos Implementados

### Navegação
- ✅ Menu fixo com efeito de scroll
- ✅ Menu hambúrguer para mobile
- ✅ Navegação suave entre seções
- ✅ Indicador de seção ativa no menu

### Interatividade
- ✅ Lightbox para galeria de imagens
- ✅ Navegação por teclado (setas, ESC)
- ✅ Animações de fade-in ao rolar
- ✅ Efeitos hover em elementos interativos

### Performance
- ✅ Lazy loading de imagens
- ✅ Código otimizado e sem dependências
- ✅ CSS com variáveis para fácil manutenção

### SEO e Acessibilidade
- ✅ Meta tags para SEO
- ✅ Open Graph tags para redes sociais
- ✅ Atributos alt em todas as imagens
- ✅ Estrutura HTML semântica
- ✅ Navegação por teclado

## 📱 Responsividade

O site foi desenvolvido com abordagem mobile-first e é totalmente responsivo:

- **Desktop** (> 768px): Layout completo com todos os elementos visíveis
- **Tablet** (768px - 480px): Adaptações de layout e espaçamento
- **Mobile** (< 480px): Menu hambúrguer, layout em coluna única, otimizações touch

## 🔧 Funcionalidades JavaScript

- **Lightbox:** Visualização ampliada de imagens com navegação
- **Menu Mobile:** Abertura/fechamento do menu hambúrguer
- **Scroll Suave:** Navegação entre seções
- **Botão Voltar ao Topo:** Aparece ao rolar mais de 300px
- **Indicador de Seção Ativa:** Destaca item do menu conforme scroll
- **Integração WhatsApp:** Geração automática de links para agendamento

## 📞 Informações da Barbearia

**Barbearia Canindé**  
📍 R. Paulo de Avelar, 1001 - Vila Dom Pedro II, São Paulo - SP, 02243-010  
💬 WhatsApp: Configurado no código  
🗺️ [Ver no Google Maps](https://www.google.com/maps/search/?api=1&query=R.+Paulo+de+Avelar,+1001+-+Vila+Dom+Pedro+II,+S%C3%A3o+Paulo+-+SP,+02243-010)

## 👤 Autor

**Bruno de Souza Farias**

- 🌐 Portfolio: [brunosouzafarias.github.io](https://brunosouzafarias.github.io/)
- 💼 LinkedIn: [LinkedIn](https://www.linkedin.com/in/bruno-de-souza-farias/)
- 📧 Email: Disponível no portfolio

---

## 📄 Licença

Este projeto foi desenvolvido com dedicação e carinho. Sinta-se livre para usar como inspiração para seus próprios projetos.

---

<div align="center">
  <p>Desenvolvido com ❤️ por <a href="https://brunosouzafarias.github.io/">Bruno de Souza Farias</a></p>
  <p>© 2025 Barbearia Canindé – Todos os direitos reservados</p>
</div>

