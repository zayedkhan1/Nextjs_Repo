import DataNotFound from "@/app/components/DataNotFound";
import Link from "next/link";

const services = [
    {
      id: 1,
      title: "Problem Solving",
      description:
        "Strong problem-solving skills with experience in competitive programming and logical thinking."
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "Experienced in building responsive websites using HTML, CSS, JavaScript, and modern frameworks."
    },
    {
      id: 3,
      title: "Data Analysis",
      description:
        "Skilled in analyzing datasets using Python and data visualization tools to extract insights."
    },
    {
      id: 4,
      title: "Database Management",
      description:
        "Hands-on experience with MySQL and MongoDB for designing and managing structured data."
    },
    {
      id: 5,
      title: "API Integration",
      description:
        "Able to integrate REST APIs using Axios and Fetch for dynamic web applications."
    },
    {
      id: 6,
      title: "Frontend Development",
      description:
        "Proficient in React and TailwindCSS to create modern and responsive user interfaces."
    },
    {
      id: 7,
      title: "Backend Development",
      description:
        "Experience in building backend systems using Node.js and Express."
    },
    {
      id: 8,
      title: "Machine Learning",
      description:
        "Basic knowledge of machine learning concepts and model building using Python."
    },
    {
      id: 9,
      title: "Version Control",
      description:
        "Comfortable using Git and GitHub for collaboration and project management."
    },
    {
      id: 10,
      title: "Team Collaboration",
      description:
        "Able to work effectively in teams with strong communication and coordination skills."
    }
  ];
  
  

const ServiceDetails = async ({params}) => {
    const {id}= await params;

    const service=services.find(data=> data.id==id)

//velidating that if this actually find data if not then show error
     if(service){
      return (
        <div>
            <h1>Service details page</h1>
            <h2>id is : {id}</h2>
            <p>title is : {service.title} </p>
        </div>
    );
     }
     else{
      return(
        <DataNotFound></DataNotFound>
      )
     }
    
    
};

export default ServiceDetails;