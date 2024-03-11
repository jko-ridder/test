let nums =  [1,2,3,4,5,6,7,8,9,10];

let tabellNode = document.getElementById("tabell");
let menyMultiplikationNode = document.getElementById("menyMultiplikation");
let aktivaNummerNode = null;

function generateTable(nummer) {
    let tabellHTML = `<h2>${nummer}ans Gångertabell</h2>`;
    nums.forEach((n) => {
        tabellHTML += `<p>${n} * ${nummer} = ${nummer * n}</p>` 
        
    });
    tabellHTML += `<button class="practiceButton" onClick="startPractice(${nummer})">Klicka här för att öva på ${nummer}:ans tabell!</button>`
    tabellNode.innerHTML = tabellHTML;

}

function visaTabell(nummer) {
    if(aktivaNummerNode !== null) {
        aktivaNummerNode.classList.remove("active");
    }
    aktivaNummerNode = event.currentTarget;
    aktivaNummerNode.classList.add("active");
    generateTable(nummer);
}

function startPractice(nummer) {
    console.log("Nu startar övningen för ", nummer);

    function generatePracticeTable(nummer) {
        //slumpar en siffra mellan 1-10
        let slumpatNummer = Math.floor(Math.random() * 10) + 1;

        //skapar html för att visa frågan
        let fragetext = `${nummer} * ${slumpatNummer} = ?`;
        
        console.log(fragetext)
        //uppdaterar dom för att visa frågan
        let frageTextElement = document.querySelector("#fragetext");
        let svarElement = document.getElementById("svar");
        frageTextElement.textContent = fragetext;
        svarElement.value = ""; //rensar svar
        let modal = document.getElementById("modal")
        modal.style.display = "block"; 
    }
    generatePracticeTable(nummer);
}