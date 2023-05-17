import Nav from '../component/nav';

function About() {
  return (
    <div className="App">
      <Nav />
      
      <h1>Aninha <span>dev</span></h1>
      <div className='aboutMe'>
        <img src={imagemplace} />
        <div>
          <h2> <span>Sobre</span></h2>
          <p>
            Meu nome é Ana Maria e sou uma programadora Front-end desenvolvo soluções inovadoras e atraentes para a web. Com experiência na área, tenho um amplo conhecimento em HTML, CSS e JavaScript, além de outras tecnologias e framework como React, Tailwind, Git e Github.

            Desde o início da minha carreira, tenho me dedicado a criar interfaces de usuário elegantes e eficientes, que oferecem a melhor experiência possível ao usuário. Sou uma profissional altamente criativa e comprometida, que adora trabalhar em equipe e colaborar com outras áreas, como designers e desenvolvedores back-end.

            Além da minha paixão pela programação, também estou sempre buscando aprender e me atualizar sobre as tendências mais recentes em design e tecnologia. Isso me permite oferecer as melhores soluções e garantir que os projetos que participo estejam sempre alinhados com as expectativas do cliente e com as necessidades do mercado.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
