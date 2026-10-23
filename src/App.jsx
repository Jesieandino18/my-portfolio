
import "./style.css";

function App() {
  return (
    <div className="portfolio">
      {/* Welcome Section */}
      <section className="hero">
        <h1>My Portfolio</h1>
        <p>Welcome to my personal portfolio!</p>
        <p className="subtitle">
          Student | Web Development Enthusiast
        </p>
      </section>

      {/* About Me Section */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          Hello! My name is Andino Jesie. I am a student
          who is interested in technology and web development.
          I enjoy learning new things and improving my skills
          in creating simple and useful websites.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2>My Skills</h2>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Problem Solving</span>
          <span>Teamwork</span>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section">
        <h2>My Achievements</h2>

        <div className="achievements">
          <div className="achievement-card">
            <div className="achievement-icon">🏆</div>
            <h3>Web Development</h3>
            <p>
              Created my first simple website using HTML
              and CSS.
            </p>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">💻</div>
            <h3>React Project</h3>
            <p>
              Learned the basics of React and created
              my own personal portfolio.
            </p>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">📚</div>
            <h3>Continuous Learning</h3>
            <p>
              Improved my programming skills by practicing
              and learning new technologies.
            </p>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">🤝</div>
            <h3>Teamwork</h3>
            <p>
              Developed my communication and teamwork
              skills through school projects.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>
          © 2026 Andino Jesie | My Portfolio
        </p>
      </footer>
    </div>
  );
}

export default App;
