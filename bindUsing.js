const normalPerson ={
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount){
        console.log(this);
        this.salary = this.salary-amount;
        return this.salary;

    }
}

const heroPerson ={
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000,
}
 
const friendlyPerson ={
    firstName: 'Hero',
    lastName: 'Golam',
    salary: 15000,
}

// normalPerson.chargeBill();

const heroBillCharge=normalPerson.chargeBill.bind(heroPerson);
heroBillCharge(2000);
heroBillCharge(3000);
console.log(heroPerson.salary)
console.log(normalPerson.salary)

const friendlyBillCharge = normalPerson.chargeBill.bind(friendlyPerson)
friendlyBillCharge(1500)
