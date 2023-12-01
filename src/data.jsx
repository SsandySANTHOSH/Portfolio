import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
   // FaBriefcase,
    FaGraduationCap,
    FaCode,
  } from 'react-icons/fa';
  import { FiFileText, FiExternalLink } from 'react-icons/fi';
  
  // import Work1 from './assets/project-1.jpg';
  // import Work2 from './assets/project-2.jpeg';
  // import Work3 from './assets/project-3.jpeg';
  // import Work4 from './assets/project-4.jpeg';
  // import Work5 from './assets/project-5.jpeg';
  // import Work9 from './assets/project-6.jpg';
  //   import Work7 from './assets/project-7.jpg';
    import Work13 from './assets/nationalizeapi.webp';
    import Work10 from './assets/restcountries.png';
    import Work11 from './assets/crudimage.webp';
   // import Work12 from './assets/shoppingapp.jpg';
    //import Work13 from './assets/tirukural.png';
    import Work14 from './assets/zenclass.jpg';
    import Work15 from './assets/expenses.jpg';
    import Work16 from './assets/url-shortener.png';







  
  import Theme1 from './assets/purple.png';
  import Theme2 from './assets/red.png';
  import Theme3 from './assets/blueviolet.png';
  import Theme4 from './assets/blue.png';
  import Theme5 from './assets/goldenrod.png';
  import Theme6 from './assets/magenta.png';
  import Theme7 from './assets/yellowgreen.png';
  import Theme8 from './assets/orange.png';
  import Theme9 from './assets/green.png';
  import Theme10 from './assets/yellow.png';
  
  export const links = [
    {
      id: 1,
      name: 'Home',
      icon: <FaHome className='nav__icon' />,
      path: '/',
    },
  
    {
      id: 2,
      name: 'About',
      icon: <FaUser className='nav__icon' />,
      path: '/about',
    },
  
    {
      id: 3,
      name: 'Projects',
      icon: <FaFolderOpen className='nav__icon' />,
      path: '/portfolio',
    },
  
    {
      id: 4,
      name: 'Contact',
      icon: <FaEnvelopeOpen className='nav__icon' />,
      path: '/contact',
    },
  ];
  
  export const personalInfo = [
    {
      id: 1,
      title: 'First Name : ',
      description: 'Santhoshkumar',
    },
  
    {
      id: 2,
      title: 'Last Name : ',
      description: 'E',
    },
  
    {
      id: 3,
      title: 'Age : ',
      description: '22 Years',
    },
  
    {
      id: 4,
      title: 'Nationality : ',
      description: 'Indian',
    },
  
    // {
    //   id: 5,
    //   title: 'Github : ',
    //   description: 'SsandySANTHOSH',
    // },
  
    {
      id: 6,
      title: 'Location : ',
      description: 'Coimbatore',
    },
  
    {
      id: 7,
      title: 'Phone : ',
      description: '+91-8012945121',
    },
  
    {
      id: 8,
      title: 'Email : ',
      description: 'santhoshs4717@mail.com',
    },
  
    // {
    //   id: 9,
    //   title: 'LinkedIn : ',
    //   description: 'santhosh6',
    // },
  
    {
      id: 10,
      title: 'Languages : ',
      description: 'English, Tamil',
    },
  ];
  
  export const stats = [
    {
      id: 1,
      no: 'Fresher',
      title: 'Looking for great  <br /> Opportunity',
    },
    {
      id: 4,
      no: '2+',
      title: ' Years Experience in <br /> Nss',
    },
  ];

     export const certificate = [
      {
        id: 6,
        category: 'certification',
        icon: <FaGraduationCap />,
        year: ' 2023 - Present',
        title: 'Full Stack Development <span> Guvi</span>',
        desc: '',
      },


     ]
  
  export const resume = [
   
   

    // {
    //   id: 6,
    //   category: 'education',
    //   icon: <FaGraduationCap />,
    //   year: ' 2023 - Present',
    //   title: 'Full Stack Development <span> Guvi</span>',
    //   desc: 'Currently Pursuing',
    // },
  
    {
      id: 7,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2019 -  2022',
      title: 'BSC  <span> Karpagam Collage of Arts and Science</span>',
      desc: 'Scored 67%',
      
    },
    {
      id: 8,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2018-2019',
      title: 'HSC <span> N.V Matric Higher Secondary School </span>',
      desc: 'Scored 63% ',
    },
  
    {
      id: 9,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2016-2017',
      title: 'SSLC <span> N.V Matric Higher Secondary School </span>',
      desc: 'Scored 66.6% ',
    },
  ];
  
  export const skills = [
    {
      id: 1,
      title: 'HTML',
      percentage: '85',
    },
    {
      id: 2,
      title: 'CSS',
      percentage: '80',
    },
    {
      id: 3,
      title: 'JavaScript',
      percentage: '75',
    },
    {
      id: 4,
      title: 'React',
      percentage: '75',
    },
  
    {
      id: 5,
      title: 'Bootstrap',
      percentage: '70',
    },
 
    {
      id: 7,
      title: 'NodeJs',
      percentage: '75',
    },
    {
      id: 8,
      title: 'ExpressJs',
      percentage: '85',
    },
    {
      id: 9,
      title: 'MongoDB',
      percentage: '85',
    },
    {
      id: 13,
      title: 'AWS',
      percentage: '70',
    },
    {
      id: 11,
      title: 'Git',
      percentage: '80',
    },
    {
      id: 10,
      title: 'MySql',
      percentage: '60',
    },
  
  ];
  
  export const portfolio = [
    {
      id: 1,
      img: Work15,
      title: 'Cash-Manager',
      details: [
        {
          icon: <FiFileText />,
          title: 'Description : ',
          desc: 'Calculate your expense annd income',
        },
        {
          icon: <FaCode />,
          title: 'Tech Used : ',
          desc: 'React JS, Node js ,Mongodb',
        },
        {
          icon: <FiExternalLink />,
          title: 'Front End : ',
          desc: 'https://github.com/SsandySANTHOSH/PROJECT-PETTYCASH-Frontendnew.git',
        },
        {
          icon: <FiExternalLink />,
          title: 'Back End : ',
          desc: 'https://github.com/SsandySANTHOSH/PROJECT-PETTYCASH-FE.git',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://idyllic-frangipane-c4f481.netlify.app',
        },
       
      ],
    },
    {
      id: 2,
      img: Work10,
      title: 'Chat App',
      details: [
        {
          icon: <FiFileText />,
          title: 'Description : ',
          desc: 'This App can use to chat with friends who present in Our DB',
        },
        {
          icon: <FaCode />,
          title: 'Tech Used : ',
          desc: 'React, Nodejs, MongoDB',
        },
        {
          icon: <FiExternalLink />,
          title: 'Front End : ',
          desc: 'https://github.com/SsandySANTHOSH/ChatApp-Frontend.git',
        },
        {
          icon: <FiExternalLink />,
          title: 'Back End : ',
          desc: 'https://github.com/SsandySANTHOSH/ChatApp-Backend.git',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://melodious-liger-a93ca0.netlify.app',
        },
     
      ],
    },
    {
      id: 3,
      img: Work11,
      title: 'Crud App',
      details: [
        {
          icon: <FiFileText />,
          title: 'Description: ',
          desc: 'Add ,Update or Delete User from DB',
        },
        {
          icon: <FaCode />,
          title: 'Tech Used : ',
          desc: ' React js, Node js,Mongodb',
        },
        {
          icon: <FiExternalLink />,
          title: 'Front End : ',
          desc: 'https://github.com/SsandySANTHOSH/CRUD-Frontend.git',
        },
        {
          icon: <FiExternalLink />,
          title: 'Back End : ',
          desc: 'https://github.com/SsandySANTHOSH/CRUD-Backend.git',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://extraordinary-raindrop-ecc7b6.netlify.app',
        },
       
  
      ],
    },

    {
      id: 4,
      img: Work14,
      title: 'Zen Class Tickting Querying System',
      details: [
        {
          icon: <FiFileText />,
          title: 'Description: ',
          desc: 'This app can Solve the Doubtes for students by rasying the queary and solved by the Mentor',
        },
        {
          icon: <FaCode />,
          title: 'Tech Used : ',
          desc: ' Html,CSS,Javascript,node,mongoDB',
        },
        
        {
          icon: <FiExternalLink />,
          title: 'Front End : ',
          desc: 'https://github.com/SsandySANTHOSH/ZEN-clone-FE.git',
        },
        {
          icon: <FiExternalLink />,
          title: 'Back End : ',
          desc: 'https://github.com/SsandySANTHOSH/ZEN-clone-BE.git',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://chic-smakager-6caf1b.netlify.app/',
        },
   
  
      ],
    },
    
    {
      id: 9,
      img: Work16,
      title: 'URL Shortener',
      details: [
        {
          icon: <FiFileText />,
          title: 'Description : ',
          desc: 'It used to compres the long url into short url',
        },
        {
          icon: <FiExternalLink />,
          title: 'Code : ',
          desc: 'https://github.com/SsandySANTHOSH/Url-Shortener-Frontend.git',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://frolicking-kulfi-8b1c76.netlify.app/',
        },
        {
          icon: <FaCode />,
          title: 'Tech Used : ',
          desc: 'HTML, CSS ,javascript',
        },
      ],
    },
  
  
    

    
    
    {
      id: 5,
      img: Work13,
      title: 'Ice And Fire Api',
      details: [
        {
          icon: <FiFileText />,
          title: 'Description : ',
          desc: ' Fetch the API and display the info',
        },
        {
          icon: <FiExternalLink />,
          title: 'Code : ',
          desc: 'https://github.com/SsandySANTHOSH/Ice-Fire-Api-1.git',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://lambent-pony-ff14be.netlify.app',
        },
        {
          icon: <FaCode />,
          title: 'Tech Used : ',
          desc: 'HTML, CSS, JavaScript',
        },
      ],
    },
    // {
    //   id: 6,
    //   img: Work12,
    //   title: 'Shopping App',
    //   details: [
    //     {
    //       icon: <FiFileText />,
    //       title: 'Description : ',
    //       desc: ' Simple Shopping App, You can view the price of the book and add to cart',
    //     },
    //     {
    //       icon: <FiExternalLink />,
    //       title: 'Code : ',
    //       desc: '',
    //     },
    //     {
    //       icon: <FiExternalLink />,
    //       title: 'Preview : ',
    //       desc: '',
    //     },
    //     {
    //       icon: <FaCode />,
    //       title: 'Tech Used : ',
    //       desc: 'React js',
    //     },
    //   ],
    // },
    
    

  ];
  
  export const themes = [
    {
      id: 1,
      img: Theme1,
      color: 'hsl(252, 35%, 51%)',
    },
  
    {
      id: 2,
      img: Theme2,
      color: 'hsl(4, 93%, 54%)',
    },
  
    {
      id: 3,
      img: Theme3,
      color: 'hsl(271, 76%, 53%)',
    },
  
    {
      id: 4,
      img: Theme4,
      color: 'hsl(225, 73%, 57%)',
    },
  
    {
      id: 5,
      img: Theme5,
      color: 'hsl(43, 74%, 49%)',
    },
  
    {
      id: 6,
      img: Theme6,
      color: 'hsl(339, 81%, 66%)',
    },
  
    {
      id: 7,
      img: Theme7,
      color: 'hsl(80, 61%, 50%)',
    },
  
    {
      id: 8,
      img: Theme8,
      color: 'hsl(19, 96%, 52%)',
    },
  
    {
      id: 9,
      img: Theme9,
      color: 'hsl(88, 65%, 43%)',
    },
  
    {
      id: 10,
      img: Theme10,
      color: 'hsl(42, 100%, 50%)',
    },
  ];