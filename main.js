// chiedere all'utente il suo nome, il suo cognome e il suo colore preferito e con queste informazioni creare una (insicurissima) password così formata: [nome][cognome][colore preferito]20

//chiedere nome utente
var nome = prompt('dimmi il tuo nome');

//cognome
var cognome = prompt('e il tuo cognome?');

//colore preferito
var colorePreferito = prompt('e il tuo colore preferito?');

//creare la password e stamparla su html
document.writeln('password creata: ' + nome + cognome + colorePreferito);
