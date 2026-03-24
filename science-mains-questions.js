// UPSC Mains GS Paper 3 — Science & Technology Questions (2013–2024)

const scienceMainsQuestions = [

    // ─── Electronics, Robotics & IT ───────────────────────────────────────────

    { id: 101, year: 2013, theme: "Electronics & IT",
      question: "What is meant by 'digital signature'? What does it ensure? What are the uses of digital signatures in e-governance?",
      marks: 10, words: 150 },

    { id: 102, year: 2014, theme: "Electronics & IT",
      question: "What is 3D printing? How does 3D printing technology offer great potential for the developing world?",
      marks: 10, words: 150 },

    { id: 103, year: 2015, theme: "Electronics & IT",
      question: "What is the Internet of Things (IoT)? How do IoT and big data work together? What are the security and privacy challenges in IoT?",
      marks: 12.5, words: 200 },

    { id: 104, year: 2016, theme: "Electronics & IT",
      question: "Discuss how emerging technologies and globalisation contribute to money laundering. Elaborate the measures taken to tackle this problem.",
      marks: 12.5, words: 200 },

    { id: 105, year: 2016, theme: "Electronics & IT",
      question: "What is big data? How can big data analytics be used to address socio-economic challenges in India?",
      marks: 12.5, words: 200 },

    { id: 106, year: 2018, theme: "Electronics & IT",
      question: "What is India's National Cyber Security Policy? What are its key provisions and what are the challenges in its implementation?",
      marks: 10, words: 150 },

    { id: 107, year: 2019, theme: "Electronics & IT",
      question: "Discuss the role of robots in reducing human error in hazardous industries. What are the advancements made by India in the field of robotics?",
      marks: 10, words: 150 },

    { id: 108, year: 2020, theme: "Electronics & IT",
      question: "Discuss the applications of Artificial Intelligence (AI) in enhancing India's national security. What are the risks and ethical concerns associated with AI in defence?",
      marks: 10, words: 150 },

    { id: 109, year: 2021, theme: "Electronics & IT",
      question: "Discuss the potential of Blockchain technology in transforming the governance mechanism in India. What are the challenges in its adoption?",
      marks: 10, words: 150 },

    { id: 110, year: 2022, theme: "Electronics & IT",
      question: "India's semiconductor industry is nascent compared to global leaders. Discuss the steps taken by the Government of India to develop semiconductor manufacturing and design capabilities.",
      marks: 15, words: 250 },

    { id: 111, year: 2023, theme: "Electronics & IT",
      question: "What is quantum computing? How is it different from classical computing? What are the potential applications of quantum computing in areas critical to India's national interest?",
      marks: 15, words: 250 },

    // ─── Nuclear Technology & Alternative Energy ──────────────────────────────

    { id: 201, year: 2013, theme: "Nuclear & Alternative Energy",
      question: "What is India's stand on the use of nuclear energy for civilian purposes? Discuss the significance of the Indo-US Nuclear Deal for India's energy security.",
      marks: 10, words: 150 },

    { id: 202, year: 2014, theme: "Nuclear & Alternative Energy",
      question: "What are the options available for India to cut its carbon emissions without sacrificing its development needs? Discuss.",
      marks: 10, words: 150 },

    { id: 203, year: 2015, theme: "Nuclear & Alternative Energy",
      question: "Discuss India's achievements in developing and deploying solar energy. What is the significance of the National Solar Mission for India's energy security and climate commitments?",
      marks: 12.5, words: 200 },

    { id: 204, year: 2016, theme: "Nuclear & Alternative Energy",
      question: "India has significant renewable energy potential. Discuss the progress of India's renewable energy programme. What are the challenges in meeting India's renewable energy targets?",
      marks: 12.5, words: 200 },

    { id: 205, year: 2018, theme: "Nuclear & Alternative Energy",
      question: "What are the benefits of introducing Electric Vehicles (EVs) in India? What are the challenges in their widespread adoption? What policy measures can accelerate EV adoption?",
      marks: 10, words: 150 },

    { id: 206, year: 2019, theme: "Nuclear & Alternative Energy",
      question: "What is a run-of-river hydropower project? How is it different from other hydropower projects? What are its advantages and disadvantages?",
      marks: 10, words: 150 },

    { id: 207, year: 2020, theme: "Nuclear & Alternative Energy",
      question: "What is Carbon Capture, Utilisation and Storage (CCUS) technology? What are the prospects and challenges of deploying CCUS in India for decarbonising its economy?",
      marks: 10, words: 150 },

    { id: 208, year: 2021, theme: "Nuclear & Alternative Energy",
      question: "Discuss India's strategy to achieve energy security through the development of hydrogen fuel. What is the National Hydrogen Mission and what are its objectives?",
      marks: 15, words: 250 },

    { id: 209, year: 2023, theme: "Nuclear & Alternative Energy",
      question: "Discuss India's plan to expand its nuclear energy capacity. What are the challenges in scaling up nuclear energy in India? What role can small modular reactors (SMRs) play?",
      marks: 15, words: 250 },

    { id: 210, year: 2024, theme: "Nuclear & Alternative Energy",
      question: "What is the ITER project? What is its significance for the global search for clean energy through nuclear fusion? What is India's contribution to the ITER project?",
      marks: 15, words: 250 },

    // ─── Space & Defence Technology ───────────────────────────────────────────

    { id: 301, year: 2014, theme: "Space & Defence",
      question: "What are the main objectives of India's space programme? Discuss the significance of ISRO's achievements for India's economic development and national security.",
      marks: 10, words: 150 },

    { id: 302, year: 2016, theme: "Space & Defence",
      question: "What is the Reusable Launch Vehicle-Technology Demonstrator (RLV-TD) programme of ISRO? What are the benefits expected from this programme for India's space sector?",
      marks: 12.5, words: 200 },

    { id: 303, year: 2017, theme: "Space & Defence",
      question: "India has launched its first dedicated military communication satellite GSAT-7. Discuss its significance for India's defence preparedness and communication networks.",
      marks: 10, words: 150 },

    { id: 304, year: 2018, theme: "Space & Defence",
      question: "Discuss the significance of the Indian Regional Navigation Satellite System (IRNSS/NavIC) for India. How will it reduce India's dependence on foreign GPS systems?",
      marks: 10, words: 150 },

    { id: 305, year: 2019, theme: "Space & Defence",
      question: "India successfully demonstrated anti-satellite weapon (ASAT) capability under Mission Shakti. What are the implications of this capability for India's national security and India's standing in international space governance?",
      marks: 10, words: 150 },

    { id: 306, year: 2019, theme: "Space & Defence",
      question: "India has acquired the S-400 air defence system from Russia. What are its key features? What are the strategic implications for India's defence posture?",
      marks: 10, words: 150 },

    { id: 307, year: 2022, theme: "Space & Defence",
      question: "What is the James Webb Space Telescope (JWST)? How will it improve our understanding of the Universe? What are the scientific objectives of JWST?",
      marks: 10, words: 150 },

    { id: 308, year: 2022, theme: "Space & Defence",
      question: "Discuss the significance of asteroid mining. What are the technological challenges involved? What are the legal and governance frameworks needed for regulating outer space activities?",
      marks: 15, words: 250 },

    { id: 309, year: 2023, theme: "Space & Defence",
      question: "What is the significance of the Chandrayaan-3 mission? How does it advance India's lunar exploration programme? What are its scientific objectives and achievements?",
      marks: 15, words: 250 },

    // ─── Biotechnology ────────────────────────────────────────────────────────

    { id: 401, year: 2013, theme: "Biotechnology",
      question: "What is meant by 'stem cell technology'? How can it be useful in the treatment of diseases? What are the ethical considerations involved in stem cell research?",
      marks: 10, words: 150 },

    { id: 402, year: 2014, theme: "Biotechnology",
      question: "What is gene therapy? What are its prospects in treating hereditary diseases? What are the ethical concerns related to genetic modification of humans?",
      marks: 10, words: 150 },

    { id: 403, year: 2015, theme: "Biotechnology",
      question: "Discuss India's policy on Genetically Modified (GM) crops. What are the potential benefits and risks associated with large-scale adoption of GM crops in India?",
      marks: 12.5, words: 200 },

    { id: 404, year: 2016, theme: "Biotechnology",
      question: "What is the CRISPR-Cas9 gene editing technique? How is it different from earlier gene editing tools? Discuss its applications in medicine and agriculture, and the ethical issues surrounding it.",
      marks: 12.5, words: 200 },

    { id: 405, year: 2018, theme: "Biotechnology",
      question: "Discuss the recent advancements in vaccine development technology. What is India's contribution to the global vaccine manufacturing industry? How can India enhance its vaccine production capacity?",
      marks: 10, words: 150 },

    { id: 406, year: 2021, theme: "Biotechnology",
      question: "What is mRNA vaccine technology? How does it differ from conventional vaccine platforms? Discuss its advantages and the challenges in large-scale deployment, especially in developing countries.",
      marks: 15, words: 250 },

    { id: 407, year: 2022, theme: "Biotechnology",
      question: "Discuss the applications of CRISPR-Cas9 technology in treating genetic diseases in humans. What are the ethical concerns surrounding human germline editing?",
      marks: 15, words: 250 },

    { id: 408, year: 2024, theme: "Biotechnology",
      question: "What is synthetic biology? What are its potential applications in medicine, energy and environment? What are the biosafety, biosecurity and ethical concerns associated with it?",
      marks: 15, words: 250 },

    // ─── Nanotechnology ───────────────────────────────────────────────────────

    { id: 501, year: 2013, theme: "Nanotechnology",
      question: "What is nanotechnology? How is it helping us in the health sector? Give examples of nanotechnology applications in disease diagnosis and treatment.",
      marks: 10, words: 150 },

    { id: 502, year: 2015, theme: "Nanotechnology",
      question: "Discuss the applications of nanotechnology in the field of clean water and sanitation. How can nanotechnology benefit a developing country like India in addressing water scarcity?",
      marks: 12.5, words: 200 },

    { id: 503, year: 2018, theme: "Nanotechnology",
      question: "Discuss the applications of nanotechnology in agriculture. How can nano-fertilisers and nano-pesticides contribute to improving crop yield while reducing environmental impact?",
      marks: 10, words: 150 },

    { id: 504, year: 2020, theme: "Nanotechnology",
      question: "Discuss the role of nanotechnology in targeted drug delivery systems. What are the advantages of nano-drug delivery systems over conventional drug delivery methods?",
      marks: 10, words: 150 },

    { id: 505, year: 2022, theme: "Nanotechnology",
      question: "Nanotechnology has the potential to address several developmental challenges faced by India. Discuss with specific examples in the areas of energy, environment and healthcare.",
      marks: 15, words: 250 },

    // ─── Health & Pharma Technology ───────────────────────────────────────────

    { id: 601, year: 2015, theme: "Health & Pharma",
      question: "Can overuse and indiscriminate use of antibiotics lead to the development of resistant bacteria? Are there other mechanisms by which bacteria can acquire resistance to antibiotics? Discuss what measures can be taken to address this problem.",
      marks: 12.5, words: 200 },

    { id: 602, year: 2018, theme: "Health & Pharma",
      question: "What are Fixed Dose Combinations (FDC) drugs? What are their advantages and disadvantages? What is the stand of the Indian government on the regulation of FDC drugs and what is the controversy surrounding it?",
      marks: 10, words: 150 },

    { id: 603, year: 2020, theme: "Health & Pharma",
      question: "Discuss the role of India in global vaccine production. What has been the significance of India's pharmaceutical sector during the COVID-19 pandemic?",
      marks: 10, words: 150 },

    { id: 604, year: 2021, theme: "Health & Pharma",
      question: "Discuss the COVID-19 pandemic from the perspective of technology in disease management. What lessons should India draw for future pandemic preparedness from the experience of COVID-19?",
      marks: 15, words: 250 },

    { id: 605, year: 2022, theme: "Health & Pharma",
      question: "How do telemedicine and digital health technologies improve healthcare access in rural areas? Discuss the challenges in scaling up digital health in India.",
      marks: 15, words: 250 },

    { id: 606, year: 2023, theme: "Health & Pharma",
      question: "Discuss the growing problem of antimicrobial resistance (AMR) in India. What are the measures that need to be taken at national and international levels to address the AMR crisis?",
      marks: 15, words: 250 },

    // ─── Intellectual Property Rights ─────────────────────────────────────────

    { id: 701, year: 2014, theme: "Intellectual Property Rights",
      question: "What is meant by 'Intellectual Property'? What are the main types of intellectual property rights (IPRs)? How do IPRs promote innovation and how can they also hinder access to essential technologies?",
      marks: 10, words: 150 },

    { id: 702, year: 2017, theme: "Intellectual Property Rights",
      question: "India's Traditional Knowledge Digital Library (TKDL) is a pioneering initiative to protect India's traditional knowledge from bio-piracy. Explain the significance of TKDL. How has it helped India at international patent offices?",
      marks: 10, words: 150 },

    { id: 703, year: 2018, theme: "Intellectual Property Rights",
      question: "What are the provisions for compulsory licensing under India's Patents Act? How has India used compulsory licensing in the pharmaceutical sector to improve access to essential medicines?",
      marks: 10, words: 150 },

    { id: 704, year: 2019, theme: "Intellectual Property Rights",
      question: "What is Section 3(d) of the Indian Patents Act? How has it been used to prevent 'ever-greening' of drug patents? What is the significance of this provision for public health in India and the developing world?",
      marks: 10, words: 150 },

    { id: 705, year: 2021, theme: "Intellectual Property Rights",
      question: "Discuss the challenges in protecting India's traditional knowledge from misappropriation in the digital age. What legislative and administrative measures are needed to strengthen the protection of traditional knowledge?",
      marks: 10, words: 150 },

    { id: 706, year: 2023, theme: "Intellectual Property Rights",
      question: "Discuss the tensions between intellectual property rights and access to essential medicines, particularly in the context of developing countries. How can these tensions be resolved?",
      marks: 15, words: 250 },

    // ─── Climate & Environment Technology ────────────────────────────────────

    { id: 801, year: 2014, theme: "Climate & Environment",
      question: "India is one of the top emitters of greenhouse gases in the world. What technological and policy measures can India adopt to transition to a low-carbon economy while maintaining its growth trajectory?",
      marks: 10, words: 150 },

    { id: 802, year: 2016, theme: "Climate & Environment",
      question: "Discuss the concept of 'Green Technology'. How can India leverage green technology for achieving its Sustainable Development Goals (SDGs)?",
      marks: 12.5, words: 200 },

    { id: 803, year: 2017, theme: "Climate & Environment",
      question: "The Paris Agreement aims to limit global warming to 1.5°C above pre-industrial levels. Discuss the role of technology and innovation in helping India meet its climate commitments under the Paris Agreement.",
      marks: 10, words: 150 },

    { id: 804, year: 2019, theme: "Climate & Environment",
      question: "What is the significance of the concept of 'circular economy' for India? How can technology help in transitioning India from a linear to a circular economy?",
      marks: 10, words: 150 },

    { id: 805, year: 2021, theme: "Climate & Environment",
      question: "Discuss the role of Carbon Capture and Storage (CCS) technology in achieving net-zero emissions. What are the prospects and challenges of deploying CCS at scale in India?",
      marks: 15, words: 250 },

    { id: 806, year: 2022, theme: "Climate & Environment",
      question: "What are green hydrogen and blue hydrogen? What is their significance for India's energy transition? Discuss the National Green Hydrogen Mission and its objectives.",
      marks: 15, words: 250 },

    { id: 807, year: 2023, theme: "Climate & Environment",
      question: "Discuss India's commitment to achieving net-zero carbon emissions by 2070. What are the technological, economic and social challenges in this transition?",
      marks: 15, words: 250 },

    { id: 808, year: 2024, theme: "Climate & Environment",
      question: "What is the concept of climate engineering or geo-engineering? What are the proposed techniques for solar radiation management and carbon dioxide removal? What are the risks and governance challenges?",
      marks: 15, words: 250 },

];

// Flatten for easy access and create theme-wise lookup
const scienceMainsThemes = [...new Set(scienceMainsQuestions.map(q => q.theme))];
