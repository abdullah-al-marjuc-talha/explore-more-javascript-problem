const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];

const partial = friends.splice(2, 3, 999, 595, 797);
console.log(partial);
console.log(friends);