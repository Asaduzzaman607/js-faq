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
    salary: 15000,
}
 
const friendlyPerson ={
    firstName: 'Hero',
    lastName: 'Golam',
    salary: 15000,
}
// bind

// normalPerson.chargeBill();

const heroBillCharge=normalPerson.chargeBill.bind(heroPerson);
heroBillCharge(2000);
heroBillCharge(3000);
console.log('hero Person salary using bind:',heroPerson.salary);
console.log('normal Person salary using bind:',normalPerson.salary);

const friendlyBillCharge = normalPerson.chargeBill.bind(friendlyPerson);
friendlyBillCharge(1500);


// call
// normalPerson.chargeBill.call(heroPerson, 3000);
// console.log('hero Person salary:', heroPerson.salary);


normalPerson.chargeBill.call(friendlyPerson, 3000);
console.log('friendly Person salary using call:', friendlyPerson.salary);
console.log('normal Person salary using call:', normalPerson.salary);

// apply
normalPerson.chargeBill.call(heroPerson, [3000])
console.log('hero Person salary using Apply:', heroPerson.salary);
