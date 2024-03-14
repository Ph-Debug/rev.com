function pedidoWhats() {
  // Obtenção dos valores dos inputs
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var projeto = document.getElementById('projeto').value;
  var check = document.getElementsByName("itemcheck");

  // Uso de filter e map para coletar escolhas marcadas de forma mais concisa
  var escolha = Array.from(check).filter(c => c.checked).map(c => c.value);

  // Construção da mensagem usando template string para maior legibilidade
  const msg = `Olá, meu nome é ${nome}, meu email é: ${email}, eu estou interessado em fazer ${escolha.join(', ')}, meu projeto é sobre ${projeto}`;

  // Codifica a mensagem para uso em URL e redireciona
  location.href = `https://wa.me//556195997277?text=${encodeURIComponent(msg)}`;
}
