import "../stylesheets/About.css";

const About = () => {
    return (
        <div className="about">
            <h1>About</h1>
            <p> This application was developed as part of the <span>Soy Henry</span> bootcamp, 
                showcasing the skills and technologies acquired during the program. 
                The frontend was built using React library, while the 
                backend leverages Express for handling API requests. To ensure a 
                visually appealing and smooth user experience, the styling and animations
                are crafted using CSS and javaScript.</p> 
                <p>The login form is controlled with JavaScript, ensuring seamless integration 
                with the Express-based API. Dive into the app to explore my newly acquired skills of 
                React, Express, CSS, and HTML, all brought together through the learning 
                experience at <span>Soy Henry</span>.

                <span className="signature">Fernando Bravo</span>
            </p>
        </div>
    )
};

export default About;