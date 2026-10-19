// =========================================================================
        // 1. 14-STEP POSTER PATHWAY DATA WITH REALISTIC PHYSIOLOGY METRICS
        // =========================================================================
        const HEART_STEPS = [
            {
                num: 1,
                name: "Superior & Inferior Vena Cava",
                side: "Right Side (Inflow)",
                state: "deoxygenated",
                svgId: "organ-step-0",
                pressure: "4",
                pressureUnit: "mmHg (Venous)",
                spo2: "73%",
                valveStatus: "Entering Atrium",
                desc: "Two large veins that return deoxygenated (oxygen-poor) blood from the upper and lower body tissues directly into the Right Atrium.",
                posterNote: "Step ① on Poster: Veins carry blood TOWARD the heart!"
            },
            {
                num: 2,
                name: "Right Atrium",
                side: "Right Side Chamber",
                state: "deoxygenated",
                svgId: "organ-step-1",
                pressure: "6",
                pressureUnit: "mmHg (Atrial)",
                spo2: "73%",
                valveStatus: "Tricuspid Open",
                desc: "Receives deoxygenated blood from the Vena Cava and contracts gently to push blood down through the Tricuspid Valve.",
                posterNote: "Routes deoxygenated blood into the Tricuspid Valve."
            },
            {
                num: 3,
                name: "Tricuspid Valve",
                side: "Right Side Valve",
                state: "deoxygenated",
                svgId: "organ-step-2",
                pressure: "12",
                pressureUnit: "mmHg (Valve Flow)",
                spo2: "73%",
                valveStatus: "One-Way Open",
                desc: "Three-cusp valve between the Right Atrium and Right Ventricle that prevents backward flow when the ventricle contracts.",
                posterNote: "Step ② on Poster: Heart Function #3 — Ensures One-Way Flow!"
            },
            {
                num: 4,
                name: "Right Ventricle",
                side: "Right Side Chamber",
                state: "deoxygenated",
                svgId: "organ-step-3",
                pressure: "25",
                pressureUnit: "mmHg (Systole)",
                spo2: "73%",
                valveStatus: "Tricuspid Shut",
                desc: "Pumps oxygen-poor blood upward through the Pulmonary Semilunar Valve toward the lungs for fresh oxygen.",
                posterNote: "Takeaway: Right side of the heart pumps deoxygenated blood TOWARD the lungs!"
            },
            {
                num: 5,
                name: "Pulmonary Semilunar Valve",
                side: "Right Side Valve",
                state: "deoxygenated",
                svgId: "organ-step-4",
                pressure: "25",
                pressureUnit: "mmHg (Ejection)",
                spo2: "73%",
                valveStatus: "Semilunar Open",
                desc: "One-way exit valve guarding the entrance to the Pulmonary Trunk; prevents blood from leaking back into the Right Ventricle.",
                posterNote: "Ensures one-way flow from Right Ventricle into the Pulmonary Trunk."
            },
            {
                num: 6,
                name: "Pulmonary Trunk",
                side: "Pulmonary Pathway",
                state: "deoxygenated",
                svgId: "organ-step-5",
                pressure: "22",
                pressureUnit: "mmHg (Arterial)",
                spo2: "74%",
                valveStatus: "Forward Flow",
                desc: "Wide vessel exiting the Right Ventricle that splits into the left and right Pulmonary Arteries.",
                posterNote: "Step ③ on Poster: Connects Pulmonary Semilunar Valve to Pulmonary Arteries."
            },
            {
                num: 7,
                name: "Pulmonary Arteries",
                side: "Pulmonary Pathway",
                state: "deoxygenated",
                svgId: "organ-step-6",
                pressure: "20",
                pressureUnit: "mmHg (To Lungs)",
                spo2: "74%",
                valveStatus: "To Lung Lobes",
                desc: "Carry deoxygenated blood AWAY from the heart and into the lungs.",
                posterNote: "Step ④ on Poster: 'Carry blood from the heart TO the lungs (oxygen-poor blood).'"
            },
            {
                num: 8,
                name: "Lung Tissue (Pulmonary Circulation)",
                side: "Gas Exchange Site",
                state: "exchange",
                svgId: "organ-step-7",
                pressure: "10",
                pressureUnit: "mmHg (Capillary)",
                spo2: "99%",
                valveStatus: "O₂ Gas Exchange",
                desc: "In the lung capillaries, blood drops off CO₂ waste and picks up fresh Oxygen (O₂), turning bright crimson red!",
                posterNote: "Pulmonary Circulation transforms oxygen-poor blood into oxygen-rich blood."
            },
            {
                num: 9,
                name: "Pulmonary Veins",
                side: "Left Side (Inflow)",
                state: "oxygenated",
                svgId: "organ-step-8",
                pressure: "8",
                pressureUnit: "mmHg (Return)",
                spo2: "99%",
                valveStatus: "Entering Left",
                desc: "Carry freshly oxygenated (oxygen-rich) blood from the lungs TOWARD the Left Atrium of the heart.",
                posterNote: "Step ⑤ on Poster: 'Pulmonary Veins: Lungs → Heart (oxygen-rich blood).'"
            },
            {
                num: 10,
                name: "Left Atrium",
                side: "Left Side Chamber",
                state: "oxygenated",
                svgId: "organ-step-9",
                pressure: "10",
                pressureUnit: "mmHg (Atrial)",
                spo2: "98%",
                valveStatus: "Bicuspid Open",
                desc: "Receives oxygen-rich blood from the Pulmonary Veins and contracts to push it through the Bicuspid Valve.",
                posterNote: "Receives oxygenated blood returning from the lungs."
            },
            {
                num: 11,
                name: "Bicuspid (Mitral) Valve",
                side: "Left Side Valve",
                state: "oxygenated",
                svgId: "organ-step-10",
                pressure: "15",
                pressureUnit: "mmHg (Filling)",
                spo2: "98%",
                valveStatus: "One-Way Open",
                desc: "One-way valve between the Left Atrium and Left Ventricle that prevents backflow during powerful ventricular contractions.",
                posterNote: "Step ⑥ on Poster: Left Atrium → Bicuspid Valve → Left Ventricle."
            },
            {
                num: 12,
                name: "Left Ventricle",
                side: "Left Side Chamber",
                state: "oxygenated",
                svgId: "organ-step-11",
                pressure: "120",
                pressureUnit: "mmHg (High Power)",
                spo2: "98%",
                valveStatus: "Bicuspid Shut",
                desc: "The thickest, most powerful heart chamber! Generates high pressure (120 mmHg) to pump oxygen-rich blood to the entire body.",
                posterNote: "Step ⑦ on Poster: Left Side pumps oxygenated blood TOWARD the BODY."
            },
            {
                num: 13,
                name: "Aortic Semilunar Valve & Aorta",
                side: "Systemic Outflow",
                state: "oxygenated",
                svgId: "organ-step-12",
                pressure: "120",
                pressureUnit: "mmHg (Arterial)",
                spo2: "98%",
                valveStatus: "Aortic Open",
                desc: "Blood exits through the Aortic Semilunar Valve into the Aorta—the body's largest elastic artery—to supply all organs.",
                posterNote: "Step ⑧ on Poster: 'Aorta carries blood from the Left Ventricle to the body.'"
            },
            {
                num: 14,
                name: "Body Tissues (Systemic Capillaries)",
                side: "Systemic Exchange",
                state: "exchange",
                svgId: "organ-step-13",
                pressure: "30",
                pressureUnit: "mmHg (Tissue Bed)",
                spo2: "75%",
                valveStatus: "Cell Delivery",
                desc: "Thin-walled capillaries deliver oxygen and nutrients to body cells and collect CO₂ waste, draining back into the Vena Cava (Step 1)!",
                posterNote: "Completes the full circulatory loop back to Step ① (Vena Cava)!"
            }
        ];

        const QUIZ_DATA = [
            {
                q: "According to the 'Important Takeaways' on your poster, what does the RIGHT side of the heart do?",
                options: [
                    "Pumps oxygenated blood toward the body",
                    "Pumps deoxygenated blood TOWARD the lungs",
                    "Receives oxygen-rich blood from the Lungs",
                    "Sends blood directly through the Aorta"
                ],
                answer: 1,
                tip: "Right Side = Deoxygenated blood pumped TOWARD the lungs."
            },
            {
                q: "Which heart valve sits between the Right Atrium and the Right Ventricle?",
                options: ["Bicuspid Valve", "Tricuspid Valve", "Aortic Semilunar Valve", "Pulmonary Trunk"],
                answer: 1,
                tip: "Right Atrium → Tricuspid Valve → Right Ventricle."
            },
            {
                q: "On your poster, which blood vessels have THICK elastic walls and carry blood AWAY from the heart?",
                options: ["Veins", "Capillaries", "Arteries", "Venules"],
                answer: 2,
                tip: "Arteries = Thick elastic walls, carry blood AWAY from the heart."
            },
            {
                q: "What is the exact sequence after blood leaves the Right Ventricle?",
                options: [
                    "Pulmonary Semilunar Valve → Pulmonary Trunk → Pulmonary Arteries → Lung Tissue",
                    "Tricuspid Valve → Superior Vena Cava → Lungs",
                    "Bicuspid Valve → Aorta → Body Tissues",
                    "Pulmonary Veins → Left Atrium → Left Ventricle"
                ],
                answer: 0,
                tip: "Right Ventricle → Pulmonary Semilunar Valve → Pulmonary Trunk → Pulmonary Arteries → Lung Tissue."
            },
            {
                q: "Which vessels carry oxygen-rich blood from the Lungs back to the Left Atrium?",
                options: ["Pulmonary Arteries", "Superior Vena Cava", "Pulmonary Veins", "Aorta"],
                answer: 2,
                tip: "Step ⑤ on your poster: Pulmonary Veins carry oxygen-rich blood from Lungs → Left Atrium."
            },
            {
                q: "Which valve prevents backflow between the Left Atrium and Left Ventricle?",
                options: ["Tricuspid Valve", "Bicuspid (Mitral) Valve", "Pulmonary Semilunar Valve", "Vena Cava"],
                answer: 1,
                tip: "Step ⑥ on your poster: Left Atrium → Bicuspid Valve → Left Ventricle."
            },
            {
                q: "Where does nutrient, gas, and waste exchange occur across 'extremely thin walls'?",
                options: ["Arteries", "Veins", "Capillaries", "Heart Valves"],
                answer: 2,
                tip: "Capillaries have extremely thin walls for exchange between blood and surrounding tissues."
            },
            {
                q: "Which large artery carries oxygenated blood from the Left Ventricle to the Body Tissues?",
                options: ["Pulmonary Trunk", "Aorta", "Inferior Vena Cava", "Pulmonary Vein"],
                answer: 1,
                tip: "Step ⑧ on your poster: Aorta carries blood from the Left Ventricle to the body."
            }
        ];

        // Continuous Loop Waypoints for Animated Blood Cells
        const CELL_LOOP_PATH = [
            { x: 272, y: 165, c: "#2563eb" },
            { x: 292, y: 288, c: "#2563eb" },
            { x: 315, y: 345, c: "#2563eb" },
            { x: 345, y: 408, c: "#2563eb" },
            { x: 368, y: 296, c: "#2563eb" },
            { x: 370, y: 225, c: "#2563eb" },
            { x: 320, y: 145, c: "#2563eb" },
            { x: 330, y: 74,  c: "#9333ea" },
            { x: 480, y: 74,  c: "#e11d48" },
            { x: 542, y: 186, c: "#e11d48" },
            { x: 502, y: 288, c: "#e11d48" },
            { x: 485, y: 342, c: "#e11d48" },
            { x: 466, y: 404, c: "#e11d48" },
            { x: 426, y: 298, c: "#e11d48" },
            { x: 445, y: 155, c: "#e11d48" },
            { x: 625, y: 330, c: "#e11d48" },
            { x: 520, y: 537, c: "#9333ea" },
            { x: 280, y: 537, c: "#2563eb" },
            { x: 140, y: 455, c: "#2563eb" },
            { x: 248, y: 380, c: "#2563eb" }
        ];

        let currentStep = 0;
        let isPlaying = false;
        let playTimer = null;
        let speedFactor = 1.0;
        let currentBpm = 78;
        let labelsVisible = true;
        let audioActive = false;
        let heartSynth = null;
        let beatInterval = null;
        let bloodCells = [];
        let quizState = {};
        let quizScore = 0;

        window.onload = function () {
            buildRadialGaugeBars();
            initBloodCells();
            selectStep(0);
            renderModalStepList();
            renderQuizCards();
            requestAnimationFrame(updateBloodCellsAnimation);

            window.addEventListener('keydown', (e) => {
                if (document.getElementById('view-simulator').classList.contains('hidden')) return;
                if (e.key === 'ArrowRight') nextStep();
                if (e.key === 'ArrowLeft') prevStep();
            });
        };

        // Build the 22-segment radial gauge inspired by the Right Phone Screen in reference image
        function buildRadialGaugeBars() {
            const group = document.getElementById('gauge-bars-group');
            group.innerHTML = '';
            const totalBars = 22;
            const cx = 130, cy = 115, radius = 86;

            for (let i = 0; i < totalBars; i++) {
                const angleDeg = -180 + (i / (totalBars - 1)) * 180;
                const rad = (angleDeg * Math.PI) / 180;
                const x = cx + radius * Math.cos(rad);
                const y = cy + radius * Math.sin(rad);

                const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                rect.setAttribute("id", `gauge-bar-${i}`);
                rect.setAttribute("x", x - 4.5);
                rect.setAttribute("y", y - 14);
                rect.setAttribute("width", "9");
                rect.setAttribute("height", "28");
                rect.setAttribute("rx", "4.5");
                rect.setAttribute("transform", `rotate(${angleDeg + 90} ${x} ${y})`);
                rect.setAttribute("stroke", "#0f172a");
                rect.setAttribute("stroke-width", "1.4");
                rect.setAttribute("fill", "#ffffff");
                group.appendChild(rect);
            }
        }

        function updateRadialGauge(stepIndex) {
            const totalBars = 22;
            const filledBars = Math.max(2, Math.round(((stepIndex + 1) / HEART_STEPS.length) * totalBars));
            const pct = Math.round(((stepIndex + 1) / HEART_STEPS.length) * 100);

            for (let i = 0; i < totalBars; i++) {
                const bar = document.getElementById(`gauge-bar-${i}`);
                if (!bar) continue;
                if (i < filledBars) {
                    bar.setAttribute("fill", "#1877f2");
                } else {
                    bar.setAttribute("fill", "#ffffff");
                }
            }

            document.getElementById('gauge-percent-text').textContent = `${pct}%`;
            document.getElementById('gauge-label-text').textContent = `Step ${stepIndex + 1} of 14 • Cycle`;
        }

        function renderCheckmarkRow() {
            const row = document.getElementById('step-checkmarks-row');
            row.innerHTML = '';

            HEART_STEPS.forEach((step, idx) => {
                const isDoneOrCurrent = idx <= currentStep;
                const isCurrent = idx === currentStep;

                const btn = document.createElement('button');
                btn.onclick = () => selectStep(idx);
                btn.title = `${step.num}. ${step.name}`;
                btn.className = `h-7 rounded-full border-[1.5px] border-slate-900 flex items-center justify-center text-[11px] font-extrabold transition ${
                    isCurrent
                        ? 'bg-slate-900 text-white scale-110 shadow'
                        : isDoneOrCurrent
                        ? 'bg-[#1877f2] text-white'
                        : 'bg-white text-slate-700 hover:bg-slate-100'
                }`;
                btn.innerHTML = isDoneOrCurrent ? `<i class="ph-bold ph-check text-xs"></i>` : step.num;
                row.appendChild(btn);
            });
        }

        function selectStep(index) {
            currentStep = (index + HEART_STEPS.length) % HEART_STEPS.length;
            const s = HEART_STEPS[currentStep];

            // Clear all active organ highlights
            HEART_STEPS.forEach(item => {
                const el = document.getElementById(item.svgId);
                if (el) el.classList.remove('active-organ-blue', 'active-organ-red', 'active-organ-purple');
            });

            const activeEl = document.getElementById(s.svgId);
            if (activeEl) {
                if (s.state === 'deoxygenated') activeEl.classList.add('active-organ-blue');
                else if (s.state === 'oxygenated') activeEl.classList.add('active-organ-red');
                else activeEl.classList.add('active-organ-purple');
            }

            // Update Left & Center Texts
            document.getElementById('tour-status-text').textContent = `Step ${s.num} of 14 Active`;
            document.getElementById('mint-step-headline').textContent = `Step ${s.num}: ${s.name}`;
            document.getElementById('mint-step-subtitle').textContent = s.posterNote;

            // Update Right Column Inspector & Bento Overview
            document.getElementById('poster-note-pill').textContent = s.posterNote;
            document.getElementById('step-side-badge').textContent = s.side;
            document.getElementById('inspector-tag').textContent = `Step ${s.num} of 14 • Anatomical Role`;
            document.getElementById('inspector-title').textContent = `${s.num}. ${s.name}`;
            document.getElementById('inspector-desc').textContent = s.desc;

            const o2Pill = document.getElementById('inspector-o2-pill');
            if (s.state === 'deoxygenated') {
                o2Pill.className = "px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-blue-100 text-blue-900 border border-blue-400";
                o2Pill.textContent = "Deoxygenated (O₂ Poor)";
            } else if (s.state === 'oxygenated') {
                o2Pill.className = "px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-rose-100 text-rose-900 border border-rose-400";
                o2Pill.textContent = "Oxygenated (O₂ Rich)";
            } else {
                o2Pill.className = "px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-purple-100 text-purple-900 border border-purple-400";
                o2Pill.textContent = "Capillary Gas Exchange";
            }

            // Update 2x2 Heart Overview Grid
            document.getElementById('overview-bpm').textContent = currentBpm;
            document.getElementById('overview-pressure').textContent = s.pressure;
            document.getElementById('overview-valve').textContent = s.valveStatus;
            document.getElementById('overview-spo2').textContent = s.spo2;

            updateRadialGauge(currentStep);
            renderCheckmarkRow();
            renderModalStepList();

            if (audioActive && heartSynth) {
                const pitch = s.state === 'deoxygenated' ? 'D2' : s.state === 'oxygenated' ? 'F2' : 'A2';
                heartSynth.triggerAttackRelease(pitch, '32n');
            }
        }

        function nextStep() { selectStep(currentStep + 1); }
        function prevStep() { selectStep(currentStep - 1); }

        function toggleAutoPlay() {
            const label = document.getElementById('left-autoplay-label');
            const icon = document.getElementById('left-autoplay-icon');
            const btn = document.getElementById('left-autoplay-btn');

            if (isPlaying) {
                clearInterval(playTimer);
                isPlaying = false;
                label.textContent = "Auto Play";
                icon.className = "ph-bold ph-caret-right";
                btn.classList.remove('bg-slate-900', 'text-white');
                btn.classList.add('bg-white', 'text-slate-900');
            } else {
                isPlaying = true;
                label.textContent = "Pause Tour";
                icon.className = "ph-bold ph-pause";
                btn.classList.remove('bg-white', 'text-slate-900');
                btn.classList.add('bg-slate-900', 'text-white');
                playTimer = setInterval(nextStep, 2400 / speedFactor);
            }
        }

        function setPhysiologySpeed(factor, bpm, bpText) {
            speedFactor = factor;
            currentBpm = bpm;
            document.getElementById('mini-bpm-val').textContent = `${bpm} bpm`;
            document.getElementById('mini-pressure-val').textContent = bpText;
            document.getElementById('overview-bpm').textContent = bpm;

            const heartGroup = document.getElementById('heart-animated-group');
            heartGroup.style.setProperty('--beat-duration', `${(0.85 / factor).toFixed(2)}s`);

            document.querySelectorAll('.spd-pill').forEach(el => {
                el.className = "spd-pill px-2.5 py-1 rounded-full text-slate-600";
            });
            const activeId = factor < 1 ? 'btn-spd-rest' : factor > 1 ? 'btn-spd-active' : 'btn-spd-norm';
            document.getElementById(activeId).className = "spd-pill px-2.5 py-1 rounded-full bg-[#1877f2] text-white";

            if (isPlaying) {
                clearInterval(playTimer);
                playTimer = setInterval(nextStep, 2400 / speedFactor);
            }
        }

        function initBloodCells() {
            const layer = document.getElementById('blood-cells-layer');
            layer.innerHTML = '';
            bloodCells = [];
            const count = 24;

            for (let i = 0; i < count; i++) {
                const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                c.setAttribute("r", "6");
                c.setAttribute("stroke", "#0f172a");
                c.setAttribute("stroke-width", "1.8");
                layer.appendChild(c);
                bloodCells.push({
                    el: c,
                    pos: (i / count) * (CELL_LOOP_PATH.length - 1)
                });
            }
        }

        function updateBloodCellsAnimation() {
            const segs = CELL_LOOP_PATH.length - 1;
            bloodCells.forEach(cell => {
                cell.pos += 0.022 * speedFactor;
                if (cell.pos >= segs) cell.pos -= segs;

                const idx = Math.floor(cell.pos);
                const t = cell.pos - idx;
                const p1 = CELL_LOOP_PATH[idx];
                const p2 = CELL_LOOP_PATH[idx + 1];

                const x = p1.x + (p2.x - p1.x) * t;
                const y = p1.y + (p2.y - p1.y) * t;

                cell.el.setAttribute("cx", x.toFixed(1));
                cell.el.setAttribute("cy", y.toFixed(1));
                cell.el.setAttribute("fill", p1.c);
            });
            requestAnimationFrame(updateBloodCellsAnimation);
        }

        function toggleLabels() {
            labelsVisible = !labelsVisible;
            document.getElementById('svg-callout-labels').style.display = labelsVisible ? 'block' : 'none';
        }

        async function toggleAudio() {
            await Tone.start();
            audioActive = !audioActive;
            const icon = document.getElementById('audio-icon');
            const btn = document.getElementById('audio-btn');

            if (audioActive) {
                if (!heartSynth) {
                    heartSynth = new Tone.MembraneSynth().toDestination();
                    heartSynth.volume.value = -12;
                }
                icon.className = "ph-fill ph-speaker-high text-lg text-[#1877f2]";
                btn.classList.add('bg-blue-50');
                if (beatInterval) clearInterval(beatInterval);
                beatInterval = setInterval(() => {
                    if (!audioActive) return;
                    heartSynth.triggerAttackRelease("C2", "16n");
                    setTimeout(() => {
                        if (audioActive) heartSynth.triggerAttackRelease("G1", "16n");
                    }, 160);
                }, 950 / speedFactor);
            } else {
                icon.className = "ph-bold ph-speaker-slash text-lg";
                btn.classList.remove('bg-blue-50');
                if (beatInterval) clearInterval(beatInterval);
            }
        }

        function switchView(view) {
            ['simulator', 'notes', 'quiz'].forEach(v => {
                const sec = document.getElementById(`view-${v}`);
                const btn = document.getElementById(`nav-${v}`);
                if (v === view) {
                    sec.classList.remove('hidden');
                    btn.className = "nav-pill flex-1 xl:flex-initial px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all bg-[#1877f2] text-white shadow-sm flex items-center justify-center gap-2";
                } else {
                    sec.classList.add('hidden');
                    btn.className = "nav-pill flex-1 xl:flex-initial px-5 py-2 rounded-full text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-900 transition-all flex items-center justify-center gap-2";
                }
            });
        }

        function openStepDrawerModal() {
            const modal = document.getElementById('steps-modal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closeStepDrawerModal() {
            const modal = document.getElementById('steps-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        function renderModalStepList() {
            const grid = document.getElementById('modal-steps-grid');
            if (!grid) return;
            grid.innerHTML = '';

            HEART_STEPS.forEach((s, idx) => {
                const isCurr = idx === currentStep;
                const badgeBg = s.state === 'deoxygenated' ? 'bg-[#1877f2]' : s.state === 'oxygenated' ? 'bg-rose-600' : 'bg-purple-600';

                const item = document.createElement('button');
                item.onclick = () => {
                    selectStep(idx);
                    closeStepDrawerModal();
                };
                item.className = `p-3 rounded-2xl border-[1.5px] border-slate-900 text-left flex items-center gap-3 transition ${
                    isCurr ? 'bg-pastel-sky shadow-md' : 'bg-white hover:bg-slate-50'
                }`;
                item.innerHTML = `
                    <span class="w-7 h-7 rounded-full ${badgeBg} text-white font-extrabold text-xs flex items-center justify-center shrink-0 border border-slate-900">${s.num}</span>
                    <div class="min-w-0">
                        <div class="text-xs font-extrabold text-slate-900 truncate">${s.name}</div>
                        <div class="text-[10px] font-semibold text-slate-600 truncate">${s.side}</div>
                    </div>
                `;
                grid.appendChild(item);
            });
        }

        // Quiz Logic
        function renderQuizCards() {
            const list = document.getElementById('quiz-list');
            document.getElementById('quiz-total').textContent = QUIZ_DATA.length;
            document.getElementById('quiz-score').textContent = quizScore;
            list.innerHTML = '';

            QUIZ_DATA.forEach((item, qIdx) => {
                const card = document.createElement('div');
                card.className = "pastel-card bg-white p-5 space-y-3";

                let optsHtml = '';
                item.options.forEach((opt, oIdx) => {
                    optsHtml += `
                        <button onclick="answerQuizQuestion(${qIdx}, ${oIdx})" id="quiz-q${qIdx}-o${oIdx}"
                            class="w-full text-left px-4 py-3 rounded-2xl bg-slate-50 hover:bg-pastel-sky border-[1.5px] border-slate-900 text-xs sm:text-sm font-bold text-slate-900 transition flex items-center justify-between">
                            <span>${opt}</span>
                            <i id="quiz-icon-${qIdx}-${oIdx}" class="ph-bold"></i>
                        </button>
                    `;
                });

                card.innerHTML = `
                    <div class="text-sm sm:text-base font-extrabold text-slate-900">${qIdx + 1}. ${item.q}</div>
                    <div class="space-y-2">${optsHtml}</div>
                    <div id="quiz-fb-${qIdx}" class="hidden text-xs font-bold p-3 rounded-xl border border-slate-900"></div>
                `;
                list.appendChild(card);
            });
        }

        function answerQuizQuestion(qIdx, oIdx) {
            if (quizState[qIdx] !== undefined) return;
            quizState[qIdx] = oIdx;

            const q = QUIZ_DATA[qIdx];
            const right = oIdx === q.answer;
            if (right) quizScore++;
            document.getElementById('quiz-score').textContent = quizScore;

            q.options.forEach((_, idx) => {
                const b = document.getElementById(`quiz-q${qIdx}-o${idx}`);
                const ic = document.getElementById(`quiz-icon-${qIdx}-${idx}`);
                b.disabled = true;
                if (idx === q.answer) {
                    b.className = "w-full text-left px-4 py-3 rounded-2xl bg-pastel-mint border-[1.5px] border-slate-900 text-xs sm:text-sm font-extrabold text-slate-900 flex items-center justify-between";
                    ic.className = "ph-fill ph-check-circle text-emerald-700 text-lg";
                } else if (idx === oIdx && !right) {
                    b.className = "w-full text-left px-4 py-3 rounded-2xl bg-rose-200 border-[1.5px] border-slate-900 text-xs sm:text-sm font-bold text-slate-900 flex items-center justify-between";
                    ic.className = "ph-fill ph-x-circle text-rose-700 text-lg";
                }
            });

            const fb = document.getElementById(`quiz-fb-${qIdx}`);
            fb.classList.remove('hidden');
            fb.className = `text-xs font-bold p-3 rounded-xl border-[1.5px] border-slate-900 ${right ? 'bg-pastel-mint' : 'bg-pastel-amber'}`;
            fb.textContent = `${right ? '✓ Correct! ' : 'Study Tip: '} ${q.tip}`;
        }

        function resetQuiz() {
            quizState = {};
            quizScore = 0;
            renderQuizCards();
        }

        // =========================================================================
        // MULTI-FILE GITHUB .ZIP GENERATOR (index.html, styles.css, script.js, README.md)
        // =========================================================================
        async function exportGitHubProjectZip() {
            const btn = document.getElementById('zip-export-btn');
            const orig = btn.innerHTML;
            btn.innerHTML = `<i class="ph-bold ph-spinner animate-spin"></i><span>Building GitHub ZIP...</span>`;

            try {
                const zip = new JSZip();

                // Extract CSS & JS into clean separate files so the GitHub repo has index.html, styles.css, script.js, and README.md
                const cssContent = document.getElementById('app-custom-styles').innerHTML.trim();
                const jsContent = document.getElementById('app-main-script').innerHTML.trim();

                let rawHtml = "<!DOCTYPE html>\n" + document.documentElement.outerHTML;
                // Link external styles.css and script.js in the exported index.html
                rawHtml = rawHtml.replace(
                    /<style id="app-custom-styles">[\s\S]*?<\/style>/,
                    `<link rel="stylesheet" href="styles.css">`
                );
                rawHtml = rawHtml.replace(
                    /<script id="app-main-script">[\s\S]*?<\/script>/,
                    `<script src="script.js"><\/script>`
                );

                const readmeMd = `# 🫀 Heart Health & Circulatory System Interactive Studio

An interactive, pastel-bento educational web application illustrating **Blood Flow Through the Heart**, **Functions of the Heart**, and **Blood Vessels Structures**.

## 📁 Project Files Included
- \`index.html\` — Main responsive 3-column bento interface & interactive SVG heart diagram
- \`styles.css\` — Custom pastel bento cards, lub-dub heartbeat animations, and ECG waveform effects
- \`script.js\` — 14-step pathway simulation engine, radial gauge controller, audio synthesis, and quiz logic

## 🚀 How to Host on GitHub Pages
1. Create a new repository on [GitHub](https://github.com/new).
2. Upload \`index.html\`, \`styles.css\`, \`script.js\`, and \`README.md\`.
3. Open **Settings → Pages** in your repository.
4. Select **Deploy from a branch** → choose \`main\` (\`/root\`) → click **Save**.
`;

                zip.file("index.html", rawHtml);
                zip.file("styles.css", cssContent);
                zip.file("script.js", jsContent);
                zip.file("README.md", readmeMd);

                const blob = await zip.generateAsync({ type: "blob" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "heart-circulatory-studio-github.zip";
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
                }, 4500);
            } catch (e) {
                console.error("ZIP export failed:", e);
            } finally {
                btn.innerHTML = orig;
            }
        }