
export const classes = [ 
{ class: 'SR/INTERACTIVE WEB VISUALZTN', year: '20FA'},
{ class: 'BIG DATA COMPUTING' ,year: '20FA'},
{ class: 'DATA MINING PRINCIPLES' , year:'20SP'},
{ class: 'IS/AI CHATBOTS' , year:'20SP'},
{ class: 'APPLIED STATISTICS II',year: '20SP'},
{ class: 'DATA VISUALIZATION' , year:'19FA'},
{ class: 'MACHINE LEARNING ALGORITHMS' ,year: '19FA' },
{ class: 'DATABASE MANAGEMENT SYSTEMS' , year:'19SP'},
{ class: 'OBJECT ORIENTED ANALYS & DSN' ,year:'19SP'},
{ class: 'SYSTEM PROGRAMMING' , year: '19SP'},
{ class: 'ALGORITHMIC THINKING' , year:'18FA'} ,
{ class: 'COMPUTER OPERATING SYSTEMS', year: '18FA'},
{ class: 'ANALYSIS OF ALGORITHMS', year:'18FA'} ,
{ class: 'MATRIX & LINEAR ALGEBRA', year:'18FA'},
{ class: 'COMPUTER ASSEMBLY LANG' , year:'18FA'},
{ class: 'PROGRAMMING THE WWW', year:'18SP'},
{ class: 'DISCRETE STRUCTURES', year:'17FA'},
{ class: 'APPLIED STATISTICS I' , year: '17FA'},
{ class: 'DATA STRUCTURES', year:'17FA'},
{ class: 'COMPUTER SYSTEMS', year:'17FA' },
{ class: 'COMPUTER ORGAN & PROGRAMMING', year: '17SP'},
{ class: 'FUNDAMENTALS OF COMPUTER SCIENCE',year: '17/SP'}
]




export const conferences =[
  {title:'Kean Research Days' , date: '04-01-21' , desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra neque nulla, in lobortis arcu convallis ut. Vivamus eu pretium orci. Mauris iaculis turpis nec dignissim volutpat. Duis quis vehicula ipsum. Cras auctor arcu id odio malesuada. "},

  {title:'National Conference on Undergraduate Research (NCUR)' , date: '04-12-21', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra neque nulla, in lobortis arcu convallis ut. Vivamus eu pretium orci. Mauris iaculis turpis nec dignissim volutpat. Duis quis vehicula ipsum. Cras auctor arcu id odio malesuada.'},

  {title:'Great Minds in STEM' , date: '10-5-20' , desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra neque nulla, in lobortis arcu convallis ut. Vivamus eu pretium orci. Mauris iaculis turpis nec dignissim volutpat. Duis quis vehicula ipsum. Cras auctor arcu id odio malesuada.'},


  {title:'National Conference on Undergraduate Research (NCUR)' , date: '03-26-20', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra neque nulla, in lobortis arcu convallis ut. Vivamus eu pretium orci. Mauris iaculis turpis nec dignissim volutpat. Duis quis vehicula ipsum. Cras auctor arcu id odio malesuada.'},


  {title:'Kean Research Days' , date: '04-27-20', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra neque nulla, in lobortis arcu convallis ut. Vivamus eu pretium orci. Mauris iaculis turpis nec dignissim volutpat. Duis quis vehicula ipsum. Cras auctor arcu id odio malesuada.'},

  {title:'Kean Research Days' , date: '04-01-19', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra neque nulla, in lobortis arcu convallis ut. Vivamus eu pretium orci. Mauris iaculis turpis nec dignissim volutpat. Duis quis vehicula ipsum. Cras auctor arcu id odio malesuada.'}
]

















export const udemy=[
{ name: "The Advanced Web Developer Bootcamp", url:"https://www.udemy.com/course/the-advanced-web-developer-bootcamp/"},
{ name:"GraphQL with React: The Complete Developers Guide", url : "https://www.udemy.com/course/graphql-with-react-course/"},
{ name: "Node with React: Fullstack Web Development", url:"https://www.udemy.com/course/node-with-react-fullstack-web-development/"},
{ name:"Modern React with Redux", url: "https://www.udemy.com/course/react-redux/"},
{ name: "The Modern Python 3 Bootcamp" , url: "https://www.udemy.com/course/the-modern-python3-bootcamp/"},
{ name: "JavaScript Algorithms and Data Structures Masterclass" , url: "https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/ "},
]





export const renderCourses = () =>{
  return(
    <div>
      {udemy.map( (course)=>{
        return <div> {course.name} : {course.url}</div>
      })}
     </div>
  )
}
