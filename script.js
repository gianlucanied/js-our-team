/* 
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sotto forma di stringhe */

// Milestone 0

// Creiamo un array con dentro tutti i membri
const arrayMembriTeam = [
    {
        "nomeCognome": "Wayne Barnett",
        "role": "Founder & CEO",
        "image": "wayne-barnett-founder-ceo.jpg"
    },
    {
        "nomeCognome": "Angela Caroll",
        "role": "Chief Editor",
        "image": "angela-caroll-chief-editor.jpg"
    },
    {
        "nomeCognome": "Walter Gordon",
        "role": "Office Manager",
        "image": "walter-gordon-office-manager.jpg"
    },
    {
        "nomeCognome": "Angela Lopez",
        "role": "Social Media Manager",
        "image": "angela-lopez-social-media-manager.jpg"
    },
    {
        "nomeCognome": "Scott Estrada",
        "role": "Developer",
        "image": "Scott-estrada-developer.jpg"
    },
    {
        "nomeCognome": "Barbara Ramos",
        "role": "Graphic Designer",
        "image": "barbara-ramos-graphic-designer.jpg"
    }
];


// Milestone 1 e 2
for(let i = 0; i < arrayMembriTeam.length; i++){

    let membroIesimo = arrayMembriTeam[i];

    let nomeECognomeMembroIesimo = membroIesimo.nomeCognome;

    let roleMembroIesimo = membroIesimo.role;

    let imgMembroIesimo = membroIesimo.image;

    // Creo un div per contenere i dati
    let divMembro = document.createElement("div");

     // Creo le stringhe
     let stringaHtml = "<p>Nome e Cognome: " + nomeECognomeMembroIesimo + "</p>" +
     "<p>Ruolo: " + roleMembroIesimo + "</p>" +
     '<p>Img: ' + imgMembroIesimo + "</p>";

    divMembro.innerHTML = stringaHtml;

    // Uso append per collegarlo al body
    document.body.appendChild(divMembro);

    console.log("Nome e Cognome: " + nomeECognomeMembroIesimo, "Ruolo: " + roleMembroIesimo, "Img: " + imgMembroIesimo);
}

