//MAIL
const email = ["ciao_comestai@gmail.com", "helloworld100@libero.it", "nonhopiuidee_sad@icloud.com"];
const emailUser = prompt(`Inserisci la tua email`);


for (let i = 0; i < email.length; i++) {
  if (email[i] === emailUser) {
    console.log(`Utente trovato nella lista degli invitati`);
  }
  else if (email[i] != emailUser) {
    console.log(`Utente non trovato nella lista degli invitati. Riprova.`)
  }
}

//DADI
const pcNumber = Math.floor(Math.random() * 6) + 1;
const userNumber = parseInt(prompt(`Inserisci il numero`));




if (pcNumber > userNumber) {
  console.log(`Ha vinto il computer`, pcNumber);
}
else if (pcNumber < userNumber) {
  console.log(`Hai vinto`, pcNumber);
}
else {
  console.log(`Pareggio`);
}

