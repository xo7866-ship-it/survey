const questions = [
    {
        id: 1,
        text: "이번 성경공부를 통해 가장 얻고 싶은 것은 무엇인가요? (택 1)",
        options: [
            "지적 희열 (Knowledge): 성경의 역사, 배경, 교리 등 깊이 있는 지식을 알고 싶다.",
            "삶의 적용 (Application): 말씀대로 사는 법과 구체적인 실천 가이드를 얻고 싶다.",
            "위로와 회복 (Healing): 지친 일상 속에서 말씀을 통해 마음의 위로를 얻고 싶다.",
            "교제와 나눔 (Fellowship): 말씀을 매개로 지체들과 깊은 삶의 이야기를 나누고 싶다."
        ]
    },
    {
        id: 2,
        text: "어떤 주제를 다루는 교재를 선호하시나요?",
        options: [
            "성경 권별 강해: 창세기, 로마서 등 성경 한 권을 처음부터 끝까지 깊게 파는 공부.",
            "주제별 탐구: 일터, 연애/결혼, 돈, 인간관계 등 특정 주제에 대한 성경적 관점 공부.",
            "인물 연구: 다윗, 베드로 등 성경 인물의 생애를 통해 배우는 공부.",
            "기초 교리: 기독교의 핵심 진리와 믿음의 기초를 다시 다지는 공부."
        ]
    },
    {
        id: 3,
        text: "선호하는 진행 방식은 무엇인가요?",
        options: [
            "세미나/강의형: 리더가 깊이 있게 준비한 내용을 듣고 배우는 방식이 좋다. (필기 중심)",
            "귀납적/질문형: 본문을 관찰하고 질문을 통해 스스로 답을 찾아가는 방식이 좋다. (탐구 중심)",
            "나눔/포럼형: 짧은 말씀을 읽고 각자의 생각과 묵상을 나누는 방식이 좋다. (대화 중심)"
        ]
    },
    {
        id: 4,
        text: "성경공부를 위해 일주일 중 할애할 수 있는 개인 시간은 어느 정도인가요?",
        options: [
            "프리 (Free): 예습/숙제 없이 모임 시간에만 집중하고 싶다.",
            "라이트 (Light): 모임 전 성경 본문 1~2장 읽기 정도는 가능하다.",
            "스탠다드 (Standard): 30분~1시간 정도 교재 문제를 미리 풀어올 수 있다.",
            "하드 (Hard): 독서 과제나 큐티 나눔 등 훈련에 필요한 과제를 성실히 수행하겠다."
        ]
    },
    {
        id: 5,
        text: "우리가 함께할 성경공부 모임을 '한 단어'로 정의한다면?",
        options: [
            "학교/학원: 치열하게 배우고 성장하는 곳.",
            "병원: 아픈 곳을 치유받고 쉬어가는 곳.",
            "카페: 편안하게 수다 떨며 삶을 나누는 곳.",
            "체육관: 영적 근육을 키우고 실천을 훈련하는 곳."
        ]
    }
];

// Define Result Types
const resultTypes = {
    // Logical Types
    MODEL_SEMINARIAN: {
        title: "완전체 신학생 (The Model Seminarian)",
        description: "신학적 지식을 원하고, 공부할 준비도 철저히 되어 있으시군요! 학교처럼 체계적으로 배우는 것을 선호합니다.",
        solution: "깊이 있는 성경 권별 강해나 교리 학습반에 참여하여 지적 갈증을 해소하세요."
    },
    ACTION_LEADER: {
        title: "행동대장 (The Action Leader)",
        description: "말씀을 삶에서 치열하게 살아내고 싶어 하는 분이군요. 빡빡한 숙제와 훈련도 마다하지 않는 열정이 보입니다.",
        solution: "삶의 적용점이 명확한 주제별 성경공부나 제자훈련 코스를 추천합니다."
    },
    SOCIALIZER: {
        title: "사랑방 손님 (The Socializer)",
        description: "사람들과 어울리며 따뜻한 위로와 교제를 나누는 것을 가장 중요하게 생각하시네요.",
        solution: "부담 없는 나눔 중심의 소그룹이나 독서 모임에 참여해보세요."
    },

    // Contradictory Types
    GREEDY_DREAMER: {
        title: "욕심쟁이형 (The Greedy Dreamer)",
        description: "목사님, 저는 예습 복습할 시간은 1분도 없지만, 대학원 수준의 깊이 있는 강의를 듣고 싶습니다.",
        solution: "고퀄리티 핸드아웃(요약본)을 제공하는 핵심 요약 강의를 찾아보세요."
    },
    SHY_ATTENTION: {
        title: "수줍은 관종형 (The Shy Attention Seeker)",
        description: "사람들과 친해지고는 싶은데(교제), 제가 먼저 말하는 건 부끄러우니 리더가 알아서 분위기 좀 띄워주길 바라시네요.",
        solution: "아이스브레이킹이 확실하고 리더십이 좋은 인도자가 있는 그룹이 필요합니다."
    },
    SPARTAN_HEALER: {
        title: "스파르타 힐링형 (The Spartan Healer)",
        description: "지금 너무 힘들어서 위로가 필요한데, 그냥 노는 건 성에 안 차고 빡세게 성경을 파서 답을 얻어야 직성이 풀리는 스타일입니다.",
        solution: "큐티 나눔방처럼 치유와 영적 훈련이 병행되는 코스가 딱입니다."
    },
    CONFLICTING: {
        title: "잘못된 만남형 (The Conflicting Desires)",
        description: "서로 토론하고 나누는 걸 좋아하시는데(나눔형), 동시에 분위기는 학교처럼 엄숙하길 원하시네요. 자칫하면 토론하다 싸움 날 수 있습니다.",
        solution: "엄격한 '토론 규칙(Ground Rule)'이 있는 독서 토론 모임을 추천합니다."
    },
    MYSTERY: {
        title: "미스터리형 (The Mystery)",
        description: "지적인 충족을 원한다고 하셨지만, 사실은 그냥 인물들의 옛날이야기를 들으며 편하게 수다 떨고 싶으신 것 같네요.",
        solution: "딱딱한 신학 공부보다는 재미있는 '인문학적 성경 스토리텔링' 모임이 맞습니다."
    }
};

let currentQuestionIndex = 0;
let userAnswers = [];

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const shareBtn = document.getElementById('share-btn');

const progressBar = document.getElementById('progress-bar');
const currentQNum = document.getElementById('current-q-num');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

// Result Elements
const resultTitle = document.getElementById('result-title');
const resultDesc = document.getElementById('result-desc');
const resultSolution = document.getElementById('result-solution');
const resultDetails = document.getElementById('result-details');


// Event Listeners
startBtn.addEventListener('click', startSurvey);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartSurvey);
shareBtn.addEventListener('click', shareResult);

function startSurvey() {
    welcomeScreen.classList.remove('active');
    setTimeout(() => {
        welcomeScreen.classList.add('hidden');
        questionScreen.classList.remove('hidden');
        setTimeout(() => {
            questionScreen.classList.add('active');
        }, 50);
        renderQuestion();
    }, 400);
}

function renderQuestion() {
    const question = questions[currentQuestionIndex];

    // Update Progress
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    currentQNum.textContent = currentQuestionIndex + 1;

    // Update Content
    questionText.textContent = question.text;
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => selectOption(index, btn);
        optionsContainer.appendChild(btn);
    });

    // Reset Next Button
    nextBtn.classList.add('hidden');
}

function selectOption(index, btnElement) {
    const buttons = optionsContainer.getElementsByClassName('option-btn');
    for (let btn of buttons) {
        btn.classList.remove('selected');
    }
    btnElement.classList.add('selected');

    const currentAnswer = questions[currentQuestionIndex].options[index];
    userAnswers[currentQuestionIndex] = currentAnswer;

    nextBtn.classList.remove('hidden');
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionScreen.classList.remove('active');
    setTimeout(() => {
        questionScreen.classList.add('hidden');
        resultScreen.classList.remove('hidden');
        setTimeout(() => {
            resultScreen.classList.add('active');
            calculateResult();
            renderResultDetails();
        }, 50);
    }, 400);
}

function renderResultDetails() {
    resultDetails.innerHTML = '';
    questions.forEach((q, index) => {
        const item = document.createElement('div');
        item.className = 'result-detail-item';
        item.innerHTML = `
            <span class="detail-q">Q${index + 1}.</span>
            <span class="detail-a">${userAnswers[index]}</span>
        `;
        resultDetails.appendChild(item);
    });
}

function restartSurvey() {
    currentQuestionIndex = 0;
    userAnswers = [];
    resultScreen.classList.remove('active');
    setTimeout(() => {
        resultScreen.classList.add('hidden');
        welcomeScreen.classList.remove('hidden');
        setTimeout(() => {
            welcomeScreen.classList.add('active');
        }, 50);
    }, 400);
}

// --- CORE LOGIC ENGINE ---
function calculateResult() {
    const a1 = userAnswers[0]; // Motivation
    const a2 = userAnswers[1]; // Content
    const a3 = userAnswers[2]; // Method
    const a4 = userAnswers[3]; // Time
    const a5 = userAnswers[4]; // Atmosphere

    // Helpers to check containment
    const has = (answer, keyword) => answer.includes(keyword);

    // 1. Check Contradictory Types (Priority)

    // D. 욕심쟁이 (Greedy): Knowledge(or Model) + Lecture + Free + School
    if (has(a1, "지적") && has(a3, "강의") && has(a4, "프리") && has(a5, "학교")) {
        setResult(resultTypes.GREEDY_DREAMER);
        return;
    }

    // E. 수줍은 관종 (Shy): Fellowship + Lecture + Cafe (loosely)
    if (has(a1, "교제") && has(a3, "강의") && has(a5, "카페")) {
        setResult(resultTypes.SHY_ATTENTION);
        return;
    }

    // F. 스파르타 힐링 (Spartan): Healing + Hard + Hospital
    if (has(a1, "위로") && has(a4, "하드") && has(a5, "병원")) {
        setResult(resultTypes.SPARTAN_HEALER);
        return;
    }

    // G. 잘못된 만남 (Conflict): Sharing + School
    if (has(a3, "나눔") && has(a5, "학교")) {
        setResult(resultTypes.CONFLICTING);
        return;
    }

    // H. 미스터리 (Mystery): Knowledge + Sharing + Free + Cafe
    if (has(a1, "지적") && has(a3, "나눔") && has(a4, "프리") && has(a5, "카페")) {
        setResult(resultTypes.MYSTERY);
        return;
    }

    // 2. Check Logical Types

    // A. 학구파 (Scholar): Knowledge or Doctrine or Lecture
    if (has(a1, "지적") || has(a2, "강해") || has(a2, "교리")) {
        setResult(resultTypes.MODEL_SEMINARIAN);
        return;
    }

    // B. 실천파 (Practitioner): Application or Inductive or Gym
    if (has(a1, "적용") || has(a3, "귀납") || has(a5, "체육관")) {
        setResult(resultTypes.ACTION_LEADER);
        return;
    }

    // C. 관계파 (Socializer): Fellowship/Healing or Sharing or Cafe
    if (has(a1, "교제") || has(a1, "위로") || has(a5, "카페")) {
        setResult(resultTypes.SOCIALIZER);
        return;
    }

    // Fallback (Default)
    setResult(resultTypes.SOCIALIZER);
}

function setResult(type) {
    resultTitle.textContent = type.title;
    resultDesc.textContent = type.description;
    resultSolution.textContent = "💡 처방: " + type.solution;
}

function shareResult() {
    const title = resultTitle.textContent;
    const desc = resultDesc.textContent;
    const solution = resultSolution.textContent;
    const url = window.location.href;

    const shareText = `[나의 성경공부 스타일]\n\n👉 ${title}\n\n"${desc}"\n\n${solution}\n\n테스트 하러가기: ${url}`;

    navigator.clipboard.writeText(shareText).then(() => {
        const originalText = shareBtn.innerHTML;
        shareBtn.innerHTML = "✅ 복사완료!";
        setTimeout(() => {
            shareBtn.innerHTML = originalText;
        }, 2000);
    }).catch(err => {
        alert("복사에 실패했습니다.");
    });
}
