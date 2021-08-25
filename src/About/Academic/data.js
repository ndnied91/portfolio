
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
  {conference:'Kean Research Days' ,
    title: "Mapping the Socioeconomic Impact on COVID-19 ", date: '04-27-21' ,
    desc: "Research project which displays a real-time visual representation of COVID-19 cases in regard to population and income at a state and county-level. Provides a clear view of outbreak hotspots along with income and population in a selected area."},


  {conference:'National Conference on Undergraduate Research (NCUR)' ,
    title: "Impact of COVID-19 by Income and Population", date: '04-01-21' , date: '04-12-21',
    desc: "Research project which displays a real-time visual representation of COVID-19 cases in regard to population and income at a state and county-level. Provides a clear view of outbreak hotspots along with income and population in a selected area."},

  {conference:'Great Minds in STEM',
    title: "Mapping the Socioeconomic Impact on COVID-19 ",
    date: '10-5-20',
    desc: "Research project which displays a real-time visual representation of COVID-19 cases in regard to population and income at a state and county-level. Provides a clear view of outbreak hotspots along with income and population in a selected area."},

  {conference:'Kean Research Days' ,
    title: "How Performance Affects Popularity in the NBA and Beyond ",
    date: '04-27-20',
    desc: 'Project which predicts how well a player will perform in the following season, as well as how a player’s performance impacts their popularity on social media.'},


  {conference:'National Conference on Undergraduate Research (NCUR)',
    title: "Social Chatbots for Mental Health Services", date: '04-27-20' ,
    date: '04-27-20',
    desc:  'Project that guides a user through social service options based on user inputs via a chatbot'
  },

  {conference:'Kean Research Days',
    title: "Guiding Mental Health Issues through Chatbots", date: '04-27-20' ,
   desc: 'Project that guides a user through social service options based on user inputs via a chatbot'}

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
