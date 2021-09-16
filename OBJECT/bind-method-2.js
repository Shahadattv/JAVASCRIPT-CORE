// 35-7 (advanced) Difference between bind, call and apply
// bind-method-2


const Shahadat = {
    id: 101,
    name: 'Shahadat',
    money: 2000,


    treatDay: function(expense, gift) {

        this.money = this.money - expense - gift;
        console.log(this);
        return this.money;

    }

};

Shahadat.treatDay(1000, 200);

// another object
const babu = {
    id: 102,
    name: 'Babu',
    money: 3000,

};
// another object
const munna = {
    id: 103,
    name: 'Munna',
    money: 5000,

};
/*
// call
Shahadat.treatDay.call(babu, 500, 100);
Shahadat.treatDay.call(munna, 4000, 100);
*/



// apply
Shahadat.treatDay.apply(babu, [500, 100]);
Shahadat.treatDay.apply(munna, [4000, 100]);