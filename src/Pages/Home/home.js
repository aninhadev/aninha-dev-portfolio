import Nav from "../component/nav";
import "../style/home.css";

function Home() {
  return (
    <div>
      <Nav />
      <div className="home-page">
        <div className="card-about">
          <h3>olá, me chamo Ana Maria bem vinda ao meu site!</h3>
          <p>
            Sou Desenvolvedora Front, atuo com desenvolvimento front-end a{" "}
            <span>1 ano</span>
          </p>
          <section>
            <p>Skills</p>
            <div className="skills">

              <div className="">
                <h3>Hard Skill</h3>
                <ul>
                  <li>React</li>
                  <li>React</li>
                  <li>React</li>
                  <li>React</li>
                </ul>
              </div>
              <div>
                <h3>Soft Skill</h3>
                <ul>
                  <li>React</li>
                  <li>React</li>
                  <li>React</li>
                  <li>React</li>
                </ul>
              </div>
            </div>
          </section>
          <div>
            <p>contato</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
