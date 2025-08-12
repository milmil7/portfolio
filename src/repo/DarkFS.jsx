import React from "react";
import { motion } from "framer-motion";

import { ShieldCheckIcon, CpuChipIcon, CommandLineIcon, BoltIcon } from "@heroicons/react/24/outline";
import Link from "daisyui/components/link/index.js";

const DarkFS = () => {
    return (
        <div className="min-h-screen bg-base-200 text-base-content p-6 md:p-12">
            
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-5xl font-bold">darkfs</h1>
                <p className="mt-4 text-lg opacity-80">
                    A secure, container-based file storage tool written in Rust — with AES-GCM encryption and Argon2 password hashing.
                </p>
                <div className="mt-4 flex justify-center gap-3">
                    <span className="badge badge-primary">Rust</span>
                    <span className="badge badge-accent">AES-GCM</span>
                    <span className="badge badge-secondary">Argon2</span>
                </div>
            </motion.div>

            
            <motion.div
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
                }}
            >
                {[
                    { icon: <ShieldCheckIcon className="w-8 h-8" />, title: "Secure Encryption", text: "AES-GCM with Argon2 password hashing for maximum security." },
                    { icon: <CpuChipIcon className="w-8 h-8" />, title: "Multithreading", text: "Rayon for parallel file processing and thread-safe operations." },
                    { icon: <BoltIcon className="w-8 h-8" />, title: "Fast & Efficient", text: "Deduplication with SHA-256 hashing and version control." },
                    { icon: <CommandLineIcon className="w-8 h-8" />, title: "Powerful CLI", text: "Full control with intuitive commands for storage management." }
                ].map((f, idx) => (
                    <motion.div key={idx} className="card bg-base-100 shadow-lg p-6 hover:shadow-xl" whileHover={{ scale: 1.03 }}>
                        <div className="mb-3">{f.icon}</div>
                        <h3 className="font-semibold text-lg">{f.title}</h3>
                        <p className="opacity-80">{f.text}</p>
                    </motion.div>
                ))}
            </motion.div>

            
            <Section title="🔐 Encryption">
                <ul className="list-disc list-inside">
                    <li><strong>Algorithm:</strong> AES-GCM (12-byte nonces)</li>
                    <li><strong>Key Derivation:</strong> Argon2 (memory-hard)</li>
                    <li><strong>Integrity:</strong> SHA-256 hashing</li>
                    <li><strong>Salt:</strong> 16-byte random salt per container</li>
                </ul>
            </Section>

            
            <Section title="🚀 CLI Usage">
        <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto">
{`darkfs init <container> <password>
darkfs write <container> <password> <file|directory> [--overwrite]
darkfs read <container> <password> <file_name> <output_file>
darkfs ls <container> <password>
darkfs rm <container> <password> <file_name>
darkfs search <container> <password> <pattern>
darkfs restore <container> <password> <file[#version]> <output>`}
        </pre>
            </Section>

            
            <Section title="🛠️ Implementation">
                <p className="mb-3 font-medium">Container Header:</p>
                <ul className="list-disc list-inside mb-4">
                    <li>MAGIC: DARKFS01</li>
                    <li>Nonce for TOC encryption</li>
                    <li>Salt for password derivation</li>
                    <li>TOC Length & Offset</li>
                </ul>
                <p className="mb-3 font-medium">Table of Contents (TOC):</p>
                <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto">
{`struct TOC {
    files: Vec<FileEntry>,
}

struct FileEntry {
    name: String,
    offset: u64,
    size: u64,
    nonce: [u8; 12],
    hash: String,
}`}
        </pre>
            </Section>

            
            <Section title="🔄 Deduplication & Versioning">
                <p>Reuses existing blocks with the same hash. Adds <code>#2</code>, <code>#3</code> for duplicate names.</p>
            </Section>

            
            <Section title="🧱 Dependencies">
                <div className="flex flex-wrap gap-2">
                    {["aes-gcm", "argon2", "sha2", "serde", "rayon", "walkdir"].map(dep => (
                        <span key={dep} className="badge badge-outline">{dep}</span>
                    ))}
                </div>
            </Section>

            
            <Section title="🧪 Examples">
        <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto">
{`darkfs init vault.darkfs password123
darkfs write vault.darkfs password123 example.txt
darkfs read vault.darkfs password123 example.txt output.txt
darkfs ls vault.darkfs password123
darkfs rm vault.darkfs password123 example.txt
darkfs search vault.darkfs password123 example`}
        </pre>
            </Section>

            
            <Section title="🔐 Security">
                <ul className="list-disc list-inside">
                    <li>Argon2 for secure key derivation</li>
                    <li>AES-GCM with unique nonces</li>
                    <li>SHA-256 for integrity and deduplication</li>
                </ul>
            </Section>

            <div className="mt-12 text-center">
                
            </div>
        </div>
    );
};

const Section = ({ title, children }) => (
    <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
    >
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="prose max-w-full">{children}</div>
    </motion.div>
);

export default DarkFS;
