let backButton = document.querySelector("#back")
let nextButton = document.querySelector("#next")

let students =[
  {
    profileImage: "https://cdn.glitch.com/8da7af9a-1267-4e9f-a1a0-681f880add03%2Funnamed-2.jpg?v=1585163437098",
    name:"Jinmaris Alicea",
    quote:"yolo",
    superlative:"smart",
  },
    {
    profileImage: "https://cdn.glitch.com/8da7af9a-1267-4e9f-a1a0-681f880add03%2Funnamed-4.jpg?v=1585163412821",
    name:"Leah Dupres",
    quote:"May the force be with you",
    superlative:"Intelligent",
  },
  {
    profileImage: "https://cdn.glitch.com/8da7af9a-1267-4e9f-a1a0-681f880add03%2FIMG_4025.JPG?v=1585163577429",
    name:"Adriana Camilo",
    quote:"The failures you endure dont compare to your success at the end",
    superlative:"Loud",
  },
  {
    profileImage: "https://cdn.glitch.com/8da7af9a-1267-4e9f-a1a0-681f880add03%2Funnamed.jpg?v=1585163451554",
    name:"Ericka Lee Sanchez",
    quote:"It is what it is",
    superlative:"serious",
  },
  {
    profileImage: "https://cdn.glitch.com/8da7af9a-1267-4e9f-a1a0-681f880add03%2Funnamed-1.jpg?v=1585163460348",
    name:"Andrew Rivera",
    quote:"buenooo men",
    superlative:"friendly",
  },
  {
    profileImage: "https://cdn.glitch.com/8da7af9a-1267-4e9f-a1a0-681f880add03%2FIMG_4024.jpg?v=1585161840545",
    name:"Emmanuel Taveras",
    quote:"life still goes on",
    superlative:"jokester",
  },
  {
    profileImage: "https://cdn.glitch.com/8da7af9a-1267-4e9f-a1a0-681f880add03%2Funnamed-3.jpg?v=1585163421866",
    name:"Demian Aviles",
    quote:"El amor es por 100PRE",
    superlative:"hyper",
  },
  {
    profileImage: "https://cdn.glitch.com/8da7af9a-1267-4e9f-a1a0-681f880add03%2FIMG_8456%202.png?v=1585166320012",
    name:"Miguel Lucero",
    quote:"Why are you the way that you are",
    superlative:"calm",
  },
   {
     profileImage:"https://cdn.glitch.com/8da7af9a-1267-4e9f-a1a0-681f880add03%2FNyan-Cat-GIF-source.gif?v=1585532281755",
     name:"",
     quote:"",
     superlative:"",
   }
]
  
let  count = 0
document.querySelector("#pic").src = students[count].profileImage
document.querySelector("#name").innerHTML = students[count].name
document.querySelector("#quote").innerHTML = students[count].quote
document.querySelector("#superlative").innerHTML = students[count].superlative
let lastStudent = students.length -1

nextButton.addEventListener("click",()=>{
  console.log('next')
  count ++
  console.log(count)
  if(count > lastStudent){
    count=0
  }
  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name
  document.querySelector("#quote").innerHTML = students[count].quote
  document.querySelector("#superlative").innerHTML = students[count].superlative
})

backButton.addEventListener("click",()=>{
  console.log('back')
  count --
    if(count < 0){
      count=lastStudent
    }
  console.log(count)
  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name
  document.querySelector("#quote").innerHTML = students[count].quote
  document.querySelector("#superlative").innerHTML = students[count].superlative
})

