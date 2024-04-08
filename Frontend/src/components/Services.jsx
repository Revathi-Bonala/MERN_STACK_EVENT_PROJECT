import React from 'react'

const Services = () => {
  const services=[
   
    {
      id:1,
      url: "/bday.jpg",
      title:"Birthday Planning",
      },
      {
        id:2,
        url: "/wedding.jpg",
        title:"Anniversary Planning",
        },
        {
          id:3,
          url: "/camping.jpg",
          title:"Camping Trip Planning",
     },
     {
      id:4,
      url: "/gamenight.jpg",
      title:"Game Night planning",
      },
      {
        id:5,
        url: "/party.jpg",
        title:"Party Planning",
        },
        {
          id:6,
          url: "/wedding2.jpg",
          title:"Wedding Planning",
          },

  ];
  return (
    <>
    <div className='services container'>
      <h2>OUR SERVICES</h2>
      <div className="banner">
        {services.map((ele)=>{
          return(
            <div className="item" key={ele.id}>
              <h3>{ele.title}</h3>
              <img src={ele.url} alt={ele.title} />
            </div>
          );
        })}
      </div>
      
    </div>
    </>
  )
};

export default Services
