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
const randomPcNumbers = [];
const randomUserNumbers = [];

console.log(Math.floor(Math.random() * 6) + 1);
for (let i = 0; i < 2; i++) {
  const pcNumber = (Math.random() * 6) + 1;
  const userNumber = parseInt(prompt(`Inserisci il numero`));
}