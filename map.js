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

  let mail = mails.map((e) => 'LogID-'+e.id).filter((e)=> e.includes('8'))
  console.log(mail)