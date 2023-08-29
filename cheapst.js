// cheapst.js

const phones = [
    {name: 'samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver'},
    {name: 'walton', camera: 10, storage: '32gb', price: 22000, color: 'silver'},
    {name: 'iphone', camera: 7, storage: '32gb', price: 82000, color: 'silver'},
    {name: 'Xaomi', camera: 17, storage: '32gb', price: 52000, color: 'silver'},
    {name: 'oppo', camera: 25, storage: '32gb', price: 20000, color: 'silver'},
    {name: 'Nokia', camera: 6, storage: '32gb', price: 44000, color: 'silver'},
    {name: 'HTC', camera: 10, storage: '32gb', price: 62000, color: 'silver'}

];

function cheapestPhone(phones)
{
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++)
    {
        const phone = phones[i];
        console.log(phone);
        if(phone.price < cheapest.price)
        {
            cheapest = phone;

        }
    }
    return cheapest;

}

const mySelection = cheapestPhone(phones);
console.log('cheapes phone is: ', mySelection);