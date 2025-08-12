// src/pages/CrowCLI.jsx
import React from "react";
import { motion } from "framer-motion";
import {
    FaTerminal,
    FaKeyboard,
    FaLock,
    FaCode,
    FaPalette,
    FaBolt,
    FaFeather
} from "react-icons/fa";

const features = [
    { icon: <FaTerminal />, title: "HTTP Methods", text: "Send requests with GET, POST, PUT, DELETE, PATCH — all from your terminal." },
    { icon: <FaKeyboard />, title: "Interactive TUI", text: "Navigate tabs with keyboard shortcuts — fast and intuitive." },
    { icon: <FaLock />, title: "Authorization Support", text: "Bearer and Basic tokens made easy." },
    { icon: <FaCode />, title: "Custom Headers & Params", text: "Quickly add headers and query parameters." },
    { icon: <FaPalette />, title: "Beautiful Layout", text: "TUI designed with ratatui for a rich, modern terminal look." },
    { icon: <FaBolt />, title: "Async & Fast", text: "Powered by tokio and reqwest for speed." },
];

const controls = [
    ["← / →", "Switch between method & sections"],
    ["↑ / ↓", "Move between sections"],
    ["Tab", "Switch between input fields"],
    ["Enter", "Send the request"],
    ["Esc", "Exit"],
    ["Backspace", "Delete character in input"],
];

export default function CrowCLI() {
    return (
        <div className="bg-base-200 text-base-content min-h-screen p-8">
            
            <section className="text-center mb-16">
                <motion.h1
                    className="text-5xl font-bold mb-4 flex items-center justify-center gap-3"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    🪶 crow-cli
                </motion.h1>
                <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
                    A modern, interactive, terminal-based HTTP client written in Rust using{" "}
                    <a className="link" href="https://github.com/ratatui-org/ratatui" target="_blank" rel="noreferrer">
                        ratatui
                    </a>
                    . Think of it as a fast, keyboard-driven alternative to Postman or Insomnia — right in your terminal.
                </p>
                <p className="mt-4 text-base-content/70">
                    Made with ❤️ by{" "}
                    <a className="link" href="https://github.com/milmil7">@milmil7</a>
                </p>
                <div className="mt-6 space-x-4">
                    <a href="https://github.com/milmil7/crow-cli" target="_blank" rel="noreferrer" className="btn btn-primary">
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
                        <h3 className="font-semibold mb-2">📦 Prerequisites</h3>
                        <ul className="list-disc pl-6 mb-4">
                            <li>Rust (1.74+ recommended)</li>
                            <li>Cargo</li>
                        </ul>
                        <h3 className="font-semibold mb-2">🔧 Installation</h3>
                        <pre className="bg-neutral text-neutral-content p-4 rounded-lg overflow-x-auto">
              <code>
                git clone https://github.com/milmil7/crow-cli.git{"\n"}
                  cd crow-cli{"\n"}
                  cargo build --release
              </code>
            </pre>
                        <p className="mt-2">Binary location: <code>target/release/crow-cli</code></p>
                        <h3 className="font-semibold mt-4 mb-2">🦅 Launch</h3>
                        <pre className="bg-neutral text-neutral-content p-4 rounded-lg overflow-x-auto">
              <code>cargo run --release</code>
            </pre>
                    </div>
                </div>
            </section>

            
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-4">Controls</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full bg-base-100 shadow-lg">
                        <thead>
                        <tr>
                            <th className="bg-base-300">Key</th>
                            <th className="bg-base-300">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {controls.map(([key, action], i) => (
                            <tr key={i}>
                                <td className="font-mono">{key}</td>
                                <td>{action}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </section>

            
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-4">App Sections</h2>
                <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Method:</strong> Choose HTTP method</li>
                    <li><strong>URL:</strong> Enter full request URL</li>
                    <li><strong>Params:</strong> Add query parameters</li>
                    <li><strong>Headers:</strong> Add custom headers</li>
                    <li><strong>Auth:</strong> Bearer or Basic tokens</li>
                    <li><strong>Body:</strong> JSON payload</li>
                    <li><strong>Response:</strong> View server's response</li>
                </ul>
            </section>

            
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-4">Roadmap</h2>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Request history</li>
                    <li>Save/load requests</li>
                    <li>Export to curl or Postman collection</li>
                    <li>Auto-completion for headers and common fields</li>
                    <li>Response headers and status line view</li>
                    <li>Environment/variables system like Postman</li>
                </ul>
            </section>

            
            <footer className="text-center text-base-content/60 mt-16">
                <p>MIT License © 2025 <a className="link" href="https://github.com/milmil7">@milmil7</a></p>
                <p>Thanks to open-source projects: ratatui, crossterm, reqwest</p>
            </footer>
        </div>
    );
}
