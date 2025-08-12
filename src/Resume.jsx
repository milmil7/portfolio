import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Resume = () => {
    const componentRef = useRef();

    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/milmil7/repos?sort=updated")
            .then((res) => res.json())
            .then((data) => setRepos(data))
            .catch((err) => console.error("Error fetching repos:", err));
    }, []);

    const handlePrint =  async () => {
        if (!componentRef.current) return;

        
        const canvas = await html2canvas(componentRef.current, { scale: 2 });

        
        const imgData = canvas.toDataURL("image/png");

        
        const pdf = new jsPDF("p", "mm", "a4");

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

        
        pdf.save("Milad_Resume.pdf");
    };

    return (
        <div className="min-h-screen bg-base-200 text-base-content p-8 font-sans">
            <motion.div
                ref={componentRef}
                className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8 print:p-0 print:shadow-none print:rounded-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                
                <header className="flex flex-col md:flex-row md:justify-between items-center mb-8 border-b border-gray-300 pb-4 print:mb-4">
                    <div>
                        <h1 className="text-5xl font-extrabold text-primary mb-1 print:text-black">Milad</h1>
                        <h2 className="text-2xl font-semibold text-gray-700 print:text-black">Senior Programmer</h2>
                        <p className="mt-1 text-gray-500 print:text-black">Tabriz, Iran</p>
                    </div>
                    <div className="mt-4 md:mt-0 flex gap-6 text-gray-600 print:text-black print:mt-0">
                        <a href="mailto:milad.bfmg@gmail.com" className="hover:text-primary" aria-label="Email">
                            📧 milad.bfmg@gmail.com
                        </a>
                        <a href="https://github.com/milmil7" target="_blank" rel="noreferrer" className="hover:text-primary" aria-label="GitHub">
                            🐱 milmil7
                        </a>

                    </div>
                </header>

                
                <section className="mb-8 print:mb-6">
                    <h3 className="text-3xl font-semibold mb-3 border-b border-primary inline-block pb-1 print:text-black">
                        Summary
                    </h3>
                    <p className="text-gray-700 text-lg print:text-black">
                        A passionate Senior Programmer with over 5 years of experience building
                        performant, scalable, and user-centric software solutions across
                        diverse platforms. Skilled in full-stack development, UI/UX design,
                        and modern frameworks. Driven by innovation and delivering excellence.
                    </p>
                </section>

                
                <section className="mb-8 print:mb-6">
                    <h3 className="text-3xl font-semibold mb-3 border-b border-primary inline-block pb-1 print:text-black">
                        Skills
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {[
                            "React",
                            "Tauri",
                            "JavaScript",
                            "Kotlin",
                            "Vue",
                            "Tailwind",
                            "CSS",
                            "HTML",
                            "Bootstrap",
                            "DaisyUI",
                            "Rust",
                            "React Native",
                            "Jetpack Compose",
                            "Design",
                            "UI/UX",
                            "Figma",
                            "Adobe XD",
                            "Next.js",
                            "Kotlin Multiplatform",
                            "Python",
                            "Node.js",
                            "Express.js",
                            "MongoDB",
                            "SQLite",
                            "GUI Automation",
                            "Puppeteer",
                            "RESTful API",
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="bg-primary/20 text-primary font-semibold rounded-full px-4 py-1 cursor-default select-none text-sm"
                                title={skill}
                            >
                {skill}
              </span>
                        ))}
                    </div>
                </section>

                
                <section className="mb-8 print:mb-6">
                    <h3 className="text-3xl font-semibold mb-3 border-b border-primary inline-block pb-1 print:text-black">
                        Work Experience
                    </h3>
                    <div>
                        <div className="mb-4">
                            <h4 className="text-xl font-semibold">Senior Developer</h4>
                            <p className="italic text-gray-600 print:text-black">5 years experience</p>
                            <ul className="list-disc list-inside mt-2 text-gray-700 print:text-black space-y-1">
                                <li>Led multiple cross-functional teams to deliver scalable applications.</li>
                                <li>Architected and developed modern web and mobile applications using React, Tauri, and Rust.</li>
                                <li>Improved performance and user experience by optimizing front-end and backend code.</li>
                                <li>Collaborated closely with designers to deliver polished, user-friendly interfaces.</li>
                                <li>Mentored junior developers and conducted code reviews to maintain code quality.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                
                <section className="mb-8 print:mb-6">
                    <h3 className="text-3xl font-semibold mb-3 border-b border-primary inline-block pb-1 print:text-black">
                        Education
                    </h3>
                    <div>
                        <h4 className="text-xl font-semibold">Bachelor of Law</h4>
                        <p className="italic text-gray-600 print:text-black">PNU - Graduated 2022</p>
                    </div>
                </section>

                
                <section className="mb-8 print:mb-6">
                    <h3 className="text-3xl font-semibold mb-3 border-b border-primary inline-block pb-1 print:text-black">
                        Projects
                    </h3>
                    {repos.length === 0 ? (
                        <p className="text-gray-700 print:text-black">Loading projects...</p>
                    ) : (
                        <ul className="list-disc list-inside space-y-1 text-gray-700 print:text-black">
                            {repos.map((repo) => (
                                <li key={repo.id}>
                                    <a
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-primary hover:underline"
                                    >
                                        {repo.name}
                                    </a>{" "}
                                    - {repo.description || "No description"}
                                </li>
                            ))}
                        </ul>
                    )}
                </section>

                
                <section className="mb-8 print:mb-6">
                    <h3 className="text-3xl font-semibold mb-3 border-b border-primary inline-block pb-1 print:text-black">
                        Languages
                    </h3>
                    <p className="text-gray-700 print:text-black">English, Turkish, Persian</p>
                </section>
            </motion.div>

            
        </div>
    );
};

export default Resume;
