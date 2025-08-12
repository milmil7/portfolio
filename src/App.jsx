
import React, {createContext, useState} from "react";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Intro = () => (
    <section className="p-8 max-w-4xl mx-auto text-center">
      <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
      >
        Hey, I'm Milad!
      </motion.h1>
      <motion.p
          className="text-lg text-muted-foreground max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
      >
        I'm a passionate developer building cool stuff with Rust, React, and Tailwind.
        Here are some of my latest projects. Dive in!
      </motion.p>
    </section>
);

const TechStack = () => (
    <section className="p-8 max-w-4xl mx-auto">
      <motion.h2
          className="text-3xl font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
      >
        Tech Stack & Tools
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-6">
          <span className="h-12"> React</span>
          <span className="h-12"> Rust</span>
          <span className="h-12"> Tauri</span>
          <span className="h-12"> Tailwind</span>
        
      </div>
    </section>
);

const FeaturedProjects = () => {
  

  return (
      <section className="p-8 max-w-4xl mx-auto">

      </section>
  );
};

const ResumeSection = () => (
    <section className="p-8 max-w-4xl mx-auto text-center">
      <motion.h2
          className="text-3xl font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
      >
          Resume
      </motion.h2>
      <motion.p
          className="mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
      >
        View my up-to-date resume online.
      </motion.p>
      <div className="flex justify-center gap-4">

        <Link to="/resume" className="btn btn-primary">
          View Resume Online
        </Link>
      </div>
    </section>
);

const SocialLinks = () => (
    <section className="p-8 max-w-4xl mx-auto text-center">
      <motion.h2
          className="text-3xl font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
      >
        Connect with me
      </motion.h2>
      <div className="flex justify-center gap-6 text-3xl text-primary">
        <a
            href="https://github.com/milmil7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-secondary transition"
        >
          <FaGithub />
        </a>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
      </div>
    </section>
);

const AllProjectsGrid = ({ repos, loading }) => (
    <section className="p-8 max-w-6xl mx-auto">
      <motion.h2
          className="text-3xl font-semibold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
      >
        All Projects
      </motion.h2>

      {loading ? (
          <p className="text-center">Loading projects...</p>
      ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
                <motion.div
                    key={repo.id}
                    className="card bg-base-100 shadow-lg p-4 flex flex-col justify-between"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div>
                        <h3 className="text-xl font-medium">{repo.name}</h3>
                        <p className="text-sm text-accent">{repo.language || "Unknown"}</p>
                        <p className="text-sm mt-2">{repo.description || "No description"}</p>

                        <div className="mt-3 text-xs text-muted-foreground">
                            <p>⭐ Stars: {repo.stargazers_count}</p>
                            <p>🍴 Forks: {repo.forks_count}</p>
                            <p>🕒 Updated: {new Date(repo.updated_at).toLocaleDateString()}</p>
                            <p>📂 Size: {(repo.size / 1024).toFixed(2)} MB</p>
                            <p>📝 License: {repo.license ? repo.license.name : "None"}</p>
                        </div>
                    </div>

                    <div className="mt-4 flex gap-2">
                        <Link
                            to={`/${repo.name}`}
                            className="btn btn-sm btn-primary flex-1"
                        >
                            View
                        </Link>
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-outline flex-1"
                        >
                            GitHub
                        </a>
                    </div>
                </motion.div>

            ))}
          </div>
      )}
    </section>
);

const Home = () => {
  const [design, setDesign] = useState(localStorage.getItem("design") || "neubrutal")
    useEffect(() => {
        document.querySelector("html").setAttribute("data-design", design);
        localStorage.setItem("design", design);
    }, [design]);
  const { theme, setTheme } = useContext(ThemeContext);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/milmil7/repos?sort=updated")
        .then((res) => res.json())
        .then((data) => {
          setRepos(data);
          setLoading(false);
        })
        .catch((err) => console.error("Error fetching repos:", err));
  }, []);

  return (
      <div className="min-h-screen w-full bg-base-200 text-base-content transition-colors">
        <header className="p-4 flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold">milmil7</h1>
          <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="select select-bordered max-w-xs"
          >
            <option>neubrutal</option>
            <option>light</option>
            <option>dark</option>
            <option>cupcake</option>
            <option>retro</option>
            <option>cyberpunk</option>
            <option>bumblebee</option>
            <option>emerald</option>
            <option>corporate</option>
            <option>synthwave</option>
            <option>valentine</option>
            <option>halloween</option>
            <option>garden</option>
            <option>forest</option>
            <option>aqua</option>
            <option>lofi</option>
            <option>pastel</option>
            <option>fantasy</option>
            <option>wireframe</option>
            <option>black</option>
            <option>luxury</option>
            <option>dracula</option>
            <option>cmyk</option>
            <option>autumn</option>
            <option>business</option>
            <option>acid</option>
            <option>lemonade</option>
            <option>night</option>
            <option>coffee</option>
            <option>winter</option>
            <option>dim</option>
            <option>nord</option>
            <option>sunset</option>
            <option>caramellatte</option>
            <option>abyss</option>
            <option>silk</option>
          </select>
            <select
              value={design}
              onChange={(e) => setDesign(e.target.value)}
              className="select select-bordered max-w-xs"
          >
            <option>normal</option>
            <option>neubrutal</option>
            <option>material</option>
            <option>morphism</option>
            <option>flat</option>
          </select>
        </header>

        <main>
          <Intro />
          <TechStack />
          
          <AllProjectsGrid repos={repos} loading={loading} />
          <ResumeSection />
          <SocialLinks />
        </main>
      </div>
  );
};

export default Home;





export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
  );
};
