import {
    mobile,
    backend,
    creator,
    web,
    azurefundamentals,
    azureadmin,
    redhat
  } from "../assets";
  


const services = [
    {
      title: "Cloud Computing",
      icon: web,
    },
    {
      title: "Consulting",
      icon: mobile,
    },
    /*{
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },*/
  ];

  const formations=[
    {
      name:'Azure Fundamentals',
      description:'In this course, you will learn the basics of cloud computing, including its definition and different types, such as public, private, and hybrid clouds. We will provide concrete examples using Microsoft Azure, helping you better understand real-world applications of cloud services and how they can benefit businesses and individuals alike.',
      tags:[
        {
          name:'Cloud Computing',
          color:'linear-gradient(190deg, #4b6cb7, #182848)'
        },
        {
          name:'Microsoft',
          color:'linear-gradient(90deg, #00b09b, #96c93d)'
        },
        {
          name:'Azure',
          color:'linear-gradient(90deg, #ff7e5f, #feb47b)'
        }  
      ],
      image: azurefundamentals,
      url:"https://www.youtube.com/watch?v=B-GpplgmEPY&list=PLZyl2f5LulAT9hx7Q2qUUzIxjWgpYJkpO&pp=iAQB"
    },
    {
      name:'Azure Administrator',
      description:"In this course, you will learn the core aspects of Azure administration, including managing virtual machines, storage, and networking. You'll also dive into monitoring and securing resources, automating tasks, and optimizing Azure performance through practical, real-world scenarios that enhance your skills and understanding of Azure environments.",
      tags:[
        {
          name:'Azure',
          color:'linear-gradient(190deg, #4b6cb7, #182848)'
        },
        {
          name:'Administration',
          color:'linear-gradient(90deg, #00b09b, #96c93d)'
        },
      ],
      image: azureadmin,
      url: "https://www.youtube.com/watch?v=Y8137Ps4oGw&list=PLZyl2f5LulASN6D-Dh1107UuIROQqRqWt&pp=iAQB"
    },
    {
      name:'Redhat Admin',
      description:"In this Red Hat Administration course, you'll learn essential skills to manage and maintain Red Hat Enterprise Linux systems. This includes user management, system configuration, security implementation, and storage management.You'll also gain hands-on experience with network services and troubleshooting.",
      tags:[
        {
          name:'Linux',
          color:'linear-gradient(190deg, #4b6cb7, #182848)'
        },
        {
          name:'Redhat',
          color:'linear-gradient(90deg, #00b09b, #96c93d)'
        },
        {
          name:'Administration',
          color:'linear-gradient(90deg, #ff7e5f, #feb47b)'
        }
      ],
      image: redhat,
      url:"https://www.youtube.com/watch?v=jNW2jyM4j0A&list=PLZyl2f5LulASffLp30R6Rr08KqtIoIMZ6&pp=iAQB"
    }
  ];

  export {services,formations};