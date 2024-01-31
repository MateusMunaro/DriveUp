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


/*Trocar idioma da página turismo. */
const textos = {
    'portugues': {
      /*Tradução do cabeçalho */
      'pagina-inicio': 'Início',
      'pagina-turismo': 'Turismo',
      'pagina-corporativo': 'Corporativo',
      /*Tradução da página */  
      'entre-em-contato-whats': 'Entre em contato',
      'turismo-titulo': 'TURISMO',
      'turismo-texto': 'Viaje conosco e descubra o melhor do turismo com qualidade e dedicação.',
      'destinos-titulo': 'Destinos',
      'gramado-texto1': 'Gramado é um charmoso refúgio cercado por paisagens deslumbrantes. Com suas ruas floridas e arquitetura europeia, encanta com seu clima acolhedor e gastronomia irresistível.',
      'gramado-texto2': 'Passeios personalizados com duração entre 10 e 12 horas, saindo de Porto Alegre. Possuímos parceria com os hotéis mais renomados da cidade.',
      'torres-texto1': 'Torres é conhecida por suas belas praias, sendo um destino turístico popular na região sul do Brasil. A praia de Torres é famosa pelos seus morros e pela formação rochosa conhecida como "Morro do Farol".',
      'torres-texto2': 'É um destino encantador para quem busca contemplar a grandiosidade da natureza.',
      'porto-alegre-texto1': 'O City Tour da DriveUp é bastante diferente do convencional pois a quantidade de informações históricas, culturais e curiosidades fazem a diferença.',
      'porto-alegre-texto2': 'Possuímos City Tours de 2 horas e de 4 horas, mas personalizamos tempo e trajetos de acordo com as necessidades dos clientes.',
      'cambara-texto1': 'Cambará, no Rio Grande do Sul, encanta com suas paisagens montanhosas e rios serenos. A Cascata da Pedra Furada e o Canyon Itaimbezinho são tesouros naturais que hipnotizam os visitantes.',
      'cambara-texto2': 'Nessa cidade acolhedora, a cultura gaúcha e a hospitalidade local se unem para proporcionar uma experiência autêntica e memorável.',
      'bento-goncalves-texto1': 'Conheça a região que produz a maior parte dos vinhos finos e espumantes do Brasil. Visitamos as principais vinícolas, o hotel Spa do Vinho, o tour da Miolo e com um almoço italiano de alta qualidade dentro da Vinícola Valduga.',
      'bento-goncalves-texto2': 'Também visitamos os Caminhos de Pedra, berço da colonização italiana no Brasil e onde foram filmados diversos longas, mini séries e novelas.',
      'canela-texto1': 'Canela, no Rio Grande do Sul, é um tesouro entre as serras gaúchas. Com seus cenários exuberantes, como a Catedral de Pedra e o Parque do Caracol, oferece uma imersão na natureza e arquitetura encantadora.',
      'canela-texto2': 'Seu clima aconchegante e a mistura de tradição e modernidade a tornam um destino imperdível para quem busca encanto e beleza no sul do Brasil.',
      'universal-texto': "O Universal Orlando Resort, localizado na Flórida, é um complexo de entretenimento que abriga dois parques temáticos principais: Universal Studios Florida e Universal's Islands of Adventure. Fundado na década de 1990, o resort oferece uma experiência imersiva com atrações emocionantes, shows espetaculares e personagens icônicos dos filmes e programas de televisão da Universal.",
      'disney-texto1': 'O Walt Disney World Resort em Orlando, Flórida, é o maior e mais abrangente complexo de parques temáticos da Disney no mundo.',
      'disney-texto2': 'Inaugurado em 1971, o resort abrange uma vasta área e oferece uma variedade de experiências mágicas para visitantes de todas as idades.',
      'miami-texto': 'Miami é uma cidade localizada no sudeste do estado da Flórida, nos Estados Unidos. Conhecida por sua atmosfera vibrante, diversidade cultural e suas praias deslumbrantes, Miami é uma metrópole internacionalmente reconhecida.',
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
      'turismo-titulo': 'TOURISM',
      'turismo-texto': 'Travel with us and discover the best of tourism with quality and dedication',
      'destinos-titulo': 'Destinations',
      'gramado-texto1': 'Gramado is a charming refuge surrounded by stunning landscapes. With its flower-filled streets and European architecture, it enchants with its welcoming atmosphere and irresistible gastronomy.',
      'gramado-texto2': 'Personalized tours lasting between 10 and 12 hours, leaving from Porto Alegre. We have partnerships with the most renowned hotels in the city.',
      'torres-texto1': 'Torres is known for its beautiful beaches, being a popular tourist destination in the southern region of Brazil. Torres beach is famous for its hills and the rock formation known as "Morro do Farol".',
      'torres-texto2': 'It is a charming destination for those looking to contemplate the grandeur of nature.',
      'porto-alegre-texto1': "DriveUp's City Tour is quite different from the conventional one as the amount of historical, cultural information and curiosities make a difference.",
      'porto-alegre-texto2': 'We have 2-hour and 4-hour City Tours, but we customize time and routes according to customer needs.',
      'cambara-texto1': 'Cambará, in Rio Grande do Sul, enchants with its mountainous landscapes and serene rivers. The Pedra Furada Waterfall and the Itaimbezinho Canyon are natural treasures that mesmerize visitors.',
      'cambara-texto2': 'In this welcoming city, Gaucho culture and local hospitality come together to provide an authentic and memorable experience.',
      'bento-goncalves-texto1': "Discover the region that produces most of Brazil's fine and sparkling wines. We visited the main wineries, the Spa do Vinho hotel, the Miolo tour and a high quality Italian lunch inside the Valduga Winery.",
      'bento-goncalves-texto2': 'We also visited Caminhos de Pedra, the birthplace of Italian colonization in Brazil and where several feature films, mini series and soap operas were filmed.',
      'canela-texto1': 'Canela, in Rio Grande do Sul, is a treasure among the mountains of Rio Grande do Sul. With its lush settings, such as the Stone Cathedral and Parque do Caracol, it offers an immersion in nature and enchanting architecture.',
      'canela-texto2': 'Its cozy climate and mix of tradition and modernity make it an unmissable destination for those looking for charm and beauty in southern Brazil.',
      'universal-texto': "Universal Orlando Resort, located in Florida, is an entertainment complex that houses two main theme parks: Universal Studios Florida and Universal's Islands of Adventure. Founded in the 1990s, the resort offers an immersive experience with thrilling attractions, spectacular shows and iconic characters from Universal films and television shows.",
      'disney-texto1': 'The Walt Disney World Resort in Orlando, Florida is the largest and most comprehensive Disney theme park complex in the world.',
      'disney-texto2': 'Opened in 1971, the resort spans a vast area and offers a variety of magical experiences for visitors of all ages.',
      'miami-texto': 'Miami is a city located in the southeast of the state of Florida, in the United States. Known for its vibrant atmosphere, cultural diversity and stunning beaches, Miami is an internationally recognized metropolis.',
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
      'turismo-titulo': 'Turismo',
      'turismo-texto': 'Viaja con nosotros y descubre lo mejor del turismo con calidad y dedicación.',
      'destinos-titulo': 'Destinos',
      'gramado-texto1': 'Gramado es un refugio encantador rodeado de paisajes impresionantes. Con sus calles llenas de flores y su arquitectura europea, encanta con su ambiente acogedor y su cocina irresistible.',
      'gramado-texto2': 'Tours personalizados con duración de entre 10 y 12 horas, con salida desde Porto Alegre. Contamos con alianzas con los hoteles más reconocidos de la ciudad.',
      'torres-texto1': 'Torres es conocida por sus hermosas playas, siendo un destino turístico popular en la región sur de Brasil. La playa de Torres es famosa por sus colinas y la formación rocosa conocida como "Morro do Farol".',
      'torres-texto2': 'Es un destino encantador para quienes buscan contemplar la grandeza de la naturaleza.',
      'porto-alegre-texto1': "El City Tour de DriveUp es bastante diferente al convencional ya que la cantidad de información histórica, cultural y curiosidades marcan la diferencia.",
      'porto-alegre-texto2': 'Disponemos de City Tours de 2 horas y 4 horas, pero personalizamos tiempos y rutas según las necesidades del cliente.',
      'cambara-texto1': 'Cambará, en Rio Grande do Sul, encanta por sus paisajes montañosos y ríos serenos. La Cascada de Pedra Furada y el Cañón de Itaimbezinho son tesoros naturales que cautivan a los visitantes.',
      'cambara-texto2': 'En esta acogedora ciudad, la cultura gaucha y la hospitalidad local se unen para brindar una experiencia auténtica e inolvidable.',
      'bento-goncalves-texto1': "Descubra la región que produce la mayoría de los vinos finos y espumosos de Brasil. Visitamos las principales bodegas, el hotel Spa do Vinho, el tour Miolo y un almuerzo italiano de alta calidad dentro de la Bodega Valduga.",
      'bento-goncalves-texto2': 'También visitamos Caminhos de Pedra, cuna de la colonización italiana en Brasil y donde se filmaron varios largometrajes, miniseries y telenovelas.',
      'canela-texto1': 'Canela, en Rio Grande do Sul, es un tesoro entre las montañas de Rio Grande do Sul. Con sus entornos exuberantes, como la Catedral de Piedra y el Parque do Caracol, ofrece una inmersión en la naturaleza y una arquitectura encantadora.',
      'canela-texto2': 'Su clima acogedor y su mezcla de tradición y modernidad lo convierten en un destino imperdible para quienes buscan encanto y belleza en el sur de Brasil.',
      'universal-texto': "Universal Orlando Resort, ubicado en Florida, es un complejo de entretenimiento que alberga dos parques temáticos principales: Universal Studios Florida y Universal's Islands of Adventure. Fundado en la década de 1990, el resort ofrece una experiencia inmersiva con atracciones emocionantes, espectáculos espectaculares y personajes icónicos de películas y programas de televisión de Universal.",
      'disney-texto1': 'Walt Disney World Resort en Orlando, Florida, es el complejo de parques temáticos de Disney más grande y completo del mundo.',
      'disney-texto2': 'Inaugurado en 1971, el complejo abarca una vasta área y ofrece una variedad de experiencias mágicas para visitantes de todas las edades.',
      'miami-texto': 'Miami es una ciudad ubicada en el sureste del estado de Florida, en Estados Unidos. Conocida por su atmósfera vibrante, diversidad cultural e impresionantes playas, Miami es una metrópolis reconocida internacionalmente.',
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
    document.getElementById('turismo-titulo').innerText = textos[idioma]['turismo-titulo'];
    document.getElementById('turismo-texto').innerText = textos[idioma]['turismo-texto'];
    document.getElementById('destinos-titulo').innerText = textos[idioma]['destinos-titulo'];
    document.getElementById('gramado-texto1').innerText = textos[idioma]['gramado-texto1'];
    document.getElementById('gramado-texto2').innerText = textos[idioma]['gramado-texto2'];
    document.getElementById('torres-texto1').innerText = textos[idioma]['torres-texto1'];
    document.getElementById('torres-texto2').innerText = textos[idioma]['torres-texto2'];
    document.getElementById('porto-alegre-texto1').innerText = textos[idioma]['porto-alegre-texto1'];
    document.getElementById('porto-alegre-texto2').innerText = textos[idioma]['porto-alegre-texto2'];
    document.getElementById('cambara-texto1').innerText = textos[idioma]['cambara-texto1'];
    document.getElementById('cambara-texto2').innerText = textos[idioma]['cambara-texto2'];
    document.getElementById('bento-goncalves-texto1').innerText = textos[idioma]['bento-goncalves-texto1'];
    document.getElementById('bento-goncalves-texto2').innerText = textos[idioma]['bento-goncalves-texto2'];
    document.getElementById('canela-texto1').innerText = textos[idioma]['canela-texto1'];
    document.getElementById('canela-texto2').innerText = textos[idioma]['canela-texto2'];
    document.getElementById('universal-texto').innerText = textos[idioma]['universal-texto'];
    document.getElementById('disney-texto1').innerText = textos[idioma]['disney-texto1'];
    document.getElementById('disney-texto2').innerText = textos[idioma]['disney-texto2'];
    document.getElementById('miami-texto').innerText = textos[idioma]['miami-texto'];
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


const handleHover = _.debounce(() => {
  const flipContainer = document.querySelector('.flip-container');
  flipContainer.classList.toggle('hovered');
}, 200);
  
