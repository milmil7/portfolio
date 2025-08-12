
import React from "react";
import { motion } from "framer-motion";
import { FaKeyboard, FaBrain, FaRunning, FaFont, FaMusic, FaPaintBrush, FaDesktop, FaMobileAlt } from "react-icons/fa";

const features = [
    { icon: <FaKeyboard />, title: "Normal Mode", text: "Type full sentences, track WPM, mistakes, and accuracy." },
    { icon: <FaBrain />, title: "Memory Typer", text: "See a sentence, hide it, then type from memory for insane multipliers." },
    { icon: <FaRunning />, title: "Banner Mode", text: "Chase a scrolling sentence before it disappears." },
    { icon: <FaFont />, title: "Letter Mode", text: "Random letters appear (spoken optionally) — type them fast!" },
    { icon: <FaMusic />, title: "Realistic Typing Sounds", text: "Pitch and randomization make it feel real, never robotic." },
    { icon: <FaPaintBrush />, title: "Themes & Settings", text: "Pick styles, adjust hints, sounds, speeds, and difficulty." },
    { icon: <FaDesktop />, title: "Desktop Support", text: "Full native desktop builds with Tauri." },
    { icon: <FaMobileAlt />, title: "Android Support", text: "Cross-platform builds for Android devices." },
];

export default function RocketFings() {
    return (
        <div className="bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 min-h-screen p-8 text-white">
            
            <section className="text-center mb-16">
                <motion.h1
                    className="text-6xl font-extrabold mb-4 drop-shadow-lg"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    🚀 Rocket Fings
                </motion.h1>
                <p className="text-lg max-w-3xl mx-auto drop-shadow-sm">
                    A blazing fast, multi-mode typing trainer with customizable themes, sounds, and game modes.
                </p>
                <div className="mt-6 space-x-4">
                    <a href="https://github.com/milmil7/rocket-fings" target="_blank" rel="noreferrer" className="btn btn-accent">
                        View on GitHub
                    </a>
                    <a href="#installation" className="btn btn-outline btn-accent">
                        Install
                    </a>
                </div>
            </section>

            
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        className="card bg-white/10 border border-white/20 p-6 shadow-lg rounded-xl backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="text-4xl mb-4 text-yellow-300">{f.icon}</div>
                        <h3 className="font-bold text-xl mb-2">{f.title}</h3>
                        <p className="text-white/90">{f.text}</p>
                    </motion.div>
                ))}
            </section>

            
            <section id="installation" className="mb-16">
                <h2 className="text-3xl font-bold mb-4">🚀 Getting Started</h2>
                <h3 className="font-semibold">📦 Install dependencies</h3>
                <pre className="bg-black/50 text-green-300 p-4 rounded-lg overflow-x-auto mb-4">
          <code>npm install</code>
        </pre>
                <h3 className="font-semibold">🖥️ Run on Desktop</h3>
                <pre className="bg-black/50 text-green-300 p-4 rounded-lg overflow-x-auto mb-4">
          <code>npm run tauri dev</code>
        </pre>
                <h3 className="font-semibold">📱 Run on Android Emulator</h3>
                <pre className="bg-black/50 text-green-300 p-4 rounded-lg overflow-x-auto">
          <code>
            npm init android{"\n"}
              npm run tauri android
          </code>
        </pre>
            </section>

            
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-4">⚙️ Tech Stack</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>⚛️ React</li>
                    <li>🦀 Tauri</li>
                    <li>🎨 CSS</li>
                    <li>⚡ Vite</li>
                </ul>
            </section>

            
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-4">📜 License</h2>
                <p>
                    MIT License — use, modify, and distribute freely (just give credit to{" "}
                    <a className="link text-yellow-300" href="https://github.com/milmil7">@milmil7</a>).
                </p>
            </section>

            
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-4">✍️ Author</h2>
                <p>Made with ❤️ by <a className="link text-yellow-300" href="https://github.com/milmil7">@milmil7</a></p>
            </section>

            
            <footer className="text-center text-white/70 mt-16">
                <p>⭐ If you like Rocket Fings, drop a star on the repo!</p>
            </footer>
        </div>
    );
}
