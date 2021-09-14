const loadBuddy = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}
loadBuddy();
const displayBuddies = data => {
    const buddies = data.results;
    const babu = document.getElementById('babu');
    for (const buddy of buddies) {
        const p = document.createElement('p');
        p.innerText = `NAME: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}  email:${buddy.email}
        
        
        `;
        babu.appendChild(p);
        // console.log(buddy);
    }
}