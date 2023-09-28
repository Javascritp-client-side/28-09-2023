const keywords = ['destructuring', 'spread', 'rest', 'prototypes', 'function']
const mails = [
  {
    id: 12323502,
    sender: {
      firstname: 'Umaporn',
      lastname: 'Sup'
    },
    subject: 'Welcome to SIT, KMUTT'
  },
  {
    id: 55588811,
    sender: {
      firstname: 'Tisanai',
      lastname: 'Chat'
    },
    subject: 'Reminder: INT201 Class'
  }
]
let result = []
keywords.forEach((keyword)=> console.log(keyword))
mails.forEach((mail)=> result +=mail.sender.firstname.charAt(0))
console.log(result)
keywords.push("optional chaining")
mails.forEach((mail) => result.push(mail.id))