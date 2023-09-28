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
