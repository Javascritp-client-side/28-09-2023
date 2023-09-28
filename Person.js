class Person {
  constructor(firstname, lastname, dateof_birth) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.dateof_birth = dateof_birth;
  }
  getfullname() {
    return `${this.firstname},${this.lastname}`;
  }
  isEqual(anotherPerson) {
    return (
      this.firstname.toLowerCase() === anotherPerson.firstname.toLowerCase() &&
      this.lastname.toLowerCase() === anotherPerson.lastname.toLowerCase()
    );
  }
}
const p1 = new Person("Umaporn","Sup",new Date(1980,10,30))
const p2 = new Person('Somchai','Sup',new Date(1985,1,10))
console.log(p1.getfullname())
console.log(p2.isEqual(p2))
