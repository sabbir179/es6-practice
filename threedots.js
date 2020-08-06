const ages = [23, 45, 32, 42];
const ages2 = [22, 32, 24, 26];
const allAges = ages.concat(ages2);

const allAges2 = [...ages, ...ages2, 5 ];
console.log(allAges2);

const bunsiness = 650;
const minister = 450;
const sochib = 250;
const takaPoisa = [650, 450, 350];
// const maximum = Math.max(bunsiness, minister, sochib);
const maximum = Math.max(...takaPoisa);
console.log(maximum);