import front1 from "./front1.png"
import back from "./backend.png"
import database from "./database.png"
import tools from "./library.png"
import ml from "./ml.png"
import software from "./software.png"
export const Data=[
    {   
        title: "Frontend",
        icon: front1,
        skills:[
            {skill: "HTML5" , percentage: "95%"},
            {skill: "CSS3", percentage: "90%"},
            {skill: "JavaScript", percentage:"70%"},
            {skill: "React.js", percentage:"70%"},
            {skill: "Redux", percentage: "50%"},
        ],
    },
    {   
        title: "Backend",
        icon: back,
        skills:[
            {skill: "Node.js" , percentage: "70%"},
            {skill: "Express.js", percentage: "60%"},
            
        ],
    },
    {   
        title: "AI/ML",
        icon: ml,
        skills:[
            {skill: "Python" , percentage: "85%"},
            {skill: "Parallel-Computing", percentage: "60%"},
            {skill: "Deep-Learning", percentage: "60%"},

        ],
    },
    {   
        title: "Database",
        icon: database,
        skills:[
            {skill: "Mongo.db" , percentage: "70%"},
            {skill: "SQL", percentage: "80%"},
        ],
    },
    {   
        title: "Tools",
        icon: software,
        skills:[
            {skill: "Git/GitHub" , percentage: "80%"},
            {skill: "VS code", percentage: "80%"},
            {skill: "Jupyter", percentage: "60%"},

        ],
    },
]