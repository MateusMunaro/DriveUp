/* Carrocel do topo da página */ 
document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const slides = document.querySelectorAll(".carousel-slide");
  const totalSlides = slides.length;

  function showSlide(index) {
      slides.forEach((slide) => (slide.style.display = "none"));
      slides[index].style.display = "block";
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      showSlide(currentIndex);
  }
  setInterval(nextSlide, 3000);

  showSlide(currentIndex); // Mostrar o primeiro slide ao carregar a página
});

window.sr = ScrollReveal({reset:true});

sr.reveal('.textos', {
  rotate: { x: 100, y: 0, z:0},
  duration: 2000
});
sr.reveal('.cards', {
  rotate: { x: 100, y: 0, z:0},
  duration: 2000
});

document.getElementById('saibaMaisBtn').addEventListener('click', function () {
  // Redirecionar para o arquivo corporativo.html
  window.location.href = 'corporativo.html';
});

//script de parceiros

document.addEventListener('DOMContentLoaded', function() {
  var parceiros = document.querySelector('.parceiro');

  parceiros.addEventListener('mouseover', function(event) {
    var target = event.target;

    if (target.classList.contains('parceiro')) {
      var parceirosArray = Array.from(parceiros.children);

      parceirosArray.forEach(function(parceiro) {
        if (parceiro !== target) {
          parceiro.style.flexGrow = '0.5';
        }
      });

      target.style.flexGrow = '1.5';
    }
  });
});

//script whatsapp para Iphone

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


/*Trocar idioma da página início. */
const textos = {
  'portugues': {
    /*Tradução do cabeçalho */
    'pagina-inicio': 'Início',
    'pagina-turismo': 'Turismo',
    'pagina-corporativo': 'Corporativo',
    /*Tradução da página */  
    'entre-em-contato-whats': 'Entre em contato',
    'entre-em-contato': 'Entre em contato',
    'somos-titulo': 'Por que somos diferenciados?',
    'somos-texto': 'Somos uma empresa de transporte executivo de alto padrão. Atendemos os principais hotéis de Porto Alegre como Hilton e Radisson. Somos a empresa de transporte fornecedora da Dell, SAP, Oracle, Mc kinsey, Évora, YARA, entre outros. Inglês e Espanhol',
    'saibaMaisBtn': 'Saiba mais!',
    'arthotel-texto': 'O Art Hotel Transamerica Collection é um hotel de padrão internacional localizado em uma região nobre de Porto Alegre, conhecida por suas belas paisagens e parques. O hotel oferece excelência no serviço, ótimo atendimento e conforto, com máximo estilo.',
    'casa-da-montanha-texto': 'O Hotel Casa da Montanha é um dos mais tradicionais hotéis de Gramado, localizado a apenas 2 quarteirões da Rua Coberta e do Palácio dos Festivais. Desde 1997, o hotel tem proporcionado uma experiência única na Serra Gaúcha.',
    'hilton-texto': 'O Hilton Porto Alegre é um hotel de padrão internacional localizado no bairro de Moinhos de Vento, a 15 minutos de carro do Aeroporto Internacional Salgado Filho.',
    'doubletree-texto': 'A DoubleTree by Hilton é uma marca de hotéis globalmente reconhecida, com mais de 580 hotéis e resorts espalhados pelo mundo. Conhecida por seu serviço caloroso e acolhedor.',
    'parkplaza-texto': 'O Park Plaza Moinhos Porto Alegre é um hotel 3 estrelas localizado em Porto Alegre, a 5,5 km da Arena do Grêmio.',
    'frota-titulo': 'Frota DriveUp',
    'frota-executivo': 'Executivos',
    'opcao-blindados': 'Opções blindadas',
    'frota-suv': 'SUV',
    'frota-minivan': 'Minivan',
    'texto-minivan': 'Exclusivo Florida',
    /*Tradução do rodapé */
    'endereco-titulo': 'Endereço',
    'endereco-texto': 'Rua: Olavo Barreto Viana, 18 - Moinhos de Vento',
    'contato-titulo': 'Contato',
    'contato-texto': 'Fone: +55 51 9620-0409',
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
    'entre-em-contato': 'Contact us',
    'somos-titulo': 'Why are we different?',
    'somos-texto': 'We are a high standard executive transport company. We serve the main hotels in Porto Alegre, such as Hilton and Radisson. We are the transport company that supplies Dell, SAP, Oracle, McKinsey, Évora, YARA, among others. English and Spanish',
    'saibaMaisBtn': 'know more',
    'arthotel-texto': 'The Art Hotel Transamerica Collection is an international standard hotel located in a prime region of Porto Alegre, known for its beautiful landscapes and parks. The hotel offers excellent service, great customer service and comfort, with maximum style.',
    'casa-da-montanha-texto': 'Hotel Casa da Montanha is one of the most traditional hotels in Gramado, located just 2 blocks from Rua Coberta and Palácio dos Festivais. Since 1997, the hotel has provided a unique experience in Serra Gaúcha.',
    'hilton-texto': 'The Hilton Porto Alegre is an international standard hotel located in the Moinhos de Vento neighborhood, a 15 minutes drive from Salgado Filho International Airport.',
    'doubletree-texto': 'DoubleTree by Hilton is a globally recognized hotel brand with more than 580 hotels and resorts around the world. Known for its warm and welcoming service.',
    'parkplaza-texto': 'Park Plaza Moinhos Porto Alegre is a 3-star hotel located in Porto Alegre, 5.5 km from Arena do Grêmio.',
    'frota-titulo': 'DriveUp fleet',
    'frota-executivo': 'Executives ',
    'opcao-blindados': 'Armored options',
    'frota-suv': 'SUV',
    'frota-minivan': 'Minivan',
    'texto-minivan': "Only in Florida",
    /*Tradução do rodapé */
    'endereco-titulo': 'Address',
    'endereco-texto': 'Street: Olavo Barreto Viana, 18 - Moinhos de Vento',
    'contato-titulo': 'Contact',
    'contato-texto': 'Phone number: +55 51 9620-0409',
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
    'entre-em-contato': 'Entre en contacto',
    'somos-titulo': '¿Por qué somos diferentes?',
    'somos-texto': 'Somos una empresa de transporte ejecutivo de alto estándar. Atendemos los principales hoteles de Porto Alegre, como Hilton y Radisson. Somos la empresa de transporte que abastece a Dell, SAP, Oracle, McKinsey, Évora, YARA, entre otras. Inglés y español',
    'saibaMaisBtn': '¡Sepa mas!',
    'arthotel-texto': 'El Art Hotel Transamerica Collection es un hotel de estándar internacional ubicado en una región privilegiada de Porto Alegre, conocida por sus hermosos paisajes y parques. El hotel ofrece un excelente servicio, gran servicio y comodidad, con el máximo estilo.',
    'casa-da-montanha-texto': 'El Hotel Casa da Montanha es uno de los hoteles más tradicionales de Gramado, ubicado a sólo 2 cuadras de Rua Coberta y Palácio dos Festivais. Desde 1997, el hotel ofrece una experiencia única en la Serra Gaúcha.',
    'hilton-texto': 'El Hilton Porto Alegre es un hotel de estándar internacional ubicado en el barrio de Moinhos de Vento, a 15 minutos en coche del Aeropuerto Internacional Salgado Filho.',
    'doubletree-texto': 'DoubleTree by Hilton es una marca hotelera reconocida mundialmente con más de 580 hoteles y resorts en todo el mundo. Conocido por su servicio cálido y acogedor.',
    'parkplaza-texto': 'Park Plaza Moinhos Porto Alegre es un hotel de 3 estrellas situado en Porto Alegre, a 5,5 km de la Arena del Grêmio.',
    'frota-titulo': 'Flota DriveUp',
    'frota-executivo': 'Ejecutivos',
    'opcao-blindados': 'Opciones blindadas',
    'frota-suv': 'SUV',
    'frota-minivan': 'Minivan',
    'texto-minivan': "Sólo en florida",
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
  document.getElementById('entre-em-contato').innerText = textos[idioma]['entre-em-contato'];
  document.getElementById('somos-titulo').innerText = textos[idioma]['somos-titulo'];
  document.getElementById('somos-texto').innerText = textos[idioma]['somos-texto'];
  document.getElementById('saibaMaisBtn').innerText = textos[idioma]['saibaMaisBtn'];
  document.getElementById('arthotel-texto').innerText = textos[idioma]['arthotel-texto'];
  document.getElementById('casa-da-montanha-texto').innerText = textos[idioma]['casa-da-montanha-texto'];
  document.getElementById('hilton-texto').innerText = textos[idioma]['hilton-texto'];
  document.getElementById('doubletree-texto').innerText = textos[idioma]['doubletree-texto'];
  document.getElementById('parkplaza-texto').innerText = textos[idioma]['parkplaza-texto'];
  document.getElementById('parkplaza-texto').innerText = textos[idioma]['parkplaza-texto'];
  document.getElementById('frota-titulo').innerText = textos[idioma]['frota-titulo'];
  document.getElementById('frota-executivo').innerText = textos[idioma]['frota-executivo'];
  document.getElementById('opcao-blindados').innerText = textos[idioma]['opcao-blindados'];
  document.getElementById('frota-suv').innerText = textos[idioma]['frota-suv'];
  document.getElementById('frota-minivan').innerText = textos[idioma]['frota-minivan'];
  document.getElementById('texto-minivan').innerText = textos[idioma]['texto-minivan'];
  document.getElementById('endereco-titulo').innerText = textos[idioma]['endereco-titulo'];
  document.getElementById('endereco-texto').innerText = textos[idioma]['endereco-texto'];
  document.getElementById('contato-titulo').innerText = textos[idioma]['contato-titulo'];
  document.getElementById('contato-texto').innerText = textos[idioma]['contato-texto'];
  document.getElementById('contato-texto2').innerText = textos[idioma]['contato-texto2'];
  document.getElementById('siga-nos-titulo').innerText = textos[idioma]['siga-nos-titulo'];
  
  /* Altera o link do whatsapp de acordo com o idioma da página. */
  var link_whatsapp = document.getElementById("linkwhatsapp");
  var link_entreEmContato = document.getElementById("entre-em-contato-whats");
  if (idioma === 'portugues') {
    link_whatsapp.href = "https://bit.ly/47FHAut";
    link_entreEmContato.href = "https://bit.ly/47FHAut";
  } else if (idioma === 'ingles') {
    link_whatsapp.href = "https://api.whatsapp.com/send?phone=55555196200409&text=Hello!%20%F0%9F%91%8B%0A%0AI%27m%20interested%20in%20the%20executive%20transportation%20services%20your%20company%20provides.%20Could%20you%20please%20provide%20more%20information%20about%20the%20available%20options,%20rates,%20and%20covered%20areas?%20";
    link_entreEmContato.href = "https://api.whatsapp.com/send?phone=55555196200409&text=Hello!%20%F0%9F%91%8B%0A%0AI%27m%20interested%20in%20the%20executive%20transportation%20services%20your%20company%20provides.%20Could%20you%20please%20provide%20more%20information%20about%20the%20available%20options,%20rates,%20and%20covered%20areas?%20";
  }
}
