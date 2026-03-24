// Complete UPSC Mains GS Paper 2 - Polity Questions from ForumIAS (2013-2025)
// Total: 100+ questions

const forumIASMainsQuestions = [
    // 2025
    {
        year: 2025,
        question: "\"Constitutional morality is the fulcrum which acts as an essential check upon the high functionaries and citizens alike.\" Explain this concept and its application to judicial independence and accountability.",
        marks: 15,
        topics: ["Constitutional Philosophy", "Constitutional Morality", "Judiciary", "Judicial Independence"]
    },
    {
        year: 2025,
        question: "Examine procedural and substantive limitations on Parliament's amending power under Article 368.",
        marks: 15,
        topics: ["Constitutional Amendments", "Article 368", "Parliament", "Basic Structure"]
    },
    {
        year: 2025,
        question: "Compare President's pardon powers in India and USA. Are there limits? What are 'preemptive pardons'?",
        marks: 10,
        topics: ["President", "Executive Powers", "Comparative Constitution", "Pardoning Power"]
    },
    {
        year: 2025,
        question: "Discuss the nature of J&K Legislative Assembly post-2019 Reorganization Act. Describe powers and functions.",
        marks: 10,
        topics: ["Federalism", "Special Provisions", "J&K", "Legislative Assembly"]
    },
    {
        year: 2025,
        question: "Examine Centre-State financial relations patterns in planned development context and fiscal federalism reforms.",
        marks: 15,
        topics: ["Federalism", "Financial Relations", "Centre-State Relations", "Fiscal Federalism"]
    },
    {
        year: 2025,
        question: "Discuss collegium system evolution. Compare judge appointment systems in India vs USA.",
        marks: 15,
        topics: ["Judiciary", "Appointment of Judges", "Collegium System", "Comparative Constitution"]
    },
    {
        year: 2025,
        question: "Explain corrupt practices under Representation of People Act, 1951. Analyze whether disproportionate asset increases constitute undue influence.",
        marks: 10,
        topics: ["Elections", "RPA 1951", "Electoral Reforms", "Corrupt Practices"]
    },
    {
        year: 2025,
        question: "Discuss Attorney General's responsibilities, rights, and limitations.",
        marks: 10,
        topics: ["Law Officers", "Attorney General", "Executive", "Constitutional Provisions"]
    },

    // 2024
    {
        year: 2024,
        question: "Right to privacy under Article 21 - explain and discuss DNA testing for paternity establishment.",
        marks: 10,
        topics: ["Fundamental Rights", "Article 21", "Right to Privacy", "Personal Liberty"]
    },
    {
        year: 2024,
        question: "Analyze local bodies' governance role; discuss merging rural and urban local bodies - pros and cons.",
        marks: 15,
        topics: ["Local Governance", "Panchayati Raj", "Urban Local Bodies", "73rd Amendment", "74th Amendment"]
    },
    {
        year: 2024,
        question: "What recent Centre-State relation changes occurred? Suggest measures to strengthen federalism and build trust.",
        marks: 15,
        topics: ["Federalism", "Centre-State Relations", "Cooperative Federalism"]
    },
    {
        year: 2024,
        question: "Discuss India as a secular state; compare with US constitutional secularism.",
        marks: 10,
        topics: ["Secularism", "Preamble", "Comparative Constitution", "Constitutional Philosophy"]
    },
    {
        year: 2024,
        question: "\"Growth of cabinet system has marginalized parliamentary supremacy.\" Elaborate.",
        marks: 10,
        topics: ["Executive", "Cabinet", "Parliament", "Parliamentary System", "Parliamentary Supremacy"]
    },
    {
        year: 2024,
        question: "Explain PIL growth reasons. Has the Supreme Court become the world's most powerful judiciary?",
        marks: 15,
        topics: ["Judiciary", "PIL", "Judicial Activism", "Supreme Court"]
    },
    {
        year: 2024,
        question: "Assess CAG's duty - \"not merely legality of expenditure but also propriety.\"",
        marks: 10,
        topics: ["Constitutional Bodies", "CAG", "Financial Accountability", "Auditing"]
    },
    {
        year: 2024,
        question: "Distinguish Lok Adalats and Arbitration Tribunals. Do they handle civil and criminal cases?",
        marks: 10,
        topics: ["Alternate Dispute Resolution", "Lok Adalats", "Arbitration", "Judiciary"]
    },
    {
        year: 2024,
        question: "Examine electoral reform needs, particularly \"one nation-one election\" principle.",
        marks: 15,
        topics: ["Elections", "Electoral Reforms", "Simultaneous Elections"]
    },
    {
        year: 2024,
        question: "Discuss public examination unfair means prevention act (2024) - aims and university/board coverage.",
        marks: 10,
        topics: ["Governance", "Education Policy", "Legislation"]
    },

    // 2023
    {
        year: 2023,
        question: "Who receives free legal aid? Assess NALSA's role in rendering legal aid.",
        marks: 10,
        topics: ["Judiciary", "Legal Aid", "NALSA", "Access to Justice"]
    },
    {
        year: 2023,
        question: "\"Constitution is a living instrument with enormous dynamism.\" Illustrate through expanding horizons of Article 21.",
        marks: 15,
        topics: ["Fundamental Rights", "Article 21", "Judicial Interpretation", "Constitutional Dynamism"]
    },
    {
        year: 2023,
        question: "Explain constitutional gender justice perspectives using provisions and case laws.",
        marks: 15,
        topics: ["Gender Justice", "Fundamental Rights", "Social Justice", "Women Empowerment"]
    },
    {
        year: 2023,
        question: "Account for reduced Article 356 usage since mid-1990s.",
        marks: 15,
        topics: ["Emergency", "Article 356", "President's Rule", "Federalism"]
    },
    {
        year: 2023,
        question: "Explain 101st Constitutional Amendment's significance and federalism reflection.",
        marks: 15,
        topics: ["Constitutional Amendments", "GST", "101st Amendment", "Federalism", "Cooperative Federalism"]
    },
    {
        year: 2023,
        question: "Explain Parliamentary Committee structure. How far have financial committees institutionalized Parliament?",
        marks: 15,
        topics: ["Parliament", "Parliamentary Committees", "Financial Committees", "Legislative Process"]
    },
    {
        year: 2023,
        question: "\"Constitutional Morality is essential check upon high functionaries.\" Comment.",
        marks: 10,
        topics: ["Constitutional Philosophy", "Constitutional Morality", "Accountability"]
    },
    {
        year: 2023,
        question: "Discuss Presiding Officers' role in maintaining order and democratic practices in state legislatures.",
        marks: 10,
        topics: ["Legislature", "Presiding Officers", "Speaker", "State Legislatures"]
    },
    {
        year: 2023,
        question: "Discuss Competition Commission's role containing MNCs' dominant position abuse.",
        marks: 10,
        topics: ["Constitutional Bodies", "Competition Commission", "Regulatory Bodies"]
    },

    // 2022
    {
        year: 2022,
        question: "\"Right of movement and residence are freely available but not absolute.\" Comment.",
        marks: 10,
        topics: ["Fundamental Rights", "Article 19", "Right to Movement", "Reasonable Restrictions"]
    },
    {
        year: 2022,
        question: "Discuss Vice-President's role as Rajya Sabha chairman.",
        marks: 10,
        topics: ["Vice President", "Rajya Sabha", "Parliamentary System"]
    },
    {
        year: 2022,
        question: "Discuss Governor's legislative power conditions and ordinance re-promulgation legality.",
        marks: 15,
        topics: ["Governor", "State Legislature", "Ordinance", "Legislative Powers"]
    },
    {
        year: 2022,
        question: "Critically examine federal supremacy and harmonious construction principles emerging from distribution of legislative powers.",
        marks: 10,
        topics: ["Federalism", "Legislative Powers", "7th Schedule", "Constitutional Interpretation"]
    },
    {
        year: 2022,
        question: "Assess Parliamentary Standing Committees' effectiveness in maintaining administrative accountability.",
        marks: 15,
        topics: ["Parliament", "Standing Committees", "Accountability", "Parliamentary Oversight"]
    },
    {
        year: 2022,
        question: "Explain Legislative Council constitutional provisions. Review their working and status.",
        marks: 15,
        topics: ["Legislature", "Legislative Council", "Bicameralism", "State Legislatures"]
    },
    {
        year: 2022,
        question: "Assess Parliament's capacity ensuring executive accountability in India.",
        marks: 10,
        topics: ["Parliament", "Executive", "Accountability", "Parliamentary Control"]
    },
    {
        year: 2022,
        question: "Discuss election dispute procedures under Representation of People Act, 1951 and void election grounds.",
        marks: 15,
        topics: ["Elections", "RPA 1951", "Electoral Disputes", "Judiciary"]
    },
    {
        year: 2022,
        question: "Critically examine NJAC Act judgment regarding higher judiciary judge appointments.",
        marks: 10,
        topics: ["Judiciary", "NJAC", "Appointment of Judges", "Judicial Independence", "Basic Structure"]
    },
    {
        year: 2022,
        question: "Discuss Election Commission's role evolution through Model Code of Conduct.",
        marks: 15,
        topics: ["Constitutional Bodies", "Election Commission", "Model Code of Conduct", "Elections"]
    },
    {
        year: 2022,
        question: "Discuss environmental constitutionalization achievement through Supreme Court jurisprudence.",
        marks: 10,
        topics: ["Environmental Law", "Judiciary", "Article 21", "Judicial Activism"]
    },
    {
        year: 2022,
        question: "Discuss Presidential election procedures - India vs France comparison.",
        marks: 15,
        topics: ["President", "Presidential Election", "Comparative Constitution"]
    },
    {
        year: 2022,
        question: "Discuss National Commission for Backward Classes transformation from statutory to constitutional body.",
        marks: 10,
        topics: ["Constitutional Bodies", "NCBC", "Reservation", "102nd Amendment"]
    },

    // 2021
    {
        year: 2021,
        question: "\"Decentralization has changed governance landscape at grassroots.\" Assess extent.",
        marks: 10,
        topics: ["Local Governance", "Decentralization", "Panchayati Raj", "Governance"]
    },
    {
        year: 2021,
        question: "\"Constitutional Morality is rooted in constitution's essential facets.\" Explain doctrine with judicial decisions.",
        marks: 10,
        topics: ["Constitutional Philosophy", "Constitutional Morality", "Judiciary"]
    },
    {
        year: 2021,
        question: "Explain Coelho case holdings and judicial review as basic constitutional feature importance.",
        marks: 12.5,
        topics: ["Judiciary", "Judicial Review", "Basic Structure", "Coelho Case"]
    },
    {
        year: 2021,
        question: "\"National political parties favor centralization; regional parties favor state autonomy.\" Comment.",
        marks: 15,
        topics: ["Political Parties", "Federalism", "Centre-State Relations"]
    },
    {
        year: 2021,
        question: "Explain CBI jurisdiction questioned by states regarding FIR and probes; analyze state consent power limits.",
        marks: 15,
        topics: ["Federalism", "CBI", "Centre-State Relations", "Law and Order"]
    },
    {
        year: 2021,
        question: "Analyze distinguishing features of equality rights - USA vs India constitutions.",
        marks: 15,
        topics: ["Fundamental Rights", "Right to Equality", "Comparative Constitution", "Article 14"]
    },
    {
        year: 2021,
        question: "Assess Parliament's executive accountability effectiveness.",
        marks: 10,
        topics: ["Parliament", "Executive", "Accountability", "Parliamentary Control"]
    },
    {
        year: 2021,
        question: "Do Department-related Parliamentary Standing Committees inspire administrative accountability? Evaluate with examples.",
        marks: 15,
        topics: ["Parliament", "Standing Committees", "Accountability", "Administrative Oversight"]
    },
    {
        year: 2021,
        question: "Explain Legislative Councils' constitutional establishment. Review working and current status.",
        marks: 15,
        topics: ["Legislature", "Legislative Council", "Bicameralism", "State Legislatures"]
    },
    {
        year: 2021,
        question: "Explain business associations' public policy contribution roles.",
        marks: 10,
        topics: ["Governance", "Pressure Groups", "Policy Making"]
    },
    {
        year: 2021,
        question: "Discuss women's greater higher judiciary representation desirability for diversity and inclusion.",
        marks: 10,
        topics: ["Judiciary", "Gender Justice", "Women Empowerment", "Diversity"]
    },
    {
        year: 2021,
        question: "Assess Finance Commission's recommendations enabling state fiscal improvement - 14th Commission.",
        marks: 10,
        topics: ["Finance Commission", "Federalism", "Financial Relations", "14th FC"]
    },
    {
        year: 2021,
        question: "\"Human Rights Commissions failed against mighty and powerful.\" Suggest remedial measures.",
        marks: 10,
        topics: ["Constitutional Bodies", "NHRC", "Human Rights", "Accountability"]
    },

    // 2020
    {
        year: 2020,
        question: "\"Indian Constitution exhibits centralizing tendencies maintaining national unity.\" Elaborate through Epidemic Diseases Act, Disaster Management Act, Farm Acts.",
        marks: 15,
        topics: ["Federalism", "Constitutional Structure", "Centre-State Relations", "Emergency Powers"]
    },
    {
        year: 2020,
        question: "\"Cooperation, competition, and confrontation shaped Indian federation nature.\" Cite recent examples.",
        marks: 10,
        topics: ["Federalism", "Centre-State Relations", "Cooperative Federalism"]
    },
    {
        year: 2020,
        question: "\"Local institutions shifted from 'Functions, Functionaries, Funds' to 'Functionality'.\" Highlight critical functionality challenges.",
        marks: 15,
        topics: ["Local Governance", "Panchayati Raj", "Decentralization", "3Fs"]
    },
    {
        year: 2020,
        question: "\"There is need simplifying corrupt practices disqualification procedures under Representation of Peoples Act.\" Comment.",
        marks: 10,
        topics: ["Elections", "RPA 1951", "Electoral Reforms", "Disqualification"]
    },
    {
        year: 2020,
        question: "Judicial Legislation contradicts separation of powers. Justify PIL filing for executive authority guidelines.",
        marks: 15,
        topics: ["Judiciary", "PIL", "Separation of Powers", "Judicial Activism"]
    },
    {
        year: 2020,
        question: "Explain judicial systems convergence and divergence - India vs UK judicial practices.",
        marks: 10,
        topics: ["Judiciary", "Comparative Constitution", "Judicial System"]
    },
    {
        year: 2020,
        question: "\"Speaker practice, 'Once a Speaker, Always a Speaker'.\" Should this adopt for objectivity? Discuss parliamentary business implications.",
        marks: 10,
        topics: ["Parliament", "Speaker", "Presiding Officers", "Parliamentary Conventions"]
    },
    {
        year: 2020,
        question: "\"Rajya Sabha transformed from 'useless stepney tyre' to supporting organ.\" Highlight transformation factors and areas.",
        marks: 15,
        topics: ["Parliament", "Rajya Sabha", "Bicameralism", "Legislative Process"]
    },
    {
        year: 2020,
        question: "\"Recent amendments to Right to Information Act impact Information Commission autonomy.\" Discuss.",
        marks: 10,
        topics: ["RTI", "Information Commission", "Transparency", "Constitutional Bodies"]
    },
    {
        year: 2020,
        question: "Assess constitutionalization of National Commission for Women ensuring greater gender justice.",
        marks: 15,
        topics: ["Constitutional Bodies", "NCW", "Gender Justice", "Women Empowerment"]
    },

    // 2019
    {
        year: 2019,
        question: "Do separation of powers principles favor strict separation or checks and balances? Explain.",
        marks: 10,
        topics: ["Separation of Powers", "Constitutional Philosophy", "Checks and Balances"]
    },
    {
        year: 2019,
        question: "\"From Federal Supremacy and Harmonious Construction principles emerged resolving legislative power distribution.\" Explain.",
        marks: 10,
        topics: ["Federalism", "Legislative Powers", "Constitutional Interpretation"]
    },
    {
        year: 2019,
        question: "\"Parliament's amending power is limited; cannot destroy Basic Structure through expansion.\" Discuss Article 368 constraints.",
        marks: 15,
        topics: ["Constitutional Amendments", "Article 368", "Basic Structure", "Parliament"]
    },
    {
        year: 2019,
        question: "Explain disqualification grounds under Representation of People Act, 1951 and remedies.",
        marks: 15,
        topics: ["Elections", "RPA 1951", "Disqualification", "Electoral Law"]
    },
    {
        year: 2019,
        question: "\"Attorney-General is chief legal adviser and Government of India lawyer.\" Discuss.",
        marks: 15,
        topics: ["Law Officers", "Attorney General", "Executive", "Constitutional Provisions"]
    },
    {
        year: 2019,
        question: "Explain farmer organization policy-influencing methods and effectiveness.",
        marks: 10,
        topics: ["Governance", "Pressure Groups", "Policy Making", "Agriculture"]
    },
    {
        year: 2019,
        question: "What can France learn from Indian Constitution's secularism approach?",
        marks: 10,
        topics: ["Secularism", "Comparative Constitution", "Constitutional Philosophy"]
    },

    // 2018
    {
        year: 2018,
        question: "\"Financial Emergency proclamation circumstances and consequences when declaration remains in force.\"",
        marks: 15,
        topics: ["Emergency", "Financial Emergency", "Article 360", "Constitutional Provisions"]
    },
    {
        year: 2018,
        question: "Examine Panchayat system importance and financing sources beyond government grants.",
        marks: 15,
        topics: ["Local Governance", "Panchayati Raj", "Financial Decentralization", "73rd Amendment"]
    },
    {
        year: 2018,
        question: "Assess CBI's July 2018 judgment settling Lt. Governor and Delhi elected government political tussle.",
        marks: 15,
        topics: ["Federalism", "NCT Delhi", "Governor", "Centre-State Relations"]
    },
    {
        year: 2018,
        question: "Discuss tribunal jurisdiction curtailment of ordinary courts and constitutional validity.",
        marks: 15,
        topics: ["Judiciary", "Tribunals", "Judicial Review", "Access to Justice"]
    },
    {
        year: 2018,
        question: "Examine 101st Constitutional Amendment's salient features and tax cascading effect removal efficacy.",
        marks: 15,
        topics: ["Constitutional Amendments", "GST", "101st Amendment", "Fiscal Federalism"]
    },
    {
        year: 2018,
        question: "Assess EVM trustworthiness challenges confronting Election Commission of India.",
        marks: 10,
        topics: ["Elections", "Election Commission", "EVM", "Electoral Reforms"]
    },
    {
        year: 2018,
        question: "Explain CAG appointment method, terms, and exercisable powers range.",
        marks: 10,
        topics: ["Constitutional Bodies", "CAG", "Auditing", "Financial Accountability"]
    },
    {
        year: 2018,
        question: "Examine NCSC's constitutional reservation enforcement capacity in religious minority institutions.",
        marks: 10,
        topics: ["Constitutional Bodies", "NCSC", "Reservation", "Minority Rights"]
    },
    {
        year: 2018,
        question: "Critically examine NJAC Act Supreme Court judgment regarding higher judiciary judge appointments.",
        marks: 10,
        topics: ["Judiciary", "NJAC", "Appointment of Judges", "Basic Structure"]
    },
    {
        year: 2018,
        question: "How do pressure groups influence Indian political processes? Are informal pressure groups more powerful than formal?",
        marks: 10,
        topics: ["Governance", "Pressure Groups", "Political System", "Policy Making"]
    },
    {
        year: 2018,
        question: "Discuss Finance Commission constitution, terms of reference - recently constituted Commission.",
        marks: 15,
        topics: ["Finance Commission", "Constitutional Bodies", "Federalism", "Financial Relations"]
    },

    // 2017
    {
        year: 2017,
        question: "\"Local self-government system has not proved effective governance instrument.\" Critically examine and suggest improvements.",
        marks: 10,
        topics: ["Local Governance", "Panchayati Raj", "Governance", "Decentralization"]
    },
    {
        year: 2017,
        question: "Examine 69th Constitutional Amendment Act essentials and Lt. Governor conflicts anomalies. Discuss Indian federal politics new trend potential.",
        marks: 12.5,
        topics: ["Constitutional Amendments", "NCT Delhi", "Governor", "Federalism"]
    },
    {
        year: 2017,
        question: "Examine Fundamental Rights scope through latest Right to Privacy Supreme Court judgment.",
        marks: 15,
        topics: ["Fundamental Rights", "Right to Privacy", "Article 21", "Judiciary"]
    },
    {
        year: 2017,
        question: "Discuss Public Accounts Committee's government accountability establishment role.",
        marks: 10,
        topics: ["Parliament", "PAC", "Parliamentary Committees", "Accountability"]
    },
    {
        year: 2017,
        question: "Examine Joint session of Parliament occasions and cannot-hold reasons.",
        marks: 15,
        topics: ["Parliament", "Joint Session", "Legislative Process", "Bicameralism"]
    },
    {
        year: 2017,
        question: "Critically examine NJAC Act Supreme Court judgment regarding higher judiciary judge appointments.",
        marks: 10,
        topics: ["Judiciary", "NJAC", "Appointment of Judges", "Judicial Independence"]
    },
    {
        year: 2017,
        question: "How do pressure groups influence Indian political processes? Informal vs formal pressure group assessment.",
        marks: 10,
        topics: ["Governance", "Pressure Groups", "Policy Making"]
    },
    {
        year: 2017,
        question: "\"Simultaneous Lok Sabha and State Assembly elections limit electioneering time/money but reduce government accountability.\" Discuss.",
        marks: 10,
        topics: ["Elections", "Electoral Reforms", "Simultaneous Elections", "Accountability"]
    },
    {
        year: 2017,
        question: "Is NCW strategizing to tackle women's public and private sphere problems? Provide supporting reasons.",
        marks: 15,
        topics: ["Constitutional Bodies", "NCW", "Women Empowerment", "Gender Justice"]
    },

    // 2016
    {
        year: 2016,
        question: "\"Right of movement and residence are freely available but not absolute.\" Comment.",
        marks: 12.5,
        topics: ["Fundamental Rights", "Article 19", "Right to Movement", "Reasonable Restrictions"]
    },
    {
        year: 2016,
        question: "Discuss each Preamble \"Republic\" adjective. Are they defendable currently?",
        marks: 12.5,
        topics: ["Preamble", "Constitutional Philosophy", "Constitutional Values"]
    },
    {
        year: 2016,
        question: "\"Coelho case holdings demonstrate judicial review's key importance as basic constitutional feature.\" Discuss.",
        marks: 12.5,
        topics: ["Judiciary", "Judicial Review", "Basic Structure", "Coelho Case"]
    },
    {
        year: 2016,
        question: "Discuss public morality decline legal, political, social, cultural factors in Transparency International integrity index context.",
        marks: 12.5,
        topics: ["Governance", "Ethics", "Corruption", "Political Morality"]
    },
    {
        year: 2016,
        question: "Did Government of India Act, 1935 establish federal constitution? Discuss.",
        marks: 12.5,
        topics: ["Constitutional History", "Federalism", "GoI Act 1935"]
    },
    {
        year: 2016,
        question: "\"Cooperative federalism increasingly emphasized.\" Highlight existing structure drawbacks and cooperative federalism addressing shortcomings extent.",
        marks: 12.5,
        topics: ["Federalism", "Cooperative Federalism", "Centre-State Relations"]
    },
    {
        year: 2016,
        question: "Discuss CAG's policy implementation audit powers - Article 149 jurisdiction overstepping concerns.",
        marks: 12.5,
        topics: ["Constitutional Bodies", "CAG", "Auditing", "Performance Audit"]
    },
    {
        year: 2016,
        question: "What is quasi-judicial body? Explain with concrete examples.",
        marks: 12.5,
        topics: ["Judiciary", "Tribunals", "Quasi-Judicial Bodies", "Administrative Law"]
    },
    {
        year: 2016,
        question: "\"Indian party system passes through transition phase full of contradictions and paradoxes.\" Discuss.",
        marks: 12.5,
        topics: ["Political Parties", "Party System", "Political System"]
    },

    // 2015
    {
        year: 2015,
        question: "Discuss possible factors inhibiting Uniform Civil Code enactment despite Directive Principles provision.",
        marks: 12.5,
        topics: ["DPSP", "Uniform Civil Code", "Secularism", "Social Justice"]
    },
    {
        year: 2015,
        question: "\"Right to clean environment requires legal regulation on Diwali crackers.\" Discuss Article 21 and apex court judgments.",
        marks: 12.5,
        topics: ["Fundamental Rights", "Article 21", "Environmental Law", "Right to Life"]
    },
    {
        year: 2015,
        question: "\"Cooperative federalism increasingly emphasized.\" Highlight drawbacks and addressing shortcomings extent.",
        marks: 12.5,
        topics: ["Federalism", "Cooperative Federalism", "Centre-State Relations"]
    },
    {
        year: 2015,
        question: "\"Panchayats remained political institutions, not effective governance instruments due to inadequate education and organization.\" Critically discuss.",
        marks: 12.5,
        topics: ["Local Governance", "Panchayati Raj", "Governance", "Decentralization"]
    },
    {
        year: 2015,
        question: "Discuss ordinance resorting raising separation of powers spirit violation concerns. Analyze Supreme Court decisions facilitating power resort. Should ordinance power repeal?",
        marks: 12.5,
        topics: ["Executive", "Ordinance", "Separation of Powers", "Legislative Process"]
    },
    {
        year: 2015,
        question: "\"Major Arbitration and Conciliation Act, 1966 changes through recent ordinance.\" How far improves dispute resolution mechanism?",
        marks: 12.5,
        topics: ["Alternate Dispute Resolution", "Arbitration", "Judiciary"]
    },
    {
        year: 2015,
        question: "For regulatory institution independence and autonomy achievement, discuss ensuring necessity in recent experience light.",
        marks: 12.5,
        topics: ["Constitutional Bodies", "Regulatory Bodies", "Independence", "Autonomy"]
    },
    {
        year: 2015,
        question: "\"Whistle-blowers Protection Act 2011 amendment bill passage may leave no one to protect.\" Critically evaluate.",
        marks: 12.5,
        topics: ["Governance", "Whistleblower Protection", "Transparency", "Accountability"]
    },

    // 2014
    {
        year: 2014,
        question: "\"Speech and expression freedom concept understanding.\" Does it cover hate speech? Why do films occupy different expression planes in India? Discuss.",
        marks: 12.5,
        topics: ["Fundamental Rights", "Article 19", "Freedom of Speech", "Hate Speech"]
    },
    {
        year: 2014,
        question: "\"Supreme Court keeps arbitrary Parliament constitutional amendment power check.\" Discuss critically.",
        marks: 10,
        topics: ["Judiciary", "Judicial Review", "Constitutional Amendments", "Basic Structure"]
    },
    {
        year: 2014,
        question: "\"Starting from 'basic structure' doctrine invention, judiciary played highly pro-active role ensuring India thrives as democracy.\" Evaluate judicial activism role achieving democratic ideals.",
        marks: 12.5,
        topics: ["Judiciary", "Basic Structure", "Judicial Activism", "Democracy"]
    },
    {
        year: 2014,
        question: "\"Federalism dominance principle is Indian Constitution basic feature, yet leans toward strong Centre, militating against strong federalism concept.\"",
        marks: 12.5,
        topics: ["Federalism", "Centre-State Relations", "Constitutional Structure"]
    },
    {
        year: 2014,
        question: "\"President's death sentence commutation delay instances have sparked public debate as justice denial.\" Should time be specified for President accepting/rejecting petitions? Analyse.",
        marks: 12.5,
        topics: ["President", "Pardoning Power", "Executive Powers", "Criminal Justice"]
    },
    {
        year: 2014,
        question: "\"Cabinet size should be as big as governmental work justifies and PM can manage as team.\" How inversely related is government efficacy to cabinet size? Discuss.",
        marks: 12.5,
        topics: ["Executive", "Cabinet", "Prime Minister", "Governance"]
    },
    {
        year: 2014,
        question: "\"Pressure group politics is politics' informal face.\" Assess Indian pressure groups' structure and functioning.",
        marks: 10,
        topics: ["Governance", "Pressure Groups", "Political System"]
    },
    {
        year: 2014,
        question: "\"Rail Tariff Authority setting will subject cash-strapped Railways to subsidy demands for non-profitable routes/services.\" Taking power sector experience, discuss if reform benefits consumers, Railways, or private container operators.",
        marks: 12.5,
        topics: ["Governance", "Regulatory Bodies", "Public Policy"]
    },
    {
        year: 2014,
        question: "\"NHRC most effective when tasks adequately supported by accountability-ensuring mechanisms.\" Assess NHRC's effective complement role to judiciary and institutions promoting human rights standards.",
        marks: 12.5,
        topics: ["Constitutional Bodies", "NHRC", "Human Rights", "Accountability"]
    },

    // 2013
    {
        year: 2013,
        question: "Discuss Section 66A IT Act regarding alleged Article 19 Constitution violation.",
        marks: 10,
        topics: ["Fundamental Rights", "Article 19", "Freedom of Speech", "IT Act"]
    },
    {
        year: 2013,
        question: "\"Ministry of Petroleum and Natural Gas directives perceived by Nagas as exceptional status threat.\" Discuss Article 371A light.",
        marks: 10,
        topics: ["Special Provisions", "Article 371A", "Tribal Rights", "Federalism"]
    },
    {
        year: 2013,
        question: "\"Many States further bifurcate geographical administrative areas like Districts and Talukas for better governance.\" Can more smaller States justify effective governance? Discuss.",
        marks: 10,
        topics: ["Federalism", "State Reorganization", "Governance", "Administrative Reforms"]
    },
    {
        year: 2013,
        question: "\"Constitutional mechanisms resolving inter-state water disputes failed addressing problems.\" Is failure structural, process, or both inadequacy? Discuss.",
        marks: 10,
        topics: ["Federalism", "Inter-State Disputes", "Water Disputes", "Constitutional Mechanisms"]
    },
    {
        year: 2013,
        question: "\"Individual MPs role as national lawmakers has declined, adversely impacting debate quality.\" Discuss.",
        marks: 10,
        topics: ["Parliament", "Legislators", "Parliamentary Debates", "Legislative Process"]
    },
    {
        year: 2013,
        question: "\"Anti-defection law has diminished individual MPs role, discouraging healthy constructive policy debates.\" How far attributable?",
        marks: 10,
        topics: ["Parliament", "Anti-Defection Law", "10th Schedule", "Parliamentary Debates"]
    },
    {
        year: 2013,
        question: "\"Khap panchayats function as extra-constitutional authorities delivering human right violation pronouncements.\" Critically discuss legislative, executive, judiciary actions rectifying this.",
        marks: 12.5,
        topics: ["Governance", "Human Rights", "Social Issues", "Rule of Law"]
    },
    {
        year: 2013,
        question: "\"13th Finance Commission recommendations departed from previous commissions strengthening local government finances.\" Discuss.",
        marks: 10,
        topics: ["Finance Commission", "Local Governance", "Financial Decentralization", "13th FC"]
    },
    {
        year: 2013,
        question: "\"National Lokpal, however strong, cannot resolve immorality in public affairs.\" Discuss.",
        marks: 10,
        topics: ["Constitutional Bodies", "Lokpal", "Corruption", "Ethics", "Accountability"]
    },
    {
        year: 2013,
        question: "\"Product diversification of financial institutions and insurance companies overlapping, strengthens SEBI and IRDA merger case.\" Justify.",
        marks: 10,
        topics: ["Regulatory Bodies", "Financial Regulation", "Governance"]
    }
];

// Export for use in polity-data.js
// Copy and add these to polityData.allMainsQuestions array
