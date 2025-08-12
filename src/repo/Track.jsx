
import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaTerminal, FaCogs, FaPlug, FaCode, FaHeart } from "react-icons/fa";

const features = [
    { icon: <FaBolt />, title: "Blazing Fast", text: "Minimal syntax, maximum speed, written in Rust for performance and safety." },
    { icon: <FaTerminal />, title: "Interactive Shell", text: "Beautiful ANSI UI with a smooth, terminal-based experience." },
    { icon: <FaPlug />, title: "Zero-Config Plugins", text: "Drop `.track` files into `COMMANDS/` and start using them immediately." },
    { icon: <FaCogs />, title: "Extensible Commands", text: "Create your own commands with simple `.track` scripts." },
    { icon: <FaCode />, title: "Minimal Syntax", text: "Designed for clarity and expressiveness with minimal boilerplate." },
    { icon: <FaHeart />, title: "Open Source", text: "Built with ❤️ in Rust — contributions are always welcome." },
];

export default function Track() {
    return (
        <div className="bg-base-200 text-base-content min-h-screen p-8">
            
            <section className="text-center mb-16">
                <motion.h1
                    className="text-5xl font-bold mb-4 flex justify-center items-center gap-3"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    🚄 Track Programming Language
                </motion.h1>
                <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
                    A blazing-fast, terminal-based scripting language inspired by train tracks —
                    where every command flows straight and smooth.
                </p>
                <div className="mt-6 space-x-4">
                    <a href="https://github.com/milmil7/Track" target="_blank" rel="noreferrer" className="btn btn-primary">
                        View on GitHub
                    </a>
                    <a href="#installation" className="btn btn-outline">
                        Get Started
                    </a>
                </div>
            </section>

            
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        className="card bg-base-100 p-6 shadow-lg"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="text-4xl mb-4 text-primary">{f.icon}</div>
                        <h3 className="font-bold text-xl mb-2">{f.title}</h3>
                        <p>{f.text}</p>
                    </motion.div>
                ))}
            </section>

            
            <section id="installation" className="mb-16">
                <h2 className="text-3xl font-bold mb-4">Getting Started</h2>
                <div className="collapse collapse-plus bg-base-100 shadow-lg">
                    <input type="checkbox" />
                    <div className="collapse-title text-lg font-medium">Show installation steps</div>
                    <div className="collapse-content">
            <pre className="bg-neutral text-neutral-content p-4 rounded-lg overflow-x-auto">
              <code>
                git clone https://github.com/milmil7/Track.git{"\n"}
                  cd Track{"\n"}
                  cargo build --release{"\n"}
                  ./target/release/track
              </code>
            </pre>
                    </div>
                </div>
            </section>

            
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-4">Command Plugin System</h2>
                <p className="mb-4">
                    Track supports a zero-config plugin system:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>All command definitions go in the <code>COMMANDS/</code> folder.</li>
                    <li>Each <code>.track</code> file defines a single command.</li>
                    <li>The Track Shell loads them automatically on startup.</li>
                </ul>
                <p>To add your own command, just drop your <code>.track</code> file into <code>COMMANDS/</code>. Done.</p>
            </section>

            
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-4">Example Command File</h2>
                <pre className="bg-neutral text-neutral-content p-4 rounded-lg overflow-x-auto">
          <code>
{`COMMAND greet {
    print("Hello from Track!");
}`}
          </code>
        </pre>
            </section>

            
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-4">Contributing</h2>
                <ol className="list-decimal pl-6">
                    <li>Fork it 💻</li>
                    <li>Create your feature branch <code>git checkout -b my-new-feature</code></li>
                    <li>Commit your changes <code>git commit -am 'Add something'</code></li>
                    <li>Push to the branch <code>git push origin my-new-feature</code></li>
                    <li>Create a new Pull Request 🚀</li>
                </ol>
            </section>

            
            <footer className="text-center text-base-content/60 mt-16">
                <p>Made with ❤️ in Rust by <a className="link" href="https://github.com/milmil7">@milmil7</a></p>
            </footer>
        </div>
    );
}
