const comprarCasco = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Casco pa la chompita");
        //reject("No hay cascos :(");
    },1000)
})

const comprarGuantes = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("ahora los guantes pa que no te quemes las manoplas");
        //reject("No hay guantes :(");
    },2000)
})

const paseoEnBici = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("mira mama sin manos");
        //reject("ta muy feo el dia :(");
    },8000)
})

const aPasiar=()=>{
    comprarCasco.then(casco=>{
        console.log(casco);
        return comprarGuantes;
    })
    .then(guantes=>{
        console.log(guantes);
        return paseoEnBici;
    })
    .then(bici=>{
        console.log(bici);
    })
    .catch(error =>{
        console.log(error);
    })
    .finally(()=>console.log("se acabó el paseo"));
}

aPasiar();