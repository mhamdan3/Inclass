function Programmer(name, position, age, language) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.language;
}

Programmer.prototype.printInfo = function() {
    console.log("Name: " + this.name + "\nPosition: " + this.position + "\nAge: " + this.age +"\nLanguages" +this.language);
};

var bob = new Programmer("Bob Smith", "Supreme CodeMaster", 33, "JavaScript");

bob.printInfo();