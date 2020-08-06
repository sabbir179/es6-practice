const person = { name: 'Jack William', age: 19, job: 'youtuber', gfName: 'Ema hasan', phone: '0187298989989', address: 'House- 4, Uttara, Dhaka', friends: ['Samol chawdhuri', 'Kmol'] };
// const gfName = person.gfName;
// const phone = person.phone;

const {phone, gfName, address} = person;

// console.log(gfName, phone, address);

const friends = ['Sakib Khan', 'Amir Khan', 'Salman Khan', 'Sharukh Khan'];
const [chotoFriend, nextFriend, ...restFriends] = friends;

console.log(chotoFriend, restFriends);


const complexObject = {
    name: 'Samana',
    info: {
        address: 'Azimpur',
        leader: 'Tiger leader' 

    }
}

const {leader} = complexObject.info;