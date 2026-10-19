// ============================================================================
        // EXACT WORD-FOR-WORD DATA FROM THE UPLOADED MLS 1104 PDF FILES
        // ============================================================================
        const CATEGORIES = [
            {
                id: "heart",
                shortLabel: "1. Heart & Flow",
                actBadge: "Prelab Act. 8 & 9",
                title: "THE CIRCULATORY SYSTEM: HEART & BLOOD FLOW",
                colorClass: "bg-sky-pastel",
                icon: "ph-heartbeat",
                subtopics: [
                    {
                        id: "heart-flow",
                        name: "Blood Flow through Heart",
                        visualTitle: "Blood Flow through Heart (Pulmonary, Systemic & Coronary)",
                        svgType: "heartFlowSvg",
                        items: [
                            {
                                label: "① Superior and inferior vena cava",
                                tag: "Step ① • Deoxygenated Inflow",
                                exactText: "Body tissues (systemic circulation) → ① Superior and inferior vena cava → Right atrium."
                            },
                            {
                                label: "Right atrium",
                                tag: "Right Side of Heart",
                                exactText: "Receives blood from Superior and inferior vena cava and Coronary sinus / Cardiac veins → sends blood to Tricuspid valve."
                            },
                            {
                                label: "Tricuspid valve",
                                tag: "One-Way Valve",
                                exactText: "Right atrium → Tricuspid valve → ② Right ventricle. Ensures one-way blood flow."
                            },
                            {
                                label: "② Right ventricle",
                                tag: "Step ② • Right Side of Heart",
                                exactText: "Right side of heart → Pulmonary circulation (to lungs): ② Right ventricle → Pulmonary semilunar valve."
                            },
                            {
                                label: "Pulmonary semilunar valve",
                                tag: "Semilunar Valve",
                                exactText: "② Right ventricle → Pulmonary semilunar valve → ③ Pulmonary trunk."
                            },
                            {
                                label: "③ Pulmonary trunk",
                                tag: "Step ③ • Pulmonary Pathway",
                                exactText: "Pulmonary semilunar valve → ③ Pulmonary trunk → ④ Pulmonary arteries (Left pulmonary artery & Branches of right/left pulmonary arteries)."
                            },
                            {
                                label: "④ Pulmonary arteries",
                                tag: "Step ④ • To Lungs",
                                exactText: "③ Pulmonary trunk → ④ Pulmonary arteries → Lung tissue (pulmonary circulation)."
                            },
                            {
                                label: "Lung tissue (pulmonary circulation)",
                                tag: "Lung capillaries",
                                exactText: "Pulmonary circulation (to lungs): Lung capillaries where CO2 leaves blood and O2 enters blood."
                            },
                            {
                                label: "⑤ Pulmonary veins",
                                tag: "Step ⑤ • From Lungs",
                                exactText: "Lung tissue (pulmonary circulation) → ⑤ Pulmonary veins → Left atrium."
                            },
                            {
                                label: "Left atrium",
                                tag: "Left Side of Heart",
                                exactText: "⑤ Pulmonary veins → Left atrium → ⑥ Bicuspid valve."
                            },
                            {
                                label: "⑥ Bicuspid valve (Mitral Valve)",
                                tag: "Step ⑥ • One-Way Valve",
                                exactText: "Left atrium → ⑥ Bicuspid valve (Mitral Valve) → ⑦ Left ventricle."
                            },
                            {
                                label: "⑦ Left ventricle",
                                tag: "Step ⑦ • Left Side of Heart",
                                exactText: "Left side of heart → Systemic circulation (to body): ⑥ Bicuspid valve → ⑦ Left ventricle → Aortic semilunar valve."
                            },
                            {
                                label: "Aortic semilunar valve & ⑧ Aorta (Aortic arch)",
                                tag: "Step ⑧ • Systemic Outflow",
                                exactText: "⑦ Left ventricle → Aortic semilunar valve → ⑧ Aorta → Body tissues (systemic circulation) & Coronary arteries."
                            },
                            {
                                label: "Heart tissue (coronary circulation)",
                                tag: "Coronary Loop",
                                exactText: "⑧ Aorta → Coronary arteries → Heart tissue (coronary circulation) → Coronary sinus / Cardiac veins → Right atrium."
                            },
                            {
                                label: "Body tissues (systemic circulation)",
                                tag: "Tissue capillaries",
                                exactText: "Circulation to tissues of head & Circulation to tissues of lower body: O2 moves into tissues, CO2 moves into blood → returns to ① Superior and inferior vena cava."
                            }
                        ],
                        verbatimCards: [
                            {
                                title: "Functions of the Heart (Exact PDF Text)",
                                bg: "bg-sky-pastel",
                                lines: [
                                    "1. Generates blood pressure",
                                    "2. Routes blood",
                                    "3. Ensures one-way blood flow",
                                    "4. Regulates blood supply"
                                ]
                            },
                            {
                                title: "Pulmonary vs. Systemic Circulation (Page 3)",
                                bg: "bg-lilac-pastel",
                                lines: [
                                    "• Pulmonary circulation (to lungs): Right side of heart → Lung / Lung capillaries (CO2 / O2).",
                                    "• Systemic circulation (to body): Left side of heart → Circulation to tissues of head & Circulation to tissues of lower body → Tissue capillaries (CO2 / O2)."
                                ]
                            },
                            {
                                title: "Heart Anatomy Labels (Pages 4, 5 & 14)",
                                bg: "bg-amber-pastel",
                                lines: [
                                    "• Superior vena cava, Inferior vena cava, Right atrium, Tricuspid valve, Right ventricle",
                                    "• Pulmonary semilunar valve (Pulmonary Valve), Pulmonary trunk, Left pulmonary artery, Branches of right/left pulmonary arteries",
                                    "• Pulmonary veins, Left atrium, Bicuspid valve (Mitral Valve), Left ventricle",
                                    "• Aortic semilunar valve (Aortic Valve), Aortic arch / Aorta, Interventricular septum, Pericardium"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: "vessels",
                shortLabel: "2. Blood Vessels & BP",
                actBadge: "Prelab Act. 8 & 9",
                title: "THE CIRCULATORY SYSTEM: BLOOD VESSELS, HISTOLOGY & BLOOD PRESSURE",
                colorClass: "bg-lilac-pastel",
                icon: "ph-git-branch",
                subtopics: [
                    {
                        id: "vessel-histology",
                        name: "Vessel Structures & Histology",
                        visualTitle: "Artery vs. Vein Layers & Capillary Network",
                        svgType: "vesselHistologySvg",
                        items: [
                            {
                                label: "Arteries",
                                tag: "VESSEL STRUCTURES",
                                exactText: "Arteries: • thick with a lot of elastic tissues • blood is oxygenated (oxygen-rich). Direction of Blood Flow: Away from the heart | Pressure: High | Wall thickness: Thick, muscular and elastic | Lumen: Narrow | Valves: No | Function: Transport blood from the heart to tissues | Example: Aorta, arterioles."
                            },
                            {
                                label: "Veins",
                                tag: "VESSEL STRUCTURES",
                                exactText: "Veins: • carry blood toward heart • less elastic • Where blood is drained from the tissues. Direction of Blood Flow: Toward the heart | Oxygenation (Systemic Circulation): Oxygen-poor (except pulmonary veins) | Pressure: Low | Wall thickness: Thinner and less muscular and elastic | Lumen: Wide | Valves: Yes | Function: Return blood from tissues to the heart | Example: Vena cava, venules."
                            },
                            {
                                label: "Capillaries / Capillary network",
                                tag: "VESSEL STRUCTURES",
                                exactText: "Capillaries: • exchange occurs between blood and tissue fluids (Basement membrane & Endothelial cells). Direction of Blood Flow: Connect arteries and veins | Oxygenation: Varies | Pressure: Very low | Wall thickness: One-cell thick | Lumen: Microscopic | Valves: No | Function: Site of nutrient, gas, and waste exchange with tissues | Example: Present in capillary beds throughout the body."
                            },
                            {
                                label: "1. Tunica intima / interna",
                                tag: "Innermost Layer",
                                exactText: "Endothelium and subendothelial layer; direct contact with blood in circulation; allows diffusion of substances. Contains • Endothelium • Loose connective tissue • Internal elastic lamina (Internal elastic membrane)."
                            },
                            {
                                label: "2. Tunica media",
                                tag: "Middle Muscular Layer",
                                exactText: "Smooth muscle layer; contains elastic and reticular fibers, elastic lamellae, proteoglycans; regulates the diameter of the lumen. Contains • Smooth muscle • Elastic fibers • External elastic lamina (External elastic membrane)."
                            },
                            {
                                label: "3. Tunica adventitia / externa",
                                tag: "Outermost Layer",
                                exactText: "Contains collagen and elastic fibers; anchors the blood vessel on the surrounding tissue. Contains • Collagen fibers."
                            }
                        ],
                        verbatimCards: [
                            {
                                title: "BLOOD VESSEL FUNCTIONS (Page 6)",
                                bg: "bg-sky-pastel",
                                lines: [
                                    "1. Carry blood",
                                    "2. Exchange nutrients, waste products, gases within tissues",
                                    "3. Transport substances",
                                    "4. Regulate blood pressure",
                                    "5. Direct blood flow to tissues"
                                ]
                            },
                            {
                                title: "Layers of blood vessels (Veins and Arteries) - Page 7",
                                bg: "bg-amber-pastel",
                                lines: [
                                    "1. Tunica intima / interna: Endothelium and subendothelial layer; direct contact with blood in circulation; allows diffusion of substances",
                                    "2. Tunica media: Smooth muscle layer; contains elastic and reticular fibers, elastic lamellae, proteoglycans; regulates the diameter of the lumen",
                                    "3. Tunica adventitia / externa: Contains collagen and elastic fibers; anchors the blood vessel on the surrounding tissue"
                                ]
                            },
                            {
                                title: "Comparison Table: Arteries vs. Veins vs. Capillaries (Page 8)",
                                bg: "bg-mint-pastel",
                                lines: [
                                    "• Direction of Blood Flow: Arteries = Away from the heart | Veins = Toward the heart | Capillaries = Connect arteries and veins",
                                    "• Oxygenation (Systemic Circulation): Arteries = Oxygen-rich (except pulmonary arteries) | Veins = Oxygen-poor (except pulmonary veins) | Capillaries = Varies",
                                    "• Pressure: Arteries = High | Veins = Low | Capillaries = Very low",
                                    "• Wall thickness: Arteries = Thick, muscular and elastic | Veins = Thinner and less muscular and elastic | Capillaries = One-cell thick",
                                    "• Lumen & Valves: Arteries = Narrow, No valves | Veins = Wide, Yes valves | Capillaries = Microscopic, No valves"
                                ]
                            }
                        ]
                    },
                    {
                        id: "blood-pressure",
                        name: "Blood Pressure & Korotkoff Sounds",
                        visualTitle: "Measuring Blood Pressure (120/80 mm Hg) & Brachial Artery",
                        svgType: "bloodPressureSvg",
                        items: [
                            {
                                label: "Step 1: Brachial Artery Blocked (No sound)",
                                tag: "Above 120 mm Hg",
                                exactText: "1. A blood pressure cuff connected to a sphygmomanometer is wrapped around the patient's arm, and a stethoscope is placed over the brachial artery. The blood pressure cuff is then inflated until the brachial artery is completely blocked; no sounds can be heard through the stethoscope."
                            },
                            {
                                label: "Step 2: Sound is first heard (Systolic pressure: 120 mm Hg)",
                                tag: "Systolic Pressure",
                                exactText: "2. Cuff pressure is lowered. Then you hear the first sound (+ blood flow). Systolic pressure: contraction of heart (120 mm Hg)."
                            },
                            {
                                label: "Step 3: Korotkoff sounds (Blocked or partially open)",
                                tag: "Turbulent Blood Flow",
                                exactText: "3. Korotkoff sounds- sound of turbulence produces vibrations in the blood and surrounding tissues that can be heard through the stethoscope."
                            },
                            {
                                label: "Step 4: Sound disappears (Diastolic pressure: 80 mm Hg)",
                                tag: "Diastolic Pressure",
                                exactText: "4. As the pressure in the blood pressure cuff is lowered still more, the Korotkoff sounds change tone and loudness → pressure has dropped until the brachial artery is no longer constricted and blood flow is no longer turbulent, the sound disappears completely. Diastolic pressure: relaxation of heart (80 mm Hg)."
                            }
                        ],
                        verbatimCards: [
                            {
                                title: "Blood Pressure Definitions (Page 11)",
                                bg: "bg-sky-pastel",
                                lines: [
                                    "• Blood pressure is the measure of force blood exerts against blood vessel walls.",
                                    "• Systolic pressure: contraction of heart",
                                    "• Diastolic pressure: relaxation of heart",
                                    "• Average Blood Pressure: 120/80"
                                ]
                            },
                            {
                                title: "Hypertension, or high blood pressure (Page 11)",
                                bg: "bg-lilac-pastel",
                                lines: [
                                    "• Normal: less than 120 mm Hg systolic and 80 mm Hg diastolic",
                                    "• Prehypertension: 139/89 mm Hg",
                                    "• Stage 1 hypertension: from 140/90 to 159/99 mm Hg",
                                    "• Stage 2 hypertension: greater than 160/100 mm Hg"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: "blood",
                shortLabel: "3. Blood & Cells",
                actBadge: "Prelab Act. 8 & 9",
                title: "THE CIRCULATORY SYSTEM: BLOOD COMPOSITION & HEMATOPOIESIS",
                colorClass: "bg-amber-pastel",
                icon: "ph-drop",
                subtopics: [
                    {
                        id: "blood-comp",
                        name: "Plasma, Formed Elements & Lineage",
                        visualTitle: "Blood Percentage by Volume (Plasma 55% | Formed Elements 45%)",
                        svgType: "bloodCompSvg",
                        items: [
                            {
                                label: "Plasma (55% Percentage by volume)",
                                tag: "Water 91% | Proteins 7% | Other solutes 2%",
                                exactText: "Plasma (percentage by weight): • Proteins 7%: Albumins 58%, Globulins 38%, Fibrinogen 4% • Water 91% • Other solutes 2%: Ions, Nutrients, Waste products, Gases, Regulatory substances."
                            },
                            {
                                label: "Red blood cells (4.2–6.2 million per cubic mm)",
                                tag: "Formed elements (45%)",
                                exactText: "Red blood cells: 4.2–6.2 million per cubic mm. Lineage: Myeloid stem cell → Proerythroblast → Early erythroblast → Intermediate erythroblast → Late erythroblast → (Nucleus extruded) → Reticulocyte → Red blood cell."
                            },
                            {
                                label: "Platelets (250–400 thousand per cubic mm)",
                                tag: "Buffy coat / Formed elements",
                                exactText: "Platelets: 250–400 thousand per cubic mm. Lineage: Myeloid stem cell → Megakaryoblast → Megakaryocyte → Megakaryocyte breakup → Platelets."
                            },
                            {
                                label: "Neutrophils (60%–70% of White blood cells)",
                                tag: "White blood cells: 5–10 thousand",
                                exactText: "Neutrophils: 60%–70%. Lineage: Myeloid stem cell → Myeloblast → Progranulocyte → Neutrophilic myelocyte → Neutrophilic band cell → Neutrophil."
                            },
                            {
                                label: "Lymphocytes (20%–25% of White blood cells)",
                                tag: "Lymphoid Lineage",
                                exactText: "Lymphocytes: 20%–25%. Lineage: Lymphoid stem cell → Lymphoblast → Lymphocyte."
                            },
                            {
                                label: "Monocytes (3%–8% of White blood cells)",
                                tag: "Myeloid Lineage",
                                exactText: "Monocytes: 3%–8%. Lineage: Myeloid stem cell → Monoblast → Monocyte."
                            },
                            {
                                label: "Eosinophils (2%–4%) & Basophils (0.5%–1%)",
                                tag: "Granulocytes",
                                exactText: "Eosinophils: 2%–4% (Eosinophilic myelocyte → Eosinophilic band cell → Eosinophil). Basophils: 0.5%–1% (Basophilic myelocyte → Basophilic band cell → Basophil)."
                            }
                        ],
                        verbatimCards: [
                            {
                                title: "FUNCTIONS OF BLOOD (Page 12)",
                                bg: "bg-amber-pastel",
                                lines: [
                                    "1. Transport of gases, nutrients and waste products",
                                    "2. Transport of processed molecules",
                                    "3. Transport of regulatory molecules",
                                    "4. Regulation of pH and osmosis",
                                    "5. Maintenance of body temperature",
                                    "6. Protection against foreign substances",
                                    "7. Clot formation"
                                ]
                            },
                            {
                                title: "White Blood Cells Percentages (Page 12)",
                                bg: "bg-purple-pastel",
                                lines: [
                                    "• White blood cells: 5–10 thousand per cubic mm",
                                    "• Neutrophils: 60%–70%",
                                    "• Lymphocytes: 20%–25%",
                                    "• Monocytes: 3%–8%",
                                    "• Eosinophils: 2%–4%",
                                    "• Basophils: 0.5%–1%"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: "respiratory",
                shortLabel: "4. Respiratory",
                actBadge: "Prelab Act. 10",
                title: "THE RESPIRATORY SYSTEM: AIRWAYS & GAS EXCHANGE",
                colorClass: "bg-mint-pastel",
                icon: "ph-wind",
                subtopics: [
                    {
                        id: "resp-structures",
                        name: "Structures, Airways & Gas Exchange",
                        visualTitle: "Animated Respiratory Airways, Diaphragm & Alveoli (O2-CO2 Exchange)",
                        svgType: "respiratorySvg",
                        items: [
                            {
                                label: "Nostrils, Nasal cavity & Oral cavity",
                                tag: "Upper Airway",
                                exactText: "• Nostrils: Way for air to enter the body • Nasal cavity: Purifies, humidifies the air • Oral cavity: Lets air and food enter."
                            },
                            {
                                label: "Pharynx, Epiglottis & Larynx",
                                tag: "Throat & Voice Box",
                                exactText: "• Pharynx: Channels the air down the airways • Epiglottis: Keeps food from entering the airways • Larynx: Letting air pass through speech production."
                            },
                            {
                                label: "Trachea, Right primary bronchus & Left primary bronchus",
                                tag: "Conducting Passages",
                                exactText: "• Trachea: Channels the air toward the left/right bronchi • Right primary bronchus: Allows air to enter the right lung • Left primary bronchus: Allows air to enter the left lung."
                            },
                            {
                                label: "Bronchioles & Terminal bronchioles",
                                tag: "Lung Airway Passages",
                                exactText: "• Bronchioles: Lets air reach the alveoli. Lung Airway Passages order: Primary bronchi → Lobar (secondary) bronchi → Segmental (tertiary) bronchi → Bronchioles → Terminal bronchioles."
                            },
                            {
                                label: "Respiratory bronchioles, Alveolar ducts, Alveolar sacs & Alveoli",
                                tag: "Area where Exchange of gases Occur",
                                exactText: "Area where Exchange of gases Occur: • Respiratory bronchioles • Alveolar ducts - \"doorways\" into the alveoli • Alveolar sacs \"chambers\" • Alveoli: Site for O2-CO2 exchange (with Type I, Type II cells, and Capillary)."
                            },
                            {
                                label: "Lungs, Pleural Membrane, Ribs, Intercostal Muscles & Diaphragm",
                                tag: "Ventilation Mechanics",
                                exactText: "• Lungs: Carries out O2-CO2 gas exchange • Pleural Membrane: Helps keep the lungs flexible (Visceral pleura, Pleural cavity, Parietal pleura) • Ribs: Protects the respiratory organs • Intercostal Muscles: Moves the ribs during breathing • Diaphragm: Helps pump the lungs."
                            }
                        ],
                        verbatimCards: [
                            {
                                title: "THE RESPIRATORY SYSTEM FUNCTIONS (Page 3)",
                                bg: "bg-mint-pastel",
                                lines: [
                                    "1. Regulation of blood pH.",
                                    "2. Production of chemical mediators.",
                                    "3. Voice production.",
                                    "4. Olfaction.",
                                    "5. Protection."
                                ]
                            },
                            {
                                title: "Process of Gas Exchange (Page 4 - Exact Words)",
                                bg: "bg-sky-pastel",
                                lines: [
                                    "1. Inhalation: Diaphragm contracts, intercostal muscles expand the rib cage, and air is drawn into the lungs.",
                                    "2. Gas Exchange: Oxygen diffuses from alveoli into the blood; carbon dioxide diffuses from the blood into the alveoli.",
                                    "3. Oxygen Transport: Oxygen binds to hemoglobin in red blood cells and is transported to body tissues.",
                                    "4. Cellular Respiration: Cells use oxygen to produce energy (ATP) and release carbon dioxide as a waste product.",
                                    "5. Carbon Dioxide Transport: Carbon dioxide is carried back to the lungs, mainly as bicarbonate ions in the blood.",
                                    "6. Exhalation: Diaphragm and intercostal muscles relax, reducing chest cavity volume, and expelling carbon dioxide-rich air from the lungs."
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: "digestive",
                shortLabel: "5. Digestive",
                actBadge: "Prelab Act. 11",
                title: "THE DIGESTIVE SYSTEM & ITS ACCESSORY ORGANS",
                colorClass: "bg-amber-pastel",
                icon: "ph-cooking-pot",
                subtopics: [
                    {
                        id: "digestive-tract",
                        name: "Digestive Tract & Accessory Organs",
                        visualTitle: "Animated Digestive Tract & Accessory Organs (Liver, Gallbladder, Pancreas)",
                        svgType: "digestiveSvg",
                        items: [
                            {
                                label: "Oral cavity (mouth) & Salivary glands",
                                tag: "Ingestion & Saliva",
                                exactText: "Oral cavity: • Entry point for food and liquids • Major components are the tongue, lips, cheeks, teeth and salivary glands • Functions: Ingestion of food, taste, mastication, digestion, swallowing, communication, protection. Salivary glands (Parotid gland, Sublingual gland, Submandibular gland): • Produce saliva (mixture of serous and mucous secretions) • Contains digestive enzymes and protective substances • Keeps oral cavity moist."
                            },
                            {
                                label: "ESOPHAGUS",
                                tag: "Muscular Tube",
                                exactText: "ESOPHAGUS: • Muscular tube that transports swallowed material from the pharynx to the stomach • Lined with stratified squamous epithelium • Provides secretions for lubrication of the mucosa."
                            },
                            {
                                label: "STOMACH & Gastric Glands Histology",
                                tag: "Chyme & Gastric Folds (Rugae)",
                                exactText: "STOMACH: • Enlarged segment of the digestive tract. Major functions: • Facilitates digestion of food material initiated by saliva • Provides acidic fluid for ingested food resulting in chyme • Site for initial digestion of major biomolecules • Gastric glands contains cells that produce secretions (Regions: Lower esophageal sphincter, Cardia, Fundus, Body, Greater/Lesser curvature, Pyloric antrum, Pyloric canal, Pyloric sphincter, Gastric folds / rugae)."
                            },
                            {
                                label: "SMALL INTESTINES (Duodenum, Jejunum, Ileum)",
                                tag: "Nutrient Absorption & Villi",
                                exactText: "SMALL INTESTINES: • Approximately 5 meters long organ • Divided into the duodenum, jejunum, and ileum • Lined with simple columnar epithelium • Site for completion of digestive processes and absorption of food nutrients • Intestinal mucosa possess characteristic villi projecting into the lumen."
                            },
                            {
                                label: "LARGE INTESTINES",
                                tag: "Water & Electrolytes Absorption",
                                exactText: "LARGE INTESTINES: • Terminal portion of the digestive tract • Mucosa is lined with simple columnar epithelium • Facilitates absorption of water and electrolytes and forms the feces from undigested material (Cecum, Appendix, Ascending colon, Transverse colon, Descending colon, Sigmoid colon, Haustrum, Teniae coli, Rectum, Anal canal, External anal sphincter)."
                            },
                            {
                                label: "PANCREAS (Accessory Organ)",
                                tag: "Enzymes & Hormones",
                                exactText: "PANCREAS: • Production of pancreatic juice • Contains digestive enzymes: Pancreatic amylase, trypsin, chymotrypsin, elastase, pancreatic lipase • Secretes pancreatic juice into the small intestine • Production and release of hormones: Insulin, glucagon."
                            },
                            {
                                label: "LIVER, Hepatocytes & Gallbladder (Accessory Organs)",
                                tag: "Bile Production & Storage",
                                exactText: "LIVER: • Liver is the heaviest gland and second largest organ • Hepatocytes as functional units: Produce bile (Hepatocytes: type of specialized epithelial cells. They are typically large and polygonal (many-sided) in shape.) • Key functions: Nutrient metabolism, processing of drugs and hormones, produce and secrete bile, storage, synthesis of vitamins. Gallbladder: gallbladder is a small, pear-shaped organ located under the liver that stores and concentrates bile produced by the liver to help digest fats."
                            }
                        ],
                        verbatimCards: [
                            {
                                title: "DIGESTIVE SYSTEM General functions (Page 3)",
                                bg: "bg-amber-pastel",
                                lines: [
                                    "1. Ingest food and liquid",
                                    "2. Mastication or chewing of food",
                                    "3. Motility and movement of materials",
                                    "4. Secretion of mucus, enzymes, fluids",
                                    "5. Release of hormones",
                                    "6. Chemical digestion and breakdown of food",
                                    "7. Absorption of food molecules and water",
                                    "8. Elimination of undigested or unabsorbed food"
                                ]
                            },
                            {
                                title: "Stomach: Histology - Simple columnar epithelium (Page 8)",
                                bg: "bg-lilac-pastel",
                                lines: [
                                    "• Surface mucous cells → Mucin in an alkaline fluid",
                                    "• Mucous neck cells → Mucin in an acidic fluid",
                                    "• Parietal cells → HCl & intrinsic factor",
                                    "• Chief cells → Pepsinogen & lipase",
                                    "• G cells/enteroendocrine cells → Gastrin"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: "urinary_repro",
                shortLabel: "6. Urinary & Repro",
                actBadge: "Prelab Act. 12 & 13",
                title: "THE URINARY SYSTEM & THE REPRODUCTIVE SYSTEM",
                colorClass: "bg-purple-pastel",
                icon: "ph-dna",
                subtopics: [
                    {
                        id: "urinary-sub",
                        name: "Act. 12: Urinary System",
                        visualTitle: "Animated Kidney, Nephron Filtration & Urinary Bladder",
                        svgType: "urinarySvg",
                        items: [
                            {
                                label: "Kidneys (Renal cortex & Renal medulla)",
                                tag: "Major structures",
                                exactText: "• Renal cortex: Contains blood-filtering structures • Renal medulla: Transport and modification of fluid into urine. Internal structures: Renal capsule, Renal Cortex, Renal Medulla, Renal pyramid, Renal papilla, Minor calyx, Major calyx, Renal pelvis."
                            },
                            {
                                label: "Renal corpuscle (Bowman capsule & Glomerulus)",
                                tag: "Nephron Filtration",
                                exactText: "5. Afferent arteriole → 6. Glomerulus (inside Bowman capsule / Renal corpuscle with Podocyte, Capillary, Bowman's Space, Mesangial Cell) → 7. Efferent arteriole. Filters water and solutes from the blood into the kidneys."
                            },
                            {
                                label: "Renal Tubules & Peritubular capillaries",
                                tag: "Tubular Flow",
                                exactText: "Proximal convoluted tubule → Descending limb, loop of Henle → Ascending limb, loop of Henle → Distal convoluted tubule → Collecting duct. 8. Peritubular capillaries (blood flows to the vasa recta or directly to the interlobular veins) & 9. Vasa recta."
                            },
                            {
                                label: "Renal Blood Flow Pathway (1 to 13)",
                                tag: "Kidney Vessels",
                                exactText: "1. Renal artery → 2. Interlobar artery → 3. Arcuate artery → 4. Interlobular artery → 5. Afferent arteriole → 6. Glomerulus → 7. Efferent arteriole → 8. Peritubular capillaries / 9. Vasa recta → 10. Interlobular vein → 11. Arcuate vein → 12. Interlobar vein → 13. Renal vein."
                            },
                            {
                                label: "Ureters, Urinary bladder & Urethra",
                                tag: "Urine Transport & Storage",
                                exactText: "Major structures: Kidneys, Ureters, Urinary bladder, Urethra. Urinary bladder structures: Ureter, Ureteral orifice, Trigone, Bladder Neck, Internal urethral orifice, Internal urethral sphincter, Urogenital diaphragm, External urethral sphincter, Urethra (Male: Prostatic Urethra, Membranous Urethra, Bulbar Urethra, Penile Urethra / Spongy urethra, Fossa Navicularis, Meatus)."
                            }
                        ],
                        verbatimCards: [
                            {
                                title: "URINARY SYSTEM Key functions (Page 4)",
                                bg: "bg-sky-pastel",
                                lines: [
                                    "• Regulates blood volume and pressure",
                                    "• Regulates blood ion concentration, blood pH, osmolarity",
                                    "• Hormone production",
                                    "• Excretion of waste substances",
                                    "• Filters water and solutes from the blood into the kidneys"
                                ]
                            }
                        ]
                    },
                    {
                        id: "repro-sub",
                        name: "Act. 13: Reproductive System",
                        visualTitle: "Animated Male & Female Reproductive Organs & Ovarian Follicle",
                        svgType: "reproSvg",
                        items: [
                            {
                                label: "1. Production of gametes",
                                tag: "Function 1",
                                exactText: "1. Production of gametes. gametes: sperm cells in the testes of males; oocytes (eggs) in the ovaries of females. (Testis histology: Interstitial cells (of Leydig), Sustentacular cells (Sertoli cells), 1° spermatocytes, 2° spermatocytes, Spermatids)."
                            },
                            {
                                label: "2. Fertilization (Male & Female Roles)",
                                tag: "Function 2",
                                exactText: "2. Fertilization: • Males: duct system nourishes sperm until they are mature and are deposited in the female reproductive tract by the penis. • Female: receives the male's sperm and transports them to the fertilization site."
                            },
                            {
                                label: "3. Development and nourishment of a new individual",
                                tag: "Function 3",
                                exactText: "3. Development and nourishment of a new individual. Female: nurtures the development of a new individual in the uterus until birth and provides nourishment (milk) after birth."
                            },
                            {
                                label: "Male Reproductive Organs & Cryptorchidism",
                                tag: "Organs in the System: Male",
                                exactText: "Testis, Epididymis, Scrotum, Ductus (vas) deferens, Superficial inguinal ring, Ampulla of ductus deferens, Seminal vesicle, Ejaculatory duct, Prostate (prostate gland), Bulbourethral gland, Penis (Erectile tissue of the penis, Spongy urethra, Shaft of the penis, Glans penis, Prepuce, External urethral orifice). Undescended testicle locations: Abdominal (15%), Inguinal canal (25%), High scrotal (60%)."
                            },
                            {
                                label: "Female Reproductive Organs & Ovarian Follicle",
                                tag: "Organs in the System: Female",
                                exactText: "Ovary, Uterine (Fallopian) Tube, Uterus, Fornix, Cervix, Vagina, Clitoris, Labia Majora, Labia Minora. Ovarian Follicle Histology: Oocyte, Zona Pellucida, Corona Radiata, Zona Granulosa, Antrum. Cervical dilation stages: Cervix is not effaced or dilated → Cervix is 50% effaced and not dilated → Cervix is 100% effaced and dilated to 3 cm → Cervix is fully dilated to 10 cm."
                            }
                        ],
                        verbatimCards: [
                            {
                                title: "REPRODUCTIVE SYSTEM FUNCTIONS (Page 3 - Exact Words)",
                                bg: "bg-purple-pastel",
                                lines: [
                                    "1. Production of gametes: gametes: sperm cells in the testes of males; oocytes (eggs) in the ovaries of females.",
                                    "2. Fertilization: Males: duct system nourishes sperm until they are mature and are deposited in the female reproductive tract by the penis. Female: receives the male's sperm and transports them to the fertilization site.",
                                    "3. Development and nourishment of a new individual: Female: nurtures the development of a new individual in the uterus until birth and provides nourishment (milk) after birth."
                                ]
                            }
                        ]
                    }
                ]
            }
        ];

        // ============================================================================
        // QUIZ QUESTIONS (TESTING EXACT WORDS FROM ALL PDFS)
        // ============================================================================
        const QUIZ_QUESTIONS = [
            {
                q: "[Act. 8 & 9] Which of the following is NOT one of the 4 Functions of the Heart listed in your PDF?",
                options: [
                    "Generates blood pressure",
                    "Routes blood",
                    "Ensures one-way blood flow",
                    "Produces pancreatic juice"
                ],
                ans: 3,
                explain: "The 4 Functions of the Heart are: 1. Generates blood pressure, 2. Routes blood, 3. Ensures one-way blood flow, 4. Regulates blood supply."
            },
            {
                q: "[Act. 8 & 9] Which blood vessel layer is the 'Smooth muscle layer; contains elastic and reticular fibers, elastic lamellae, proteoglycans; regulates the diameter of the lumen'?",
                options: [
                    "Tunica intima / interna",
                    "Tunica media",
                    "Tunica adventitia / externa",
                    "Basement membrane"
                ],
                ans: 1,
                explain: "Tunica media is the smooth muscle layer that regulates the diameter of the lumen."
            },
            {
                q: "[Act. 8 & 9] During blood pressure measurement, what are the sounds of turbulence heard through the stethoscope called?",
                options: [
                    "Korotkoff sounds",
                    "Buffy coat sounds",
                    "Systolic murmurs",
                    "Peristalsis sounds"
                ],
                ans: 0,
                explain: "Korotkoff sounds- sound of turbulence produces vibrations in the blood and surrounding tissues that can be heard through the stethoscope."
            },
            {
                q: "[Act. 8 & 9] What is the percentage by volume of Plasma and Formed elements in whole blood?",
                options: [
                    "Plasma 91% | Formed elements 9%",
                    "Plasma 55% | Formed elements 45%",
                    "Plasma 45% | Formed elements 55%",
                    "Plasma 70% | Formed elements 30%"
                ],
                ans: 1,
                explain: "Percentage by volume: Plasma 55%, Formed elements 45% (with Buffy coat)."
            },
            {
                q: "[Act. 8 & 9] Which White blood cells make up 60%–70% of the total WBC count?",
                options: ["Lymphocytes", "Monocytes", "Neutrophils", "Basophils"],
                ans: 2,
                explain: "Neutrophils: 60%–70%, Lymphocytes: 20%–25%, Monocytes: 3%–8%, Eosinophils: 2%–4%, Basophils: 0.5%–1%."
            },
            {
                q: "[Act. 10] In the Respiratory System, which structure 'Keeps food from entering the airways'?",
                options: ["Pharynx", "Epiglottis", "Larynx", "Pleural Membrane"],
                ans: 1,
                explain: "Epiglottis: Keeps food from entering the airways."
            },
            {
                q: "[Act. 10] In the Lung Airway Passages, which structures are described as '\"doorways\" into the alveoli'?",
                options: ["Terminal bronchioles", "Respiratory bronchioles", "Alveolar ducts", "Alveolar sacs"],
                ans: 2,
                explain: "Alveolar ducts - 'doorways' into the alveoli; Alveolar sacs 'chambers'."
            },
            {
                q: "[Act. 11] In the Stomach histology table, which cells secrete 'HCl & intrinsic factor'?",
                options: ["Surface mucous cells", "Parietal cells", "Chief cells", "G cells/enteroendocrine cells"],
                ans: 1,
                explain: "Parietal cells secrete HCl & intrinsic factor; Chief cells secrete Pepsinogen & lipase."
            },
            {
                q: "[Act. 12] In the Kidney, what is the exact function of the Renal cortex?",
                options: [
                    "Contains blood-filtering structures",
                    "Transport and modification of fluid into urine",
                    "Stores and concentrates bile",
                    "Produces saliva"
                ],
                ans: 0,
                explain: "Renal cortex: Contains blood-filtering structures; Renal medulla: Transport and modification of fluid into urine."
            },
            {
                q: "[Act. 13] Where are gametes produced according to Function 1 of the Reproductive System?",
                options: [
                    "sperm cells in the prostate of males; oocytes in the uterus of females",
                    "sperm cells in the testes of males; oocytes (eggs) in the ovaries of females",
                    "sperm cells in the seminal vesicle; oocytes in the fallopian tube",
                    "sperm cells in the epididymis; oocytes in the cervix"
                ],
                ans: 1,
                explain: "1. Production of gametes: gametes: sperm cells in the testes of males; oocytes (eggs) in the ovaries of females."
            }
        ];

        // ============================================================================
        // APPLICATION STATE & CONTROLLERS
        // ============================================================================
        let activeCatIdx = 0;
        let activeSubIdx = 0;
        let activeItemIdx = 0;
        let autoTourTimer = null;
        let quizAnswered = {};
        let quizScore = 0;

        window.onload = function () {
            renderCategoryTabs();
            selectCategory(0);
            renderQuizModalContent();
        };

        function renderCategoryTabs() {
            const nav = document.getElementById('category-tabs');
            nav.innerHTML = '';

            CATEGORIES.forEach((cat, idx) => {
                const isSelected = idx === activeCatIdx;
                const btn = document.createElement('button');
                btn.onclick = () => selectCategory(idx);
                btn.className = `px-3 py-2.5 rounded-2xl border-[1.5px] border-slate-900 font-extrabold text-xs flex items-center justify-center gap-2 transition cursor-pointer ${
                    isSelected
                        ? 'bg-[#1877f2] text-white shadow-sm scale-[1.01]'
                        : `${cat.colorClass} text-slate-900 hover:brightness-95`
                }`;
                btn.innerHTML = `
                    <i class="ph-fill ${cat.icon} text-base"></i>
                    <span class="truncate">${cat.shortLabel}</span>
                `;
                nav.appendChild(btn);
            });
        }

        function selectCategory(catIdx) {
            stopAutoTour();
            activeCatIdx = catIdx;
            activeSubIdx = 0;
            activeItemIdx = 0;
            renderCategoryTabs();
            renderSubtopicPills();
            renderWorkspace();
        }

        function renderSubtopicPills() {
            const cat = CATEGORIES[activeCatIdx];
            document.getElementById('cat-badge').textContent = cat.actBadge;
            document.getElementById('cat-title').textContent = cat.title;

            const container = document.getElementById('subtopic-pills');
            container.innerHTML = '';

            cat.subtopics.forEach((sub, sIdx) => {
                const isSelected = sIdx === activeSubIdx;
                const btn = document.createElement('button');
                btn.onclick = () => {
                    stopAutoTour();
                    activeSubIdx = sIdx;
                    activeItemIdx = 0;
                    renderSubtopicPills();
                    renderWorkspace();
                };
                btn.className = `px-3.5 py-1.5 rounded-full text-xs font-extrabold border-[1.5px] border-slate-900 transition ${
                    isSelected ? 'bg-slate-900 text-white' : 'bg-white text-slate-800 hover:bg-slate-100'
                }`;
                btn.textContent = sub.name;
                container.appendChild(btn);
            });
        }

        function renderWorkspace() {
            const cat = CATEGORIES[activeCatIdx];
            const sub = cat.subtopics[activeSubIdx];

            document.getElementById('visual-heading').textContent = sub.visualTitle;

            // Render custom animated SVG for this subtopic
            const stage = document.getElementById('svg-stage-container');
            stage.innerHTML = buildAnimatedSvg(sub.svgType);

            // Render right-hand clickable structure list
            const listEl = document.getElementById('interactive-items-list');
            listEl.innerHTML = '';
            sub.items.forEach((item, idx) => {
                const isCurr = idx === activeItemIdx;
                const card = document.createElement('div');
                card.onclick = () => selectItem(idx);
                card.className = `pastel-box pastel-box-interactive p-3 cursor-pointer ${
                    isCurr ? 'bg-sky-pastel border-2 border-slate-900' : 'bg-slate-50 hover:bg-white'
                }`;
                card.innerHTML = `
                    <div class="flex items-center justify-between gap-2 mb-1">
                        <span class="font-extrabold text-xs sm:text-sm text-slate-900">${idx + 1}. ${item.label}</span>
                        <span class="px-2 py-0.5 rounded-full bg-white border border-slate-900 text-[10px] font-extrabold shrink-0">${item.tag}</span>
                    </div>
                    <p class="text-xs text-slate-700 font-medium leading-relaxed">${item.exactText}</p>
                `;
                listEl.appendChild(card);
            });

            // Render Verbatim PDF Study Cards
            const verbatimEl = document.getElementById('verbatim-cards-container');
            verbatimEl.innerHTML = '';
            sub.verbatimCards.forEach(vc => {
                const box = document.createElement('div');
                box.className = `pastel-box ${vc.bg} p-3.5 space-y-1.5`;
                const linesHtml = vc.lines.map(l => `<li class="text-xs font-semibold text-slate-900 leading-relaxed">${l}</li>`).join('');
                box.innerHTML = `
                    <div class="font-extrabold text-xs sm:text-sm text-slate-900 border-b border-slate-900/20 pb-1">${vc.title}</div>
                    <ul class="space-y-1 pt-1">${linesHtml}</ul>
                `;
                verbatimEl.appendChild(box);
            });

            updateActiveHighlight();
        }

        function selectItem(idx) {
            const sub = CATEGORIES[activeCatIdx].subtopics[activeSubIdx];
            activeItemIdx = (idx + sub.items.length) % sub.items.length;
            renderWorkspace();
        }

        function nextItem() {
            selectItem(activeItemIdx + 1);
        }

        function prevItem() {
            selectItem(activeItemIdx - 1);
        }

        function updateActiveHighlight() {
            const sub = CATEGORIES[activeCatIdx].subtopics[activeSubIdx];
            const item = sub.items[activeItemIdx];

            document.getElementById('active-item-badge').textContent = item.tag;
            document.getElementById('active-item-counter').textContent = `Item ${activeItemIdx + 1} of ${sub.items.length}`;
            document.getElementById('active-item-title').textContent = item.label;
            document.getElementById('active-item-exact-text').textContent = item.exactText;

            // Highlight matching SVG node if present
            document.querySelectorAll('.hotspot-node').forEach(el => el.classList.remove('hotspot-active'));
            const activeNode = document.getElementById(`svg-node-${activeItemIdx}`);
            if (activeNode) activeNode.classList.add('hotspot-active');
        }

        function toggleAutoTour() {
            if (autoTourTimer) {
                stopAutoTour();
            } else {
                document.getElementById('autotour-text').textContent = "Pause";
                document.getElementById('autotour-icon').className = "ph-fill ph-pause";
                autoTourTimer = setInterval(nextItem, 2600);
            }
        }

        function stopAutoTour() {
            if (autoTourTimer) {
                clearInterval(autoTourTimer);
                autoTourTimer = null;
            }
            const txt = document.getElementById('autotour-text');
            const ic = document.getElementById('autotour-icon');
            if (txt) txt.textContent = "Auto Animate";
            if (ic) ic.className = "ph-fill ph-play";
        }

        // ============================================================================
        // ANIMATED INTERACTIVE SVG GENERATORS FOR EACH PDF CATEGORY
        // ============================================================================
        function buildAnimatedSvg(svgType) {
            if (svgType === 'heartFlowSvg') {
                return `
                <svg viewBox="0 0 800 540" class="w-full h-full select-none">
                    <!-- Pulmonary & Systemic Loop Background Streams -->
                    <path d="M 350 140 C 260 90, 260 55, 380 55 C 500 55, 510 100, 480 185" fill="none" stroke="#60a5fa" stroke-width="6" class="anim-flow-line" />
                    <path d="M 445 140 C 620 130, 650 475, 480 485 C 260 495, 160 430, 250 320" fill="none" stroke="#f43f5e" stroke-width="6" class="anim-flow-line" />

                    <!-- Step 8: Lung tissue (pulmonary circulation) -->
                    <g id="svg-node-7" onclick="selectItem(7)" class="hotspot-node">
                        <rect x="245" y="22" width="310" height="58" rx="18" fill="#e2daff" stroke="#0f172a" stroke-width="2.5"/>
                        <text x="400" y="46" text-anchor="middle" font-size="13" font-weight="800" fill="#0f172a">Lung tissue (pulmonary circulation)</text>
                        <text x="400" y="65" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">Lung capillaries: CO₂ out • O₂ in</text>
                    </g>

                    <!-- Step 15: Body tissues (systemic circulation) -->
                    <g id="svg-node-14" onclick="selectItem(14)" class="hotspot-node">
                        <rect x="235" y="458" width="330" height="58" rx="18" fill="#ffe79e" stroke="#0f172a" stroke-width="2.5"/>
                        <text x="400" y="482" text-anchor="middle" font-size="13" font-weight="800" fill="#0f172a">Body tissues (systemic circulation)</text>
                        <text x="400" y="501" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">Tissue capillaries: Head & Lower body (O₂ / CO₂)</text>
                    </g>

                    <!-- Beating Heart Group -->
                    <g class="anim-heartbeat">
                        <!-- Outer Heart / Pericardium & Interventricular Septum -->
                        <path d="M 395 168 C 295 155, 225 215, 238 308 C 250 398, 345 438, 412 448 C 482 432, 558 378, 552 292 C 548 210, 475 162, 395 168 Z"
                              fill="#e11d48" stroke="#0f172a" stroke-width="3.5"/>

                        <!-- ① Superior and inferior vena cava -->
                        <g id="svg-node-0" onclick="selectItem(0)" class="hotspot-node">
                            <rect x="252" y="132" width="32" height="105" rx="8" fill="#3b82f6" stroke="#0f172a" stroke-width="2.5"/>
                            <rect x="242" y="325" width="30" height="90" rx="8" fill="#3b82f6" stroke="#0f172a" stroke-width="2.5"/>
                            <circle cx="268" cy="162" r="13" fill="#fff" stroke="#0f172a" stroke-width="2"/>
                            <text x="268" y="167" text-anchor="middle" font-size="12" font-weight="800">①</text>
                        </g>

                        <!-- Right atrium -->
                        <g id="svg-node-1" onclick="selectItem(1)" class="hotspot-node">
                            <path d="M 250 232 C 230 255, 232 310, 265 328 C 302 338, 342 318, 342 278 C 342 242, 300 225, 250 232 Z"
                                  fill="#60a5fa" stroke="#0f172a" stroke-width="2.5"/>
                            <text x="292" y="282" text-anchor="middle" font-size="12" font-weight="800" fill="#0f172a">Right Atrium</text>
                        </g>

                        <!-- Tricuspid valve -->
                        <g id="svg-node-2" onclick="selectItem(2)" class="hotspot-node">
                            <ellipse cx="315" cy="332" rx="26" ry="10" transform="rotate(16 315 332)" fill="#fef08a" stroke="#0f172a" stroke-width="2.5"/>
                            <text x="315" y="336" text-anchor="middle" font-size="10" font-weight="800">Tricuspid</text>
                        </g>

                        <!-- ② Right ventricle -->
                        <g id="svg-node-3" onclick="selectItem(3)" class="hotspot-node">
                            <path d="M 278 345 C 275 398, 330 428, 392 432 C 392 380, 384 328, 364 310 C 344 328, 310 345, 278 345 Z"
                                  fill="#2563eb" stroke="#0f172a" stroke-width="2.5"/>
                            <circle cx="345" cy="392" r="13" fill="#fff" stroke="#0f172a" stroke-width="2"/>
                            <text x="345" y="397" text-anchor="middle" font-size="12" font-weight="800">②</text>
                        </g>

                        <!-- Pulmonary semilunar valve -->
                        <g id="svg-node-4" onclick="selectItem(4)" class="hotspot-node">
                            <ellipse cx="368" cy="282" rx="20" ry="9" fill="#fef08a" stroke="#0f172a" stroke-width="2.5"/>
                            <text x="368" y="285" text-anchor="middle" font-size="9" font-weight="800">Pulm. Valve</text>
                        </g>

                        <!-- ③ Pulmonary trunk -->
                        <g id="svg-node-5" onclick="selectItem(5)" class="hotspot-node">
                            <rect x="350" y="185" width="36" height="88" rx="6" fill="#3b82f6" stroke="#0f172a" stroke-width="2.5"/>
                            <circle cx="368" cy="225" r="13" fill="#fff" stroke="#0f172a" stroke-width="2"/>
                            <text x="368" y="230" text-anchor="middle" font-size="12" font-weight="800">③</text>
                        </g>

                        <!-- ④ Pulmonary arteries -->
                        <g id="svg-node-6" onclick="selectItem(6)" class="hotspot-node">
                            <path d="M 368 188 C 315 188, 290 142, 290 102 L 320 102 C 320 132, 342 160, 368 160 C 394 160, 416 132, 416 102 L 446 102 C 446 142, 420 188, 368 188 Z"
                                  fill="#93c5fd" stroke="#0f172a" stroke-width="2.5"/>
                            <circle cx="318" cy="142" r="13" fill="#fff" stroke="#0f172a" stroke-width="2"/>
                            <text x="318" y="147" text-anchor="middle" font-size="12" font-weight="800">④</text>
                        </g>

                        <!-- ⑤ Pulmonary veins -->
                        <g id="svg-node-8" onclick="selectItem(8)" class="hotspot-node">
                            <path d="M 495 105 C 515 148, 532 185, 518 232 L 546 238 C 562 185, 542 142, 522 105 Z"
                                  fill="#fb7185" stroke="#0f172a" stroke-width="2.5"/>
                            <circle cx="538" cy="175" r="13" fill="#fff" stroke="#0f172a" stroke-width="2"/>
                            <text x="538" y="180" text-anchor="middle" font-size="12" font-weight="800">⑤</text>
                        </g>

                        <!-- Left atrium -->
                        <g id="svg-node-9" onclick="selectItem(9)" class="hotspot-node">
                            <path d="M 455 232 C 440 258, 445 305, 475 320 C 512 332, 546 308, 544 268 C 542 238, 495 222, 455 232 Z"
                                  fill="#fda4af" stroke="#0f172a" stroke-width="2.5"/>
                            <text x="498" y="278" text-anchor="middle" font-size="12" font-weight="800" fill="#0f172a">Left Atrium</text>
                        </g>

                        <!-- ⑥ Bicuspid valve -->
                        <g id="svg-node-10" onclick="selectItem(10)" class="hotspot-node">
                            <ellipse cx="482" cy="328" rx="26" ry="10" transform="rotate(-16 482 328)" fill="#fef08a" stroke="#0f172a" stroke-width="2.5"/>
                            <circle cx="525" cy="332" r="12" fill="#fde047" stroke="#0f172a" stroke-width="2"/>
                            <text x="525" y="336" text-anchor="middle" font-size="11" font-weight="800">⑥</text>
                        </g>

                        <!-- ⑦ Left ventricle -->
                        <g id="svg-node-11" onclick="selectItem(11)" class="hotspot-node">
                            <path d="M 416 310 C 414 375, 416 425, 424 435 C 482 420, 528 382, 520 338 C 490 342, 452 328, 416 310 Z"
                                  fill="#f43f5e" stroke="#0f172a" stroke-width="3"/>
                            <circle cx="465" cy="388" r="13" fill="#fff" stroke="#0f172a" stroke-width="2"/>
                            <text x="465" y="393" text-anchor="middle" font-size="12" font-weight="800">⑦</text>
                        </g>

                        <!-- ⑧ Aortic semilunar valve & Aorta -->
                        <g id="svg-node-12" onclick="selectItem(12)" class="hotspot-node">
                            <path d="M 408 278 L 408 152 C 408 112, 472 108, 492 148 L 464 162 C 454 140, 436 144, 436 162 L 436 278 Z"
                                  fill="#fb7185" stroke="#0f172a" stroke-width="2.5"/>
                            <circle cx="445" cy="135" r="13" fill="#fff" stroke="#0f172a" stroke-width="2"/>
                            <text x="445" y="140" text-anchor="middle" font-size="12" font-weight="800">⑧</text>
                        </g>

                        <!-- Heart tissue (coronary circulation) -->
                        <g id="svg-node-13" onclick="selectItem(13)" class="hotspot-node">
                            <rect x="60" y="250" width="155" height="52" rx="14" fill="#ffe79e" stroke="#0f172a" stroke-width="2"/>
                            <text x="137" y="272" text-anchor="middle" font-size="11" font-weight="800">Heart tissue</text>
                            <text x="137" y="288" text-anchor="middle" font-size="10" font-weight="700">(coronary circulation)</text>
                        </g>
                    </g>
                </svg>`;
            }

            if (svgType === 'vesselHistologySvg') {
                return `
                <svg viewBox="0 0 800 520" class="w-full h-full select-none">
                    <!-- Left: ARTERY Cross-Section -->
                    <g id="svg-node-0" onclick="selectItem(0)" class="hotspot-node">
                        <rect x="35" y="30" width="220" height="290" rx="22" fill="#ffe4e6" stroke="#0f172a" stroke-width="2.5"/>
                        <text x="145" y="62" text-anchor="middle" font-size="16" font-weight="800" fill="#be123c">ARTERY (Arterial wall)</text>
                        <!-- Concentric Tunica Layers -->
                        <circle cx="145" cy="175" r="78" fill="#fda4af" stroke="#0f172a" stroke-width="2.5"/>
                        <circle cx="145" cy="175" r="58" fill="#e11d48" stroke="#0f172a" stroke-width="2.5" class="anim-heartbeat"/>
                        <circle cx="145" cy="175" r="26" fill="#fecdd3" stroke="#0f172a" stroke-width="2.5"/>
                        <circle cx="145" cy="175" r="18" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
                        <text x="145" y="179" text-anchor="middle" font-size="9" font-weight="800">Narrow Lumen</text>
                        <text x="145" y="282" text-anchor="middle" font-size="11" font-weight="800" fill="#0f172a">Away from the heart • High Pressure</text>
                        <text x="145" y="300" text-anchor="middle" font-size="10" font-weight="700" fill="#334155">Thick, muscular and elastic • No Valves</text>
                    </g>

                    <!-- Right: VEIN Cross-Section -->
                    <g id="svg-node-1" onclick="selectItem(1)" class="hotspot-node">
                        <rect x="545" y="30" width="220" height="290" rx="22" fill="#dbeafe" stroke="#0f172a" stroke-width="2.5"/>
                        <text x="655" y="62" text-anchor="middle" font-size="16" font-weight="800" fill="#1d4ed8">VEIN (Venous wall)</text>
                        <circle cx="655" cy="175" r="78" fill="#93c5fd" stroke="#0f172a" stroke-width="2.5"/>
                        <circle cx="655" cy="175" r="64" fill="#3b82f6" stroke="#0f172a" stroke-width="2.5"/>
                        <circle cx="655" cy="175" r="46" fill="#ffffff" stroke="#0f172a" stroke-width="2.5"/>
                        <!-- One-Way Venous Valve Flap -->
                        <path d="M 625 165 Q 655 145, 685 165" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round"/>
                        <text x="655" y="185" text-anchor="middle" font-size="10" font-weight="800">Wide Lumen + Valve</text>
                        <text x="655" y="282" text-anchor="middle" font-size="11" font-weight="800" fill="#0f172a">Toward the heart • Low Pressure</text>
                        <text x="655" y="300" text-anchor="middle" font-size="10" font-weight="700" fill="#334155">Thinner & less elastic • Valves: Yes</text>
                    </g>

                    <!-- Center: CAPILLARY NETWORK -->
                    <g id="svg-node-2" onclick="selectItem(2)" class="hotspot-node">
                        <rect x="275" y="345" width="250" height="145" rx="20" fill="#e2daff" stroke="#0f172a" stroke-width="2.5"/>
                        <text x="400" y="372" text-anchor="middle" font-size="14" font-weight="800" fill="#0f172a">CAPILLARIES (Capillary network)</text>
                        <path d="M 295 415 C 345 385, 455 385, 505 415 M 295 415 C 345 445, 455 445, 505 415 M 335 398 L 465 432 M 335 432 L 465 398"
                              fill="none" stroke="#7e22ce" stroke-width="4" class="anim-flow-line"/>
                        <text x="400" y="462" text-anchor="middle" font-size="11" font-weight="800" fill="#0f172a">One-cell thick • Microscopic Lumen</text>
                        <text x="400" y="478" text-anchor="middle" font-size="10" font-weight="700" fill="#334155">Exchange between blood and tissue fluids</text>
                    </g>

                    <!-- 3 Histological Layers Interactive Stack in Center -->
                    <g id="svg-node-3" onclick="selectItem(3)" class="hotspot-node">
                        <rect x="280" y="45" width="240" height="82" rx="16" fill="#bff8de" stroke="#0f172a" stroke-width="2.5"/>
                        <text x="400" y="70" text-anchor="middle" font-size="13" font-weight="800">1. Tunica intima / interna</text>
                        <text x="400" y="89" text-anchor="middle" font-size="10" font-weight="700">Endothelium & subendothelial layer</text>
                        <text x="400" y="106" text-anchor="middle" font-size="10" font-weight="700">+ Internal elastic lamina</text>
                    </g>

                    <g id="svg-node-4" onclick="selectItem(4)" class="hotspot-node">
                        <rect x="280" y="140" width="240" height="82" rx="16" fill="#ffe79e" stroke="#0f172a" stroke-width="2.5"/>
                        <text x="400" y="165" text-anchor="middle" font-size="13" font-weight="800">2. Tunica media</text>
                        <text x="400" y="184" text-anchor="middle" font-size="10" font-weight="700">Smooth muscle layer & elastic fibers</text>
                        <text x="400" y="201" text-anchor="middle" font-size="10" font-weight="700">Regulates diameter of the lumen</text>
                    </g>

                    <g id="svg-node-5" onclick="selectItem(5)" class="hotspot-node">
                        <rect x="280" y="235" width="240" height="82" rx="16" fill="#b8ecff" stroke="#0f172a" stroke-width="2.5"/>
                        <text x="400" y="260" text-anchor="middle" font-size="13" font-weight="800">3. Tunica adventitia / externa</text>
                        <text x="400" y="279" text-anchor="middle" font-size="10" font-weight="700">Contains collagen and elastic fibers</text>
                        <text x="400" y="296" text-anchor="middle" font-size="10" font-weight="700">Anchors vessel on surrounding tissue</text>
                    </g>
                </svg>`;
            }

            if (svgType === 'bloodPressureSvg') {
                return `
                <svg viewBox="0 0 800 500" class="w-full h-full select-none">
                    <!-- Manometer Column (0 to 300 mm Hg) -->
                    <rect x="65" y="35" width="120" height="430" rx="20" fill="#bae6fd" stroke="#0f172a" stroke-width="3"/>
                    <rect x="112" y="65" width="26" height="370" rx="8" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
                    <rect x="115" y="265" width="20" height="170" rx="6" fill="#f43f5e" class="anim-heartbeat"/>
                    <text x="98" y="80" text-anchor="end" font-size="12" font-weight="800">300</text>
                    <text x="98" y="170" text-anchor="end" font-size="12" font-weight="800">200</text>
                    <text x="98" y="268" text-anchor="end" font-size="12" font-weight="800" fill="#be123c">120</text>
                    <text x="98" y="335" text-anchor="end" font-size="12" font-weight="800" fill="#1d4ed8">80</text>
                    <text x="98" y="432" text-anchor="end" font-size="12" font-weight="800">0</text>

                    <!-- 4 Interactive Steps of Measuring Blood Pressure (Page 11) -->
                    <g id="svg-node-0" onclick="selectItem(0)" class="hotspot-node">
                        <rect x="235" y="42" width="520" height="90" rx="18" fill="#ffffff" stroke="#0f172a" stroke-width="2.5"/>
                        <circle cx="272" cy="87" r="18" fill="#6366f1" stroke="#0f172a" stroke-width="2"/>
                        <text x="272" y="92" text-anchor="middle" fill="#fff" font-weight="800" font-size="14">1</text>
                        <text x="305" y="72" font-size="14" font-weight="800" fill="#0f172a">1. No sound (Brachial artery Blocked)</text>
                        <text x="305" y="95" font-size="11" font-weight="600" fill="#334155">Cuff inflated until brachial artery is completely blocked</text>
                        <ellipse cx="685" cy="87" rx="32" ry="5" fill="#e11d48" stroke="#0f172a" stroke-width="2"/>
                    </g>

                    <g id="svg-node-1" onclick="selectItem(1)" class="hotspot-node">
                        <rect x="235" y="150" width="520" height="90" rx="18" fill="#b8ecff" stroke="#0f172a" stroke-width="2.5"/>
                        <circle cx="272" cy="195" r="18" fill="#1877f2" stroke="#0f172a" stroke-width="2"/>
                        <text x="272" y="200" text-anchor="middle" fill="#fff" font-weight="800" font-size="14">2</text>
                        <text x="305" y="180" font-size="14" font-weight="800" fill="#0f172a">2. Sound is first heard → Systolic pressure (120 mm Hg)</text>
                        <text x="305" y="203" font-size="11" font-weight="600" fill="#334155">Cuff pressure is lowered. First sound (+ blood flow) = contraction of heart</text>
                        <ellipse cx="685" cy="195" rx="30" ry="12" fill="#fecdd3" stroke="#be123c" stroke-width="3" class="anim-heartbeat"/>
                    </g>

                    <g id="svg-node-2" onclick="selectItem(2)" class="hotspot-node">
                        <rect x="235" y="258" width="520" height="90" rx="18" fill="#ffe79e" stroke="#0f172a" stroke-width="2.5"/>
                        <circle cx="272" cy="303" r="18" fill="#d97706" stroke="#0f172a" stroke-width="2"/>
                        <text x="272" y="308" text-anchor="middle" fill="#fff" font-weight="800" font-size="14">3</text>
                        <text x="305" y="288" font-size="14" font-weight="800" fill="#0f172a">3. Korotkoff sounds (Blocked or partially open)</text>
                        <text x="305" y="311" font-size="11" font-weight="600" fill="#334155">Sound of turbulence produces vibrations in blood and surrounding tissues</text>
                        <ellipse cx="685" cy="303" rx="30" ry="18" fill="#fecdd3" stroke="#be123c" stroke-width="3" class="anim-heartbeat"/>
                    </g>

                    <g id="svg-node-3" onclick="selectItem(3)" class="hotspot-node">
                        <rect x="235" y="366" width="520" height="90" rx="18" fill="#bff8de" stroke="#0f172a" stroke-width="2.5"/>
                        <circle cx="272" cy="411" r="18" fill="#059669" stroke="#0f172a" stroke-width="2"/>
                        <text x="272" y="416" text-anchor="middle" fill="#fff" font-weight="800" font-size="14">4</text>
                        <text x="305" y="396" font-size="14" font-weight="800" fill="#0f172a">4. Sound disappears → Diastolic pressure (80 mm Hg)</text>
                        <text x="305" y="419" font-size="11" font-weight="600" fill="#334155">Artery no longer constricted, flow no longer turbulent (No sound • Open)</text>
                        <circle cx="685" cy="411" r="26" fill="#fecdd3" stroke="#be123c" stroke-width="3"/>
                    </g>
                </svg>`;
            }

            if (svgType === 'bloodCompSvg') {
                return `
                <svg viewBox="0 0 800 520" class="w-full h-full select-none">
                    <!-- Left: Centrifuged Blood Test Tube (Page 12) -->
                    <rect x="65" y="45" width="110" height="420" rx="55" fill="#ffffff" stroke="#0f172a" stroke-width="3.5"/>

                    <!-- Plasma 55% -->
                    <g id="svg-node-0" onclick="selectItem(0)" class="hotspot-node">
                        <rect x="72" y="65" width="96" height="210" rx="12" fill="#fde68a" stroke="#0f172a" stroke-width="2"/>
                        <text x="120" y="160" text-anchor="middle" font-size="15" font-weight="800">Plasma</text>
                        <text x="120" y="182" text-anchor="middle" font-size="16" font-weight="800">55%</text>
                    </g>

                    <!-- Buffy coat (Platelets & WBCs) -->
                    <g id="svg-node-2" onclick="selectItem(2)" class="hotspot-node">
                        <rect x="72" y="278" width="96" height="24" fill="#e2daff" stroke="#0f172a" stroke-width="2"/>
                        <text x="120" y="294" text-anchor="middle" font-size="11" font-weight="800">Buffy coat</text>
                    </g>

                    <!-- Formed elements 45% (RBCs) -->
                    <g id="svg-node-1" onclick="selectItem(1)" class="hotspot-node">
                        <path d="M 72 305 L 168 305 L 168 415 A 48 48 0 0 1 72 415 Z" fill="#e11d48" stroke="#0f172a" stroke-width="2"/>
                        <text x="120" y="365" text-anchor="middle" font-size="13" font-weight="800" fill="#fff">Formed elements</text>
                        <text x="120" y="388" text-anchor="middle" font-size="16" font-weight="800" fill="#fff">45%</text>
                    </g>

                    <!-- Right Breakdown Cards -->
                    <!-- Plasma Breakdown -->
                    <g onclick="selectItem(0)" class="hotspot-node">
                        <rect x="230" y="35" width="525" height="115" rx="20" fill="#ffe79e" stroke="#0f172a" stroke-width="2.5"/>
                        <text x="255" y="65" font-size="14" font-weight="800">Plasma (percentage by weight): Water 91% | Proteins 7% | Other solutes 2%</text>
                        <text x="255" y="92" font-size="12" font-weight="700" fill="#1e293b">• Proteins 7% → Albumins 58% | Globulins 38% | Fibrinogen 4%</text>
                        <text x="255" y="116" font-size="12" font-weight="700" fill="#1e293b">• Other solutes 2% → Ions, Nutrients, Waste products, Gases, Regulatory substances</text>
                    </g>

                    <!-- RBC & Platelets Card -->
                    <g onclick="selectItem(1)" class="hotspot-node">
                        <rect x="230" y="168" width="525" height="95" rx="20" fill="#fecdd3" stroke="#0f172a" stroke-width="2.5"/>
                        <circle cx="275" cy="215" r="24" fill="#e11d48" stroke="#0f172a" stroke-width="2.5" class="anim-float"/>
                        <circle cx="275" cy="215" r="9" fill="#fda4af"/>
                        <text x="315" y="202" font-size="14" font-weight="800">Red blood cells: 4.2–6.2 million per cubic mm</text>
                        <text x="315" y="226" font-size="13" font-weight="800" fill="#be123c">Platelets: 250–400 thousand | White blood cells: 5–10 thousand</text>
                    </g>

                    <!-- 5 White Blood Cells Interactive Row -->
                    <g id="svg-node-3" onclick="selectItem(3)" class="hotspot-node">
                        <rect x="230" y="282" width="252" height="92" rx="18" fill="#b8ecff" stroke="#0f172a" stroke-width="2.5"/>
                        <circle cx="268" cy="328" r="22" fill="#c084fc" stroke="#0f172a" stroke-width="2"/>
                        <circle cx="262" cy="322" r="6" fill="#4c1d95"/><circle cx="276" cy="325" r="6" fill="#4c1d95"/><circle cx="268" cy="336" r="6" fill="#4c1d95"/>
                        <text x="302" y="322" font-size="13" font-weight="800">Neutrophils</text>
                        <text x="302" y="344" font-size="15" font-weight="800" fill="#1d4ed8">60%–70%</text>
                    </g>

                    <g id="svg-node-4" onclick="selectItem(4)" class="hotspot-node">
                        <rect x="502" y="282" width="253" height="92" rx="18" fill="#f6d5ef" stroke="#0f172a" stroke-width="2.5"/>
                        <circle cx="540" cy="328" r="22" fill="#c084fc" stroke="#0f172a" stroke-width="2"/>
                        <circle cx="540" cy="328" r="15" fill="#3b0764"/>
                        <text x="574" y="322" font-size="13" font-weight="800">Lymphocytes</text>
                        <text x="574" y="344" font-size="15" font-weight="800" fill="#9d174d">20%–25%</text>
                    </g>

                    <g id="svg-node-5" onclick="selectItem(5)" class="hotspot-node">
                        <rect x="230" y="390" width="252" height="92" rx="18" fill="#bff8de" stroke="#0f172a" stroke-width="2.5"/>
                        <circle cx="268" cy="436" r="22" fill="#c084fc" stroke="#0f172a" stroke-width="2"/>
                        <path d="M 258 426 C 275 420, 282 445, 260 446 C 266 436, 265 432, 258 426 Z" fill="#3b0764"/>
                        <text x="302" y="430" font-size="13" font-weight="800">Monocytes</text>
                        <text x="302" y="452" font-size="15" font-weight="800" fill="#047857">3%–8%</text>
                    </g>

                    <g id="svg-node-6" onclick="selectItem(6)" class="hotspot-node">
                        <rect x="502" y="390" width="253" height="92" rx="18" fill="#e2daff" stroke="#0f172a" stroke-width="2.5"/>
                        <text x="525" y="426" font-size="13" font-weight="800">Eosinophils: 2%–4%</text>
                        <text x="525" y="452" font-size="13" font-weight="800" fill="#5b21b6">Basophils: 0.5%–1%</text>
                    </g>
                </svg>`;
            }

            if (svgType === 'respiratorySvg') {
                return `
                <svg viewBox="0 0 800 520" class="w-full h-full select-none">
                    <!-- Upper Airway: Nostrils, Nasal Cavity, Oral Cavity -->
                    <g id="svg-node-0" onclick="selectItem(0)" class="hotspot-node">
                        <rect x="260" y="20" width="280" height="58" rx="16" fill="#b8ecff" stroke="#0f172a" stroke-width="2.5"/>
                        <text x="400" y="44" text-anchor="middle" font-size="13" font-weight="800">Nostrils • Nasal cavity • Oral cavity</text>
                        <text x="400" y="63" text-anchor="middle" font-size="10" font-weight="700">Way for air to enter • Purifies, humidifies the air</text>
                    </g>

                    <!-- Pharynx, Epiglottis & Larynx -->
                    <g id="svg-node-1" onclick="selectItem(1)" class="hotspot-node">
                        <rect x="290" y="90" width="220" height="56" rx="16" fill="#ffe79e" stroke="#0f172a" stroke-width="2.5"/>
                        <text x="400" y="114" text-anchor="middle" font-size="13" font-weight="800">Pharynx • Epiglottis • Larynx</text>
                        <text x="400" y="132" text-anchor="middle" font-size="10" font-weight="700">Epiglottis keeps food from entering airways</text>
                    </g>

                    <!-- Trachea & Primary Bronchi -->
                    <g id="svg-node-2" onclick="selectItem(2)" class="hotspot-node">
                        <rect x="378" y="152" width="44" height="90" rx="8" fill="#93c5fd" stroke="#0f172a" stroke-width="2.5"/>
                        <path d="M 385 235 L 310 285 M 415 235 L 490 285" stroke="#3b82f6" stroke-width="18" stroke-linecap="round"/>
                        <text x="400" y="195" text-anchor="middle" font-size="11" font-weight="800">Trachea</text>
                    </g>

                    <!-- Animated Breathing Right & Left Lungs -->
                    <g id="svg-node-5" onclick="selectItem(5)" class="hotspot-node anim-breathe">
                        <!-- Right Lung -->
                        <path d="M 355 210 C 235 205, 175 285, 185 395 C 195 425, 315 425, 355 395 Z" fill="#fda4af" stroke="#0f172a" stroke-width="3"/>
                        <!-- Left Lung -->
                        <path d="M 445 210 C 565 205, 625 285, 615 395 C 605 425, 485 425, 445 395 Z" fill="#fda4af" stroke="#0f172a" stroke-width="3"/>
                        <!-- Diaphragm Dome -->
                        <path d="M 165 432 Q 400 385, 635 432" fill="none" stroke="#be123c" stroke-width="12" stroke-linecap="round"/>
                        <text x="400" y="438" text-anchor="middle" font-size="12" font-weight="800" fill="#0f172a">Diaphragm (Helps pump the lungs)</text>
                    </g>

                    <!-- Bronchioles & Terminal Bronchioles -->
                    <g id="svg-node-3" onclick="selectItem(3)" class="hotspot-node">
                        <rect x="65" y="255" width="190" height="68" rx="16" fill="#f6d5ef" stroke="#0f172a" stroke-width="2.5"/>
                        <text x="160" y="282" text-anchor="middle" font-size="12" font-weight="800">Bronchioles &</text>
                        <text x="160" y="300" text-anchor="middle" font-size="12" font-weight="800">Terminal bronchioles</text>
                    </g>

                    <!-- Alveoli & Gas Exchange Zoom Callout -->
                    <g id="svg-node-4" onclick="selectItem(4)" class="hotspot-node">
                        <rect x="530" y="235" width="235" height="125" rx="20" fill="#bff8de" stroke="#0f172a" stroke-width="2.5"/>
                        <circle cx="585" cy="295" r="18" fill="#fecdd3" stroke="#0f172a" stroke-width="2" class="anim-breathe"/>
                        <circle cx="615" cy="282" r="16" fill="#fecdd3" stroke="#0f172a" stroke-width="2" class="anim-breathe"/>
                        <circle cx="612" cy="312" r="17" fill="#fecdd3" stroke="#0f172a" stroke-width="2" class="anim-breathe"/>
                        <text x="650" y="262" text-anchor="middle" font-size="12" font-weight="800">Alveoli (O₂-CO₂)</text>
                        <text x="650" y="342" text-anchor="middle" font-size="10" font-weight="700">Alveolar ducts ("doorways")</text>
                    </g>
                </svg>`;
            }

            if (svgType === 'digestiveSvg') {
                return `
                <svg viewBox="0 0 800 520" class="w-full h-full select-none">
                    <!-- 1. Oral cavity & Salivary glands -->
                    <g id="svg-node-0" onclick="selectItem(0)" class="hotspot-node">
                        <rect x="275" y="18" width="250" height="54" rx="16" fill="#b8ecff" stroke="#0f172a" stroke-width="2.5"/>
                        <text x="400" y="42" text-anchor="middle" font-size="13" font-weight="800">Oral cavity (mouth) & Salivary glands</text>
                        <text x="400" y="59" text-anchor="middle" font-size="10" font-weight="700">Parotid • Sublingual • Submandibular</text>
                    </g>

                    <!-- 2. ESOPHAGUS -->
                    <g id="svg-node-1" onclick="selectItem(1)" class="hotspot-node">
                        <rect x="382" y="76" width="36" height="95" rx="8" fill="#fda4af" stroke="#0f172a" stroke-width="2.5"/>
                        <text x="458" y="125" font-size="13" font-weight="800">ESOPHAGUS</text>
                    </g>

                    <!-- 7. LIVER & Gallbladder (Left Side of Diagram) -->
                    <g id="svg-node-6" onclick="selectItem(6)" class="hotspot-node">
                        <path d="M 145 175 C 245 165, 345 180, 355 245 C 295 260, 215 275, 145 255 Z" fill="#be123c" stroke="#0f172a" stroke-width="2.5"/>
                        <ellipse cx="265" cy="255" rx="28" ry="14" fill="#10b981" stroke="#0f172a" stroke-width="2.5"/>
                        <text x="245" y="215" text-anchor="middle" font-size="13" font-weight="800" fill="#fff">LIVER (Hepatocytes)</text>
                        <text x="265" y="285" text-anchor="middle" font-size="11" font-weight="800" fill="#047857">Gallbladder (Bile)</text>
                    </g>

                    <!-- 3. STOMACH -->
                    <g id="svg-node-2" onclick="selectItem(2)" class="hotspot-node">
                        <path d="M 395 168 C 475 158, 535 205, 515 268 C 495 312, 415 312, 375 278 C 395 250, 405 215, 395 168 Z"
                              fill="#fb7185" stroke="#0f172a" stroke-width="2.5" class="anim-heartbeat"/>
                        <text x="458" y="238" text-anchor="middle" font-size="14" font-weight="800" fill="#fff">STOMACH</text>
                        <text x="458" y="256" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">Gastric folds (rugae)</text>
                    </g>

                    <!-- 6. PANCREAS -->
                    <g id="svg-node-5" onclick="selectItem(5)" class="hotspot-node">
                        <rect x="420" y="288" width="195" height="44" rx="18" fill="#fde047" stroke="#0f172a" stroke-width="2.5"/>
                        <text x="518" y="315" text-anchor="middle" font-size="13" font-weight="800">PANCREAS (Head, Body, Tail)</text>
                    </g>

                    <!-- 5. LARGE INTESTINES (Frame) -->
                    <g id="svg-node-4" onclick="selectItem(4)" class="hotspot-node">
                        <rect x="215" y="338" width="370" height="150" rx="28" fill="#fed7aa" stroke="#0f172a" stroke-width="3"/>
                        <text x="400" y="362" text-anchor="middle" font-size="13" font-weight="800">LARGE INTESTINES (Colon, Cecum, Rectum)</text>
                    </g>

                    <!-- 4. SMALL INTESTINES (Inner Coils) -->
                    <g id="svg-node-3" onclick="selectItem(3)" class="hotspot-node">
                        <rect x="268" y="374" width="264" height="96" rx="20" fill="#fecdd3" stroke="#0f172a" stroke-width="2.5"/>
                        <text x="400" y="415" text-anchor="middle" font-size="13" font-weight="800" fill="#be123c">SMALL INTESTINES (~5m)</text>
                        <text x="400" y="436" text-anchor="middle" font-size="11" font-weight="700">Duodenum • Jejunum • Ileum (Villi)</text>
                    </g>
                </svg>`;
            }

            if (svgType === 'urinarySvg') {
                return `
                <svg viewBox="0 0 800 520" class="w-full h-full select-none">
                    <!-- Left & Right Kidneys -->
                    <g id="svg-node-0" onclick="selectItem(0)" class="hotspot-node">
                        <path d="M 245 95 C 175 85, 155 215, 245 225 C 275 195, 275 125, 245 95 Z" fill="#be123c" stroke="#0f172a" stroke-width="3"/>
                        <path d="M 555 95 C 625 85, 645 215, 555 225 C 525 195, 525 125, 555 95 Z" fill="#be123c" stroke="#0f172a" stroke-width="3"/>
                        <text x="215" y="160" text-anchor="middle" font-size="12" font-weight="800" fill="#fff">Right Kidney</text>
                        <text x="585" y="160" text-anchor="middle" font-size="12" font-weight="800" fill="#fff">Left Kidney</text>
                    </g>

                    <!-- Renal Corpuscle (Glomerulus + Bowman Capsule) Zoom Card -->
                    <g id="svg-node-1" onclick="selectItem(1)" class="hotspot-node">
                        <rect x="305" y="35" width="190" height="105" rx="20" fill="#ffe79e" stroke="#0f172a" stroke-width="2.5"/>
                        <circle cx="400" cy="82" r="24" fill="#fde68a" stroke="#0f172a" stroke-width="2.5"/>
                        <circle cx="400" cy="82" r="14" fill="#e11d48" class="anim-heartbeat"/>
                        <text x="400" y="125" text-anchor="middle" font-size="11" font-weight="800">Renal corpuscle (Glomerulus)</text>
                    </g>

                    <!-- Renal Tubules & Loop of Henle Card -->
                    <g id="svg-node-2" onclick="selectItem(2)" class="hotspot-node">
                        <rect x="305" y="155" width="190" height="82" rx="18" fill="#bff8de" stroke="#0f172a" stroke-width="2.5"/>
                        <text x="400" y="185" text-anchor="middle" font-size="12" font-weight="800">PCT → Loop of Henle → DCT</text>
                        <text x="400" y="206" text-anchor="middle" font-size="10" font-weight="700">+ Peritubular capillaries & Vasa recta</text>
                    </g>

                    <!-- Renal Blood Vessels 1-13 Card -->
                    <g id="svg-node-3" onclick="selectItem(3)" class="hotspot-node">
                        <rect x="65" y="265" width="225" height="90" rx="18" fill="#b8ecff" stroke="#0f172a" stroke-width="2.5"/>
                        <text x="177" y="298" text-anchor="middle" font-size="12" font-weight="800">Renal Artery → Vein (1–13)</text>
                        <text x="177" y="318" text-anchor="middle" font-size="10" font-weight="700">Interlobar • Arcuate • Interlobular</text>
                    </g>

                    <!-- Ureters, Urinary Bladder (Trigone) & Urethra -->
                    <g id="svg-node-4" onclick="selectItem(4)" class="hotspot-node">
                        <path d="M 245 215 L 355 365 M 555 215 L 445 365" stroke="#fbbf24" stroke-width="8" stroke-linecap="round"/>
                        <ellipse cx="400" cy="395" rx="75" ry="55" fill="#fda4af" stroke="#0f172a" stroke-width="3"/>
                        <!-- Trigone Triangle -->
                        <polygon points="365,380 435,380 400,430" fill="#f43f5e" stroke="#0f172a" stroke-width="2"/>
                        <text x="400" y="402" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">Trigone</text>
                        <text x="400" y="328" text-anchor="middle" font-size="14" font-weight="800">Urinary bladder & Ureters</text>
                        <rect x="388" y="450" width="24" height="45" rx="6" fill="#fb7185" stroke="#0f172a" stroke-width="2.5"/>
                        <text x="455" y="480" font-size="12" font-weight="800">Urethra</text>
                    </g>
                </svg>`;
            }

            // Default: Reproductive System (Act. 13)
            return `
            <svg viewBox="0 0 800 520" class="w-full h-full select-none">
                <!-- Function 1: Production of Gametes -->
                <g id="svg-node-0" onclick="selectItem(0)" class="hotspot-node">
                    <rect x="45" y="28" width="225" height="120" rx="20" fill="#b8ecff" stroke="#0f172a" stroke-width="2.5"/>
                    <text x="157" y="58" text-anchor="middle" font-size="13" font-weight="800">1. Production of gametes</text>
                    <text x="157" y="82" text-anchor="middle" font-size="11" font-weight="700">• sperm cells in testes of males</text>
                    <text x="157" y="102" text-anchor="middle" font-size="11" font-weight="700">• oocytes (eggs) in ovaries</text>
                </g>

                <!-- Function 2: Fertilization -->
                <g id="svg-node-1" onclick="selectItem(1)" class="hotspot-node">
                    <rect x="288" y="28" width="225" height="120" rx="20" fill="#f6d5ef" stroke="#0f172a" stroke-width="2.5"/>
                    <text x="400" y="58" text-anchor="middle" font-size="13" font-weight="800">2. Fertilization</text>
                    <text x="400" y="82" text-anchor="middle" font-size="11" font-weight="700">Male duct system nourishes sperm</text>
                    <text x="400" y="102" text-anchor="middle" font-size="11" font-weight="700">Female transports to fertilization site</text>
                </g>

                <!-- Function 3: Development & Nourishment -->
                <g id="svg-node-2" onclick="selectItem(2)" class="hotspot-node">
                    <rect x="530" y="28" width="225" height="120" rx="20" fill="#ffe79e" stroke="#0f172a" stroke-width="2.5"/>
                    <text x="642" y="58" text-anchor="middle" font-size="13" font-weight="800">3. Development & nourishment</text>
                    <text x="642" y="82" text-anchor="middle" font-size="11" font-weight="700">Nurtures in the uterus until birth</text>
                    <text x="642" y="102" text-anchor="middle" font-size="11" font-weight="700">& provides nourishment (milk)</text>
                </g>

                <!-- Male Reproductive Organs Card -->
                <g id="svg-node-3" onclick="selectItem(3)" class="hotspot-node">
                    <rect x="45" y="175" width="340" height="310" rx="24" fill="#dbeafe" stroke="#0f172a" stroke-width="2.5"/>
                    <text x="215" y="208" text-anchor="middle" font-size="15" font-weight="800" fill="#1d4ed8">Male Reproductive System</text>
                    <ellipse cx="165" cy="310" rx="28" ry="38" fill="#93c5fd" stroke="#0f172a" stroke-width="2.5"/>
                    <text x="165" y="315" text-anchor="middle" font-size="11" font-weight="800">Testis</text>
                    <path d="M 165 270 C 165 225, 265 225, 265 285" fill="none" stroke="#1d4ed8" stroke-width="5" class="anim-flow-line"/>
                    <rect x="235" y="285" width="65" height="42" rx="12" fill="#fde047" stroke="#0f172a" stroke-width="2"/>
                    <text x="267" y="310" text-anchor="middle" font-size="11" font-weight="800">Prostate</text>
                    <text x="215" y="392" text-anchor="middle" font-size="11" font-weight="800">Epididymis • Vas deferens • Seminal vesicle</text>
                    <text x="215" y="415" text-anchor="middle" font-size="11" font-weight="700">Bulbourethral gland • Penis • Scrotum</text>
                    <text x="215" y="445" text-anchor="middle" font-size="10" font-weight="800" fill="#be123c">Undescended: Abdominal 15% | Inguinal 25% | High scrotal 60%</text>
                </g>

                <!-- Female Reproductive Organs & Follicle Histology Card -->
                <g id="svg-node-4" onclick="selectItem(4)" class="hotspot-node">
                    <rect x="415" y="175" width="340" height="310" rx="24" fill="#fce7f3" stroke="#0f172a" stroke-width="2.5"/>
                    <text x="585" y="208" text-anchor="middle" font-size="15" font-weight="800" fill="#be123c">Female System & Ovarian Follicle</text>
                    <!-- Uterus, Fallopian Tubes, Ovaries -->
                    <polygon points="545,255 625,255 600,335 570,335" fill="#fb7185" stroke="#0f172a" stroke-width="2.5"/>
                    <text x="585" y="295" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">Uterus</text>
                    <circle cx="495" cy="275" r="18" fill="#fde047" stroke="#0f172a" stroke-width="2"/>
                    <text x="495" y="279" text-anchor="middle" font-size="9" font-weight="800">Ovary</text>
                    <circle cx="675" cy="275" r="26" fill="#e2daff" stroke="#0f172a" stroke-width="2" class="anim-heartbeat"/>
                    <circle cx="675" cy="275" r="9" fill="#9333ea"/>
                    <text x="675" y="318" text-anchor="middle" font-size="10" font-weight="800">Oocyte & Antrum</text>
                    <text x="585" y="392" text-anchor="middle" font-size="11" font-weight="800">Fallopian tube • Cervix • Vagina • Fornix</text>
                    <text x="585" y="415" text-anchor="middle" font-size="11" font-weight="700">Zona Pellucida • Corona Radiata • Zona Granulosa</text>
                    <text x="585" y="445" text-anchor="middle" font-size="10" font-weight="800" fill="#be123c">Cervix Dilation: 0% → 50% effaced → 3 cm → 10 cm</text>
                </g>
            </svg>`;
        }

        // ============================================================================
        // PRACTICE QUIZ CONTROLLERS
        // ============================================================================
        function openQuizModal() {
            const m = document.getElementById('quiz-modal');
            m.classList.remove('hidden');
            m.classList.add('flex');
        }

        function closeQuizModal() {
            const m = document.getElementById('quiz-modal');
            m.classList.add('hidden');
            m.classList.remove('flex');
        }

        function renderQuizModalContent() {
            const container = document.getElementById('quiz-questions-container');
            document.getElementById('quiz-total').textContent = QUIZ_QUESTIONS.length;
            document.getElementById('quiz-score').textContent = quizScore;
            container.innerHTML = '';

            QUIZ_QUESTIONS.forEach((item, qIdx) => {
                const div = document.createElement('div');
                div.className = "pastel-box bg-slate-50 p-4 space-y-2.5";
                const optsHtml = item.options.map((opt, oIdx) => `
                    <button onclick="answerQuiz(${qIdx}, ${oIdx})" id="qbtn-${qIdx}-${oIdx}"
                        class="w-full text-left px-3.5 py-2.5 rounded-xl bg-white hover:bg-sky-pastel border-[1.5px] border-slate-900 text-xs font-bold transition flex items-center justify-between">
                        <span>${opt}</span>
                        <i id="qicon-${qIdx}-${oIdx}" class="ph-bold"></i>
                    </button>
                `).join('');

                div.innerHTML = `
                    <div class="text-xs sm:text-sm font-extrabold text-slate-900">${qIdx + 1}. ${item.q}</div>
                    <div class="space-y-1.5">${optsHtml}</div>
                    <div id="qexp-${qIdx}" class="hidden text-xs font-bold p-2.5 rounded-xl border border-slate-900"></div>
                `;
                container.appendChild(div);
            });
        }

        function answerQuiz(qIdx, oIdx) {
            if (quizAnswered[qIdx] !== undefined) return;
            quizAnswered[qIdx] = oIdx;

            const item = QUIZ_QUESTIONS[qIdx];
            const isRight = oIdx === item.ans;
            if (isRight) quizScore++;
            document.getElementById('quiz-score').textContent = quizScore;

            item.options.forEach((_, idx) => {
                const btn = document.getElementById(`qbtn-${qIdx}-${idx}`);
                const ic = document.getElementById(`qicon-${qIdx}-${idx}`);
                btn.disabled = true;
                if (idx === item.ans) {
                    btn.className = "w-full text-left px-3.5 py-2.5 rounded-xl bg-mint-pastel border-[1.5px] border-slate-900 text-xs font-extrabold flex items-center justify-between";
                    ic.className = "ph-fill ph-check-circle text-emerald-700 text-base";
                } else if (idx === oIdx && !isRight) {
                    btn.className = "w-full text-left px-3.5 py-2.5 rounded-xl bg-rose-200 border-[1.5px] border-slate-900 text-xs font-bold flex items-center justify-between";
                    ic.className = "ph-fill ph-x-circle text-rose-700 text-base";
                }
            });

            const exp = document.getElementById(`qexp-${qIdx}`);
            exp.classList.remove('hidden');
            exp.className = `text-xs font-bold p-2.5 rounded-xl border border-slate-900 ${isRight ? 'bg-mint-pastel' : 'bg-amber-pastel'}`;
            exp.textContent = item.explain;
        }

        function resetQuiz() {
            quizAnswered = {};
            quizScore = 0;
            renderQuizModalContent();
        }

        // ============================================================================
        // MULTI-FILE GITHUB .ZIP GENERATOR (index.html, styles.css, script.js, README.md)
        // ============================================================================
        async function exportGitHubZip() {
            const btn = document.getElementById('zip-btn');
            const orig = btn.innerHTML;
            btn.innerHTML = `<i class="ph-bold ph-spinner animate-spin"></i><span>Building .ZIP...</span>`;

            try {
                const zip = new JSZip();
                const cssText = document.getElementById('app-custom-styles').innerHTML.trim();
                const jsText = document.getElementById('app-main-script').innerHTML.trim();

                let cleanHtml = "<!DOCTYPE html>\n" + document.documentElement.outerHTML;
                cleanHtml = cleanHtml.replace(
                    /<style id="app-custom-styles">[\s\S]*?<\/style>/,
                    `<link rel="stylesheet" href="styles.css">`
                );
                cleanHtml = cleanHtml.replace(
                    /<script id="app-main-script">[\s\S]*?<\/script>/,
                    `<script src="script.js"><\/script>`
                );

                const readme = `# 🔬 MLS 1104 | Anatomy & Physiology Interactive Visual Lab (Prelab Activities 8–13)

Interactive animated study web app featuring **exact word-for-word definitions, functions, and tables** from the Central Philippine University (College of Medical Laboratory Science) Prelab PDFs:
1. **Prelab Act. 8 & 9**: The Circulatory System — Heart & Blood Flow
2. **Prelab Act. 8 & 9**: Blood Vessels, Histology & Blood Pressure (Korotkoff Sounds)
3. **Prelab Act. 8 & 9**: Blood Composition (Plasma 55%, Formed Elements 45%) & Hematopoiesis
4. **Prelab Act. 10**: The Respiratory System — Airways & Gas Exchange
5. **Prelab Act. 11**: The Digestive System & Its Accessory Organs
6. **Prelab Act. 12 & 13**: The Urinary System & The Reproductive System

## 🚀 How to Host on GitHub Pages
1. Upload \`index.html\`, \`styles.css\`, \`script.js\`, and \`README.md\` to your GitHub repository.
2. Go to **Settings → Pages** and select the \`main\` branch to publish online!
`;

                zip.file("index.html", cleanHtml);
                zip.file("styles.css", cssText);
                zip.file("script.js", jsText);
                zip.file("README.md", readme);

                const blob = await zip.generateAsync({ type: "blob" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "mls1104-anatomy-physiology-github.zip";
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);

                const toast = document.getElementById('zip-toast');
                toast.classList.remove('hidden');
                toast.classList.add('flex');
                setTimeout(() => {
                    toast.classList.add('hidden');
                    toast.classList.remove('flex');
                }, 4000);
            } catch (err) {
                console.error(err);
            } finally {
                btn.innerHTML = orig;
            }
        }