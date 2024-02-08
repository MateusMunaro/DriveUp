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


document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.coments_cards');
  const totalSlides = slides.length;
  let currentIndex = 0;

  // Defina o número de slides visíveis com base na largura da tela
  let visibleSlides = (window.innerWidth < 750) ? 1 : 4;

  // Exibe os slides iniciais
  showSlide();

  // Adiciona os ouvintes de eventos aos botões de navegação
  document.getElementById('prevButton').addEventListener('click', function () {
    currentIndex = (currentIndex > 0) ? currentIndex - visibleSlides : totalSlides - visibleSlides;
    showSlide();
  });

  document.getElementById('nextButton').addEventListener('click', function () {
    currentIndex = (currentIndex < totalSlides - visibleSlides) ? currentIndex + visibleSlides : 0;
    showSlide();
  });

  // Função para exibir os slides atuais
  function showSlide() {
    for (let i = 0; i < totalSlides; i++) {
      slides[i].style.display = 'none';
    }

    for (let i = 0; i < visibleSlides && currentIndex + i < totalSlides; i++) {
      const index = (currentIndex + i) % totalSlides;  // Ajuste para obter o índice correto, considerando o carrossel contínuo
      slides[index].style.display = 'block';
    }
  }
});

// Atualiza o número de slides visíveis ao redimensionar a janela
window.addEventListener('resize', function () {
  visibleSlides = (window.innerWidth < 750) ? 1 : 4;
  showSlide();
});

// Atualiza o número de slides visíveis ao redimensionar a janela
window.addEventListener('resize', function () {
  visibleSlides = (window.innerWidth < 750) ? 1 : 4;
  showSlide();
});

// Atualiza o número de slides visíveis ao redimensionar a janela
window.addEventListener('resize', function () {
  visibleSlides = (window.innerWidth < 750) ? 1 : 4;
  showSlide();
});

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
    'titulo-avaliacoes': 'Avaliações',
    /* Tradução das avaliações */
    'comentario-1': 'Tiago e sua equipe são um sonho de lidar. Profissionais, prestativos, sempre pontuais e facilitam muito a viagem por Porto Alegre. Eu não posso recomendar-los o suficiente!',
    'comentario-2': 'Excelente...Mateus  nos levou de POA a Caxias do Sul  com muitos bloqueios devido temporal e foi sempre  cuidadoso,  educado,  prestativo, enfim.so elegios para o serviço.. carro super confortável..parabéns  e gratidão',
    'comentario-3': 'Tivemos um dia maravilhoso conhecendo Canela e Gramado.  Gratidão',
    'comentario-4': 'DriveUP me prestou um excelente serviço. Destaco a pontualidade, flexibilidade e gentileza dos motoristas.',
    'comentario-5': 'Serviço de excelência. Motorista atencioso, super cuidadoso; carro novo, limpo, confortável. Quem nos atendeu foi o Gênesis - super querido. Recomendo demais a DriveUp!',
    'comentario-6': 'Excelente serviço de transporte executivo. Educação, pontualidade, cordialidade, comodidade e segurança garantidas. Usamos para assistir a um show na Arena do Grêmio, local de difícil acesso a táxis e Uber. Serviço excelente.',
    'comentario-7': 'A van era muito confortável e o motorista também foi muito gentil. Se tiver oportunidade de visitar Porto Alegre novamente, usarei novamente e recomendarei aos meus amigos.',
    'comentario-8': 'Eu tive um guia/motorista incrível chamado Tioga. Ele foi muito simpático, fala inglês muito bem e conhece muito bem a história alemã e a logística da região. Recomendo a todos que façam seu tour por Gramado e Canela.',
    /* Tradução do rodapé */
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
    'titulo-avaliacoes': 'Reviews',
    'comentario-1': "Tiago and his team are a dream to deal with. Professional, helpful, always punctual and make traveling through Porto Alegre very easy. I can't recommend them enough!",
    'comentario-2': 'Excellent...Mateus took us from POA to Caxias do Sul with many blockages due to the weather and was always careful, polite, helpful, in short. So high praise for the service.. super comfortable car.. congratulations and gratitude',
    'comentario-3': 'We had a wonderful day getting to know Canela and Gramado. Gratitude',
    'comentario-4': 'DriveUP provided me with excellent service. I highlight the punctuality, flexibility and kindness of the drivers.',
    'comentario-5': 'Excellent service. Attentive, super careful driver; New, clean, comfortable car. The person who attended to us was Gênesis - super sweet. I highly recommend DriveUp!',
    'comentario-6': 'Excellent executive transport service. Education, punctuality, cordiality, convenience and safety guaranteed. We used it to watch a show at Arena do Grêmio, a place difficult to access by taxis and Uber. Excellent service.',
    'comentario-7': 'The van was very comfortable and the driver was also very kind. If I have the opportunity to visit Porto Alegre again, I will use it again and recommend it to my friends.',
    'comentario-8': 'I had an amazing guide/driver called Tioga. He was very friendly, speaks very good English and knows German history and the logistics of the region very well. I recommend everyone to take a tour of Gramado and Canela.',
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
    'titulo-avaliacoes': 'Opiniones',
    'comentario-1': 'Tiago y su equipo son un sueño con el que lidiar. Profesionales, serviciales, siempre puntuales y hacen que viajar por Porto Alegre sea muy fácil. ¡No puedo recomendarlos lo suficiente!',
    'comentario-2': 'Excelente...Mateus nos llevó de POA a Caxias do Sul con muchos bloqueos por el clima y siempre fue cuidadoso, educado, servicial, en fin. Un gran elogio por el servicio.. auto súper cómodo.. felicidades y agradecimiento.',
    'comentario-3': 'Tuvimos un día maravilloso conociendo a Canela y Gramado. Gratitud',
    'comentario-4': 'DriveUP me brindó un excelente servicio. Destaco la puntualidad, flexibilidad y amabilidad de los conductores.',
    'comentario-5': 'Excelente servicio. Conductor atento y súper cuidadoso; Coche nuevo, limpio y cómodo. La persona que nos atendió fue Gênesis - súper dulce. ¡Recomiendo ampliamente DriveUp!',
    'comentario-6': 'Excelente servicio de transporte ejecutivo. Educación, puntualidad, cordialidad, comodidad y seguridad garantizadas. Lo usamos para ver un espectáculo en Arena do Grêmio, un lugar de difícil acceso en taxi y Uber. Excelente servicio.',
    'comentario-7': 'La furgoneta era muy cómoda y el conductor también fue muy amable. Si tengo la oportunidad de visitar Porto Alegre nuevamente, lo usaré nuevamente y lo recomendaré a mis amigos.',
    'comentario-8': 'Tuve un guía/conductor increíble llamado Tioga. Fue muy amable, habla muy bien inglés y conoce muy bien la historia alemana y la logística de la región. Recomiendo a todos que hagan un recorrido por Gramado y Canela.',
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
  document.getElementById('titulo-avaliacoes').innerText = textos[idioma]['titulo-avaliacoes'];
  document.getElementById('comentario-1').innerText = textos[idioma]['comentario-1'];
  document.getElementById('comentario-2').innerText = textos[idioma]['comentario-2'];
  document.getElementById('comentario-3').innerText = textos[idioma]['comentario-3'];
  document.getElementById('comentario-4').innerText = textos[idioma]['comentario-4'];
  document.getElementById('comentario-5').innerText = textos[idioma]['comentario-5'];
  document.getElementById('comentario-6').innerText = textos[idioma]['comentario-6'];
  document.getElementById('comentario-7').innerText = textos[idioma]['comentario-7'];
  document.getElementById('comentario-8').innerText = textos[idioma]['comentario-8'];
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
