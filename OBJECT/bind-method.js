// 35-6 (advanced) Use bind to borrow method from another object
// bind-method

const Shahadat = {
    id: 101,
    name: 'Shahadat',
    money: 2000,


    treatDay: function(expense) {

        this.money = this.money - expense;
        console.log(this);
        return this.money;

    }

}

// Shahadat.treatDay(1000);

// another object
const babu = {
    id: 102,
    name: 'Babu',
    money: 3000,

}

const heroTreatDey = Shahadat.treatDay.bind(babu);
heroTreatDey(500);