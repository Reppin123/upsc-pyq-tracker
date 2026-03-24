// UPSC Environment & Ecology Data - Syllabus and Microtheme structure

const environmentData = {
    syllabus: [
        "Biodiversity — Conservation, Protected Areas, Endangered Species, Hotspots",
        "Climate Change — Global Warming, UNFCCC, Paris Agreement, IPCC, NDCs",
        "Pollution — Air, Water, Soil, Noise, E-waste, Plastic, Hazardous Waste",
        "Environmental Laws — EPA 1986, WPA 1972, FCA 1980, FRA 2006, EIA, NGT",
        "Ecology — Ecosystems, Food Chains, Biogeochemical Cycles, Succession",
        "Forests — Forest Types, Deforestation, Afforestation, REDD+, JFM",
        "Water Resources — Rivers, Groundwater, Watersheds, Wetlands, Conservation",
        "Sustainable Development — SDGs, Renewable Energy, Circular Economy",
        "International Agreements — CITES, CMS, Ramsar, Stockholm, Basel, CBD",
        "Current Affairs — Plastic Ban, Green Finance, LiFE, AQI, Bioremediation"
    ],

    microthemes: [
        {
            id: 1,
            name: "Biodiversity & Conservation",
            icon: "🦁",
            color: "#059669",
            description: "Protected Areas, Endangered Species, Wetlands, Mangroves, Wildlife Laws, Species Identification",
            questionCount: environmentQuestions.filter(q => q.microtheme === "Biodiversity & Conservation").length,
            questions: environmentQuestions.filter(q => q.microtheme === "Biodiversity & Conservation")
        },
        {
            id: 2,
            name: "Climate Change & Global Warming",
            icon: "🌡️",
            color: "#dc2626",
            description: "UNFCCC, Paris Agreement, Carbon Markets, Net Zero, Ozone, Carbon Sequestration, BOD",
            questionCount: environmentQuestions.filter(q => q.microtheme === "Climate Change & Global Warming").length,
            questions: environmentQuestions.filter(q => q.microtheme === "Climate Change & Global Warming")
        },
        {
            id: 3,
            name: "Pollution & Waste Management",
            icon: "🏭",
            color: "#d97706",
            description: "Air, Water, Soil Pollution, E-waste, Plastics, PFAS, Acid Rain, Hazardous Waste",
            questionCount: environmentQuestions.filter(q => q.microtheme === "Pollution & Waste Management").length,
            questions: environmentQuestions.filter(q => q.microtheme === "Pollution & Waste Management")
        },
        {
            id: 4,
            name: "Ecology & Ecosystems",
            icon: "🌿",
            color: "#0891b2",
            description: "Food Chains, Biogeochemical Cycles, Decomposers, Succession, Biomes, Productivity",
            questionCount: environmentQuestions.filter(q => q.microtheme === "Ecology & Ecosystems").length,
            questions: environmentQuestions.filter(q => q.microtheme === "Ecology & Ecosystems")
        },
        {
            id: 5,
            name: "Environmental Laws & Policies",
            icon: "⚖️",
            color: "#7c3aed",
            description: "EPA 1986, WPA 1972, FRA 2006, NGT, CAMPA, Western Ghats, Eco-Sensitive Zones",
            questionCount: environmentQuestions.filter(q => q.microtheme === "Environmental Laws & Policies").length,
            questions: environmentQuestions.filter(q => q.microtheme === "Environmental Laws & Policies")
        },
        {
            id: 6,
            name: "Sustainable Development & Renewable Energy",
            icon: "☀️",
            color: "#ea580c",
            description: "Green Hydrogen, Solar, Biofuels, Biochar, Conservation Agriculture, SRI, Climate-Smart Agriculture",
            questionCount: environmentQuestions.filter(q => q.microtheme === "Sustainable Development & Renewable Energy").length,
            questions: environmentQuestions.filter(q => q.microtheme === "Sustainable Development & Renewable Energy")
        },
        {
            id: 7,
            name: "Environmental Agreements & Organizations",
            icon: "🌐",
            color: "#4f46e5",
            description: "CITES, Ramsar, Kyoto Protocol, Montreal Protocol, REDD+, GCF, IUCN, UNFCCC",
            questionCount: environmentQuestions.filter(q => q.microtheme === "Environmental Agreements & Organizations").length,
            questions: environmentQuestions.filter(q => q.microtheme === "Environmental Agreements & Organizations")
        },
        {
            id: 8,
            name: "Environmental Issues & Current Affairs",
            icon: "📰",
            color: "#be123c",
            description: "Fly Ash, Fuel Cells, Kharai Camel, Nanoparticles, Cloud Seeding, Soil Conservation",
            questionCount: environmentQuestions.filter(q => q.microtheme === "Environmental Issues & Current Affairs").length,
            questions: environmentQuestions.filter(q => q.microtheme === "Environmental Issues & Current Affairs")
        }
    ]
};
