const texts =[
    'alireza' ,
    'erfan' ,
    'ali' ,
    'zahra' , 
    'nataran',
    'reza',
    'somaeh',
    'gdall',
    'iman',
    'dara',
];

let number_random = Math.floor(Math.random() *10 );

let main = document.querySelector('p');
main.innerHTML = texts[number_random];