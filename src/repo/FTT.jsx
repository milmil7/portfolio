// src/pages/FTT.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaClock, FaFolder, FaCodeBranch, FaTags, FaFileAlt, FaTerminal } from "react-icons/fa";

const features = [
    { icon: <FaClock />, title: "Snapshot Management", text: "Create, save, and manage filesystem snapshots." },
    { icon: <FaFolder />, title: "Rewind Functionality", text: "Restore the filesystem to a previous snapshot instantly." },
    { icon: <FaCodeBranch />, title: "Diff Comparison", text: "Compare two snapshots to see file differences." },
    { icon: <FaTags />, title: "Tagging", text: "Add labels to snapshots for quick retrieval." },
    { icon: <FaFileAlt />, title: "Status Checking", text: "Check the current filesystem status against the latest snapshot." },
    { icon: <FaTerminal />, title: "Logging", text: "View a log of all snapshots and changes." },
];

export default function FTT() {
    return (
        <div className="bg-base-200 text-base-content min-h-screen p-8">
            
            <section className="text-center mb-16">
                <motion.h1
                    className="text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Filesystem Time Travel (FTT)
                </motion.h1>
                <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
                    Snapshot. Rewind. Compare. Tag. A Rust-powered CLI tool to track and manage changes in your filesystem over time.
                </p>
                <div className="mt-6 space-x-4">
                    <a href="https://github.com/milmil7/ftt" target="_blank" rel="noreferrer" className="btn btn-primary">
                        View on GitHub
                    </a>
                    <a href="#installation" className="btn btn-outline">
                        Install
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
                <h2 className="text-3xl font-bold mb-4">Installation</h2>
                <div className="collapse collapse-plus bg-base-100 shadow-lg">
                    <input type="checkbox" />
                    <div className="collapse-title text-lg font-medium">Show installation steps</div>
                    <div className="collapse-content">
                        <p>Ensure you have Rust installed from <a className="link" href="https://www.rust-lang.org/">rust-lang.org</a>.</p>
                        <pre className="mt-4 bg-neutral text-neutral-content p-4 rounded-lg overflow-x-auto">
              <code>
                git clone &lt;repository-url&gt;{"\n"}
                  cd &lt;repository-directory&gt;{"\n"}
                  cargo build --release{"\n"}
                  ./target/release/ftt
              </code>
            </pre>
                    </div>
                </div>
            </section>

            
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Usage Commands</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { cmd: "ftt init <path>", desc: "Initializes the FTT system in the specified directory." },
                        { cmd: "ftt save <path>", desc: "Saves a snapshot of the current filesystem state." },
                        { cmd: "ftt log <path>", desc: "Displays a list of saved snapshots." },
                        { cmd: "ftt rewind <path> [--back <n>] [--tag <tag>]", desc: "Rewinds the filesystem to a previous snapshot." },
                        { cmd: "ftt diff <path> [--from <id>] [--to <id>]", desc: "Compares two snapshots and displays differences." },
                        { cmd: "ftt tag <path> --snapshot <id> --label <label>", desc: "Tags a snapshot for easier retrieval." },
                        { cmd: "ftt status <path>", desc: "Checks the current filesystem status against the latest snapshot." },
                    ].map((c, i) => (
                        <motion.div key={i} className="bg-base-100 shadow p-4 rounded-lg" whileHover={{ scale: 1.02 }}>
              <pre className="bg-neutral text-neutral-content p-2 rounded-lg mb-2 overflow-x-auto">
                <code>{c.cmd}</code>
              </pre>
                            <p>{c.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-4">File Structure</h2>
                <pre className="bg-neutral text-neutral-content p-4 rounded-lg overflow-x-auto">
{`.ftt/
 ├─ snapshots/
 ├─ blobs/
 ├─ index.json
 └─ tags.json`}
        </pre>
            </section>

            
            <footer className="text-center text-base-content/60 mt-16">
                <p>MIT License • Contributions Welcome</p>
            </footer>
        </div>
    );
}
