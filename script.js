let name1=document.getElementById('name')
let age1=document.getElementById('age')

let prev=document.getElementById('prev')
let next=document.getElementById('next')

const persons=[
    {"name":"arun",age:15},{name:"ajay",age:24},{name:'Rocky',age:45}
]

let count=0

window.addEventListener('DOMContentLoaded',()=>{
let person=persons[count]
name1.textContent=`name:${person.name}`
age1.textContent=`age:${person.age}`
})

next.addEventListener('click',()=>{
    count++
    if(count>persons.length)
    {
        count=0
    }
    else{

    let person=persons[count]
    name1.textContent=`name:${person.name}`
    age1.textContent=`age:${person.age}`
    }
})

prev.addEventListener('click',()=>{
    count--
    let person=persons[count]
    name1.textContent=`name:${person.name}`
    age1.textContent=`age:${person.age}`
})