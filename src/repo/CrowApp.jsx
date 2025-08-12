// src/pages/CrowApp.jsx
import React from "react";
import { motion } from "framer-motion";
import {
    FaBolt,
    FaMoon,
    FaGlobe,
    FaFolderOpen,
    FaExchangeAlt,
    FaCode,
    FaEye,
    FaChartLine,
    FaBox,
    FaTable,
    FaLock
} from "react-icons/fa";

const features = [
    { icon: <FaBolt />, title: "Tauri-native Performance", text: "Tiny memory usage, instant startup." },
    { icon: <FaMoon />, title: "Dark Mode", text: "Hacker-themed UI with custom theming." },
    { icon: <FaGlobe />, title: "Request Builder", text: "Full control over GET/POST/PUT/PATCH/DELETE requests." },
    { icon: <FaFolderOpen />, title: "Collections", text: "Organize, tag, and save requests for later." },
    { icon: <FaExchangeAlt />, title: "Environment Variables", text: "Manage {{base_url}}, {{token}}, and more." },
    { icon: <FaCode />, title: "Pre-request & Test Scripts", text: "Chain logic using JavaScript (QuickJS/Deno)." },
    { icon: <FaEye />, title: "Response Viewer", text: "Render JSON/XML beautifully, view headers, cookies, and timing." },
    { icon: <FaChartLine />, title: "Data Visualizer", text: "Chart trends and performance with Recharts." },
    { icon: <FaBox />, title: "Offline Mode", text: "Everything stored locally; zero internet needed." },
    { icon: <FaTable />, title: "Table Mode", text: "View JSON as dynamic tables with sorting and filtering." },
    { icon: <FaLock />, title: "Private by Default", text: "No telemetry, no cloud sync, no account." },
];

export default function CrowApp() {
    return (
        <div className="bg-base-200 text-base-content min-h-screen p-8">
            
            <section className="text-center mb-16">
                <motion.h1
                    className="text-6xl font-bold mb-4 flex items-center justify-center gap-3"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    𓅂 Crow
                </motion.h1>
                <p className="text-lg text-base-content/80 max-w-3xl mx-auto">
                    A fast, offline-first, dark-themed API client built with{" "}
                    <a className="link" href="https://tauri.app" target="_blank" rel="noreferrer">
                        Tauri
                    </a>{" "}
                    — for developers who prefer silence, speed, and full control.
                </p>
                <p className="mt-4 text-base-content/70 max-w-2xl mx-auto italic">
                    Crow is a lightweight Postman alternative designed for hackers, villains, and API snipers. No bloat. No cloud sync. Just you, the terminal, and your requests.
                </p>
                <div className="mt-6 space-x-4">
                    <a href="https://github.com/milmil7/crow" target="_blank" rel="noreferrer" className="btn btn-primary">
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

            
            <section className="mb-16 text-center">
                <blockquote className="text-2xl italic font-semibold mb-6">
                    “Talk less. Request more.” — Crow
                </blockquote>
                <ul className="list-disc pl-6 inline-block text-left space-y-1">
                    <li><strong>Fast</strong> – Rust backend via Tauri</li>
                    <li><strong>Minimal</strong> – no signup, no sync, no distractions</li>
                    <li><strong>Powerful</strong> – scripting, chaining, visualizing</li>
                </ul>
            </section>

            
            <section id="installation" className="mb-16">
                <h2 className="text-3xl font-bold mb-4">Installation</h2>
                <p className="mb-2">Coming Soon:</p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Windows .msi installer</li>
                    <li>Linux .AppImage</li>
                </ul>
                <p className="mb-2">Or build from source:</p>
                <pre className="bg-neutral text-neutral-content p-4 rounded-lg overflow-x-auto">
          <code>
            git clone https://github.com/milmil7/crow.git{"\n"}
              cd crow{"\n"}
              npm install && npm run tauri dev
          </code>
        </pre>
            </section>

            
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-4">Roadmap</h2>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Request runner & response viewer ✅</li>
                    <li>Collections & history ✅</li>
                    <li>Environments & globals ✅</li>
                    <li>Scripting engine ✅</li>
                    <li>Recharts-powered visualizer ✅</li>
                    <li>JSON → Table renderer ✅</li>
                    <li>Plugin system ⏳</li>
                    <li>CLI companion ⏳</li>
                </ul>
            </section>

            
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Tauri (Rust) — system-native shell</li>
                    <li>React + TailwindCSS — fast frontend</li>
                </ul>
            </section>

            
            <footer className="text-center text-base-content/60 mt-16">
                <p>MIT License © 2025 <a className="link" href="https://github.com/milmil7">@milmil7</a></p>
                <p className="italic mt-2">
                    You’re not just sending requests.<br />
                    You’re orchestrating silence between servers.<br />
                    Welcome to the murder.
                </p>
            </footer>
        </div>
    );
}
