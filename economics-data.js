// UPSC Economics Data - Syllabus, Microthemes & Mains Questions

const economicsData = {
    syllabus: {
        prelims: [
            "Indian Economy - Growth, Development and Employment",
            "Inclusive Growth and Budgeting",
            "Money and Banking - RBI, Monetary Policy, CRR, SLR, Repo Rate",
            "Public Finance - Budget, Fiscal Policy, Taxation",
            "External Sector - Trade, BOP, Exchange Rate, WTO",
            "Agriculture and Food Management",
            "Industry and Infrastructure",
            "Investment Models and FDI/FII",
            "Inflation and Price Indices (CPI, WPI)",
            "Government Schemes and Programmes",
            "Financial Markets - Capital Markets, Money Markets",
            "GST and Tax Reforms",
            "National Income Accounting - GDP, GNP, NDP",
            "Banking Sector Reforms - Basel Norms, NPA, IBC",
            "Digital Economy - UPI, RTGS, NEFT, CBDC"
        ],
        mains: [
            "Indian Economy and issues relating to planning, mobilization of resources, growth, development",
            "Effects of liberalization on the economy, changes in industrial policy",
            "Infrastructure - Energy, Ports, Roads, Airports, Railways",
            "Investment models and their impact",
            "Food processing and related industries - scope and significance",
            "Land reforms in India",
            "Agriculture - Issues of buffer stocks, food security",
            "Technology missions and economics of animal rearing",
            "Crop patterns across the country and irrigation methods",
            "Storage, transport and marketing of agricultural produce",
            "E-technology in the aid of farmers",
            "Issues related to direct and indirect farm subsidies",
            "Minimum Support Prices and Public Distribution System",
            "Government Budgeting - Revenue and Capital Budget",
            "Fiscal Policy and Monetary Policy"
        ]
    },

    microthemes: [
        {id:1,name:"RBI Functions/Monetary Policy",questionCount:36,questions:economicsQuestions.filter(q=>q.microtheme==="RBI Functions/Monetary Policy")},
        {id:2,name:"Fiscal Policy and Budget",questionCount:31,questions:economicsQuestions.filter(q=>q.microtheme==="Fiscal Policy and Budget")},
        {id:3,name:"Economic Growth",questionCount:27,questions:economicsQuestions.filter(q=>q.microtheme==="Economic Growth")},
        {id:4,name:"Banking and Finance",questionCount:24,questions:economicsQuestions.filter(q=>q.microtheme==="Banking and Finance")},
        {id:5,name:"Trade",questionCount:19,questions:economicsQuestions.filter(q=>q.microtheme==="Trade")},
        {id:6,name:"Finance/Capital Market",questionCount:17,questions:economicsQuestions.filter(q=>q.microtheme==="Finance/Capital Market")},
        {id:7,name:"GST",questionCount:12,questions:economicsQuestions.filter(q=>q.microtheme==="GST")},
        {id:8,name:"Infrastructure",questionCount:13,questions:economicsQuestions.filter(q=>q.microtheme==="Infrastructure")},
        {id:9,name:"National Income Accounting and Exchange Rate",questionCount:13,questions:economicsQuestions.filter(q=>q.microtheme==="National Income Accounting and Exchange Rate")},
        {id:10,name:"Inflation",questionCount:11,questions:economicsQuestions.filter(q=>q.microtheme==="Inflation")},
        {id:11,name:"Investment",questionCount:9,questions:economicsQuestions.filter(q=>q.microtheme==="Investment")},
        {id:12,name:"Bonds",questionCount:8,questions:economicsQuestions.filter(q=>q.microtheme==="Bonds")},
        {id:13,name:"Differentiated Banks",questionCount:8,questions:economicsQuestions.filter(q=>q.microtheme==="Differentiated Banks")},
        {id:14,name:"Index",questionCount:5,questions:economicsQuestions.filter(q=>q.microtheme==="Index")},
        {id:15,name:"Digitalization of Economy",questionCount:2,questions:economicsQuestions.filter(q=>q.microtheme==="Digitalization of Economy")}
    ],

    allMainsQuestions: [
        // ===================== 2025 (10 questions) =====================
        {year:2025,question:"Distinguish between the Human Development Index (HDI) and the Inequality-adjusted Human Development Index (IHDI) with special reference to India. Why is the IHDI considered a better indicator of inclusive growth?",marks:10,topics:["Inclusive Growth","Human Development","Economic Indicators"]},
        {year:2025,question:"What are the challenges before the Indian economy when the world is moving away from free trade and multilateralism to protectionism and bilateralism? How can these challenges be met?",marks:10,topics:["International Trade","Protectionism","Trade Policy"]},
        {year:2025,question:"Explain the factors influencing the decision of the farmers on the selection of high value crops in India.",marks:10,topics:["Agriculture","Crop Selection","Farm Economics"]},
        {year:2025,question:"Elaborate the scope and significance of supply chain management of agricultural commodities in India.",marks:10,topics:["Agriculture","Supply Chain","Agricultural Marketing"]},
        {year:2025,question:"Explain how the Fiscal Health Index (FHI) can be used as a tool for assessing the fiscal performance of states in India. In what way would it encourage the states to adopt prudent and sustainable fiscal policies?",marks:15,topics:["Fiscal Policy","Fiscal Federalism","State Finances"]},
        {year:2025,question:"Discuss the rationale of the Production Linked Incentive (PLI) scheme. What are its achievements? In what way can the functioning and outcomes of the scheme be improved?",marks:15,topics:["Industrial Policy","PLI","Manufacturing"]},
        {year:2025,question:"Examine the factors responsible for depleting groundwater in India. What are the steps taken by the government to mitigate such depletion of groundwater?",marks:15,topics:["Agriculture","Water Resources","Irrigation"]},
        {year:2025,question:"Examine the scope of the food processing industries in India. Elaborate the measures taken by the government in the food processing industries for generating employment opportunities.",marks:15,topics:["Food Processing","Employment","Agriculture"]},
        {year:2025,question:"How does nanotechnology offer significant advancements in the field of agriculture? How can this technology help to uplift the socio-economic status of farmers?",marks:15,topics:["Agriculture","Technology","Farm Productivity"]},
        {year:2025,question:"India aims to become a semiconductor manufacturing hub. What are the challenges faced by the semiconductor industry in India? Mention the salient features of the India Semiconductor Mission.",marks:15,topics:["Infrastructure","Industrial Policy","Manufacturing"]},

        // ===================== 2024 (10 questions) =====================
        {year:2024,question:"What are the causes of persistent high food inflation in India? Comment on the effectiveness of the monetary policy of the RBI to control this type of inflation.",marks:10,topics:["Monetary Policy","Inflation","RBI"]},
        {year:2024,question:"What were the factors responsible for the successful implementation of land reforms in some parts of the country? Elaborate.",marks:10,topics:["Land Reforms","Agriculture","Rural Development"]},
        {year:2024,question:"Explain the role of millets for ensuring health and nutritional security in India.",marks:10,topics:["Agriculture","Food Security","Crop Diversification"]},
        {year:2024,question:"What is the technology being employed for electronic toll collection on highways? What are its advantages and limitations?",marks:10,topics:["Infrastructure","Transport","Technology"]},
        {year:2024,question:"Discuss the merits and demerits of the four Labour Codes in the context of labour market reforms in India. What has been the progress so far in this regard?",marks:15,topics:["Labour Reforms","Employment","Industrial Relations"]},
        {year:2024,question:"Examine the pattern and trend of public expenditure on social services in the post-reforms period in India. To what extent this has been in consonance with achieving the objective of inclusive growth?",marks:15,topics:["Government Budgeting","Public Expenditure","Inclusive Growth"]},
        {year:2024,question:"Distinguish between 'care economy' and 'monetized economy'. How can care economy be brought into monetized economy through women empowerment?",marks:15,topics:["Inclusive Growth","Women Empowerment","GDP Measurement"]},
        {year:2024,question:"What are the major challenges faced by the Indian irrigation system in recent times? State the measures taken by the government for efficient irrigation management.",marks:15,topics:["Agriculture","Irrigation","Infrastructure"]},
        {year:2024,question:"Elucidate the importance of buffer stocks for stabilizing agricultural prices in India. What are the challenges associated with the storage of buffer stock?",marks:15,topics:["Agriculture","Buffer Stocks","Food Security"]},
        {year:2024,question:"What is the need for expanding the regional air connectivity in India? In this context, discuss the government's UDAN Scheme and its achievements.",marks:15,topics:["Infrastructure","Transport","UDAN Scheme"]},

        // ===================== 2023 (8 questions) =====================
        {year:2023,question:"Faster economic growth requires increased share of the manufacturing sector in GDP, particularly of MSMEs. Comment on the present policies of the Government in this regard.",marks:10,topics:["Manufacturing","MSME","Economic Growth"]},
        {year:2023,question:"What is the status of digitalization in the Indian economy? Examine the problems faced and strategies needed for its smooth functioning.",marks:10,topics:["Digital Economy","Financial Inclusion","Technology"]},
        {year:2023,question:"How does e-Technology help farmers in production and marketing of agricultural produce? Explain it.",marks:10,topics:["Agriculture","Technology","Agricultural Marketing"]},
        {year:2023,question:"What are the direct and indirect subsidies provided to farm sector in India? Discuss the issues raised by the World Trade Organization (WTO) in relation to agricultural subsidies.",marks:10,topics:["Agriculture","Subsidies","WTO"]},
        {year:2023,question:"Explain the changes in cropping pattern in India in the context of changes in consumption pattern and food prices.",marks:10,topics:["Agriculture","Cropping Pattern","Food Prices"]},
        {year:2023,question:"State the objectives and measures of land reforms in India. Discuss how land ceiling policy on landholding can be considered as an effective reform under economic criteria.",marks:10,topics:["Land Reforms","Agriculture","Agrarian Structure"]},
        {year:2023,question:"Most of the unemployment in India is structural in nature. Examine the methodology adopted to compute unemployment in the country and suggest improvements.",marks:15,topics:["Employment","Unemployment","Labour Market"]},
        {year:2023,question:"Distinguish between 'weights' and 'measures' aspects of WPI and CPI and explain the significance of each in the Indian economy.",marks:15,topics:["Inflation","WPI","CPI"]},

        // ===================== 2022 (9 questions) =====================
        {year:2022,question:"Economic growth in the recent past has been led by increase in labour activity. Explain the contribution of women to economic growth of India.",marks:15,topics:["Economic Growth","Women Empowerment","Employment"]},
        {year:2022,question:"Is inclusive growth possible under market economy? State the significance of financial inclusion in achieving economic growth in India.",marks:10,topics:["Inclusive Growth","Financial Inclusion","Market Economy"]},
        {year:2022,question:"What is Integrated Farming System? How is it helpful to small and marginal farmers in India?",marks:15,topics:["Agriculture","Integrated Farming","Small Farmers"]},
        {year:2022,question:"What are the present challenges before crop diversification? How do emerging technologies provide an opportunity for crop diversification?",marks:15,topics:["Agriculture","Crop Diversification","Technology"]},
        {year:2022,question:"What are the major challenges of Public Distribution System (PDS) in India? How can it be made more effective?",marks:10,topics:["Food Security","PDS","Subsidies"]},
        {year:2022,question:"Elaborate the scope and significance of the food processing industry in India.",marks:10,topics:["Food Processing","Agriculture","Employment"]},
        {year:2022,question:"What are the main bottlenecks in upstream and downstream process of marketing of agricultural products in India?",marks:15,topics:["Agriculture","Agricultural Marketing","Supply Chain"]},
        {year:2022,question:"Do you think India will meet 50 percent of its energy needs from renewable energy by 2030? Justify your answer. How will the shift of energy source affect the Indian economy?",marks:15,topics:["Energy","Renewable Energy","Infrastructure"]},
        {year:2022,question:"Why is Public Private Partnership (PPP) required in infrastructural projects? Examine the role of PPP model in the success story of Indian infrastructural development.",marks:10,topics:["Infrastructure","PPP","Investment"]},

        // ===================== 2021 (8 questions) =====================
        {year:2021,question:"Do you agree that the Indian economy has recently experienced V-shaped recovery? Give reasons in support of your answer.",marks:15,topics:["Economic Growth","GDP","COVID-19"]},
        {year:2021,question:"Explain the difference between computing methodology of India's Gross Domestic Product (GDP) before the year 2015 and after the year 2015.",marks:10,topics:["GDP","National Income","Economic Indicators"]},
        {year:2021,question:"Distinguish between Capital Budget and Revenue Budget. Explain the components of both these Budgets.",marks:10,topics:["Government Budgeting","Capital Budget","Revenue Budget"]},
        {year:2021,question:"What are the salient features of the National Food Security Act 2013? How has the Act contributed to food security in India?",marks:15,topics:["Food Security","NFSA","PDS"]},
        {year:2021,question:"What are the present challenges before crop diversification? How do emerging technologies provide an opportunity for crop diversification?",marks:15,topics:["Agriculture","Crop Diversification","Technology"]},
        {year:2021,question:"How and to what extent would micro irrigation help in solving India's water crisis?",marks:10,topics:["Agriculture","Irrigation","Water Crisis"]},
        {year:2021,question:"How did land reforms in some parts of the country help to improve the socio-economic conditions of marginal and small farmers?",marks:10,topics:["Land Reforms","Agriculture","Small Farmers"]},
        {year:2021,question:"Investment in infrastructure is essential for more rapid and inclusive economic growth. Discuss in the light of India's experience.",marks:15,topics:["Infrastructure","Economic Growth","Investment"]},

        // ===================== 2020 (8 questions) =====================
        {year:2020,question:"Explain the rationale behind the Goods and Services Tax (Compensation to States) Act of 2017. How has COVID-19 pandemic affected the GST compensation to States?",marks:15,topics:["GST","Fiscal Federalism","COVID-19"]},
        {year:2020,question:"Define potential GDP and explain its determinants. What are the factors that have been inhibiting India from realizing its potential GDP?",marks:10,topics:["GDP","Economic Growth","Macroeconomics"]},
        {year:2020,question:"Explain intra-generational and inter-generational issues of equity from the perspective of inclusive growth and sustainable development.",marks:10,topics:["Inclusive Growth","Sustainable Development","Equity"]},
        {year:2020,question:"What are the main constraints in transport and marketing of agricultural produce in India?",marks:10,topics:["Agriculture","Agricultural Marketing","Infrastructure"]},
        {year:2020,question:"What are the major factors responsible for making the rice-wheat system a success? In spite of this success, how has this system become bane in India?",marks:15,topics:["Agriculture","Cropping Pattern","Sustainability"]},
        {year:2020,question:"Suggest measures to improve water storage and irrigation system to make its judicious use under depleting scenario.",marks:15,topics:["Agriculture","Irrigation","Water Management"]},
        {year:2020,question:"What are the challenges and opportunities of the food processing sector in the country? How can the income of the farmers be substantially increased by encouraging food processing?",marks:10,topics:["Food Processing","Farm Income","Agriculture"]},
        {year:2020,question:"Explain the meaning of investment in an economy in terms of capital formation. Discuss the factors to be considered while designing a concession agreement between a public entity and a private entity.",marks:15,topics:["Investment","Capital Formation","PPP"]},

        // ===================== 2019 (8 questions) =====================
        {year:2019,question:"Enumerate the indirect taxes which have been subsumed in the Goods and Services Tax (GST) in India. Also, comment on the year chosen as the base year for computation of GST.",marks:10,topics:["GST","Indirect Taxes","Tax Reform"]},
        {year:2019,question:"Do you agree with the view that steady GDP growth and low inflation have left the Indian economy in good shape? Give reasons in support of your arguments.",marks:10,topics:["GDP","Inflation","Monetary Policy"]},
        {year:2019,question:"The public expenditure management is a challenge to the Government of India in the context of budget making during the post-liberalization period. Clarify it.",marks:15,topics:["Government Budgeting","Public Expenditure","Fiscal Policy"]},
        {year:2019,question:"It is argued that the strategy of inclusive growth is intended to meet the objectives of inclusiveness and sustainability together. Comment on this statement.",marks:15,topics:["Inclusive Growth","Sustainable Development","Growth Strategy"]},
        {year:2019,question:"How far is Integrated Farming System (IFS) helpful in sustaining agricultural production?",marks:10,topics:["Agriculture","Integrated Farming","Sustainability"]},
        {year:2019,question:"Elaborate the impact of National Watershed Project in increasing agricultural production from water-stressed areas.",marks:10,topics:["Agriculture","Watershed","Water Management"]},
        {year:2019,question:"What are the reformative steps taken by the Government to make the food grain distribution system more effective?",marks:15,topics:["Food Security","PDS","Distribution"]},
        {year:2019,question:"Elaborate the policy taken by the Government of India to meet the challenges of the food processing sector.",marks:15,topics:["Food Processing","Agricultural Policy","Employment"]},

        // ===================== 2018 (8 questions) =====================
        {year:2018,question:"How are the principles followed by NITI Aayog different from those followed by the erstwhile Planning Commission in India?",marks:15,topics:["Planning","NITI Aayog","Economic Policy"]},
        {year:2018,question:"How would the recent phenomena of protectionism and currency manipulations in world trade affect the macroeconomic stability of India?",marks:15,topics:["International Trade","Protectionism","Macroeconomics"]},
        {year:2018,question:"Comment on the important changes introduced in respect of the Long-term Capital Gains Tax (LTCGT) and Dividend Distribution Tax (DDT) in the Union Budget for 2018-2019.",marks:10,topics:["Tax Policy","Government Budgeting","Capital Gains"]},
        {year:2018,question:"What do you mean by Minimum Support Price (MSP)? How will MSP rescue the farmers from the low-income trap?",marks:10,topics:["Agriculture","MSP","Farm Income"]},
        {year:2018,question:"Assess the role of National Horticulture Mission (NHM) in boosting the production, productivity and income of horticulture farms. How far has it succeeded in increasing the income of farmers?",marks:15,topics:["Agriculture","Horticulture","Farm Income"]},
        {year:2018,question:"How has the emphasis on certain crops brought about changes in cropping patterns in the recent past? Elaborate the emphasis on millet production and consumption.",marks:15,topics:["Agriculture","Cropping Pattern","Millets"]},
        {year:2018,question:"Access to affordable, reliable, sustainable and modern energy is the sine qua non to achieve Sustainable Development Goals (SDGs). Comment on the role of traditional knowledge for achieving this.",marks:10,topics:["Energy","SDGs","Infrastructure"]},
        {year:2018,question:"Examine the role of supermarkets in supply chain management of fruits, vegetables and food items. How do they eliminate the number of intermediaries?",marks:10,topics:["Agriculture","Supply Chain","Agricultural Marketing"]},

        // ===================== 2017 (12 questions) =====================
        {year:2017,question:"Among several factors for India's potential growth, savings rate is the most effective one. Do you agree? What are the other factors available for growth potential?",marks:10,topics:["Economic Growth","Savings Rate","Capital Formation"]},
        {year:2017,question:"How has globalization led to the reduction of employment in the formal sector of the Indian economy? Is increased informalization detrimental to the development of the country?",marks:15,topics:["Employment","Globalisation","Informal Sector"]},
        {year:2017,question:"Justify the need for FDI for the development of the Indian economy. Why is there a gap between MOUs signed and actual FDIs? Suggest remedial steps.",marks:15,topics:["FDI","Foreign Investment","Economic Development"]},
        {year:2017,question:"One of the intended objectives of Union Budget 2017-18 is to 'transform, energize and clean India'. Analyse the measures proposed in the budget to achieve the stated objective.",marks:15,topics:["Government Budgeting","Fiscal Policy","Economic Reforms"]},
        {year:2017,question:"What are the salient features of 'inclusive growth'? Has India been experiencing such a growth process? Analyse and suggest measures for inclusive growth.",marks:15,topics:["Inclusive Growth","Economic Development","Poverty"]},
        {year:2017,question:"How do subsidies affect the cropping pattern, crop diversity and economy of farmers? What is the significance of crop insurance, MSP and food processing for small and marginal farmers?",marks:15,topics:["Agriculture","Subsidies","MSP","Crop Insurance"]},
        {year:2017,question:"Explain various types of revolutions that took place in Agriculture after Independence in India. How have these revolutions helped in poverty alleviation and food security?",marks:10,topics:["Agriculture","Green Revolution","Food Security"]},
        {year:2017,question:"What are the reasons for poor acceptance of cost-effective small processing units? How can the food processing unit be helpful to uplift the socio-economic status of poor farmers?",marks:10,topics:["Food Processing","Small Farmers","Rural Development"]},
        {year:2017,question:"Account for the failure of manufacturing sector in achieving the goal of labour-intensive exports rather than capital-intensive exports.",marks:10,topics:["Manufacturing","Exports","Industrial Policy"]},
        {year:2017,question:"Industrial growth rate has lagged behind in the overall growth of GDP in the post-reform period. Give reasons. How far are the recent initiatives by the Government capable of increasing the industrial growth rate?",marks:15,topics:["Industrial Growth","GDP","Make in India"]},
        {year:2017,question:"What are the major reasons for declining rice and wheat yield in the cropping system? How is crop diversification helpful in stabilizing agricultural production?",marks:15,topics:["Agriculture","Crop Diversification","Sustainability"]},
        {year:2017,question:"Examine the developments of Airports in India through Joint Ventures under PPP model. What are the challenges faced by the partnership?",marks:10,topics:["Infrastructure","PPP","Transport"]},

        // ===================== 2016 (14 questions) =====================
        {year:2016,question:"Pradhan Mantri Jan-Dhan Yojana (PMJDY) is necessary for bringing the unbanked to the institutional finance fold. Do you agree with this for financial inclusion of the poorer section of Indian society?",marks:10,topics:["Financial Inclusion","PMJDY","Banking"]},
        {year:2016,question:"What are 'Smart Cities'? Examine their relevance for urban development in India. Will it increase urban-rural divide? Give arguments for 'Smart Villages' in the Indian context.",marks:10,topics:["Infrastructure","Smart Cities","Urban Development"]},
        {year:2016,question:"Comment on the challenges for inclusive growth which include careless and useless manpower in the Indian context. Suggest measures to be taken for facing these challenges.",marks:10,topics:["Inclusive Growth","Skill Development","Employment"]},
        {year:2016,question:"Women empowerment in India needs gender budgeting. What are the requirements and status of gender budgeting in the Indian context?",marks:10,topics:["Government Budgeting","Women Empowerment","Gender Budgeting"]},
        {year:2016,question:"What is water-use efficiency? Describe the role of micro-irrigation in increasing the water-use efficiency.",marks:10,topics:["Agriculture","Irrigation","Water Management"]},
        {year:2016,question:"In the view of the declining average size of land holdings in India which has made agriculture non-viable for a majority of farmers, should contract farming and land leasing be promoted in agriculture?",marks:10,topics:["Agriculture","Contract Farming","Land Holdings"]},
        {year:2016,question:"Give the vulnerability of Indian agriculture to vagaries of nature. How has the government addressed this? Discuss.",marks:10,topics:["Agriculture","Climate Change","Crop Insurance"]},
        {year:2016,question:"Livestock rearing has a big potential for providing non-farm employment and income in rural areas. Discuss suggesting suitable measures to promote this sector in India.",marks:10,topics:["Agriculture","Livestock","Rural Employment"]},
        {year:2016,question:"How can the Digital India programme help farmers to improve farm productivity and income? What steps has the government taken in this regard?",marks:10,topics:["Agriculture","Digital India","Technology"]},
        {year:2016,question:"In what way could the replacement of price subsidy with Direct Benefit Transfer (DBT) change the scenario of subsidies in India?",marks:10,topics:["Subsidies","DBT","Fiscal Policy"]},
        {year:2016,question:"There is a clear acknowledgement that SEZs are a tool of industrial development, investment promotion and export promotion. Discuss the issues and challenges arising out of the policy on SEZs.",marks:10,topics:["Industrial Policy","SEZ","Investment"]},
        {year:2016,question:"Give an account of the current status and the targets to be achieved pertaining to renewable energy sources in the country.",marks:10,topics:["Energy","Renewable Energy","Infrastructure"]},
        {year:2016,question:"Discuss the role of land reforms in agricultural development. Identify the factors that were responsible for the success of land reforms in India.",marks:10,topics:["Land Reforms","Agriculture","Development"]},
        {year:2016,question:"Discuss the role of the RBI in maintaining price stability and ensuring adequate flow of credit to productive sectors.",marks:15,topics:["RBI","Monetary Policy","Credit"]},

        // ===================== 2015 (8 questions) =====================
        {year:2015,question:"The nature of economic growth in India in recent times is often described as a jobless growth. Do you agree with this view? Give arguments in favour of your answer.",marks:10,topics:["Economic Growth","Employment","Labour Market"]},
        {year:2015,question:"Craze for gold in India has led to surge in import of gold in recent years and put pressure on balance of payments. Examine the merits of the Gold Monetization Scheme.",marks:10,topics:["Trade","Gold Monetization","Balance of Payments"]},
        {year:2015,question:"Normally countries shift from agriculture to industry and then to services, but India shifted directly from agriculture to services. What are the reasons for the skipping of the industrial revolution?",marks:10,topics:["Structural Change","Services","Industrialization"]},
        {year:2015,question:"While we flaunt India's demographic dividend, we ignore the dropping rates of employability. What are we missing while we try to reap the benefits of demographic dividend?",marks:10,topics:["Demographic Dividend","Skill Development","Employment"]},
        {year:2015,question:"Success of 'Make in India' programme depends on the success of 'Skill India' programme and radical labour reforms. Discuss with logical arguments.",marks:10,topics:["Make in India","Skill India","Manufacturing"]},
        {year:2015,question:"To what factors can the recent dramatic fall in equipment cost and tariff of solar energy be attributed? What implications does the trend have for thermal power producers?",marks:10,topics:["Energy","Solar Energy","Renewable Energy"]},
        {year:2015,question:"What are the impediments in marketing and supply chain management in developing the food processing industry in India?",marks:10,topics:["Food Processing","Supply Chain","Agricultural Marketing"]},
        {year:2015,question:"In what way has micro-finance helped in the empowerment of women in India? Explain.",marks:10,topics:["Financial Inclusion","Women Empowerment","Micro Finance"]},

        // ===================== 2014 (10 questions) =====================
        {year:2014,question:"Capitalism has guided the world economy to unprecedented prosperity. However, it often encourages shortsightedness and greed. In the context of inclusive growth in India, what measures have been adopted to check this tendency?",marks:10,topics:["Inclusive Growth","Capitalism","Economic Development"]},
        {year:2014,question:"Agricultural Produce Market Committees (APMCs) set up under the State APMC Acts have not only failed to create a competitive trading environment but have become instruments for exploitation of farmers. Critically examine.",marks:10,topics:["Agriculture","APMC","Agricultural Marketing"]},
        {year:2014,question:"In what way could replacement of price subsidy with Direct Benefit Transfer (DBT) change the scenario of subsidy burden on Indian government?",marks:10,topics:["Subsidies","DBT","Fiscal Policy"]},
        {year:2014,question:"'In the villages itself no form of credit organization will be suitable except the cooperative society.' Discuss this statement in the context of agricultural finance in India.",marks:10,topics:["Agriculture","Rural Credit","Cooperative Society"]},
        {year:2014,question:"National Urban Transport Policy emphasises on 'moving people' instead of 'moving vehicles'. Discuss critically the success of the various strategies of the Government in this regard.",marks:10,topics:["Infrastructure","Urban Transport","Transport Policy"]},
        {year:2014,question:"The Right to Fair Compensation and Transparency in Land Acquisition Act, 2013. What impact will it have on industrialization and agriculture in India?",marks:10,topics:["Land Acquisition","Infrastructure","Agriculture"]},
        {year:2014,question:"Explain how PPP arrangements in long-gestation infrastructure projects can transfer unsustainable liabilities to the future. What arrangements need to be put in place?",marks:10,topics:["Infrastructure","PPP","Investment"]},
        {year:2014,question:"Foreign Direct Investment (FDI) in the defence sector is now set to be liberalized. What influence is this expected to have on Indian defence and economy?",marks:10,topics:["FDI","Defence","Industrial Policy"]},
        {year:2014,question:"Discuss the impact of FDI entry into multi-trade retail sector on supply chain management in commodity trade pattern of the economy.",marks:10,topics:["FDI","Retail","Supply Chain"]},
        {year:2014,question:"Discuss the rationale for introducing the Goods and Services Tax in India. Highlight its advantages and concerns.",marks:15,topics:["GST","Taxation","Fiscal Reforms"]},

        // ===================== 2013 (12 questions) =====================
        {year:2013,question:"With a consideration towards the strategy of inclusive growth, the new Companies Bill, 2013 has indirectly mandated corporate social responsibility (CSR). Critically discuss the challenges expected in its implementation.",marks:10,topics:["Inclusive Growth","CSR","Economic Development"]},
        {year:2013,question:"What were the reasons for the introduction of Fiscal Responsibility and Budget Management (FRBM) Act, 2003? Discuss critically its salient features and their effectiveness.",marks:10,topics:["Fiscal Policy","FRBM","Government Budgeting"]},
        {year:2013,question:"What is the meaning of the term 'tax expenditure'? Taking housing sector as an example, discuss how it influences the budgetary policies of the government.",marks:10,topics:["Tax Policy","Government Budgeting","Fiscal Policy"]},
        {year:2013,question:"Food Security Bill is expected to eliminate hunger and malnutrition in India. Critically discuss various apprehensions in its effective implementation along with the concerns it has generated in WTO.",marks:10,topics:["Food Security","PDS","WTO"]},
        {year:2013,question:"Discuss the rationale for introducing the Goods and Services Tax (GST) in India. Bring out critically the reasons for the delay in rolling out the GST regime.",marks:10,topics:["GST","Tax Reform","Fiscal Federalism"]},
        {year:2013,question:"Examine the impact of liberalization on companies owned by Indians and those in the private sector which were in operation from before 1991.",marks:10,topics:["Liberalization","Industrial Growth","Economic Reforms"]},
        {year:2013,question:"What are the different types of agriculture subsidies given to farmers at the national and state levels? Critically analyse the agricultural subsidy regime with reference to the distortions created by it.",marks:10,topics:["Agriculture","Subsidies","Fiscal Policy"]},
        {year:2013,question:"India needs to strengthen measures to promote the pink revolution in food industry. Critically elucidate the statement.",marks:10,topics:["Food Processing","Agriculture","Employment"]},
        {year:2013,question:"Though India allowed FDI in multi-brand retail through the joint venture route in September 2012, the FDI even after a year has not picked up. Discuss the reasons.",marks:10,topics:["FDI","Retail","Foreign Investment"]},
        {year:2013,question:"Adoption of PPP model for infrastructure development of the country has not been free of criticism. Critically discuss the pros and cons of the model.",marks:10,topics:["Infrastructure","PPP","Investment"]},
        {year:2013,question:"Write a note on India's green energy corridor to alleviate the problem of conventional energy.",marks:10,topics:["Energy","Renewable Energy","Infrastructure"]},
        {year:2013,question:"Establish the relationship between land reforms, agricultural productivity and elimination of poverty in the Indian economy.",marks:10,topics:["Land Reforms","Agriculture","Poverty"]}
    ]
};
