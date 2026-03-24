// UPSC Mains GS Paper 3 — Environment & Ecology Questions (2013–2024)

const environmentMainsQuestions = [

    // ─── Biodiversity & Conservation ─────────────────────────────────────────

    { id: 101, year: 2013, theme: "Biodiversity & Conservation",
      question: "How does the biodiversity vary in India from region to region? Suggest measures that should be taken for conservation of biodiversity.",
      marks: 10, words: 150 },

    { id: 102, year: 2014, theme: "Biodiversity & Conservation",
      question: "What is the significance of the term 'Biodiversity Hotspot'? Name the biodiversity hotspots in India. What measures have been taken for the conservation of these hotspots?",
      marks: 10, words: 150 },

    { id: 103, year: 2015, theme: "Biodiversity & Conservation",
      question: "What is the Nagoya Protocol? What are its aims and objectives? How is India implementing the Nagoya Protocol through its domestic legislation?",
      marks: 12.5, words: 200 },

    { id: 104, year: 2016, theme: "Biodiversity & Conservation",
      question: "Discuss the role of Biodiversity Management Committees (BMCs) and People's Biodiversity Registers (PBRs) in the conservation and sustainable use of biological diversity in India.",
      marks: 12.5, words: 200 },

    { id: 105, year: 2018, theme: "Biodiversity & Conservation",
      question: "What are the challenges in conserving wildlife in India? Discuss the role of community-based conservation in protecting India's wildlife heritage.",
      marks: 10, words: 150 },

    { id: 106, year: 2020, theme: "Biodiversity & Conservation",
      question: "Discuss the impact of COVID-19 on biodiversity and environment. Has the pandemic offered any lessons for conservation strategies?",
      marks: 15, words: 250 },

    { id: 107, year: 2022, theme: "Biodiversity & Conservation",
      question: "What is the Kunming-Montreal Global Biodiversity Framework? Discuss its targets and India's commitments under it.",
      marks: 15, words: 250 },

    { id: 108, year: 2024, theme: "Biodiversity & Conservation",
      question: "Discuss the role of mangrove ecosystems in climate change mitigation and coastal protection. What steps has India taken for mangrove conservation?",
      marks: 15, words: 250 },

    // ─── Climate Change ──────────────────────────────────────────────────────

    { id: 201, year: 2013, theme: "Climate Change",
      question: "What are the consequences of climate change on the food security of India? Discuss.",
      marks: 10, words: 150 },

    { id: 202, year: 2014, theme: "Climate Change",
      question: "What are the major features of the National Action Plan on Climate Change (NAPCC)? Discuss the achievements of NAPCC since its inception.",
      marks: 10, words: 150 },

    { id: 203, year: 2015, theme: "Climate Change",
      question: "Discuss India's Intended Nationally Determined Contributions (INDCs) in the context of the Paris Agreement. How ambitious are India's targets compared to other major emitters?",
      marks: 12.5, words: 200 },

    { id: 204, year: 2017, theme: "Climate Change",
      question: "Discuss the causes and consequences of rising sea levels for India's coastal states. What adaptation strategies should India adopt?",
      marks: 10, words: 150 },

    { id: 205, year: 2019, theme: "Climate Change",
      question: "How will the melting of Himalayan glaciers impact India's water security? Discuss the steps India should take to mitigate this threat.",
      marks: 10, words: 150 },

    { id: 206, year: 2021, theme: "Climate Change",
      question: "Discuss India's net-zero emission target of 2070. What are the challenges and opportunities in achieving this goal?",
      marks: 15, words: 250 },

    { id: 207, year: 2023, theme: "Climate Change",
      question: "What is the significance of 'Loss and Damage' fund agreed at COP27? How will it benefit climate-vulnerable countries including India?",
      marks: 15, words: 250 },

    { id: 208, year: 2024, theme: "Climate Change",
      question: "What are carbon markets? Discuss India's Carbon Credit Trading Scheme (CCTS) and its potential in India's transition to a low-carbon economy.",
      marks: 15, words: 250 },

    // ─── Pollution & Waste ───────────────────────────────────────────────────

    { id: 301, year: 2013, theme: "Pollution & Waste",
      question: "What are the major sources of air pollution in Indian cities? Discuss the effectiveness of the National Clean Air Programme (NCAP).",
      marks: 10, words: 150 },

    { id: 302, year: 2015, theme: "Pollution & Waste",
      question: "Discuss the problem of solid waste management in India. What reforms are needed to manage municipal solid waste effectively?",
      marks: 12.5, words: 200 },

    { id: 303, year: 2017, theme: "Pollution & Waste",
      question: "Critically examine the issues related to e-waste management in India. What are the provisions of the E-Waste Management Rules, 2016?",
      marks: 10, words: 150 },

    { id: 304, year: 2019, theme: "Pollution & Waste",
      question: "Discuss the threat of microplastics to marine ecosystems and human health. What steps should India take to address plastic pollution?",
      marks: 10, words: 150 },

    { id: 305, year: 2021, theme: "Pollution & Waste",
      question: "Discuss the impact of stubble burning on air quality in North India. What are the technological and policy solutions to address this problem?",
      marks: 15, words: 250 },

    { id: 306, year: 2023, theme: "Pollution & Waste",
      question: "Critically analyze India's ban on single-use plastics. Has it been effective? What further measures are needed?",
      marks: 15, words: 250 },

    // ─── Environmental Law & Governance ──────────────────────────────────────

    { id: 401, year: 2014, theme: "Environmental Law",
      question: "Critically examine the role of the National Green Tribunal in environmental governance in India. What are its achievements and limitations?",
      marks: 10, words: 150 },

    { id: 402, year: 2016, theme: "Environmental Law",
      question: "Discuss the provisions of the Forest Rights Act, 2006. How has it impacted the lives of forest-dwelling communities?",
      marks: 12.5, words: 200 },

    { id: 403, year: 2018, theme: "Environmental Law",
      question: "What are the concerns regarding the draft Environment Impact Assessment (EIA) Notification, 2020? How does it differ from the EIA Notification, 2006?",
      marks: 10, words: 150 },

    { id: 404, year: 2020, theme: "Environmental Law",
      question: "Discuss the role of the Compensatory Afforestation Fund Management and Planning Authority (CAMPA) in forest conservation. What are the challenges in its implementation?",
      marks: 15, words: 250 },

    { id: 405, year: 2022, theme: "Environmental Law",
      question: "Analyze the amendments to the Forest Conservation Act and their implications for India's environmental governance and development needs.",
      marks: 15, words: 250 },

    // ─── Sustainable Development ─────────────────────────────────────────────

    { id: 501, year: 2013, theme: "Sustainable Development",
      question: "What is the concept of sustainable development? How can India achieve its development goals while maintaining environmental sustainability?",
      marks: 10, words: 150 },

    { id: 502, year: 2015, theme: "Sustainable Development",
      question: "Discuss the role of renewable energy in India's energy transition. What are the challenges in scaling up solar and wind energy?",
      marks: 12.5, words: 200 },

    { id: 503, year: 2018, theme: "Sustainable Development",
      question: "What is the significance of the International Solar Alliance for global energy security? Discuss India's role in establishing this initiative.",
      marks: 10, words: 150 },

    { id: 504, year: 2020, theme: "Sustainable Development",
      question: "What is the circular economy? Discuss its relevance for India's sustainable development agenda. What policy interventions are needed?",
      marks: 15, words: 250 },

    { id: 505, year: 2022, theme: "Sustainable Development",
      question: "Discuss the National Green Hydrogen Mission and its significance for India's clean energy transition and energy security.",
      marks: 15, words: 250 },

    { id: 506, year: 2024, theme: "Sustainable Development",
      question: "What is the concept of 'Just Transition' in the context of India's shift to renewable energy? How can India ensure that this transition is equitable?",
      marks: 15, words: 250 },

    // ─── Water & River Conservation ──────────────────────────────────────────

    { id: 601, year: 2014, theme: "Water Conservation",
      question: "Discuss the significance of Namami Gange Programme. What are its objectives and achievements?",
      marks: 10, words: 150 },

    { id: 602, year: 2016, theme: "Water Conservation",
      question: "Discuss the challenges to India's water security. What steps should be taken for sustainable water resource management?",
      marks: 12.5, words: 200 },

    { id: 603, year: 2019, theme: "Water Conservation",
      question: "Critically examine the Inter-Linking of Rivers (ILR) project. What are the ecological and social concerns associated with it?",
      marks: 10, words: 150 },

    { id: 604, year: 2021, theme: "Water Conservation",
      question: "Discuss the role of traditional water harvesting systems in addressing India's water crisis. How can they complement modern water management techniques?",
      marks: 15, words: 250 },

    { id: 605, year: 2023, theme: "Water Conservation",
      question: "What is the significance of groundwater management for India's food security? Discuss the measures taken by the government to regulate groundwater extraction.",
      marks: 15, words: 250 },

];

// Flatten for easy access and create theme-wise lookup
const environmentMainsThemes = [...new Set(environmentMainsQuestions.map(q => q.theme))];
