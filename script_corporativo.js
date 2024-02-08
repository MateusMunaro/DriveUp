const parceiros = document.querySelector('.parceiros');
const cards = document.querySelectorAll('.card');
let transitioning = false;

// Clone all cards and append them to the end
cards.forEach((card, index) => {
    const cloneCard = card.cloneNode(true);
    parceiros.appendChild(cloneCard);
});

// Clone all cards again and append them to the end for the second set
cards.forEach((card, index) => {
    const cloneCard = card.cloneNode(true);
    parceiros.appendChild(cloneCard);
});

const totalSlides = cards.length * 2; // Total number of slides for both sets

let slide = 0;

function animate() {
    const position = -slide * 30; // Adjusted to match the card width
    parceiros.style.transition = "transform 2s ease"; // Adjusted duration
    parceiros.style.transform = `translateX(${position}%)`;

    slide++;
    if (slide === totalSlides) {
        slide = 0;
    }
}

function nextSlide() {
    animate();
}

setInterval(nextSlide, 2000);


/* Menu dos idiomas */
function menuIdiomas () {
  var b = document.getElementById("bandeira-brasil");
  var e = document.getElementById("bandeira-espanha");
  var menu = document.getElementsByClassName("caixa-bandeiras")[0];

  if (b.classList.contains("escondido")) {
    b.classList.remove("escondido");
    b.classList.add("bandeira-brasil");
    e.classList.remove("escondido");
    e.classList.add("bandeira-espanha");
    menu.classList.toggle("caixa-bandeiras-ativa");

    } else if (b.classList.contains("bandeira-brasil")) {

    b.classList.remove("bandeira-brasil");
    b.classList.add("escondido");
    e.classList.remove("bandeira-espanha");
    e.classList.add("escondido");
    menu.classList.toggle("caixa-bandeiras-ativa");
  }
}


/*Trocar idioma da página corporativo. */
const textos = {
    'portugues': {
      /*Tradução do cabeçalho */
      'pagina-inicio': 'Início',
      'pagina-turismo': 'Turismo',
      'pagina-corporativo': 'Corporativo',
      /*Tradução da página */  
      'entre-em-contato-whats': 'Entre em contato',
      'titulo-corporativo': 'CORPORATIVO',  
      'texto-corporativo': 'Oferecendo serviços de transporte corporativo que transcendem expectativas e impulsionam o seu negócio para novas conquistas.',
      'titulo-nossos-servicos': 'Nossos serviços',
      'texto-nossos-servicos': 'Estamos dedicados a assegurar aos nossos clientes o mais elevado padrão de qualidade, profissionalismo e sofisticação. Alcançamos esse objetivo não apenas proporcionando uma condução segura, pontual e luxuosa, mas também ao criar uma experiência exclusiva a cada etapa da jornada conosco.',
      'servico-frota-titulo': 'Frota de luxo',
      'servico-frota-texto': 'Viaje com elegância em nossa frota de veículos executivos, Sedãs de luxo e SUVs.',
      'servico-privacidade-titulo': 'Privacidade',
      'servico-privacidade-texto': 'Garantindo viagens exclusivas e discretas, onde sua tranquilidade e conforto são prioridades em cada deslocamento',
      'servico-motoristas-titulo': 'Motoristas profissionais',
      'servico-motoristas-texto': 'Combinando habilidade técnica, conhecimento das normas de trânsito e um compromisso dedicado para garantir viagens seguras e eficientes.',
      'servicos-personalizados-titulo': 'Serviços personalizados',
      'servicos-personalizados-texto': 'Proporcionamos um serviço de transporte flexível, adaptado às suas preferências individuais e necessidades.',
      'clientes-titulo': 'Clientes DriveUp',
      /*Tradução do rodapé */
      'endereco-titulo': 'Endereço',
      'endereco-texto': 'Rua: Olavo Barreto Viana, 18 - Moinhos de Vento',
      'contato-titulo': 'Contato',
      'contato-texto': 'Fone: 5551 9392932132',
      'contato-texto2': 'Fone: +1 (689) 837-9863',
      'siga-nos-titulo': 'Siga-nos'
    },
    'ingles': {
      /*Tradução do cabeçalho */
      'pagina-inicio': 'Home',
      'pagina-turismo': 'Tourism',
      'pagina-corporativo': 'Corporate',
      /*Tradução da página */    
      'entre-em-contato-whats': 'Contact us',
      'titulo-corporativo': 'CORPORATE',  
      'texto-corporativo': 'Offering corporate transportation services that transcend expectations and boost your business for new achievements.',
      'titulo-nossos-servicos': 'Our services',
      'texto-nossos-servicos': 'We are dedicated to ensuring our customers have the highest standard of quality, professionalism and sophistication. We achieve this goal by not only providing safe, punctual and luxurious driving, but also by creating a unique experience at every step of the journey with us.',
      'servico-frota-titulo': 'Luxury fleet',
      'servico-frota-texto': 'Travel in elegance in our fleet of executive vehicles, luxury sedans and SUVs.',
      'servico-privacidade-titulo': 'Privacy',
      'servico-privacidade-texto': 'ensuring exclusive and discreet trips, where your tranquility and comfort are priorities on every trip',
      'servico-motoristas-titulo': 'Professional drivers',
      'servico-motoristas-texto': 'Combining technical skill, knowledge of traffic laws and a dedicated commitment to ensure safe and efficient travel.',
      'servicos-personalizados-titulo': 'Customized services',
      'servicos-personalizados-texto': 'We provide a flexible transport service, tailored to your individual preferences and needs.',
      'clientes-titulo': 'DriveUp Customers',
      /*Tradução do rodapé */
      'endereco-titulo': 'Address',
      'endereco-texto': 'Street: Olavo Barreto Viana, 18 - Moinhos de Vento',
      'contato-titulo': 'Contact',
      'contato-texto': 'Phone number: 5551 9392932132',
      'contato-texto2': 'Phone number: +1 (689) 837-9863',
      'siga-nos-titulo': 'Follow us'
    },
    'espanhol': {
      /*Tradução do cabeçalho */
      'pagina-inicio': 'Comenzar',
      'pagina-turismo': 'Turismo',
      'pagina-corporativo': 'Corporativo',
      /*Tradução da página */    
      'entre-em-contato-whats': 'Entre en contacto',
      'titulo-corporativo': 'CORPORATIVO',  
      'texto-corporativo': 'Ofreciendo servicios de transporte corporativo que trascienden las expectativas e impulsan su negocio hacia nuevos logros.',
      'titulo-nossos-servicos': 'Nuestros servicios',
      'texto-nossos-servicos': 'Estamos dedicados a garantizar que nuestros clientes tengan el más alto nivel de calidad, profesionalismo y sofisticación. Logramos este objetivo no solo brindando una conducción segura, puntual y lujosa, sino también creando una experiencia única en cada paso del viaje con nosotros.',
      'servico-frota-titulo': 'Flota de lujo',
      'servico-frota-texto': 'Viaje con elegancia en nuestra flota de vehículos ejecutivos, sedanes de lujo y SUV.',
      'servico-privacidade-titulo': 'Privacidad',
      'servico-privacidade-texto': 'Garantizando viajes exclusivos y discretos, donde tu tranquilidad y comodidad son prioridades en cada viaje.',
      'servico-motoristas-titulo': 'Conductores profesionales',
      'servico-motoristas-texto': 'Combinando habilidad técnica, conocimiento de las normas de tráfico y un compromiso dedicado para garantizar viajes seguros y eficientes.',
      'servicos-personalizados-titulo': 'Servicios personalizados',
      'servicos-personalizados-texto': 'Ofrecemos un servicio de transporte flexible, adaptado a sus preferencias y necesidades individuales.',
      'clientes-titulo': 'Clientes DriveUp',
      /*Tradução do rodapé */
      'endereco-titulo': 'Dirección',
      'endereco-texto': 'Calle: Olavo Barreto Viana, 18 - Moinhos de Vento',
      'contato-titulo': 'Contacto',
      'contato-texto': 'Teléfono: +55 51 9620-0409',
      'contato-texto2': 'Teléfono: +1 (689) 837-9863',
      'siga-nos-titulo': 'Síganos'
    }
  };
  
function mudarIdioma(idioma) {
    // Lógica para atualizar o texto com base no idioma selecionado
    document.getElementById('pagina-inicio').innerText = textos[idioma]['pagina-inicio'];
    document.getElementById('pagina-turismo').innerText = textos[idioma]['pagina-turismo'];
    document.getElementById('pagina-corporativo').innerText = textos[idioma]['pagina-corporativo'];
    document.getElementById('entre-em-contato-whats').innerText = textos[idioma]['entre-em-contato-whats'];
    document.getElementById('titulo-corporativo').innerText = textos[idioma]['titulo-corporativo'];
    document.getElementById('texto-corporativo').innerText = textos[idioma]['texto-corporativo'];
    document.getElementById('titulo-nossos-servicos').innerText = textos[idioma]['titulo-nossos-servicos'];
    document.getElementById('texto-nossos-servicos').innerText = textos[idioma]['texto-nossos-servicos'];
    document.getElementById('servico-frota-titulo').innerText = textos[idioma]['servico-frota-titulo'];
    document.getElementById('servico-frota-texto').innerText = textos[idioma]['servico-frota-texto'];
    document.getElementById('servico-privacidade-titulo').innerText = textos[idioma]['servico-privacidade-titulo'];
    document.getElementById('servico-privacidade-texto').innerText = textos[idioma]['servico-privacidade-texto'];
    document.getElementById('servico-motoristas-titulo').innerText = textos[idioma]['servico-motoristas-titulo'];
    document.getElementById('servico-motoristas-texto').innerText = textos[idioma]['servico-motoristas-texto'];
    document.getElementById('servicos-personalizados-titulo').innerText = textos[idioma]['servicos-personalizados-titulo'];
    document.getElementById('servicos-personalizados-texto').innerText = textos[idioma]['servicos-personalizados-texto'];
    document.getElementById('clientes-titulo').innerText = textos[idioma]['clientes-titulo'];
    document.getElementById('endereco-titulo').innerText = textos[idioma]['endereco-titulo'];
    document.getElementById('endereco-texto').innerText = textos[idioma]['endereco-texto'];
    document.getElementById('contato-titulo').innerText = textos[idioma]['contato-titulo'];
    document.getElementById('contato-texto').innerText = textos[idioma]['contato-texto'];
    document.getElementById('contato-texto2').innerText = textos[idioma]['contato-texto2'];
    document.getElementById('siga-nos-titulo').innerText = textos[idioma]['siga-nos-titulo'];
    
    /* Altera o link do whatsapp de acordo com o idioma da página. */
    var link_whatsapp = document.getElementById("linkwhatsapp");
    if (idioma === 'portugues') {
      link_whatsapp.href = "https://bit.ly/47FHAut";
    } else if (idioma === 'ingles') {
      link_whatsapp.href = "https://api.whatsapp.com/send?phone=55555196200409&text=Hello!%20%F0%9F%91%8B%0A%0AI%27m%20interested%20in%20the%20executive%20transportation%20services%20your%20company%20provides.%20Could%20you%20please%20provide%20more%20information%20about%20the%20available%20options,%20rates,%20and%20covered%20areas?%20";
    }
}
