
import React from "react";
import { motion } from "framer-motion";
import {
    FaTasks,
    FaPause,
    FaTachometerAlt,
    FaRedo,
    FaFolderOpen,
    FaCopy,
    FaPalette,
    FaSearch,
    FaPlay,
    FaWindowMinimize
} from "react-icons/fa";

const features = [
    { icon: <FaTasks />, title: "Queue-based Download Management", text: "Organize and prioritize downloads with full control over order and concurrency." },
    { icon: <FaPause />, title: "Pause / Resume / Dequeue", text: "Control any download on demand. Resume interrupted downloads anytime." },
    { icon: <FaTachometerAlt />, title: "Speed Limiting", text: "Set global speed caps to save bandwidth." },
    { icon: <FaRedo />, title: "Custom Retry Logic", text: "Automatic error recovery with configurable attempts and delays." },
    { icon: <FaFolderOpen />, title: "Download Path Selection", text: "Choose where your files are saved. Set and forget." },
    { icon: <FaCopy />, title: "File Conflict Resolution", text: "Resume, overwrite, or rename when files already exist." },
    { icon: <FaPalette />, title: "Multiple UI Themes", text: "Brutalist, Glass, Morph, Anime, Material — pick your style." },
    { icon: <FaSearch />, title: "Search & Filter Downloads", text: "Quickly find past downloads." },
    { icon: <FaPlay />, title: "Auto Start on System Boot", text: "Optional autostart for convenience." },
    { icon: <FaWindowMinimize />, title: "System Tray Support", text: "Minimize to tray instead of closing." },
];

export default function MadByte() {
    return (
        <div className="bg-base-200 text-base-content min-h-screen p-8">
            
            <section className="text-center mb-16">
                <motion.h1
                    className="text-6xl font-bold mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    🚀 MadByte Download Manager
                </motion.h1>
                <p className="text-lg text-base-content/80 max-w-3xl mx-auto">
                    A modern, fast, and beautifully themed download manager built with{" "}
                    <a href="https://tauri.app" className="link" target="_blank" rel="noreferrer">
                        Tauri
                    </a>
                    , React, and Rust. Control your downloads with queueing, retry logic, multiple themes, and more.
                </p>
                <p className="italic mt-4 text-base-content/70">
                    Your downloads, your way.
                </p>
                <div className="mt-6 space-x-4">
                    <a href="https://github.com/milmil7/madbyte" target="_blank" rel="noreferrer" className="btn btn-primary">
                        View on GitHub
                    </a>
                    <a href="#getting-started" className="btn btn-outline">
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

            
            <section id="getting-started" className="mb-16">
                <h2 className="text-3xl font-bold mb-4">🚀 Getting Started</h2>

                <h3 className="text-xl font-semibold mb-2">🧰 Prerequisites</h3>
                <ul className="list-disc pl-6 mb-4">
                    <li><a className="link" href="https://nodejs.org/">Node.js</a> (v18+)</li>
                    <li><a className="link" href="https://www.rust-lang.org/tools/install">Rust</a></li>
                    <li><a className="link" href="https://tauri.app/v1/guides/getting-started/prerequisites">Tauri CLI</a></li>
                </ul>

                <h3 className="text-xl font-semibold mb-2">🔧 Setup</h3>
                <pre className="bg-neutral text-neutral-content p-4 rounded-lg overflow-x-auto">
          <code>
            git clone https://github.com/milmil7/madbyte.git{"\n"}
              cd madbyte{"\n"}
              npm install{"\n"}
              npm run tauri dev
          </code>
        </pre>

                <h3 className="text-xl font-semibold mt-6 mb-2">🛠️ Build</h3>
                <pre className="bg-neutral text-neutral-content p-4 rounded-lg overflow-x-auto">
          <code>
            npm run tauri build --release
          </code>
        </pre>
                <p>Output will be in <code>src-tauri/target/release/bundle</code>.</p>
            </section>

            
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-4">💡 Tech Stack</h2>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Tauri — Lightweight native shell</li>
                    <li>React — UI layer</li>
                    <li>Rust — Superfast backend</li>
                    <li>Custom Theme Engine — Themes via JSON config</li>
                </ul>
            </section>

            
            <footer className="text-center text-base-content/60 mt-16">
                <p>MIT License © 2025 <a className="link" href="https://github.com/milmil7">@milmil7</a></p>
                <p className="italic mt-2">MadByte — Your downloads, your way.</p>
            </footer>
        </div>
    );
}
