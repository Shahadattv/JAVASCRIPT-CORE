// 35-2 Object method property review
// Method object
const student = {
    id: 101,
    name: 'shahadat',
    class: "ten",
    balance: 2000,
    subject: ['English', 'Sinch', 'Math', 'Calculator'],
    bestFriend: {
        name: 'condu',
        major: 'bangla',
    },
    takeExam: function() {
        // this mins main object =student
        // console.log(this.name, "takeExam");

    },
    sogir: function(expense, gift) {
        // this mins main object =student
        this.balance = this.balance - expense - gift;
        return this.balance;
        // console.log(this.name, "takeExam");

    },

};
// first function
student.takeExam();

// second function
const remaining = student.sogir(500, 50);
console.log(remaining);