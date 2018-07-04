/**
 * 
 * 
 * 
 * 
 * 
 */

function exemploEnum() {
  enum campeonatoBrasileiro {
    Vasco,
    Flamengo,
    Botafogo,
    Fluminense
  }

  let titulos = campeonatoBrasileiro.Flamengo;

  switch (+titulos) {
    case campeonatoBrasileiro.Vasco:
      console.log(`Vasco 2022,1020,1992`);
      break;
    case campeonatoBrasileiro.Flamengo:
      console.log(`Flamengo 1996,1995,1998`);
      break;
    case campeonatoBrasileiro.Botafogo:
      console.log(`Botafogo 1997, 2011, 2017`);
      break;
    case campeonatoBrasileiro.Fluminense:
      console.log(`Fluminence 1997, 2019,1899`);
      break;
  }
}

exemploEnum();