import styles from './styles/page.module.css'

export default function Home() {
  return (
    <div className={styles.hola}>
      <h1>Hey! I’m Pablo García Front-End Web Developer</h1>

      foto

      <div className="principal-cart">
        <p>I code mainly with <span>TypeScript</span>, <span>JavaScript</span>, <span>Angular</span> and <span>Next.js</span></p>
        <p>I&apos;m from <span>Madrid, Spain</span> where I&apos;m living today, and before I&apos;ve also lived in San Francisco California; Sao Paulo, Brazil and Lyon, France</p>
        <p>In a very short time I have managed to learn what is necessary to make an application from start to finish and I am looking for an Angular-React project where I can develop my skills</p>
        <p>I like hearing from people, so <span>say hello on <a href="https://www.linkedin.com/in/prgarcia" target="_blank">LinkedIn</a></span>. You can write me in English, Portuguese and Spanish</p>
        <p>Sincerely</p>
        <p>Pablo García</p>
        <p><time></time></p>
      </div>

      <h2>Specialties</h2>
      <div>
        <pre title="TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.">TypeScript</pre>
        <pre title="JavaScript is a lightweight, interpreted, object-oriented program language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well. It is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles. JavaScript runs on the client and server sides of the web, which can be used to design/program how the web pages behave on the occurrence of an event. JavaScript is a powerful scripting language, widely used for controlling web page behaviour.">Javascript ES6</pre>
        <pre title="Angular is a Front-End framework that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop.">Angular</pre>
        <pre title="Next.js is a framework providing React-based web applications with server-side rendering and static website generation. Where traditional React apps can only render their content in the client-side browser, Next.js extends this functionality to include applications rendered on the server-side.">Next.js</pre>
        <pre title="React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded. However, fetching data is only the beginning of what happens on a web page, which is why complex React applications usually require the use of additional libraries for state management, routing, and interaction with an API.">React</pre>
        <pre title="Sass (Syntactically Awesome Style Sheets) is a CSS extension that enables you to use things like variables, nested rules, inline imports and more. It also helps to keep things organised and allows you to create style sheets faster.">SASS</pre>
        <pre title="Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.">Node.js</pre>
        <pre title="Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.">Express</pre>
        <pre title="MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need.">MongoDB</pre>
        <pre title="GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.">GraphQL</pre>
        <pre title="Firebase es una plataforma para el desarrollo de aplicaciones web y aplicaciones móviles ubicada en la nube, integrada con Google Cloud Platform, que usa un conjunto de herramientas para la creación y sincronización de proyectos que serán dotados de alta calidad, haciendo posible el crecimiento del número de usuarios y dando resultado también a la obtención de una mayor monetización.">Firebase</pre>
        <pre title="Responsive Web design is the approach that suggests that design and development should respond to the user’s behavior and environment based on screen size, platform and orientation.">Responsive Web Design</pre>
        <pre title="Scrum is an agile project management methodology or framework used primarily for software development projects with the goal of delivering new software capability every 2-4 weeks.">Scrum Agile Methodology</pre>
      </div>

      <h2>Contact</h2>
      <address>
        <h1>Pablo García</h1>
        <h2>Front-End Web developer</h2>
        <h3>Madrid, Spain, Europe</h3>
      </address>
      <div>
        <a className="btn btn--primary" href="https://www.linkedin.com/in/prgarcia" target="_blank">LinkedIn</a>
        <a className="btn btn--secondary" href="https://github.com/pablorgarcia" target="_blank">GitHub</a>
      </div>
    </div>
  )
}
