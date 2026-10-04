// COMMON JS , every file is a module (by default)
// MODULES - Encapsulated Code (only share minimum) 
const jon =  'john';
const peter  = 'peter';

const sayhi=(name)=>{
    console.log(`hello there ${name}`);
}
sayhi('susan');
sayhi(jon);
sayhi(peter);