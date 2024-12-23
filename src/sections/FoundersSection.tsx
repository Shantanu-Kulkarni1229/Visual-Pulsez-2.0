"use client";

import React from "react";
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon

const founders = [
    {
        name: "Alice Johnson",
        title: "CEO & Visionary",
        photo: "/images/alice.jpg",
        opinion:
            "Our mission is to bridge the gap between technology and people, empowering everyone to achieve their best.",
        socialLink: "https://linkedin.com/in/alice",
    },
    {
        name: "Bob Smith",
        title: "CTO & Innovator",
        photo: "/images/bob.jpg",
        opinion:
            "Innovation is at the heart of everything we do, ensuring our solutions lead the industry forward.",
        socialLink: "https://linkedin.com/in/bob",
    },
    {
        name: "Clara Davis",
        title: "CFO & Strategist",
        photo: "/images/clara.jpg",
        opinion:
            "Building a sustainable future starts with sound strategy and smart decisions.",
        socialLink: "https://linkedin.com/in/clara",
    },
    {
        name: "David Lee",
        title: "COO & Executor",
        photo: "/images/david.jpg",
        opinion:
            "Turning ideas into action requires precision and passion, and that’s what we bring every day.",
        socialLink: "https://linkedin.com/in/david",
    },
];

export const FoundersSection = () => {
    return (
        <div className="w-full bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 py-16 relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-80 h-80 bg-blue-400 rounded-full blur-3xl opacity-30 top-10 left-20 animate-pulse"></div>
                <div className="absolute w-96 h-96 bg-gray-400 rounded-full blur-3xl opacity-30 bottom-20 right-20 animate-pulse delay-500"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-gray-600 bg-clip-text text-transparent animate-fade-in">
                        Meet Our Founders
                    </h2>
                    <p className="text-gray-700 mt-4 text-lg animate-fade-in delay-300">
                        Learn more about the minds and hearts behind our journey.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up">
                    {founders.map((founder, index) => (
                        <div
                            key={index}
                            className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-gray-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                            <img
                                src={founder.photo}
                                alt={founder.name}
                                className="w-24 h-24 mx-auto rounded-full border-4 border-gray-100 shadow-md transition-all"
                            />
                            <h3
                                className="mt-6 text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors"
                            >
                                {founder.name}
                            </h3>
                            <p className="text-sm text-gray-600 mt-2">{founder.title}</p>
                            <blockquote className="mt-4 text-gray-700 italic">
                                "{founder.opinion}"
                            </blockquote>
                            <a
                                href={founder.socialLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block text-blue-600 hover:text-blue-800 transition-colors"
                            >
                                <FaLinkedin size={24} />
                            </a>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
