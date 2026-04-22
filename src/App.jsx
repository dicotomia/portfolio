import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png' // Tu foto o ilustración
import './App.css'

function App() {
  return (
    <>
      {/* SECCIÓN PRINCIPAL / HERO */}
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="Ana" />
          <div className="tech-stack">
            <img src={reactLogo} className="framework" alt="React logo" />
            <img src={viteLogo} className="vite" alt="Vite logo" />
          </div>
        </div>
        
        <div>
          <h1>Hola, soy Ana</h1>
          <p>Desarrolladora Frontend en proceso 🚀</p>
          <p>Bienvenido/a a mi portfolio personal construido con React.</p>
        </div>
      </section>

      <div className="ticks"></div>

      {/* SECCIÓN DE PROYECTOS (Reutilizando el ID que ya tenías) */}
      <section id="next-steps">
        <div id="projects">
          <h2>Mis Proyectos</h2>
          <p>Aquí puedes ver en qué he estado trabajando:</p>
          <ul>
            <li>
              <a href="https://github.com/tu-usuario" target="_blank" rel="noreferrer">
                📂 Proyecto 1 - Descripción breve
              </a>
            </li>
            <li>
              <a href="https://github.com/tu-usuario" target="_blank" rel="noreferrer">
                📂 Proyecto 2 - Descripción breve
              </a>
            </li>
          </ul>
        </div>

        {/* SECCIÓN DE CONTACTO / REDES */}
        <div id="social">
          <h2>Contacto</h2>
          <p>¿Hablamos? Encuéntrame en:</p>
          <ul>
            <li><a href="https://github.com/tu-usuario" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <footer style={{ textAlign: 'center', padding: '2rem' }}>
        <p>© {new Date().getFullYear()} - Hecho con ❤️ por Ana</p>
      </footer>
    </>
  )
}

export default App