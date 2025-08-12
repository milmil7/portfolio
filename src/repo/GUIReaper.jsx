
import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaBox, FaSearch, FaChartLine, FaMagic, FaLaptop } from "react-icons/fa";

const features = [
    { icon: <FaBrain />, title: "Live Process Tree", text: "Sortable metrics for live processes, updated in real-time." },
    { icon: <FaBox />, title: "Detailed Process Stats", text: "View memory, CPU usage, priority, IO stats, and more." },
    { icon: <FaSearch />, title: "Instant Search", text: "Find processes instantly by name or PID." },
    { icon: <FaChartLine />, title: "Performance Charts", text: "Toggleable CPU, MEM, and PRIO visualizations." },
    { icon: <FaMagic />, title: "Custom UI Elements", text: "Tooltips, modals, and toasts with smooth animations." },
    { icon: <FaLaptop />, title: "Cross-Platform", text: "Runs natively on Windows, Linux, and macOS." },
];

export default function GUIReaper() {
    return (
        <div className="bg-base-200 text-base-content min-h-screen p-8">
            
            <section className="text-center mb-16">
                <motion.h1
                    className="text-6xl font-bold mb-4 text-error"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    ⚰️ GUI Reaper
                </motion.h1>
                <p className="text-lg text-base-content/80 max-w-3xl mx-auto">
                    A sleek and powerful process manager built with{" "}
                    <a href="https://tauri.app" className="link" target="_blank" rel="noreferrer">Tauri</a>, React, and Tailwind CSS.
                    Inspired by <code>htop</code> and Task Manager, but cross-platform with a beautiful GUI.
                </p>
                <p className="italic mt-4 text-error-content/70">
                    Happy reaping. ☠️
                </p>
                <div className="mt-6 space-x-4">
                    <a href="https://github.com/milmil7/gui-reaper" target="_blank" rel="noreferrer" className="btn btn-error">
                        View on GitHub
                    </a>
                    <a href="#installation" className="btn btn-outline btn-error">
                        Install
                    </a>
                </div>
            </section>

            
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        className="card bg-base-100 border border-error/20 p-6 shadow-lg"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="text-4xl mb-4 text-error">{f.icon}</div>
                        <h3 className="font-bold text-xl mb-2">{f.title}</h3>
                        <p>{f.text}</p>
                    </motion.div>
                ))}
            </section>

            
            <section id="installation" className="mb-16">
                <h2 className="text-3xl font-bold mb-4">🛠️ Installation</h2>
                <pre className="bg-neutral text-neutral-content p-4 rounded-lg overflow-x-auto">
          <code>
            npm install{"\n"}
              npm run tauri dev
          </code>
        </pre>
                <p className="mt-4">
                    Make sure you have Rust and Tauri prerequisites installed.
                    See:{" "}
                    <a
                        className="link text-error"
                        href="https://tauri.app/v2/guides/getting-started/prerequisites"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Tauri Docs
                    </a>
                </p>
            </section>

            
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-4">📄 License</h2>
                <p>
                    MIT License with credit required.
                    If you fork, modify, or redistribute, please mention:{" "}
                    <strong>@milmil7</strong>
                </p>
            </section>

            
            <footer className="text-center text-base-content/60 mt-16">
                <p>© 2025 <a className="link text-error" href="https://github.com/milmil7">@milmil7</a></p>
                <p className="italic mt-2">⚰️ The Reaper waits for no process.</p>
            </footer>
        </div>
    );
}
