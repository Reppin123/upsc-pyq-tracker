// UPSC Economics Tracker - Application Logic

class EconomicsTracker {
    constructor() {
        this.currentTopic = null;
        this.currentView = null; // 'wrong', 'analytics', 'quiz', or null (normal topic view)
        this.notes = this.loadNotes();
        this.attemptedQuestions = this.loadAttempted();
        this.quizState = null;
        this.quizTimer = null;
        this.init();
    }

    init() {
        this.renderTopicList();
        this.attachEventListeners();
        this.updateStats();
    }

    loadNotes() {
        const saved = localStorage.getItem('economicsNotes');
        return saved ? JSON.parse(saved) : {};
    }
    saveNotes() {
        localStorage.setItem('economicsNotes', JSON.stringify(this.notes));
    }
    loadAttempted() {
        const saved = localStorage.getItem('economicsAttempted');
        return saved ? JSON.parse(saved) : {};
    }
    saveAttempted() {
        localStorage.setItem('economicsAttempted', JSON.stringify(this.attemptedQuestions));
    }

    getWrongQuestions() {
        const wrong = [];
        Object.entries(this.attemptedQuestions).forEach(([key, val]) => {
            if (!val.correct) {
                const [topicId, qIndex] = key.split('_').map(Number);
                const topic = economicsData.microthemes.find(t => t.id === topicId);
                if (topic && topic.questions[qIndex]) {
                    wrong.push({
                        key,
                        topicId,
                        qIndex,
                        topicName: topic.name,
                        question: topic.questions[qIndex],
                        selected: val.selected
                    });
                }
            }
        });
        return wrong;
    }

    renderTopicList() {
        const topicList = document.getElementById('topicList');
        const mainsCount = economicsData.allMainsQuestions ? economicsData.allMainsQuestions.length : 0;
        const wrongCount = this.getWrongQuestions().length;

        topicList.innerHTML = `
            <div class="sidebar-special">
                <div class="sidebar-btn" data-special="wrong">
                    <span class="sb-icon">&#10060;</span>
                    <span>Review Mistakes</span>
                    ${wrongCount > 0 ? `<span class="sb-count">${wrongCount}</span>` : ''}
                </div>
                <div class="sidebar-btn" data-special="quiz">
                    <span class="sb-icon">&#9201;</span>
                    <span>Timed Quiz</span>
                </div>
                <div class="sidebar-btn" data-special="analytics">
                    <span class="sb-icon">&#128200;</span>
                    <span>Analytics</span>
                </div>
            </div>
            <div class="topic-item all-topics" data-topic-id="all">
                <span>All Topics (View All)</span>
                <span class="topic-badge" style="background:rgba(255,255,255,0.3);">${mainsCount}</span>
            </div>
            ${economicsData.microthemes.map(topic => `
                <div class="topic-item" data-topic-id="${topic.id}">
                    <span>${topic.name}</span>
                    <span class="topic-badge">${topic.questions.length}</span>
                </div>
            `).join('')}
        `;
    }

    attachEventListeners() {
        document.getElementById('topicList').addEventListener('click', (e) => {
            const specialBtn = e.target.closest('.sidebar-btn');
            if (specialBtn) {
                this.selectSpecialView(specialBtn.dataset.special);
                return;
            }
            const topicItem = e.target.closest('.topic-item');
            if (!topicItem) return;
            const topicId = topicItem.dataset.topicId;
            this.selectTopic(topicId === 'all' ? 'all' : parseInt(topicId));
        });
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', (e) => this.switchTab(e.target.dataset.tab));
        });
        document.getElementById('searchBox').addEventListener('input', (e) => {
            this.filterTopics(e.target.value);
        });
    }

    selectSpecialView(view) {
        this.currentView = view;
        this.currentTopic = null;

        // Clear active states
        document.querySelectorAll('.topic-item').forEach(item => item.classList.remove('active'));
        document.querySelectorAll('.sidebar-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector(`[data-special="${view}"]`).classList.add('active');

        // Hide tabs
        document.getElementById('tabsContainer').style.display = 'none';
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

        if (view === 'wrong') {
            document.getElementById('topicTitle').textContent = 'Review Mistakes';
            document.getElementById('wrongContent').classList.add('active');
            this.renderWrongQuestions();
        } else if (view === 'analytics') {
            document.getElementById('topicTitle').textContent = 'Performance Analytics';
            document.getElementById('analyticsContent').classList.add('active');
            this.renderAnalytics();
        } else if (view === 'quiz') {
            document.getElementById('topicTitle').textContent = 'Timed Quiz Mode';
            this.showQuizSetup();
        }
    }

    selectTopic(topicId) {
        this.currentView = null;
        document.getElementById('tabsContainer').style.display = 'flex';
        document.querySelectorAll('.sidebar-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.topic-item').forEach(item => item.classList.remove('active'));
        const sel = document.querySelector(`[data-topic-id="${topicId}"]`);
        if (sel) sel.classList.add('active');

        if (topicId === 'all') {
            this.currentTopic = null;
            document.getElementById('topicTitle').textContent = 'All Mains Questions';
            this.switchTab('mains');
        } else {
            this.currentTopic = economicsData.microthemes.find(t => t.id === topicId);
            document.getElementById('topicTitle').textContent = this.currentTopic.name;
            const activeTab = document.querySelector('.tab.active').dataset.tab;
            this.switchTab(activeTab);
        }
    }

    switchTab(tabName) {
        if (this.currentView) return; // Ignore tab clicks in special views
        document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        const contentMap = {syllabus:'syllabusContent',notes:'notesContent',prelims:'prelimsContent',mains:'mainsContent'};
        document.getElementById(contentMap[tabName]).classList.add('active');

        const allSelected = document.querySelector('.topic-item[data-topic-id="all"]')?.classList.contains('active');

        if (tabName === 'mains' && allSelected) {
            this.renderAllMains();
        } else if (tabName === 'mains' && this.currentTopic) {
            this.renderTopicMains();
        } else if (this.currentTopic) {
            switch(tabName) {
                case 'syllabus': this.renderSyllabus(); break;
                case 'notes': this.renderNotes(); break;
                case 'prelims': this.renderPrelims(); break;
            }
        } else if (allSelected && tabName !== 'mains') {
            document.getElementById(contentMap[tabName]).innerHTML = this.emptyState('Select a specific topic to view this content');
        }
    }

    // ==========================================
    // FEATURE 1: WRONG QUESTIONS REVIEW
    // ==========================================
    renderWrongQuestions() {
        const c = document.getElementById('wrongContent');
        const wrong = this.getWrongQuestions();

        if (wrong.length === 0) {
            c.innerHTML = `<div class="empty-state">
                <div style="font-size:3em;margin-bottom:15px;">&#9989;</div>
                <h3>No Wrong Answers Yet</h3>
                <p>All your attempted questions are correct, or you haven't attempted any yet. Keep practicing!</p>
            </div>`;
            return;
        }

        // Group by theme
        const byTheme = {};
        wrong.forEach(w => {
            if (!byTheme[w.topicName]) byTheme[w.topicName] = [];
            byTheme[w.topicName].push(w);
        });

        const themeFilter = Object.keys(byTheme).sort();

        c.innerHTML = `
            <div style="margin-bottom:20px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
                <div>
                    <h3 style="color:var(--danger);">Wrong Answers (${wrong.length})</h3>
                    <p style="color:var(--text-muted);">Review your mistakes across all microthemes to improve</p>
                </div>
                <button class="btn btn-primary" id="clearWrongFilter" style="margin:0;">Show All</button>
            </div>
            <div style="margin-bottom:18px;">
                <div class="filter-buttons" id="wrongThemeFilter">
                    <button class="filter-btn active" data-filter="all">All Themes (${wrong.length})</button>
                    ${themeFilter.map(t => `<button class="filter-btn" data-filter="${t}">${t} (${byTheme[t].length})</button>`).join('')}
                </div>
            </div>
            <div id="wrongQuestionsContainer">
                ${wrong.map((w, i) => this.renderWrongCard(w, i)).join('')}
            </div>`;

        // Filter handlers
        c.querySelectorAll('#wrongThemeFilter .filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                c.querySelectorAll('#wrongThemeFilter .filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.dataset.filter;
                const filtered = filter === 'all' ? wrong : wrong.filter(w => w.topicName === filter);
                document.getElementById('wrongQuestionsContainer').innerHTML =
                    filtered.map((w, i) => this.renderWrongCard(w, i)).join('');
            });
        });
    }

    renderWrongCard(w, idx) {
        const q = w.question;
        return `
            <div class="question-card wrong-card" style="border-left:4px solid var(--danger);">
                <div class="question-header">
                    <div>
                        <strong>Q${idx + 1}</strong>
                        <span class="wrong-theme-tag">${w.topicName}</span>
                    </div>
                    <span class="question-year">${q.year}</span>
                </div>
                <div class="question-text">${q.question.replace(/\n/g, '<br>')}</div>
                <div class="options">
                    ${Object.entries(q.options).map(([key, val]) => {
                        const isCorrect = key === q.answer;
                        const wasSelected = key === w.selected;
                        let cls = '';
                        if (isCorrect) cls = 'correct';
                        else if (wasSelected) cls = 'wrong';
                        return `<div class="option ${cls}" style="pointer-events:none;">(${key}) ${val}</div>`;
                    }).join('')}
                </div>
                <div class="answer-section" style="display:block;">
                    <div style="margin-bottom:6px;">
                        <span class="wrong-selected">Your answer: (${w.selected}) ${q.options[w.selected]}</span>
                    </div>
                    <div class="answer-label">Correct: (${q.answer}) ${q.options[q.answer]}</div>
                    ${q.explanation ? `<div class="explanation-text">${q.explanation}</div>` : ''}
                </div>
            </div>`;
    }

    // ==========================================
    // FEATURE 2: TIMED QUIZ MODE
    // ==========================================
    showQuizSetup() {
        // Show setup in the content area instead of overlay
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        const c = document.getElementById('prelimsContent');
        c.classList.add('active');

        const totalAvailable = economicsQuestions.length;
        const unattempted = this.getUnattemptedGlobal().length;

        c.innerHTML = `
            <div class="quiz-setup">
                <h2>Timed Quiz Mode</h2>
                <p>Simulate real exam pressure with randomized questions across all topics</p>
                <div style="background:var(--surface);padding:18px;border-radius:10px;margin-bottom:25px;text-align:left;">
                    <div style="display:flex;justify-content:space-around;text-align:center;">
                        <div><div style="font-size:1.8em;font-weight:bold;color:var(--primary);">${totalAvailable}</div><div style="font-size:0.85em;color:var(--text-muted);">Total Questions</div></div>
                        <div><div style="font-size:1.8em;font-weight:bold;color:var(--success);">${unattempted}</div><div style="font-size:0.85em;color:var(--text-muted);">Unattempted</div></div>
                    </div>
                </div>
                <div class="quiz-config">
                    <label>
                        Questions
                        <select id="quizCount">
                            <option value="20">20 Questions</option>
                            <option value="30">30 Questions</option>
                            <option value="50" selected>50 Questions</option>
                            <option value="70">70 Questions</option>
                        </select>
                    </label>
                    <label>
                        Time per Question
                        <select id="quizTime">
                            <option value="45">45 seconds</option>
                            <option value="60" selected>60 seconds</option>
                            <option value="90">90 seconds</option>
                        </select>
                    </label>
                    <label>
                        Question Pool
                        <select id="quizPool">
                            <option value="all">All Questions</option>
                            <option value="unattempted">Unattempted Only</option>
                            <option value="wrong">Previously Wrong</option>
                        </select>
                    </label>
                </div>
                <button class="quiz-start-btn" id="startTimedQuiz">Start Quiz</button>
            </div>`;

        document.getElementById('startTimedQuiz').addEventListener('click', () => this.launchTimedQuiz());
    }

    getUnattemptedGlobal() {
        const result = [];
        economicsData.microthemes.forEach(topic => {
            topic.questions.forEach((q, i) => {
                const key = `${topic.id}_${i}`;
                if (!this.attemptedQuestions[key]) {
                    result.push({ question: q, topicId: topic.id, qIndex: i, topicName: topic.name });
                }
            });
        });
        return result;
    }

    getWrongGlobal() {
        const result = [];
        Object.entries(this.attemptedQuestions).forEach(([key, val]) => {
            if (!val.correct) {
                const [topicId, qIndex] = key.split('_').map(Number);
                const topic = economicsData.microthemes.find(t => t.id === topicId);
                if (topic && topic.questions[qIndex]) {
                    result.push({ question: topic.questions[qIndex], topicId, qIndex, topicName: topic.name });
                }
            }
        });
        return result;
    }

    getAllQuestionsGlobal() {
        const result = [];
        economicsData.microthemes.forEach(topic => {
            topic.questions.forEach((q, i) => {
                result.push({ question: q, topicId: topic.id, qIndex: i, topicName: topic.name });
            });
        });
        return result;
    }

    launchTimedQuiz() {
        const count = parseInt(document.getElementById('quizCount').value);
        const timePerQ = parseInt(document.getElementById('quizTime').value);
        const pool = document.getElementById('quizPool').value;

        let questions;
        if (pool === 'unattempted') questions = this.getUnattemptedGlobal();
        else if (pool === 'wrong') questions = this.getWrongGlobal();
        else questions = this.getAllQuestionsGlobal();

        if (questions.length === 0) {
            this.showNotification('No questions available in the selected pool!');
            return;
        }

        // Shuffle and pick
        const shuffled = [...questions].sort(() => Math.random() - 0.5).slice(0, Math.min(count, questions.length));

        this.quizState = {
            questions: shuffled,
            currentIndex: 0,
            timePerQ,
            timeLeft: timePerQ,
            answers: [], // {selected, correct, timedOut}
            startTime: Date.now()
        };

        this.renderQuizQuestion();
    }

    renderQuizQuestion() {
        const qs = this.quizState;
        if (qs.currentIndex >= qs.questions.length) {
            this.showQuizResults();
            return;
        }

        const item = qs.questions[qs.currentIndex];
        const q = item.question;
        const idx = qs.currentIndex;
        const total = qs.questions.length;

        // Remove existing overlay
        document.querySelector('.quiz-overlay')?.remove();

        const overlay = document.createElement('div');
        overlay.className = 'quiz-overlay';
        overlay.innerHTML = `
            <div class="quiz-container">
                <div class="quiz-header">
                    <div>
                        <h3>Question ${idx + 1} of ${total}</h3>
                        <div class="quiz-progress-text">${item.topicName} | ${q.year}</div>
                    </div>
                    <div style="text-align:right;">
                        <div class="quiz-timer-text" id="qzTimerText">${qs.timePerQ}s</div>
                    </div>
                </div>
                <div class="quiz-timer-bar"><div class="quiz-timer-fill" id="qzTimerFill" style="width:100%"></div></div>
                <div class="quiz-body">
                    <div class="quiz-question-text">${q.question.replace(/\n/g, '<br>')}</div>
                    <div id="qzOptions">
                        ${Object.entries(q.options).map(([key, val]) =>
                            `<div class="quiz-option" data-key="${key}">(${key}) ${val}</div>`
                        ).join('')}
                    </div>
                    <div id="qzFeedback" style="display:none;margin-top:15px;"></div>
                </div>
                <div class="quiz-footer">
                    <button class="quiz-btn quiz-btn-quit" id="qzQuit">Quit Quiz</button>
                    <div>
                        <span style="color:var(--text-muted);font-size:0.9em;margin-right:15px;">Score: <strong id="qzScore">${qs.answers.filter(a => a.correct).length}/${idx}</strong></span>
                        <button class="quiz-btn quiz-btn-next" id="qzNext" style="display:none;">Next &rarr;</button>
                    </div>
                </div>
            </div>`;

        document.body.appendChild(overlay);

        // Start timer
        qs.timeLeft = qs.timePerQ;
        this.startQuizTimer();

        // Option click handlers
        overlay.querySelectorAll('.quiz-option').forEach(opt => {
            opt.addEventListener('click', () => this.handleQuizAnswer(opt.dataset.key));
        });

        document.getElementById('qzQuit').addEventListener('click', () => {
            this.endQuiz();
        });

        document.getElementById('qzNext').addEventListener('click', () => {
            qs.currentIndex++;
            this.renderQuizQuestion();
        });
    }

    startQuizTimer() {
        clearInterval(this.quizTimer);
        const qs = this.quizState;
        const startTime = Date.now();
        const duration = qs.timePerQ * 1000;

        this.quizTimer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const remaining = Math.max(0, duration - elapsed);
            const secs = Math.ceil(remaining / 1000);
            const pct = (remaining / duration) * 100;

            const timerText = document.getElementById('qzTimerText');
            const timerFill = document.getElementById('qzTimerFill');
            if (!timerText) { clearInterval(this.quizTimer); return; }

            timerText.textContent = `${secs}s`;
            timerFill.style.width = `${pct}%`;

            if (secs <= 10) {
                timerText.classList.add('danger');
                timerFill.classList.add('danger');
            }

            if (remaining <= 0) {
                clearInterval(this.quizTimer);
                this.handleQuizTimeout();
            }
        }, 100);
    }

    handleQuizAnswer(selectedKey) {
        clearInterval(this.quizTimer);
        const qs = this.quizState;
        const item = qs.questions[qs.currentIndex];
        const q = item.question;
        const isCorrect = selectedKey === q.answer;

        // Record answer
        qs.answers.push({ selected: selectedKey, correct: isCorrect, timedOut: false, topicName: item.topicName });

        // Save to global attempted
        const aKey = `${item.topicId}_${item.qIndex}`;
        if (!this.attemptedQuestions[aKey]) {
            this.attemptedQuestions[aKey] = { selected: selectedKey, correct: isCorrect };
            this.saveAttempted();
        }

        // Show feedback
        document.querySelectorAll('.quiz-option').forEach(opt => {
            opt.classList.add('q-disabled');
            if (opt.dataset.key === q.answer) opt.classList.add('q-correct');
            else if (opt.dataset.key === selectedKey && !isCorrect) opt.classList.add('q-wrong');
        });

        const feedback = document.getElementById('qzFeedback');
        feedback.style.display = 'block';
        if (isCorrect) {
            feedback.innerHTML = `<div style="color:var(--success);font-weight:600;margin-bottom:8px;">Correct!</div>`;
        } else {
            feedback.innerHTML = `<div style="color:var(--danger);font-weight:600;margin-bottom:8px;">Wrong! Correct answer: (${q.answer})</div>`;
        }
        if (q.explanation) {
            feedback.innerHTML += `<div class="explanation-text">${q.explanation}</div>`;
        }

        // Update score and show next
        document.getElementById('qzScore').textContent = `${qs.answers.filter(a => a.correct).length}/${qs.answers.length}`;
        document.getElementById('qzNext').style.display = 'inline-block';
    }

    handleQuizTimeout() {
        const qs = this.quizState;
        const item = qs.questions[qs.currentIndex];
        const q = item.question;

        qs.answers.push({ selected: null, correct: false, timedOut: true, topicName: item.topicName });

        // Mark as attempted (timed out = wrong)
        const aKey = `${item.topicId}_${item.qIndex}`;
        if (!this.attemptedQuestions[aKey]) {
            this.attemptedQuestions[aKey] = { selected: null, correct: false };
            this.saveAttempted();
        }

        document.querySelectorAll('.quiz-option').forEach(opt => {
            opt.classList.add('q-disabled');
            if (opt.dataset.key === q.answer) opt.classList.add('q-correct');
        });

        const feedback = document.getElementById('qzFeedback');
        feedback.style.display = 'block';
        feedback.innerHTML = `<div style="color:var(--danger);font-weight:600;margin-bottom:8px;">Time's Up! Correct answer: (${q.answer})</div>`;
        if (q.explanation) {
            feedback.innerHTML += `<div class="explanation-text">${q.explanation}</div>`;
        }

        document.getElementById('qzTimerText').textContent = '0s';
        document.getElementById('qzTimerFill').style.width = '0%';
        document.getElementById('qzScore').textContent = `${qs.answers.filter(a => a.correct).length}/${qs.answers.length}`;
        document.getElementById('qzNext').style.display = 'inline-block';
    }

    showQuizResults() {
        clearInterval(this.quizTimer);
        const qs = this.quizState;
        const total = qs.answers.length;
        const correct = qs.answers.filter(a => a.correct).length;
        const wrong = qs.answers.filter(a => !a.correct && !a.timedOut).length;
        const timedOut = qs.answers.filter(a => a.timedOut).length;
        const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
        const elapsed = Math.round((Date.now() - qs.startTime) / 1000);
        const avgTime = total > 0 ? Math.round(elapsed / total) : 0;

        // Theme breakdown
        const byTheme = {};
        qs.answers.forEach((a, i) => {
            const name = a.topicName;
            if (!byTheme[name]) byTheme[name] = { correct: 0, total: 0 };
            byTheme[name].total++;
            if (a.correct) byTheme[name].correct++;
        });

        document.querySelector('.quiz-overlay')?.remove();
        const overlay = document.createElement('div');
        overlay.className = 'quiz-overlay';
        overlay.innerHTML = `
            <div class="quiz-container">
                <div class="quiz-header">
                    <h3>Quiz Complete!</h3>
                </div>
                <div class="quiz-score-card">
                    <div style="font-size:1.1em;color:var(--text-muted);">Your Score</div>
                    <div class="quiz-score-big">${pct}%</div>
                    <div class="quiz-score-sub">${correct} correct out of ${total} questions</div>

                    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:25px;">
                        <div class="quiz-result-row" style="flex-direction:column;text-align:center;">
                            <div class="value" style="font-size:1.4em;color:var(--success);">${correct}</div>
                            <div class="label">Correct</div>
                        </div>
                        <div class="quiz-result-row" style="flex-direction:column;text-align:center;">
                            <div class="value" style="font-size:1.4em;color:var(--danger);">${wrong}</div>
                            <div class="label">Wrong</div>
                        </div>
                        <div class="quiz-result-row" style="flex-direction:column;text-align:center;">
                            <div class="value" style="font-size:1.4em;color:var(--warning);">${timedOut}</div>
                            <div class="label">Timed Out</div>
                        </div>
                        <div class="quiz-result-row" style="flex-direction:column;text-align:center;">
                            <div class="value" style="font-size:1.4em;color:var(--primary);">${avgTime}s</div>
                            <div class="label">Avg Time</div>
                        </div>
                    </div>

                    <div style="text-align:left;margin-bottom:20px;">
                        <h4 style="color:var(--primary);margin-bottom:12px;">Theme Breakdown</h4>
                        ${Object.entries(byTheme).sort((a,b) => (a[1].correct/a[1].total) - (b[1].correct/b[1].total)).map(([name, data]) => {
                            const themePct = Math.round((data.correct / data.total) * 100);
                            const cls = themePct >= 70 ? 'strong' : themePct >= 40 ? 'moderate' : 'weak';
                            return `<div class="quiz-result-row">
                                <span class="label">${name}</span>
                                <span class="value">${data.correct}/${data.total} (${themePct}%)</span>
                            </div>`;
                        }).join('')}
                    </div>

                    <div style="display:flex;gap:12px;justify-content:center;">
                        <button class="quiz-btn quiz-btn-quit" id="qzClose">Close</button>
                        <button class="quiz-btn quiz-btn-next" id="qzRetry">Try Again</button>
                    </div>
                </div>
            </div>`;

        document.body.appendChild(overlay);
        this.updateStats();
        this.renderTopicList(); // Update wrong count badge

        document.getElementById('qzClose').addEventListener('click', () => {
            overlay.remove();
            this.quizState = null;
        });
        document.getElementById('qzRetry').addEventListener('click', () => {
            overlay.remove();
            this.quizState = null;
            this.selectSpecialView('quiz');
        });
    }

    endQuiz() {
        clearInterval(this.quizTimer);
        if (this.quizState && this.quizState.answers.length > 0) {
            this.showQuizResults();
        } else {
            document.querySelector('.quiz-overlay')?.remove();
            this.quizState = null;
        }
    }

    // ==========================================
    // FEATURE 3: PERFORMANCE ANALYTICS
    // ==========================================
    renderAnalytics() {
        const c = document.getElementById('analyticsContent');
        const attempted = this.attemptedQuestions;
        const totalAttempted = Object.keys(attempted).length;
        const totalCorrect = Object.values(attempted).filter(a => a.correct).length;
        const totalWrong = totalAttempted - totalCorrect;
        const accuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

        // Per-theme stats
        const themeStats = economicsData.microthemes.map(topic => {
            const topicAttempted = Object.entries(attempted).filter(([k]) => k.startsWith(topic.id + '_'));
            const topicCorrect = topicAttempted.filter(([, v]) => v.correct).length;
            const topicTotal = topic.questions.length;
            const acc = topicAttempted.length > 0 ? Math.round((topicCorrect / topicAttempted.length) * 100) : -1;
            return {
                name: topic.name,
                total: topicTotal,
                attempted: topicAttempted.length,
                correct: topicCorrect,
                wrong: topicAttempted.length - topicCorrect,
                accuracy: acc
            };
        });

        // Year-wise stats
        const yearStats = {};
        Object.entries(attempted).forEach(([key, val]) => {
            const [topicId, qIndex] = key.split('_').map(Number);
            const topic = economicsData.microthemes.find(t => t.id === topicId);
            if (topic && topic.questions[qIndex]) {
                const year = topic.questions[qIndex].year;
                if (!yearStats[year]) yearStats[year] = { correct: 0, total: 0 };
                yearStats[year].total++;
                if (val.correct) yearStats[year].correct++;
            }
        });

        const strong = themeStats.filter(t => t.accuracy >= 70 && t.attempted >= 3);
        const weak = themeStats.filter(t => t.accuracy >= 0 && t.accuracy < 50 && t.attempted >= 3);
        const notStarted = themeStats.filter(t => t.attempted === 0);

        c.innerHTML = `
            <div class="analytics-summary">
                <div class="summary-item">
                    <div class="num">${totalAttempted}</div>
                    <div class="lbl">Attempted</div>
                </div>
                <div class="summary-item">
                    <div class="num" style="color:var(--success);">${totalCorrect}</div>
                    <div class="lbl">Correct</div>
                </div>
                <div class="summary-item">
                    <div class="num" style="color:var(--danger);">${totalWrong}</div>
                    <div class="lbl">Wrong</div>
                </div>
                <div class="summary-item">
                    <div class="num">${accuracy}%</div>
                    <div class="lbl">Accuracy</div>
                </div>
            </div>

            <div class="analytics-grid">
                <div class="analytics-card" style="grid-column:1/-1;">
                    <h4>Accuracy by Microtheme</h4>
                    <div class="bar-chart">
                        ${themeStats.map(t => {
                            const pct = t.accuracy >= 0 ? t.accuracy : 0;
                            const cls = t.accuracy < 0 ? 'neutral' : t.accuracy >= 70 ? 'strong' : t.accuracy >= 40 ? 'moderate' : 'weak';
                            const label = t.accuracy < 0 ? 'Not started' : `${t.accuracy}% (${t.correct}/${t.attempted})`;
                            return `<div class="bar-row">
                                <div class="bar-label" title="${t.name}">${t.name}</div>
                                <div class="bar-track">
                                    <div class="bar-fill ${cls}" style="width:${pct}%"></div>
                                    <div class="bar-value">${label}</div>
                                </div>
                            </div>`;
                        }).join('')}
                    </div>
                </div>

                <div class="analytics-card">
                    <h4>Strong Areas</h4>
                    ${strong.length > 0 ? strong.map(t =>
                        `<span class="strength-tag strong">${t.name} (${t.accuracy}%)</span>`
                    ).join('') : '<p style="color:var(--text-muted);font-size:0.9em;">Attempt at least 3 questions per theme to see strength analysis</p>'}
                </div>

                <div class="analytics-card">
                    <h4>Weak Areas - Focus Here</h4>
                    ${weak.length > 0 ? weak.map(t =>
                        `<span class="strength-tag weak">${t.name} (${t.accuracy}%)</span>`
                    ).join('') : '<p style="color:var(--text-muted);font-size:0.9em;">No weak areas identified yet. Keep practicing!</p>'}
                </div>

                <div class="analytics-card">
                    <h4>Completion by Theme</h4>
                    <div class="bar-chart">
                        ${themeStats.map(t => {
                            const pct = Math.round((t.attempted / t.total) * 100);
                            return `<div class="bar-row">
                                <div class="bar-label" title="${t.name}">${t.name}</div>
                                <div class="bar-track">
                                    <div class="bar-fill ${pct >= 80 ? 'strong' : pct >= 40 ? 'moderate' : 'neutral'}" style="width:${pct}%"></div>
                                    <div class="bar-value">${t.attempted}/${t.total}</div>
                                </div>
                            </div>`;
                        }).join('')}
                    </div>
                </div>

                <div class="analytics-card">
                    <h4>Year-wise Accuracy</h4>
                    ${Object.keys(yearStats).length > 0 ? `
                        <div class="bar-chart">
                            ${Object.entries(yearStats).sort((a,b) => b[0]-a[0]).map(([year, data]) => {
                                const pct = Math.round((data.correct / data.total) * 100);
                                const cls = pct >= 70 ? 'strong' : pct >= 40 ? 'moderate' : 'weak';
                                return `<div class="bar-row">
                                    <div class="bar-label">${year}</div>
                                    <div class="bar-track">
                                        <div class="bar-fill ${cls}" style="width:${pct}%"></div>
                                        <div class="bar-value">${pct}% (${data.correct}/${data.total})</div>
                                    </div>
                                </div>`;
                            }).join('')}
                        </div>
                    ` : '<p style="color:var(--text-muted);font-size:0.9em;">No data yet</p>'}
                </div>
            </div>

            ${notStarted.length > 0 ? `
                <div class="analytics-card" style="margin-top:15px;">
                    <h4>Not Yet Started</h4>
                    <p style="color:var(--text-muted);font-size:0.9em;margin-bottom:10px;">These themes have no attempts yet:</p>
                    ${notStarted.map(t => `<span class="strength-tag weak" style="background:var(--surface-light);color:var(--text-muted);">${t.name} (${t.total} Qs)</span>`).join('')}
                </div>
            ` : ''}
        `;
    }

    // ==========================================
    // EXISTING FEATURES (preserved)
    // ==========================================
    renderSyllabus() {
        const c = document.getElementById('syllabusContent');
        if (!this.currentTopic) { c.innerHTML = this.emptyState('Select a topic'); return; }
        const attempted = this.getAttemptedCount(this.currentTopic.id);
        const total = this.currentTopic.questions.length;
        const pct = total > 0 ? Math.round((attempted/total)*100) : 0;
        c.innerHTML = `
            <div class="syllabus-section">
                <h3>Prelims Syllabus Coverage</h3>
                <ul>${economicsData.syllabus.prelims.slice(0,8).map(i=>`<li>${i}</li>`).join('')}</ul>
            </div>
            <div class="syllabus-section">
                <h3>Mains Syllabus Coverage</h3>
                <ul>${economicsData.syllabus.mains.slice(0,8).map(i=>`<li>${i}</li>`).join('')}</ul>
            </div>
            <div class="syllabus-section">
                <h3>Topic: ${this.currentTopic.name}</h3>
                <p style="color:var(--text-muted);line-height:1.8;padding:15px;background:var(--bg);border-radius:8px;">
                    This topic has <strong style="color:var(--primary);">${total} PYQs</strong> spanning 2009 to 2025.<br>
                    You have attempted <strong style="color:var(--success);">${attempted}/${total}</strong> questions (${pct}%).<br>
                    <div class="progress-bar" style="margin-top:10px;"><div class="progress-fill" style="width:${pct}%"></div></div>
                </p>
            </div>`;
    }

    renderNotes() {
        const c = document.getElementById('notesContent');
        if (!this.currentTopic) { c.innerHTML = this.emptyState('Select a topic to take notes'); return; }
        const topicNotes = this.notes[this.currentTopic.id] || '';
        c.innerHTML = `
            <h3 style="margin-bottom:15px;color:var(--primary);">Notes for ${this.currentTopic.name}</h3>
            <textarea class="notes-editor" id="notesEditor" placeholder="Take your notes here...\n\nKey Points to Cover:\n- Core concepts\n- Important data and facts\n- Exam-relevant trends\n- Current affairs linkages">${topicNotes}</textarea>
            <button class="btn btn-primary" id="saveNotesBtn">Save Notes</button>`;
        document.getElementById('saveNotesBtn').addEventListener('click', () => {
            this.notes[this.currentTopic.id] = document.getElementById('notesEditor').value;
            this.saveNotes();
            this.showNotification('Note saved successfully!');
            this.updateStats();
        });
    }

    renderPrelims() {
        const c = document.getElementById('prelimsContent');
        if (!this.currentTopic) { c.innerHTML = this.emptyState('Select a topic to practice PYQs'); return; }
        const qs = this.currentTopic.questions;
        if (!qs || qs.length === 0) { c.innerHTML = this.emptyState('No PYQs for this topic'); return; }
        c.innerHTML = `
            <div style="margin-bottom:20px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
                <div>
                    <h3 style="color:var(--primary);">Previous Year Questions (${qs.length})</h3>
                    <p style="color:var(--text-muted);">Practice questions to understand exam pattern</p>
                </div>
                <div>
                    <button class="btn btn-primary" id="quizModeBtn" style="margin:0;">Quick Quiz (10)</button>
                </div>
            </div>
            <div id="questionsContainer">
                ${qs.map((q, i) => this.renderQuestion(q, i)).join('')}
            </div>`;
        this.attachQuestionHandlers(c);
        document.getElementById('quizModeBtn').addEventListener('click', () => this.startQuickQuiz());
    }

    renderQuestion(question, index) {
        const qKey = `${this.currentTopic.id}_${index}`;
        const attempted = this.attemptedQuestions[qKey];
        const statusClass = attempted ? (attempted.correct ? 'correct-card' : 'wrong-card') : '';
        return `
            <div class="question-card ${statusClass}" data-qindex="${index}">
                <div class="question-header">
                    <strong>Q${index+1}</strong>
                    <span class="question-year">${question.year}</span>
                </div>
                <div class="question-text">${question.question.replace(/\n/g,'<br>')}</div>
                <div class="options">
                    ${Object.entries(question.options).map(([key,val]) => {
                        const isCorrect = key === question.answer;
                        const wasSelected = attempted && attempted.selected === key;
                        let cls = '';
                        if (attempted) {
                            if (isCorrect) cls = 'correct';
                            else if (wasSelected) cls = 'wrong';
                        }
                        return `<div class="option ${cls}" data-key="${key}">(${key}) ${val}</div>`;
                    }).join('')}
                </div>
                ${!attempted ? '' : `
                    <div class="answer-section" style="display:block;">
                        <div class="answer-label">${attempted.correct ? 'Correct!' : 'Incorrect'} - Answer: (${question.answer}) ${question.options[question.answer]}</div>
                        ${question.explanation ? `<div class="explanation-text">${question.explanation}</div>` : ''}
                    </div>`}
                ${attempted ? '' : `
                    <button class="toggle-answer" data-qindex="${index}">Show Answer</button>
                    <div class="answer-section model-answer" data-qindex="${index}">
                        <div class="answer-label">Correct Answer: (${question.answer}) ${question.options[question.answer]}</div>
                        ${question.explanation ? `<div class="explanation-text">${question.explanation}</div>` : ''}
                    </div>`}
            </div>`;
    }

    attachQuestionHandlers(container) {
        container.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', (e) => {
                const card = e.target.closest('.question-card');
                const qIndex = parseInt(card.dataset.qindex);
                const qKey = `${this.currentTopic.id}_${qIndex}`;
                if (this.attemptedQuestions[qKey]) return;

                const selectedKey = e.target.dataset.key;
                const question = this.currentTopic.questions[qIndex];
                const isCorrect = selectedKey === question.answer;

                this.attemptedQuestions[qKey] = {selected: selectedKey, correct: isCorrect};
                this.saveAttempted();

                card.querySelectorAll('.option').forEach(opt => {
                    if (opt.dataset.key === question.answer) opt.classList.add('correct');
                    else if (opt.dataset.key === selectedKey && !isCorrect) opt.classList.add('wrong');
                });
                card.classList.add(isCorrect ? 'correct-card' : 'wrong-card');

                const existingAnswer = card.querySelector('.answer-section');
                if (existingAnswer) existingAnswer.style.display = 'block';
                const toggleBtn = card.querySelector('.toggle-answer');
                if (toggleBtn) toggleBtn.remove();

                this.updateStats();
                this.renderTopicList(); // Update wrong count badge
            });
        });
        container.querySelectorAll('.toggle-answer').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = btn.dataset.qindex;
                const ans = container.querySelector(`.model-answer[data-qindex="${idx}"]`);
                if (ans.classList.contains('show')) {
                    ans.classList.remove('show');
                    btn.textContent = 'Show Answer';
                } else {
                    ans.classList.add('show');
                    btn.textContent = 'Hide Answer';
                }
            });
        });
    }

    startQuickQuiz() {
        if (!this.currentTopic) return;
        const qs = this.currentTopic.questions;
        const unattempted = qs.filter((q,i) => !this.attemptedQuestions[`${this.currentTopic.id}_${i}`]);
        if (unattempted.length === 0) {
            this.showNotification('All questions attempted! Reset to try again.');
            return;
        }
        const c = document.getElementById('questionsContainer');
        const shuffled = [...unattempted].sort(() => Math.random() - 0.5).slice(0, Math.min(10, unattempted.length));
        c.innerHTML = `
            <div style="background:var(--primary);color:white;padding:15px;border-radius:8px;margin-bottom:20px;display:flex;justify-content:space-between;align-items:center;">
                <span>Quick Quiz: ${shuffled.length} questions</span>
                <button class="btn" style="background:white;color:var(--primary);margin:0;" id="exitQuiz">Exit Quiz</button>
            </div>
            ${shuffled.map((q, i) => {
                const origIdx = qs.indexOf(q);
                return this.renderQuestion(q, origIdx);
            }).join('')}`;
        this.attachQuestionHandlers(c);
        document.getElementById('exitQuiz').addEventListener('click', () => this.renderPrelims());
    }

    getAttemptedCount(topicId) {
        return Object.keys(this.attemptedQuestions).filter(k => k.startsWith(topicId + '_')).length;
    }

    renderTopicMains() {
        const c = document.getElementById('mainsContent');
        if (!this.currentTopic) { c.innerHTML = this.emptyState('Select a topic'); return; }
        const topicName = this.currentTopic.name.toLowerCase();
        const relevant = economicsData.allMainsQuestions.filter(q => {
            return q.topics.some(t => {
                const tl = t.toLowerCase();
                return tl.includes(topicName) || topicName.includes(tl) || this.isTopicRelevant(topicName, tl);
            });
        });
        if (relevant.length === 0) {
            c.innerHTML = `<div class="empty-state"><h3>No Mains Questions Found</h3><p>Try "All Topics" to browse all Mains questions.</p></div>`;
            return;
        }
        c.innerHTML = `
            <div style="margin-bottom:20px;">
                <h3 style="color:var(--warning);">Relevant Mains Questions (${relevant.length})</h3>
                <p style="color:var(--text-muted);">Questions related to ${this.currentTopic.name}</p>
            </div>
            ${relevant.map((q,i) => this.renderMainsCard(q,i)).join('')}`;
    }

    isTopicRelevant(micro, tag) {
        const map = {
            'rbi functions/monetary policy':['monetary policy','rbi','inflation targeting','credit'],
            'fiscal policy and budget':['fiscal policy','budget','taxation','subsidies','disinvestment'],
            'economic growth':['growth','development','inclusive growth','employment','poverty','manufacturing','make in india'],
            'banking and finance':['banking','financial inclusion','npa','credit'],
            'trade':['trade','export','import','current account','bop','wto','asean'],
            'finance/capital market':['capital market','stock','financial market','money market'],
            'gst':['gst','taxation','tax','fiscal'],
            'infrastructure':['infrastructure','transport','energy','smart cities','waterways','port','road'],
            'national income accounting and exchange rate':['gdp','gnp','national income','exchange rate'],
            'inflation':['inflation','price','cpi','wpi','price stability'],
            'investment':['investment','fdi','fii','fpi','sez'],
            'bonds':['bonds','government securities','debt'],
            'differentiated banks':['banking','cooperative bank','payment bank','small finance','nbfc','rural bank'],
            'index':['index','cpi','wpi','core industries'],
            'digitalization of economy':['digital','upi','fintech','digital india']
        };
        const vals = map[micro] || [];
        return vals.some(v => tag.includes(v));
    }

    renderAllMains() {
        const c = document.getElementById('mainsContent');
        const allQ = economicsData.allMainsQuestions;
        if (!allQ || allQ.length === 0) { c.innerHTML = this.emptyState('No Mains questions available'); return; }
        const years = [...new Set(allQ.map(q=>q.year))].sort((a,b)=>b-a);
        const allTopics = new Set();
        allQ.forEach(q => q.topics.forEach(t => allTopics.add(t)));
        const topics = [...allTopics].sort();

        c.innerHTML = `
            <div style="margin-bottom:25px;">
                <h3 style="color:var(--primary);margin-bottom:15px;">All Mains Questions (${allQ.length})</h3>
                <p style="color:var(--text-muted);margin-bottom:20px;">UPSC Mains GS Paper 3 Economics Questions (2013-2024)</p>
                <div style="margin-bottom:15px;">
                    <h4 style="color:var(--text);margin-bottom:10px;font-size:1em;">Filter by Year:</h4>
                    <div class="filter-buttons" id="yearFilters">
                        <button class="filter-btn active" data-filter="all">All Years</button>
                        ${years.map(y => `<button class="filter-btn" data-filter="${y}">${y}</button>`).join('')}
                    </div>
                </div>
                <div style="margin-bottom:15px;">
                    <h4 style="color:var(--text);margin-bottom:10px;font-size:1em;">Filter by Topic:</h4>
                    <div class="filter-buttons" id="topicFilters">
                        <button class="filter-btn active" data-filter="all">All Topics</button>
                        ${topics.map(t => `<button class="filter-btn" data-filter="${t}">${t}</button>`).join('')}
                    </div>
                </div>
            </div>
            <div id="mainsQuestionsContainer">${this.renderFilteredMains()}</div>`;
        this.attachMainsFilters();
    }

    attachMainsFilters() {
        ['yearFilters','topicFilters'].forEach(id => {
            document.querySelectorAll(`#${id} .filter-btn`).forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelectorAll(`#${id} .filter-btn`).forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    this.filterMains();
                });
            });
        });
    }

    filterMains() {
        const yf = document.querySelector('#yearFilters .filter-btn.active').dataset.filter;
        const tf = document.querySelector('#topicFilters .filter-btn.active').dataset.filter;
        document.getElementById('mainsQuestionsContainer').innerHTML = this.renderFilteredMains(yf, tf);
    }

    renderFilteredMains(yearFilter='all', topicFilter='all') {
        let filtered = economicsData.allMainsQuestions;
        if (yearFilter !== 'all') filtered = filtered.filter(q => q.year === parseInt(yearFilter));
        if (topicFilter !== 'all') filtered = filtered.filter(q => q.topics.includes(topicFilter));
        if (filtered.length === 0) return '<div class="empty-state"><h3>No questions found</h3><p>Try adjusting filters</p></div>';
        return filtered.map((q,i) => this.renderMainsCard(q,i)).join('');
    }

    renderMainsCard(q, idx) {
        return `
            <div class="mains-question">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;">
                    <div><span class="mains-year">Year: ${q.year}</span><span class="mains-marks">${q.marks} Marks</span></div>
                    <div>${q.topics.slice(0,3).map(t => `<span class="mains-topic-tag">${t}</span>`).join('')}</div>
                </div>
                <div class="mains-text">${q.question}</div>
            </div>`;
    }

    filterTopics(term) {
        const t = term.toLowerCase();
        document.querySelectorAll('.topic-item').forEach(item => {
            if (item.classList.contains('all-topics')) { item.style.display = 'flex'; return; }
            item.style.display = item.textContent.toLowerCase().includes(t) ? 'flex' : 'none';
        });
    }

    updateStats() {
        const totalPrelims = economicsQuestions.length;
        const totalAttempted = Object.keys(this.attemptedQuestions).length;
        const totalCorrect = Object.values(this.attemptedQuestions).filter(a => a.correct).length;
        const notesCount = Object.keys(this.notes).filter(k => this.notes[k].trim().length > 0).length;
        const progress = Math.round((totalAttempted / totalPrelims) * 100);
        const accuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

        document.getElementById('prelimsCount').textContent = totalPrelims;
        document.getElementById('mainsCount').textContent = economicsData.allMainsQuestions.length;
        document.getElementById('attemptedCount').textContent = totalAttempted;
        document.getElementById('accuracyPercent').textContent = `${accuracy}%`;
        document.getElementById('notesCount').textContent = notesCount;
        document.getElementById('progressPercent').textContent = `${progress}%`;
        document.getElementById('progressBar').style.width = `${progress}%`;
    }

    showNotification(msg) {
        const n = document.getElementById('noteSaved');
        n.textContent = msg;
        n.classList.add('show');
        setTimeout(() => n.classList.remove('show'), 3000);
    }

    emptyState(msg) {
        return `<div class="empty-state"><div style="font-size:3em;margin-bottom:15px;">&#128218;</div><h3>${msg}</h3><p>Select a topic from the sidebar</p></div>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.economicsTracker = new EconomicsTracker();
    setTimeout(() => window.economicsTracker.selectTopic('all'), 100);
});
