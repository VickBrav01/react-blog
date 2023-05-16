import Header from "./components/header";
import Aside from "./components/aside";
import Content from "./components/content";
import "./app.css";

function App() {
  const MainContent = [
    {
      title: "React vs Angular",
      content: `
          React and Angular are both powerful frameworks for building web
          applications, but they have different approaches and philosophies.
          React is a JavaScript library that focuses on the view layer,
          providing a lightweight and flexible solution for creating UI
          components. It emphasizes simplicity, reusability, and a virtual DOM
          approach for efficient rendering. In contrast, Angular is a
          comprehensive framework that offers a complete solution for building
          large-scale applications. It utilizes TypeScript, provides a
          full-featured set of tools, and follows a more opinionated
          architecture with features like dependency injection and two-way data
          binding. Choosing between React and Angular depends on the specific
          project requirements, team expertise, and development preferences.
          React offers more flexibility and is suitable for smaller to
          medium-sized projects, while Angular is better suited for large-scale
          applications that require a structured and opinionated framework.
        `,
      Time: "0100Hrs",
    },
    {
      title: "Javascript vs Ruby",
      content: `
          JavaScript and Ruby are both popular programming languages, but they
          have distinct characteristics and use cases. JavaScript is a versatile
          language that runs in web browsers and on servers. It is primarily
          used for front-end development, allowing you to create interactive and
          dynamic web pages. javascripts strength lies in its wide adoption,
          vast ecosystem of libraries and frameworks, and its ability to handle
          asynchronous programming with features like Promises and async/await.
          On the other hand, Ruby is a general-purpose language known for its
          simplicity and developer-friendly syntax. Ruby prioritizes readability
          and ease of use, making it an excellent choice for beginners and for
          rapid application development.
        `,
      Time: "2300Hrs",
    },
    {
      title: "Web3 vs Web2",
      content: `
          Web3 and Web2 represent two different generations of the internet with
          distinct characteristics and philosophies. Web2, the current state of
          the web, is characterized by centralized services, limited user
          interactivity, and one-way information flow. It focuses on content
          consumption and is built around platforms like social media and
          e-commerce. On the other hand, Web3 represents a vision for a more
          decentralized, user-centric, and open web. It leverages technologies
          such as blockchain, decentralized networks, and smart contracts to
          enable peer-to-peer interactions, data ownership, and the development
          of decentralized applications (DApps). Web3 aims to empower users,
          promote privacy, and redefine trust in digital interactions. It
          emphasizes user control, security, and the ability to create and
          interact with decentralized systems. While Web2 is the current
          dominant model, Web3 holds the potential to revolutionize how we
          interact with the internet and reshape various industries.`,
      Time: "1500Hrs",
    },
    {
      title: "C++ vs C#",
      content: `
          C++ and C# are both powerful programming languages, but they have
            different origins, uses, and features. C++ is a low-level language
            known for its performance, flexibility, and direct hardware access. It
            is commonly used for system programming, game development, and other
            performance-critical applications. C++ offers manual memory management
            and supports features like pointers, which provide fine-grained
            control but also require careful handling. On the other hand, C# is a
            high-level language developed by Microsoft. It is part of the .NET
            framework and offers a more modern, managed code environment. C# is
            widely used for Windows application development, web development, and
            game development using platforms like Unity.`,
      Time: "2100Hrs",
    },
  ];
  return (
    <div>
      <header className="nav-bar">
        <Header className="nav-content"></Header>
      </header>
      <main className="main">
        <div className="main-content">
          <Content
            title={MainContent[0].title}
            Content={MainContent[0].content}
            time={MainContent[0].Time}
          ></Content>
          <Content
            title={MainContent[1].title}
            Content={MainContent[1].content}
            time={MainContent[1].Time}
          ></Content>
          <Content
            title={MainContent[2].title}
            Content={MainContent[2].content}
            time={MainContent[2].Time}
          ></Content>
          <Content
            title={MainContent[3].title}
            Content={MainContent[3].content}
            time={MainContent[3].Time}
          ></Content>
        </div>
        <div className="main-aside">
          <Aside title={MainContent[0].title}></Aside>
          <Aside title={MainContent[1].title}></Aside>
          <Aside title={MainContent[2].title}></Aside>
          <Aside title={MainContent[3].title}></Aside>
        </div>
      </main>
    </div>
  );
}

export default App;
