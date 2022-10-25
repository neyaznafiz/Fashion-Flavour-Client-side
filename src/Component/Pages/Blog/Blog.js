import React from 'react';

const Blog = () => {
  return (
    <div className='mt-16 bg-yellow-600 w-screen'>

      <div className='text-center mt-10 lg:mt-28'>
        <h2 className='text-4xl font-serif font-semibold' data-aos="zoom-in">EXPLORE SOME QUESTION ANSWER</h2>
      </div>

      <div className='form-shadow mx-3 lg:mx-20 mt-10 lg:mb-36 lg:p-20 grid grid-cols-1' data-aos="zoom-in">

        <div className="accordion " id="accordionExample">
          <div className="accordion-item form-shadow" data-aos="flip-down" data-aos-delay="200">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button text-xl font-semibold text-zinc-800" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
              >
                <span className='text-zinc-800 text-xl font-semibold'> Difference between javascript and nodejs.</span>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show " aria-labelledby="headingOne" data-mdb-parent="#accordionExample">
              <div className="accordion-body text-xl text-gray-700">
                <strong>JavaScript is a programming language</strong> which runs in web browsers. JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome). Mainly use for any client-side activity for a web application. <br />
                Whereas <strong>Node.js is an interpreter or running environment for JavaScript,</strong> it's a useful library that JavaScript programs can use separately. It's mainly used for, like creating or executing a shell script or accessing any hardware-specific information, or running any backend job. Node JS only runs in a V8 engine and a javascript program is written under this Node JS.
              </div>
            </div>
          </div>
          <div className="accordion-item form-shadow" data-aos="flip-down" data-aos-delay="200">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed text-xl font-semibold text-zinc-800" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"
              >
                <span className='text-zinc-800 text-xl font-semibold'>Differences between sql and nosql databases.</span>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-mdb-parent="#accordionExample">
              <div className="accordion-body text-xl text-gray-700">
                SQL is a standard language for accessing and manipulating databases. NoSQL Database stands for a non-SQL database. NoSQL database doesn't use table to store the data like relational database. <br />
                <br />
                <strong>SQL</strong> <br />
                SQL databases are relational,it use structured query language and have a predefined schema.SQL databases are vertically scalable, it's table-based databases, SQL databases are better for multi-row transactions. <br />
                <br />
                <strong>NoSQL</strong> <br />
                NoSQL databases are non-relational.It's have dynamic schemas for unstructured data.It's a horizontally scalable databases. NoSQL databases are document, key-value, graph, or wide-column stores. NoSQL is better for unstructured data like documents or JSON.
              </div>
            </div>
          </div>
          <div className="accordion-item form-shadow" data-aos="flip-down" data-aos-delay="200">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed text-xl font-semibold text-zinc-800" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"
              >
                <span className='text-zinc-800 text-xl font-semibold'>What is the purpose of jwt and how does it work ?</span>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-mdb-parent="#accordionExample">
              <div className="accordion-body text-xl text-gray-700">
                <strong>JWT (JavaScript Object Notation), or JSON Web Token,</strong> is an open standard used to share security information between client and server, in short JWT is used as a secure way to authenticate users and share information. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
              </div>
            </div>
          </div>
          <div className="accordion-item form-shadow" data-aos="flip-down" data-aos-delay="200">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed text-xl font-semibold text-zinc-800" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"
              >
                <span className='text-zinc-800 text-xl font-semibold'>When should you use nodejs and when should you use mongodb ?</span>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-mdb-parent="#accordionExample">
              <div className="accordion-body text-xl text-gray-700">
                <p>.................................................</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Blog;




/*
JWT (JavaScript Object Notation), or JSON Web Token, is an open standard used to share security information between client and server, in short JWT is used as a secure way to authenticate users and share information. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
*/