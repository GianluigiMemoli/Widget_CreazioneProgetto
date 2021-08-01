import {frequenze, inquinanti} from "./stores";

const url = 'https://sqd.sensesquare.eu:5001';
const elencoRegioni = '/elenco_regioni';
const elencoProvince = '/elenco_province';
const elencoMunicipi = '/elenco_municipi';
const elencoCentraline = '/elenco_centraline';
const creaProgettoURL= '/creazione_progetto';
let apikey =  '2HHWGTKFP7XQ';

//let apikey = JSON.parse(localStorage.getItem("user_info")).token;
async function  getElencoRegioni(nazione){
    const data = new FormData();
    data.append("naz_name", nazione);
    return await fetch( url + elencoRegioni, {
        body: data,
        method: 'POST'
        }).then(response => response.json());
}
async function  getElencoProvince(regione){
    const data = new FormData();
    data.append("reg_name", regione);
    return await fetch( url + elencoProvince, {
        body: data,
        method: 'POST'
    }).then(response => response.json());
}

async function  getElencoMunicipi(provincia){
    const data = new FormData();
    data.append("prov_name", provincia);
    return await fetch( url + elencoMunicipi, {
        body: data,
        method: 'POST'
    }).then(response => response.json());
}

async function getElencoCentraline(luogo, fonte){
    const data = new FormData();
    data.append("apikey", apikey);
    data.append('fonte', fonte);
    Object.keys(luogo).forEach(k => {
       if(luogo[k] !== ''){
           data.append(k, luogo[k]);
       }
    });
    return await fetch( url + elencoCentraline, {
        body: data,
        method: 'POST'
    }).then(response => response.json());
}
function formatLuoghi(sources, ente, zoom){
    const centralinaFields = ["nazione", "regione", "provincia", "comune", "squareID"];
    let luoghi = [];
    sources.forEach(centralina => {
        let luogo = {};
        for (let i = 0; i <= zoom && i <= 4; i++) {
                luogo[centralinaFields[i]] = centralina[centralinaFields[i]]
        }
        if(zoom == 5 && ente === "ssq"){
            luogo["ID"] = centralina["ID"]
        }
        luoghi.push(luogo);
    });
    console.log("luoghi");
    console.log(luoghi);
    return luoghi;
}
 function creaProgetto(projectName, inquinanti, frequenze, sources, currentZoom){
    const data = new FormData();
    data.append('apikey', apikey);
    data.append('progetto', projectName);
    data.append('inquinanti', JSON.stringify(inquinanti));
    data.append('frequenze', JSON.stringify(frequenze));
    data.append("zoom", currentZoom);
    Object.keys(sources).forEach(ente => {
            if(ente === "ssq"){
                data.append("luoghi", JSON.stringify(formatLuoghi(sources[ente], ente, currentZoom)));
            } else {
                data.append(ente, JSON.stringify(formatLuoghi(sources[ente], ente, currentZoom)));
            }
    });
    return  fetch( 'https://sqd.sensesquare.eu:5002' + creaProgettoURL, {
        body: data,
        method: 'POST'
    }).then(response => response.json());

}
export {getElencoRegioni,getElencoProvince,getElencoMunicipi, getElencoCentraline, creaProgetto};
