class Person {
  constructor(firstname, lastname, dateof_birth) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.dateof_birth = dateof_birth;
  }
  getfullname() {
    return `${this.firstname},${this.lastname}`;
  }
  getAge(){
    const currentDate = Date.now()
    const birthDateMilli = this.dateof_birth.getTime()
    const diffMilli = currentDate- birthDateMilli
    console.log(currentDate,birthDateMilli,diffMilli)
    return diffDate.getFullYear() - 1970
  }
  isEqual(anotherPerson) {
    return (
      this.firstname.toLowerCase() === anotherPerson.firstname.toLowerCase() &&
      this.lastname.toLowerCase() === anotherPerson.lastname.toLowerCase()
    );
  }

  toString(){
    return `${this.getfullname()}`
  }
}
const p1 = new Person("Umaporn","Sup",new Date(1980,10,30))
const p2 = new Person('Somchai','Sup',new Date(1985,1,10))
console.log(p1.getfullname())
console.log(p2.isEqual(p2))
