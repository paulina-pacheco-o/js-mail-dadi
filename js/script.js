//MAIL
const email = ["ciao_comestai@gmail.com", "helloworld100@libero.it", "nonhopiuidee_sad@icloud.com"];
const emailUser = prompt(`Inserisci la tua email`);


for (let i = 0; i < email.length; i++) {
  if (email[i] === emailUser) {
    console.log(`Utente trovato nella lista degli invitati`);
  }
}