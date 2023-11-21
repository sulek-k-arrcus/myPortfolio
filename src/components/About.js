import React from "react";

export default function About() {
    return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Sulek.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
          ●	Over 10 years of extensive experience in designing User Interface (UI) applications and professional web applications and mobile applications using HTML 4.0/5, CSS2/CSS3, DOM, JavaScript, JSON, and React.js. 
          <br/>
●	Experience working with domains such as finance, healthcare, and mobile payments.<br/> 
●	Excellent knowledge of all phases of SDLC like Requirement Analysis, Implementation and Maintenance, and extensive experience with Agile and SCRUM. 
<br/>
●	Hands-on experience in developing web pages using HTML/HTML5, CSS/CSS3, SASS, JavaScript, React, jQuery, Responsive Web Design (RWD), and Bootstrap. <br/>
●	Proficient in mapping business requirements, technical documentation, design, development and troubleshooting for Application Development (using React) and in other framework applications. 
<br/>
●	Built components using JavaScript and UI Services to consume Rest Services using component-based architecture provided by React.<br/>
●	Develop efficient user-friendly libraries for JavaScript applications.<br/>
●	Involved in writing application-level code to interact with APIs and RESTful Web Services using AJAX, and JSON. Experience in working with components, modules and services using React. 
<br/>
●	Experience in Version Control systems like GIT source code version management.<br/>
●	Good understanding and hands on experience in MUI React component Library for UI design.
<br/>
●	Good understanding of the flow of processes, requirements gathering, designing use case scenarios, high level and low-level design wireframes, coding, code reviews, code quality, unit testing, version control and post-production. <br/>
●	Expertise in using IDE tools such as Notepad ++, Eclipse, and Sublime Text Editor.<br/>
●	Responsible for checking cross browser compatibility using different browsers like Google Chrome, Internet Explorer, Safari and Mozilla Firefox. 
<br/>
●	Willingness to learn new front-end development technologies and concepts and promptly acquire new skills with a strong awareness of industry development and the evolution of programming solutions.<br/>
●	Ability to work effectively while working as a team member as well as individually. <br/>
●	A self-starter with a positive attitude, good interpersonal and communication skills, excellent time management skills and is effective in attaining project goals inside assigned deadlines. 
</p>

        
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}