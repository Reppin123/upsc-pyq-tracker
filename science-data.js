// UPSC Science & Technology Data - Syllabus and Microtheme structure

const scienceData = {
    syllabus: [
        "General Science — Physics, Chemistry, Biology fundamentals",
        "Space Technology — ISRO missions, satellites, launch vehicles",
        "Biotechnology — GMOs, gene editing, vaccines, cloning",
        "IT & Electronics — AI, blockchain, cybersecurity, wireless tech",
        "Nanotechnology — applications in medicine, materials, agriculture",
        "Defence Technology — missiles, radar, UAVs, cyber warfare",
        "Nuclear Technology — fission, fusion, reactors, RTGs",
        "Medical Science — diseases, public health, drugs, vaccines",
        "Environmental Science — pollution, climate tech, waste management",
        "Emerging Technologies — quantum computing, VR/AR, IoT, 5G"
    ],

    microthemes: [
        {
            id: 1,
            name: "Electronics & IT",
            icon: "💻",
            color: "#2563eb",
            description: "AI, Blockchain, IoT, Cyber Security, Mobile Technology, Digital India",
            questionCount: scienceQuestions.filter(q => q.microtheme === "Electronics & IT").length,
            questions: scienceQuestions.filter(q => q.microtheme === "Electronics & IT")
        },
        {
            id: 2,
            name: "Astrophysics & Space Technology",
            icon: "🚀",
            color: "#7c3aed",
            description: "ISRO Missions, Satellites, Celestial Objects, GPS, Cosmology, Gravitational Waves",
            questionCount: scienceQuestions.filter(q => q.microtheme === "Astrophysics & Space Technology").length,
            questions: scienceQuestions.filter(q => q.microtheme === "Astrophysics & Space Technology")
        },
        {
            id: 3,
            name: "Biotechnology",
            icon: "🧬",
            color: "#059669",
            description: "GM Crops, CRISPR, Vaccines, Cloning, Nanotechnology, Genomics",
            questionCount: scienceQuestions.filter(q => q.microtheme === "Biotechnology").length,
            questions: scienceQuestions.filter(q => q.microtheme === "Biotechnology")
        },
        {
            id: 4,
            name: "Physics",
            icon: "⚛️",
            color: "#dc2626",
            description: "Nuclear Energy, Quantum Mechanics, Optics, Thermodynamics, Particle Physics",
            questionCount: scienceQuestions.filter(q => q.microtheme === "Physics").length,
            questions: scienceQuestions.filter(q => q.microtheme === "Physics")
        },
        {
            id: 5,
            name: "Chemistry",
            icon: "🧪",
            color: "#d97706",
            description: "Polymers, Industrial Chemistry, Food Chemistry, Water Treatment, Energy",
            questionCount: scienceQuestions.filter(q => q.microtheme === "Chemistry").length,
            questions: scienceQuestions.filter(q => q.microtheme === "Chemistry")
        },
        {
            id: 6,
            name: "Biology",
            icon: "🔬",
            color: "#0891b2",
            description: "Virology, Cell Biology, Immunology, Plant Biology, Genetics, Ecology",
            questionCount: scienceQuestions.filter(q => q.microtheme === "Biology").length,
            questions: scienceQuestions.filter(q => q.microtheme === "Biology")
        },
        {
            id: 7,
            name: "Diseases",
            icon: "🏥",
            color: "#be123c",
            description: "Viral, Bacterial, Fungal, Parasitic Diseases, Genetic Disorders, Public Health",
            questionCount: scienceQuestions.filter(q => q.microtheme === "Diseases").length,
            questions: scienceQuestions.filter(q => q.microtheme === "Diseases")
        }
    ]
};
