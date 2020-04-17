// chiedere all'utente il suo nome, il suo cognome e il suo colore preferito e con queste informazioni creare una (insicurissima) password così formata: [nome][cognome][colore preferito]20

//chiedere nome
var nome = prompt('dimmi il tuo nome');

//cognome
var cognome = prompt('e il tuo cognome?');

//colore preferito
var colorePreferito = prompt('e il tuo colore preferito?');

//creare la password
var passwordGenerata = nome + cognome + colorePreferito + '20';

// inserirla nell'html
document.getElementById('password').innerHTML = passwordGenerata;
document.getElementById('generate').innerHTML = 'password generata: ';
document.getElementById('title').innerHTML = 'Password Generator';


// animazioni
document.getElementById('title').setAttribute('class', 'title-animation');
document.getElementById('password').setAttribute('class', 'password-animation');
document.getElementById('generate').setAttribute('class', 'generate-animation');
