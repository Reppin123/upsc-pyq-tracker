// UPSC Polity Data - Syllabus, PYQs (all 216), and Mains Questions

const polityData = {
    syllabus: {
        prelims: [
            "Constitution's historical evolution and Constituent Assembly",
            "Preamble and its key values",
            "Salient features (unitary/federal aspects, parliamentary system)",
            "Citizenship acquisition and loss",
            "Fundamental Rights (Articles covering equality, freedom, exploitation, religion)",
            "Directive Principles of State Policy",
            "Fundamental Duties",
            "President: qualifications, election, powers, impeachment",
            "Prime Minister: appointment, functions",
            "Vice President and Cabinet roles",
            "Parliament composition and legislative procedures",
            "Supreme Court jurisdiction and composition",
            "High Courts and lower judiciary",
            "Judicial review and PIL concepts",
            "Election Commission functions",
            "Representation of People Act provisions",
            "Political parties and electoral reforms",
            "State reorganization processes",
            "Division of powers (Union/State/Concurrent lists)",
            "Governor's role and appointment",
            "Financial devolution mechanisms"
        ],
        mains: [
            "'Basic structure' doctrine and constitutional amendments",
            "Separation of powers vs. checks and balances",
            "Federalism implementation challenges",
            "Emergency provisions and Article 356 misuse",
            "Administrative bodies (CAG, Election Commission, UPSC, Finance Commission)",
            "Tribunals and quasi-judicial mechanisms",
            "Lokpal/Lokayukta frameworks",
            "Civil service roles in democracy",
            "Vulnerable sections (SC/ST/OBC/women/disabled/minorities)",
            "Poverty, hunger, health policies",
            "Gender equality and reservations",
            "Welfare schemes (MGNREGA, Ayushman Bharat, etc.)",
            "73rd and 74th Constitutional Amendments",
            "Municipal structures and panchayati raj",
            "Women's empowerment mechanisms",
            "Disaster management at local levels",
            "E-governance models and challenges",
            "Citizens' charters implementation",
            "Digital India initiatives",
            "Social media and accountability"
        ]
    },

    // Organize questions by microtheme from the complete questions file
    microthemes: [
        {
            id: 1,
            name: "Political Theory",
            questionCount: 21,
            questions: polityQuestions.filter(q => q.microtheme === "Political Theory")
        },
        {
            id: 2,
            name: "Fundamental Rights and Duties",
            questionCount: 20,
            questions: polityQuestions.filter(q => q.microtheme === "Fundamental Rights and Duties")
        },
        {
            id: 3,
            name: "Judiciary",
            questionCount: 19,
            questions: polityQuestions.filter(q => q.microtheme === "Judiciary")
        },
        {
            id: 4,
            name: "DPSP",
            questionCount: 12,
            questions: polityQuestions.filter(q => q.microtheme === "DPSP")
        },
        {
            id: 5,
            name: "Schedules/Parts",
            questionCount: 11,
            questions: polityQuestions.filter(q => q.microtheme === "Schedules/Parts")
        },
        {
            id: 6,
            name: "Union and State Executive",
            questionCount: 11,
            questions: polityQuestions.filter(q => q.microtheme === "Union and State Executive")
        },
        {
            id: 7,
            name: "Parliament Procedures",
            questionCount: 10,
            questions: polityQuestions.filter(q => q.microtheme === "ParliamentxProcedures")
        },
        {
            id: 8,
            name: "5th & 6th Schedules",
            questionCount: 8,
            questions: polityQuestions.filter(q => q.microtheme === "5th & 6th Schedules")
        },
        {
            id: 9,
            name: "Local Self-Government",
            questionCount: 9,
            questions: polityQuestions.filter(q => q.microtheme === "Local Self-Government")
        },
        {
            id: 10,
            name: "Nature of Bills",
            questionCount: 9,
            questions: polityQuestions.filter(q => q.microtheme === "Nature of Bills")
        },
        {
            id: 11,
            name: "Non-Constitutional/Statutory Bodies",
            questionCount: 8,
            questions: polityQuestions.filter(q => q.microtheme === "Non-Constitutional/Statutory Bodies")
        },
        {
            id: 12,
            name: "Amendment",
            questionCount: 7,
            questions: polityQuestions.filter(q => q.microtheme === "Amendment")
        },
        {
            id: 13,
            name: "Parliament Houses",
            questionCount: 6,
            questions: polityQuestions.filter(q => q.microtheme === "ParliamentXHouses")
        },
        {
            id: 14,
            name: "Constitutional Bodies",
            questionCount: 7,
            questions: polityQuestions.filter(q => q.microtheme === "Constitutional Bodies")
        },
        {
            id: 15,
            name: "Governor",
            questionCount: 7,
            questions: polityQuestions.filter(q => q.microtheme === "Governor")
        },
        {
            id: 16,
            name: "Federalism",
            questionCount: 4,
            questions: polityQuestions.filter(q => q.microtheme === "Federalism")
        },
        {
            id: 17,
            name: "Parliament Budget",
            questionCount: 5,
            questions: polityQuestions.filter(q => q.microtheme === "ParliamentxBudget")
        },
        {
            id: 18,
            name: "Parliament Committees",
            questionCount: 4,
            questions: polityQuestions.filter(q => q.microtheme === "ParliamentXCommittees")
        },
        {
            id: 19,
            name: "Parliament Presiding Officers",
            questionCount: 5,
            questions: polityQuestions.filter(q => q.microtheme === "ParliamentxPresiding Officers")
        },
        {
            id: 20,
            name: "President Powers",
            questionCount: 5,
            questions: polityQuestions.filter(q => q.microtheme === "President Powers")
        },
        {
            id: 21,
            name: "RPA, Elections",
            questionCount: 5,
            questions: polityQuestions.filter(q => q.microtheme === "RPA, Elections")
        },
        {
            id: 22,
            name: "Political Parties",
            questionCount: 4,
            questions: polityQuestions.filter(q => q.microtheme === "Political Parties")
        },
        {
            id: 23,
            name: "Preamble",
            questionCount: 4,
            questions: polityQuestions.filter(q => q.microtheme === "Preamble")
        },
        {
            id: 24,
            name: "President Election",
            questionCount: 3,
            questions: polityQuestions.filter(q => q.microtheme === "President Election")
        },
        {
            id: 25,
            name: "Alternate Dispute Resolution",
            questionCount: 3,
            questions: polityQuestions.filter(q => q.microtheme === "Alternate Dispute Resolution")
        },
        {
            id: 26,
            name: "Emergency",
            questionCount: 2,
            questions: polityQuestions.filter(q => q.microtheme === "Emergency")
        },
        {
            id: 27,
            name: "Attorney General",
            questionCount: 2,
            questions: polityQuestions.filter(q => q.microtheme === "Attorney General")
        },
        {
            id: 28,
            name: "Writs",
            questionCount: 2,
            questions: polityQuestions.filter(q => q.microtheme === "Writs")
        },
        {
            id: 29,
            name: "Citizenship",
            questionCount: 1,
            questions: polityQuestions.filter(q => q.microtheme === "Citizenship")
        },
        {
            id: 30,
            name: "States Reorganization",
            questionCount: 1,
            questions: polityQuestions.filter(q => q.microtheme === "States Reorganization")
        },
        {
            id: 31,
            name: "Tribunals",
            questionCount: 1,
            questions: polityQuestions.filter(q => q.microtheme === "Tribunals")
        }
    ],

    // All Mains Questions organized chronologically with topic tags
    // Merged from multiple sources: ForumIAS (100+ questions) + curated questions
    allMainsQuestions: [
        // ForumIAS Questions (2013-2025) - 100+ comprehensive questions
        ...forumIASMainsQuestions,

        // Additional curated questions below
        // 2024
        {
            year: 2024,
            question: "Discuss the evolution of the 'Basic Structure' doctrine in Indian constitutional law. How has it shaped the powers of Parliament to amend the Constitution?",
            marks: 10,
            topics: ["Constitutional Amendments", "Judiciary", "Basic Structure"]
        },
        {
            year: 2024,
            question: "Analyze the federal structure of the Indian Constitution. How does it differ from classical federalism?",
            marks: 15,
            topics: ["Federalism", "Union-State Relations"]
        },
        {
            year: 2024,
            question: "Evaluate the working of the 73rd and 74th Constitutional Amendments. Have they succeeded in decentralizing power to the grassroots level?",
            marks: 15,
            topics: ["Local Governance", "Panchayati Raj", "Constitutional Amendments"]
        },
        {
            year: 2024,
            question: "Distinguish between judicial activism and judicial overreach. Discuss with examples from recent Supreme Court judgments.",
            marks: 15,
            topics: ["Judiciary", "Judicial Review", "Separation of Powers"]
        },
        {
            year: 2024,
            question: "Examine the role of the Comptroller and Auditor General (CAG) in ensuring financial accountability and transparency in government functioning.",
            marks: 10,
            topics: ["Constitutional Bodies", "Financial Administration"]
        },

        // 2023
        {
            year: 2023,
            question: "Can Parliament amend the Preamble of the Constitution? Discuss with reference to relevant judicial pronouncements.",
            marks: 10,
            topics: ["Preamble", "Constitutional Amendments", "Judiciary"]
        },
        {
            year: 2023,
            question: "Examine the doctrine of separation of powers in the Indian context. How does the system of checks and balances work among the three organs of government?",
            marks: 15,
            topics: ["Separation of Powers", "Legislature", "Executive", "Judiciary"]
        },
        {
            year: 2023,
            question: "Discuss the justiciability of Directive Principles of State Policy. Can they override Fundamental Rights?",
            marks: 10,
            topics: ["DPSP", "Fundamental Rights", "Constitutional Law"]
        },
        {
            year: 2023,
            question: "Analyze the significance of Article 370 and its abrogation. What were the constitutional and political implications?",
            marks: 15,
            topics: ["Federalism", "Constitutional Amendments", "Special Provisions"]
        },
        {
            year: 2023,
            question: "Examine the role of the Election Commission in ensuring free and fair elections. Discuss the challenges it faces.",
            marks: 10,
            topics: ["Constitutional Bodies", "Elections", "Democracy"]
        },

        // 2022
        {
            year: 2022,
            question: "Discuss the significance of the National Judicial Appointments Commission (NJAC) judgment. What does it tell us about the balance between judicial independence and accountability?",
            marks: 15,
            topics: ["Judiciary", "Constitutional Amendments", "Separation of Powers"]
        },
        {
            year: 2022,
            question: "Explain the concept of 'Cooperative Federalism' in the Indian context. How has it evolved over the years?",
            marks: 10,
            topics: ["Federalism", "Union-State Relations"]
        },
        {
            year: 2022,
            question: "Critically examine the role of the Governor in a state. Has the office been politicized?",
            marks: 10,
            topics: ["Governor", "State Executive", "Federalism"]
        },
        {
            year: 2022,
            question: "Discuss the importance of Parliamentary Committees in the legislative process. How do they ensure accountability?",
            marks: 10,
            topics: ["Parliament", "Legislative Process", "Accountability"]
        },
        {
            year: 2022,
            question: "Examine the constitutional provisions related to the emergency. Are there adequate safeguards against their misuse?",
            marks: 15,
            topics: ["Emergency", "Constitutional Provisions", "Fundamental Rights"]
        },

        // 2021
        {
            year: 2021,
            question: "Discuss the concept of 'Equality before Law' and 'Equal Protection of Law' as enshrined in Article 14 of the Constitution.",
            marks: 10,
            topics: ["Fundamental Rights", "Right to Equality", "Constitutional Law"]
        },
        {
            year: 2021,
            question: "Analyze the role of the President of India in the parliamentary system. Is the President merely a nominal head?",
            marks: 10,
            topics: ["President", "Executive", "Parliamentary System"]
        },
        {
            year: 2021,
            question: "Examine the provisions related to the Goods and Services Tax (GST) in the Constitution. How has it impacted Centre-State financial relations?",
            marks: 15,
            topics: ["Federalism", "Financial Relations", "Constitutional Amendments"]
        },
        {
            year: 2021,
            question: "Discuss the importance of Public Interest Litigation (PIL) in protecting fundamental rights. Has the concept been misused?",
            marks: 10,
            topics: ["Judiciary", "Fundamental Rights", "PIL"]
        },
        {
            year: 2021,
            question: "Evaluate the role of the Finance Commission in fiscal federalism.",
            marks: 10,
            topics: ["Finance Commission", "Federalism", "Financial Relations"]
        },

        // 2020
        {
            year: 2020,
            question: "Critically examine the Right to Privacy as a Fundamental Right in India. Discuss its scope and limitations.",
            marks: 15,
            topics: ["Fundamental Rights", "Right to Privacy", "Article 21"]
        },
        {
            year: 2020,
            question: "Discuss the anti-defection law in India. Has it been effective in curbing political defections?",
            marks: 10,
            topics: ["Parliament", "Political Parties", "10th Schedule"]
        },
        {
            year: 2020,
            question: "Examine the concept of 'Secularism' as incorporated in the Indian Constitution. How does it differ from Western secularism?",
            marks: 10,
            topics: ["Preamble", "Secularism", "Constitutional Philosophy"]
        },
        {
            year: 2020,
            question: "Analyze the role of the Attorney General of India. What is the difference between the Attorney General and Solicitor General?",
            marks: 10,
            topics: ["Law Officers", "Executive", "Constitutional Provisions"]
        },
        {
            year: 2020,
            question: "Discuss the constitutional provisions related to Scheduled Castes and Scheduled Tribes. Evaluate their effectiveness.",
            marks: 15,
            topics: ["Social Justice", "Reservation", "Constitutional Provisions"]
        },

        // 2019
        {
            year: 2019,
            question: "Discuss the concept of 'Rule of Law' and its importance in a democracy.",
            marks: 10,
            topics: ["Constitutional Philosophy", "Democracy", "Governance"]
        },
        {
            year: 2019,
            question: "Examine the role of the Rajya Sabha in the Indian parliamentary system. Is it necessary?",
            marks: 10,
            topics: ["Parliament", "Rajya Sabha", "Federalism"]
        },
        {
            year: 2019,
            question: "Discuss the significance of Fundamental Duties. Should they be made enforceable?",
            marks: 10,
            topics: ["Fundamental Duties", "Constitutional Law"]
        },
        {
            year: 2019,
            question: "Analyze the powers and functions of the Lok Sabha Speaker. How does the Speaker ensure neutrality?",
            marks: 10,
            topics: ["Parliament", "Speaker", "Parliamentary Procedures"]
        },
        {
            year: 2019,
            question: "Examine the concept of 'Money Bill' under Article 110. Discuss the Aadhaar judgment in this context.",
            marks: 15,
            topics: ["Parliament", "Financial Legislation", "Judiciary"]
        },

        // 2018
        {
            year: 2018,
            question: "Discuss the doctrine of 'Separation of Powers' as applicable to the Indian Constitution.",
            marks: 10,
            topics: ["Separation of Powers", "Constitutional Law", "Governance"]
        },
        {
            year: 2018,
            question: "Examine the provisions related to the appointment of judges to the Supreme Court and High Courts. Discuss the collegium system.",
            marks: 15,
            topics: ["Judiciary", "Appointment of Judges", "Constitutional Provisions"]
        },
        {
            year: 2018,
            question: "Analyze the constitutional provisions related to freedom of speech and expression. What are the reasonable restrictions?",
            marks: 10,
            topics: ["Fundamental Rights", "Article 19", "Freedom of Speech"]
        },
        {
            year: 2018,
            question: "Discuss the role of the Union Public Service Commission (UPSC) in maintaining the integrity of civil services.",
            marks: 10,
            topics: ["Constitutional Bodies", "UPSC", "Civil Services"]
        },
        {
            year: 2018,
            question: "Examine the concept of 'Judicial Review' in India. Compare it with the judicial review in the United States.",
            marks: 15,
            topics: ["Judiciary", "Judicial Review", "Comparative Constitution"]
        },

        // 2017
        {
            year: 2017,
            question: "Discuss the importance of the Preamble to the Constitution. Can it be amended?",
            marks: 10,
            topics: ["Preamble", "Constitutional Amendments", "Constitutional Law"]
        },
        {
            year: 2017,
            question: "Examine the provisions related to reservation for women in Parliament and State Legislatures.",
            marks: 10,
            topics: ["Reservation", "Women Empowerment", "Legislative Reforms"]
        },
        {
            year: 2017,
            question: "Analyze the role of the Vice President of India. How is the Vice President elected?",
            marks: 10,
            topics: ["Vice President", "Executive", "Constitutional Provisions"]
        },
        {
            year: 2017,
            question: "Discuss the constitutional provisions related to Official Language. Examine the status of Hindi as the official language.",
            marks: 10,
            topics: ["Official Language", "Constitutional Provisions", "Cultural Aspects"]
        },
        {
            year: 2017,
            question: "Examine the concept of 'Equality before Law' and 'Equal Protection of Law' with case law examples.",
            marks: 15,
            topics: ["Fundamental Rights", "Article 14", "Judiciary"]
        },

        // 2016
        {
            year: 2016,
            question: "Discuss the significance of Article 21 (Right to Life and Personal Liberty). How has the Supreme Court expanded its scope?",
            marks: 15,
            topics: ["Fundamental Rights", "Article 21", "Judicial Activism"]
        },
        {
            year: 2016,
            question: "Examine the constitutional provisions related to the division of powers between the Union and States.",
            marks: 10,
            topics: ["Federalism", "Union-State Relations", "7th Schedule"]
        },
        {
            year: 2016,
            question: "Analyze the role of the Council of Ministers in the parliamentary system of India.",
            marks: 10,
            topics: ["Executive", "Council of Ministers", "Parliamentary System"]
        },
        {
            year: 2016,
            question: "Discuss the provisions related to the amendment of the Constitution. What are the different procedures?",
            marks: 10,
            topics: ["Constitutional Amendments", "Article 368", "Legislative Process"]
        },
        {
            year: 2016,
            question: "Examine the role of the State Election Commission in conducting elections to Panchayats and Municipalities.",
            marks: 10,
            topics: ["Elections", "Local Governance", "Constitutional Bodies"]
        },

        // 2015
        {
            year: 2015,
            question: "Discuss the concept of 'Fraternity' as enshrined in the Preamble of the Constitution.",
            marks: 10,
            topics: ["Preamble", "Constitutional Philosophy", "Social Cohesion"]
        },
        {
            year: 2015,
            question: "Examine the provisions related to the protection of interests of minorities.",
            marks: 10,
            topics: ["Fundamental Rights", "Minority Rights", "Social Justice"]
        },
        {
            year: 2015,
            question: "Analyze the concept of 'Constitutional Morality' and its relevance in contemporary times.",
            marks: 15,
            topics: ["Constitutional Philosophy", "Judiciary", "Constitutional Law"]
        },
        {
            year: 2015,
            question: "Discuss the role of the Prime Minister in the parliamentary system. How is the Prime Minister different from the President?",
            marks: 10,
            topics: ["Executive", "Prime Minister", "Parliamentary System"]
        },
        {
            year: 2015,
            question: "Examine the provisions related to the proclamation of Emergency under the Constitution.",
            marks: 10,
            topics: ["Emergency", "Constitutional Provisions", "Executive Powers"]
        },

        // 2014
        {
            year: 2014,
            question: "Discuss the federal structure of the Indian Constitution. Is India a true federation?",
            marks: 15,
            topics: ["Federalism", "Constitutional Structure", "Unitary Features"]
        },
        {
            year: 2014,
            question: "Examine the role of the Directive Principles of State Policy in framing government policies.",
            marks: 10,
            topics: ["DPSP", "Governance", "Constitutional Provisions"]
        },
        {
            year: 2014,
            question: "Analyze the concept of 'Judicial Independence' and the measures to ensure it.",
            marks: 10,
            topics: ["Judiciary", "Judicial Independence", "Constitutional Safeguards"]
        },
        {
            year: 2014,
            question: "Discuss the provisions related to the protection of the environment under the Constitution.",
            marks: 10,
            topics: ["DPSP", "Fundamental Duties", "Environmental Law"]
        },
        {
            year: 2014,
            question: "Examine the role of the Comptroller and Auditor General (CAG) in the financial administration of India.",
            marks: 10,
            topics: ["Constitutional Bodies", "CAG", "Financial Accountability"]
        },

        // 2013
        {
            year: 2013,
            question: "Discuss the concept of 'Democracy' as enshrined in the Indian Constitution.",
            marks: 10,
            topics: ["Constitutional Philosophy", "Democracy", "Preamble"]
        },
        {
            year: 2013,
            question: "Examine the provisions related to the Right to Constitutional Remedies under Article 32.",
            marks: 10,
            topics: ["Fundamental Rights", "Article 32", "Writs"]
        },
        {
            year: 2013,
            question: "Analyze the role of the President in the legislative process.",
            marks: 10,
            topics: ["President", "Legislative Process", "Parliamentary System"]
        },
        {
            year: 2013,
            question: "Discuss the provisions related to the administration of Scheduled Areas and Scheduled Tribes.",
            marks: 10,
            topics: ["5th Schedule", "6th Schedule", "Tribal Welfare"]
        },
        {
            year: 2013,
            question: "Examine the concept of 'Citizenship' under the Indian Constitution. How can citizenship be acquired and lost?",
            marks: 10,
            topics: ["Citizenship", "Constitutional Provisions", "CAA"]
        }
    ],

    // Mains Questions organized by topics (for topic-mapped view)
    mainsQuestions: {
        "Basic Structure Doctrine": [
            {
                year: 2024,
                question: "Discuss the evolution of the 'Basic Structure' doctrine in Indian constitutional law. How has it shaped the powers of Parliament to amend the Constitution?",
                marks: 10,
                modelAnswer: "The Basic Structure doctrine emerged through the landmark Kesavananda Bharati case (1973). It holds that certain fundamental features of the Constitution cannot be altered even through constitutional amendments. Key features include: supremacy of the Constitution, rule of law, independence of judiciary, separation of powers, federalism, secularism, and fundamental rights. This doctrine has limited Parliament's amending power under Article 368, ensuring constitutional democracy is preserved."
            },
            {
                year: 2023,
                question: "Can Parliament amend the Preamble of the Constitution? Discuss with reference to relevant judicial pronouncements.",
                marks: 10,
                modelAnswer: "Yes, Parliament can amend the Preamble. In the Kesavananda Bharati case (1973), the Supreme Court held that the Preamble is part of the Constitution and can be amended under Article 368. However, such amendment cannot alter the basic structure. The 42nd Amendment (1976) added 'Socialist', 'Secular', and 'Integrity' to the Preamble, demonstrating this power. The Preamble reflects the Constitution's philosophy and any amendment must maintain its core values."
            }
        ],
        "Fundamental Rights": [
            {
                year: 2025,
                question: "Critically examine the Right to Privacy as a Fundamental Right in India. Discuss its scope and limitations with reference to recent developments.",
                marks: 15,
                modelAnswer: "The Right to Privacy was recognized as a fundamental right under Article 21 in the Justice K.S. Puttaswamy case (2017). Key aspects:\n\n1. Scope: Includes informational privacy, bodily privacy, decisional autonomy, and freedom of movement\n2. Not absolute - subject to reasonable restrictions\n3. Three-fold test: legality, legitimate aim, and proportionality\n4. Recent developments: Aadhaar judgment, data protection laws, surveillance issues\n5. Limitations: National security, public order, and social welfare considerations\n\nThis right balances individual autonomy with state interests in the digital age."
            }
        ],
        "Federalism": [
            {
                year: 2024,
                question: "Analyze the federal structure of the Indian Constitution. How does it differ from classical federalism?",
                marks: 15,
                modelAnswer: "India follows a quasi-federal structure with unique features:\n\nFederal Features:\n- Written Constitution\n- Division of powers (Union, State, Concurrent lists)\n- Independent judiciary\n- Bicameralism\n\nUnitary Features:\n- Strong Center\n- Single Constitution\n- Appointment of Governors\n- Emergency provisions (Articles 352, 356, 360)\n- Single citizenship\n- Integrated judiciary\n\nDifferences from Classical Federalism:\n1. Not result of an agreement between states\n2. Asymmetric federalism (special status provisions)\n3. Union Parliament can create/abolish states\n4. Greater financial dependence of states\n5. All-India services\n\nThis unique model balances unity and diversity effectively."
            }
        ],
        "Separation of Powers": [
            {
                year: 2023,
                question: "Examine the doctrine of separation of powers in the Indian context. How does the system of checks and balances work among the three organs of government?",
                marks: 15,
                modelAnswer: "India follows a flexible separation of powers unlike the rigid U.S. model:\n\nLegislature:\n- Makes laws\n- Controls executive through confidence, questions, committees\n- Impeachment powers\n\nExecutive:\n- Implements laws\n- Part of legislature (parliamentary system)\n- Ordinance-making power\n\nJudiciary:\n- Interprets laws\n- Judicial review\n- Independence guaranteed\n\nChecks and Balances:\n1. Legislature: Can amend Constitution (subject to basic structure), impeach judges\n2. Executive: President's veto, power to dissolve Lok Sabha\n3. Judiciary: Can strike down unconstitutional laws, judicial review of executive actions\n\nRecent Issues:\n- Judicial overreach vs. activism\n- Collegium system\n- NJAC judgment\n\nThis system ensures no organ becomes absolute while maintaining functional efficiency."
            }
        ],
        "Electoral Reforms": [
            {
                year: 2025,
                question: "Discuss the need for electoral reforms in India. Suggest measures to make elections more transparent and fair.",
                marks: 15,
                modelAnswer: "Key Issues Requiring Reform:\n\n1. Criminalization of Politics:\n- Candidates with criminal backgrounds\n- Need for strict disqualification norms\n\n2. Money Power:\n- Unaccounted expenditure\n- Need for state funding of elections\n- Electoral bonds controversy\n\n3. Muscle Power:\n- Booth capturing\n- Voter intimidation\n\nSuggested Reforms:\n\n1. Institutional:\n- Strengthen Election Commission\n- Fast-track courts for electoral offenses\n- Inner-party democracy\n\n2. Legal:\n- Right to recall\n- Right to reject (NOTA strengthening)\n- Strict anti-defection law\n- Limit re-elections for candidates switching parties\n\n3. Financial:\n- Cap on poll expenses\n- Transparent funding\n- Ban on cash donations\n\n4. Administrative:\n- Simultaneous elections\n- Voter verification\n- Digital voting mechanisms\n\n5. Social:\n- Voter awareness campaigns\n- Civic education\n\nThese reforms will strengthen democratic participation and accountability."
            }
        ],
        "Local Governance": [
            {
                year: 2024,
                question: "Evaluate the working of the 73rd and 74th Constitutional Amendments. Have they succeeded in decentralizing power to the grassroots level?",
                marks: 15,
                modelAnswer: "73rd Amendment (Panchayati Raj) and 74th Amendment (Urban Local Bodies) were enacted in 1992 to strengthen local governance.\n\nKey Provisions:\n1. Constitutional status to local bodies\n2. Regular elections every 5 years\n3. Reservation for SC/ST, women (33%)\n4. State Finance Commission\n5. Devolution of functions (11th & 12th Schedules)\n\nAchievements:\n1. Political empowerment of marginalized groups\n2. Women's participation increased\n3. Better service delivery in some states\n4. Democratic decentralization\n\nChallenges:\n1. Inadequate devolution of funds, functions, functionaries (3Fs)\n2. State government reluctance\n3. Capacity constraints\n4. Dominance of local elites\n5. Irregular elections in some states\n6. Weak accountability mechanisms\n\nSuccess Factors:\n- Kerala, Karnataka show better results\n- Strong political will needed\n- Capacity building essential\n\nConclusion:\nWhile these amendments have created institutional framework, effective decentralization requires genuine power transfer and adequate resources."
            }
        ],
        "Directive Principles": [
            {
                year: 2023,
                question: "Discuss the justiciability of Directive Principles of State Policy. Can they override Fundamental Rights?",
                marks: 10,
                modelAnswer: "Directive Principles (Part IV) are non-justiciable guidelines for state policy.\n\nRelationship with Fundamental Rights:\n\n1. Early Position:\n- Champakam Dorairajan case (1951): Fundamental Rights prevail\n- Article 13: Laws violating Fundamental Rights are void\n\n2. Middle Phase:\n- Golaknath case (1967): FR cannot be amended\n- Created tension between Part III and Part IV\n\n3. Current Position:\n- Kesavananda Bharati (1973): Harmonious interpretation\n- Both are complementary\n- DPSPs can be used to interpret FR\n- 42nd Amendment: Added Article 31C - DPSP under Articles 39(b) and (c) can override FR under Articles 14 and 19\n- Minerva Mills (1980): Balanced approach - neither can have absolute primacy\n\nJusticiability:\n- Not directly enforceable\n- However, courts use them for:\n  - Interpreting statutes\n  - Judicial review\n  - Directive to government\n\nExamples:\n- Right to Education (Article 45 → Article 21A)\n- Environmental protection (Article 48A)\n- Uniform Civil Code (Article 44) - still debated\n\nConclusion:\nDPSPs and FRs work together to achieve constitutional goals - conscience of the Constitution."
            }
        ],
        "Parliamentary System": [
            {
                year: 2025,
                question: "Compare the parliamentary system in India with the presidential system. Do you think India should switch to a presidential system?",
                marks: 15,
                modelAnswer: "Parliamentary System (India, UK):\nFeatures:\n- Executive is part of legislature\n- Collective responsibility\n- Nominal head (President) vs Real head (PM)\n- Dissolution of lower house possible\n\nAdvantages:\n- Harmonious relations between executive and legislature\n- Flexible and responsive\n- Collective decision-making\n- Easy to change government\n\nDisadvantages:\n- Unstable governments (coalition era)\n- Less accountability of individual ministers\n- Frequent elections\n\nPresidential System (USA, France):\nFeatures:\n- Separation of powers\n- Fixed tenure\n- President is both head of state and government\n- No dissolution mechanism\n\nAdvantages:\n- Stable government\n- Clear accountability\n- Efficient decision-making\n\nDisadvantages:\n- Gridlock between executive and legislature\n- Rigid system\n- Winner-takes-all approach\n\nShould India Switch?\n\nArguments For:\n1. Stability and fixed tenure\n2. Strong leadership\n3. Better crisis management\n4. Direct accountability to people\n\nArguments Against:\n1. Parliamentary system suits India's diversity\n2. Successful for 75+ years\n3. Coalition culture encourages consensus\n4. Presidential system may concentrate power\n5. Risk of authoritarianism\n6. Current issues are implementation-related, not systemic\n\nConclusion:\nIndia's parliamentary system, with anti-defection law and evolved conventions, is appropriate for its federal, diverse democracy. Reforms should focus on strengthening existing system rather than wholesale change."
            }
        ],
        "Judicial Activism": [
            {
                year: 2024,
                question: "Distinguish between judicial activism and judicial overreach. Discuss with examples from recent Supreme Court judgments.",
                marks: 15,
                modelAnswer: "Judicial Activism:\nProactive role of judiciary in protecting rights and ensuring justice.\n\nPositive Aspects:\n1. Protection of Fundamental Rights\n2. Public Interest Litigation (PIL)\n3. Expanding Article 21 scope\n4. Social justice delivery\n\nExamples:\n- Vishaka Guidelines (sexual harassment)\n- Right to Privacy (Puttaswamy case)\n- Environmental protection (M.C. Mehta cases)\n- Right to Education\n- NALSA judgment (transgender rights)\n\nJudicial Overreach:\nJudiciary exceeding its constitutional mandate and encroaching on other organs.\n\nConcerns:\n1. Violation of separation of powers\n2. Policy-making by courts\n3. Executive functions by judiciary\n\nControversial Examples:\n1. NJAC Judgment:\n- Struck down constitutional amendment\n- Retained collegium system\n- Debate on judicial independence vs. accountability\n\n2. Coal Block Allocation:\n- Cancellation of allocations\n- Policy matters decided by court\n\n3. Liquor Ban on Highways:\n- Arbitrary distance criteria\n- Economic impact not considered\n\n4. 2G Spectrum Case:\n- Zero-loss theory rejected later\n- All licenses cancelled\n\n5. Administrative Matters:\n- Appointment of administrators\n- Monitoring committees\n- Running organizations (Jallikattu, crackers ban)\n\nBalance Required:\n- Courts should interpret, not legislate\n- Respect separation of powers\n- Activism needed for rights protection\n- Restraint needed in policy matters\n\nConclusion:\nJudicial activism is necessary for protecting constitutional values, but courts must exercise self-restraint to avoid overreach and maintain institutional balance."
            }
        ]
    }
};
