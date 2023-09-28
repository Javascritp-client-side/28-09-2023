const mail = {

    sender: "SIT,KMUTT",
    recipent:{
        firstname:"Umaporn",
        lastname:"Sup"
    },
    title:"Welcome to KMUTT",
    sentDetail:{
        sentDate: new Date(Date.now()),
        host:{
            name:"@sit.kmutt"
        }
    }
    

}


const {sender} = mail
let {sentDate:header} = mail
console.log(header)
console.log(sender)
const {recipent:{firstname,lastname}} = mail
const {sentDetail:{host:{name}}} = mail
console.log(name)