
// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com
//Stap1 - declareer variabele om domain in op te slaan
//Stap2 - itereer door de string
//stap3 - check voor het @-teken
//Stap4 - zet alle tekens na het @-teken in domain
//Stap5 - return domain
function getEmailDomain(emailAdres){
    let domain = emailAdres.substring(emailAdres.indexOf("@")+1, emailAdres.length);
    return domain;
}

console.log(getEmailDomain("n.eeken@novi-education.nl"), getEmailDomain("t.mellink@novi.nl"), getEmailDomain("a.wiersma@outlook.com"));
//let email = "n.eeken@novi-education.nl";
//console.log(email.indexOf("@"));
//console.log(email.substring(email.indexOf("@")+1, email.length));




/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)

//Stap1 - declareer variabele domain
//Stap2 - haal het domein uit het emailadres, functie opdr1 en zet deze in een variabele
//Stap3 - check het domein en geef waardes terug met if else statements en geef de juiste waarde terug

function typeOfEmail(emailAdress){
    const domain = getEmailDomain(emailAdress);
    if(domain === "novi-education.nl") {
        return "Student";
    } else if(domain === "novi.nl") {
        return "Medewerker";
    } else {
        return "Extern";
    }
}
const email1 = typeOfEmail("nielsvelst@hotmail.com");
const email2 = typeOfEmail("n.eeken@novi-education.nl");
const email3 = typeOfEmail("t.mellink@novi.nl");
const email4 = typeOfEmail("novi.nlaapjesk@outlook.com");
const email5 = typeOfEmail("a.wiersma@outlook.com");
console.log(email1, email2, email3, email4, email5);

// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"



/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)

//Stap1 - check of er een @ in voor komt (index is groter dan -1)
//Stap2 - check of er geen , in voor komt (index is -1)
//Stap3 - of er geen . in voor komt als allerlaatste karakter (index != email.length-1)

function checkEmailValidity(emailAdress){
    if((emailAdress.lastIndexOf(",") === -1) && (emailAdress.lastIndexOf("@") > -1) && (emailAdress.lastIndexOf(".") !== emailAdress.length-1)){
        return true
    } else {
        return false
    }
}

const emailCheck1 = checkEmailValidity("n.eeken@novi.nl");
const emailCheck2 = checkEmailValidity("tessmellink@novi.nl");
const emailCheck3 = checkEmailValidity("n.eekenanovi.nl");
const emailCheck4 = checkEmailValidity("tessmellink@novi,nl");
console.log(emailCheck1 + " dit geeft true");
console.log(emailCheck2 + " dit geeft true");
console.log(emailCheck3 + " dit geeft false");
console.log(emailCheck4 + " dit geeft false");
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

