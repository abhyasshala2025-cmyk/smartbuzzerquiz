import React, { useState, useEffect } from 'react';

const RULES = {
  en: {
    title: 'How SMARTBUZZERQUIZ works',
    body: [
      'Open the app. Choose Host login or Join as Team / Participant.',
      'Host: sign in or sign up with school name, email, mobile, password, logo. Then School Detail to save name and logo.',
      'Make Quiz: add rounds. Each round has its own correct, wrong, timeout marks and answer time after buzz.',
      'Open a round → Edit Questions. Type question, four options, tick the correct one, optional media, Save Question.',
      'Team and Participants: set number of teams, colours, names. Add members with photo or intro video. Save.',
      'Tie-Break Questions: extra questions used only if two or more teams have the same top score.',
      'Play Quiz: host gets a room code. Choose how answers work: teams only buzz, teams buzz then pick option, or host does everything.',
      'Participants enter that room code, pick a team, Confirm. Reset if the wrong team was chosen. Welcome shows who already joined.',
      'When the quiz starts they follow the host screen. They see intros. On a question they only press Buzzer unless the host allowed option clicks.',
      'First team to buzz lights up on the host screen. Other teams lock until the next question. They can still mute mic or talk inside their team.',
      'Talk to Host is optional. On scorecard the host may start video with one or more teams.',
      'After each round except the last, scorecard is shown. If scores are tied, tie questions run until ranks are clear.',
      'Olympiad Studio is a written test, no buzzer. Host sets questions, marks, dates or duration, certificate style.',
      'Student joins with the olympiad room code, fills name, father name, school, class, city, reads rules, then answers. Grid shows attempted vs skipped.',
      'After submit they see score and rank. Certificate download uses host logo and student exam details automatically. Contact numbers are not printed.',
      'Sounds for intro, buzzer, timer, correct, wrong and result can be set in Host Settings.',
      'Created by Akshay Choudhary.',
    ],
  },
  hi: {
    title: 'SMARTBUZZERQUIZ कैसे काम करता है',
    body: [
      'ऐप खोलो। होस्ट लॉगिन या टीम / प्रतिभागी से जुड़ें।',
      'होस्ट: स्कूल नाम, ईमेल, मोबाइल, पासवर्ड, लोगो से साइन अप। स्कूल डिटेल में नाम और लोगो सेव।',
      'क्विज: पहले राउंड। हर राउंड के अपने सही, गलत, टाइमआउट अंक और बजर के बाद जवाब का समय।',
      'राउंड खोलो → सवाल लिखो, चार विकल्प, सही पर टिक, चाहो तो मीडिया, सेव।',
      'टीम संख्या, रंग, नाम, सदस्य फोटो या परिचय वीडियो। सेव टीम।',
      'टाई-ब्रेक सवाल तभी चलते हैं जब शीर्ष स्कोर बराबर हो।',
      'प्ले: होस्ट को रूम कोड मिलता है। मोड चुनो — सिर्फ बजर, बजर के बाद टीम विकल्प चुने, या सब होस्ट करे।',
      'प्रतिभागी वही कोड डाले, टीम चुने, कन्फर्म। गलत टीम हो तो रीसेट। स्वागत पेज पर जुड़ी सूची दिखे।',
      'क्विज शुरू होने पर होस्ट स्क्रीन फॉलो। परिचय दिखे। सवाल पर मुख्य काम बजर है, जब तक होस्ट विकल्प की अनुमति न दे।',
      'जो टीम पहले बजर दबाए होस्ट पर चमकती है। बाकी अगले सवाल तक लॉक। माइक म्यूट और टीम बात चल सकती है।',
      'होस्ट से बात अलग बटन से। स्कोरकार्ड पर होस्ट किसी टीम से वीडियो खोल सकता है।',
      'आखिरी राउंड छोड़कर हर राउंड बाद स्कोरकार्ड। टाई हो तो टाई सवाल जब तक रैंक साफ न हो।',
      'ओलंपियाड लिखित टेस्ट है, बजर नहीं। होस्ट सवाल, अंक, तारीख या अवधि, सर्टिफिकेट स्टाइल सेट करे।',
      'छात्र ओलंपियाड कोड डाले, नाम, पिता, स्कूल, कक्षा, शहर भरे, नियम पढ़े, फिर सवाल हल करे। ग्रिड में भरे और छोड़े सवाल दिखें।',
      'सबमिट पर अंक और रैंक। सर्टिफिकेट पर स्कूल लोगो और परीक्षा डिटेल अपने आप आते हैं। संपर्क नंबर नहीं छपता।',
      'Sounds for intro, buzzer, timer, correct, wrong and result can be set in Host Settings.',
      'To keep question images, voice or video, connect Google Drive in School Detail. Without Drive, media stays only on this device for the session.',
      'Created by Akshay Choudhary.',
    ],
  },
  hi: {
    title: 'SMARTBUZZERQUIZ कैसे काम करता है',
    body: [
      'ऐप खोलो। होस्ट लॉगिन या टीम / प्रतिभागी से जुड़ें।',
      'होस्ट: स्कूल नाम, ईमेल, मोबाइल, पासवर्ड, लोगो से साइन अप। स्कूल डिटेल में नाम और लोगो सेव।',
      'क्विज: पहले राउंड। हर राउंड के अपने सही, गलत, टाइमआउट अंक और बजर के बाद जवाब का समय।',
      'राउंड खोलो → सवाल लिखो, चार विकल्प, सही पर टिक, चाहो तो मीडिया, सेव।',
      'टीम संख्या, रंग, नाम, सदस्य फोटो या परिचय वीडियो। सेव टीम।',
      'टाई-ब्रेक सवाल तभी चलते हैं जब शीर्ष स्कोर बराबर हो।',
      'प्ले: होस्ट को रूम कोड मिलता है। मोड चुनो — सिर्फ बजर, बजर के बाद टीम विकल्प चुने, या सब होस्ट करे।',
      'प्रतिभागी वही कोड डाले, टीम चुने, कन्फर्म। गलत टीम हो तो रीसेट। स्वागत पेज पर जुड़ी सूची दिखे।',
      'क्विज शुरू होने पर होस्ट स्क्रीन फॉलो। परिचय दिखे। सवाल पर मुख्य काम बजर है, जब तक होस्ट विकल्प की अनुमति न दे।',
      'जो टीम पहले बजर दबाए होस्ट पर चमकती है। बाकी अगले सवाल तक लॉक। माइक म्यूट और टीम बात चल सकती है।',
      'होस्ट से बात अलग बटन से। स्कोरकार्ड पर होस्ट किसी टीम से वीडियो खोल सकता है।',
      'आखिरी राउंड छोड़कर हर राउंड बाद स्कोरकार्ड। टाई हो तो टाई सवाल जब तक रैंक साफ न हो।',
      'ओलंपियाड लिखित टेस्ट है, बजर नहीं। होस्ट सवाल, अंक, तारीख या अवधि, सर्टिफिकेट स्टाइल सेट करे।',
      'छात्र ओलंपियाड कोड डाले, नाम, पिता, स्कूल, कक्षा, शहर भरे, नियम पढ़े, फिर सवाल हल करे। ग्रिड में भरे और छोड़े सवाल दिखें।',
      'सबमिट पर अंक और रैंक। सर्टिफिकेट पर स्कूल लोगो और परीक्षा डिटेल अपने आप आते हैं। संपर्क नंबर नहीं छपता।',
      'आवाज़ होस्ट सेटिंग में बदली जा सकती है।',
      'निर्माण: Akshay Choudhary.',
    ],
  },
};
const LANGS = [
  { id: 'en', label: 'English (primary)' },
  { id: 'hi', label: 'Hindi' },
  { id: 'gu', label: 'Gujarati' },
  { id: 'mr', label: 'Marathi' },
  { id: 'pa', label: 'Punjabi' },
  { id: 'bn', label: 'Bengali' },
  { id: 'ta', label: 'Tamil' },
  { id: 'te', label: 'Telugu' },
  { id: 'kn', label: 'Kannada' },
  { id: 'ml', label: 'Malayalam' },
  { id: 'es', label: 'Spanish' },
  { id: 'fr', label: 'French' },
];
const playTone = (type, vol = 80) => {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const now = ctx.currentTime;
    const beep = (freq, start, dur, gain) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = 'sine';
      o.frequency.value = freq;
      g.gain.setValueAtTime(0.0001, now + start);
      g.gain.exponentialRampToValueAtTime(
        (vol / 100) * gain,
        now + start + 0.02
      );
      g.gain.exponentialRampToValueAtTime(0.0001, now + start + dur);
      o.connect(g);
      g.connect(ctx.destination);
      o.start(now + start);
      o.stop(now + start + dur + 0.02);
    };
    const map = {
      schoolIntro: [
        [392, 0, 0.25, 0.4],
        [523, 0.22, 0.35, 0.45],
      ],
      teamIntro: [[440, 0, 0.2, 0.35]],
      ruleIntro: [[349, 0, 0.3, 0.3]],
      roundIntro: [
        [523, 0, 0.15, 0.4],
        [659, 0.16, 0.2, 0.4],
      ],
      questionRead: [[587, 0, 0.18, 0.25]],
      buzzer: [
        [180, 0, 0.08, 0.7],
        [140, 0.07, 0.12, 0.7],
      ],
      timer: [[880, 0, 0.06, 0.25]],
      correct: [
        [523, 0, 0.12, 0.4],
        [659, 0.12, 0.12, 0.4],
        [784, 0.24, 0.22, 0.5],
      ],
      wrong: [
        [220, 0, 0.18, 0.45],
        [165, 0.16, 0.28, 0.45],
      ],
      timeout: [[196, 0, 0.4, 0.35]],
      scorecard: [[392, 0, 0.2, 0.3]],
      tie: [
        [440, 0, 0.1, 0.35],
        [440, 0.16, 0.1, 0.35],
      ],
      tieCorrect: [[659, 0, 0.12, 0.4]],
      tieWrong: [[247, 0, 0.25, 0.4]],
      resultCue: [[523, 0, 0.15, 0.3]],
      result: [
        [392, 0, 0.2, 0.35],
        [523, 0.2, 0.2, 0.4],
        [659, 0.4, 0.45, 0.5],
      ],
    };
    (map[type] || map.buzzer).forEach((a) => beep(a[0], a[1], a[2], a[3]));
  } catch (e) {}
};

export default function Home() {
  const [appScreen, setAppScreen] = useState('landing');
  const [authView, setAuthView] = useState('signin');
  const [lang, setLang] = useState('en');
  const rules = RULES[lang] || RULES.en;
  const [hostName, setHostName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const [isDriveConnected, setIsDriveConnected] = useState(false);
  const [quizList, setQuizList] = useState([
    {
      id: 1,
      name: 'BRAIN BATTLE: GK EDITION',
      subject: 'GK',
      totalQuestions: 2,
      teamsCount: 4,
    },
  ]);
  const [quizName, setQuizName] = useState('BRAIN BATTLE: GK EDITION');
  const [rounds, setRounds] = useState([
    {
      id: 1,
      name: 'ROUND 1',
      buzzerTime: 12,
      startDelay: 5,
      correctMark: 10,
      wrongMark: -1,
      timeoutMark: -1,
    },
  ]);
  const [currentRoundIdx, setCurrentRoundIdx] = useState(0);
  const [qText, setQText] = useState('');
  const [optA, setOptA] = useState('');
  const [optB, setOptB] = useState('');
  const [optC, setOptC] = useState('');
  const [optD, setOptD] = useState('');
  const [correctOptIndex, setCorrectOptIndex] = useState(0);
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      roundId: 1,
      question: 'National aquatic animal of India?',
      options: ['Ganges River Dolphin', 'Turtle', 'Crocodile', 'Blue Whale'],
      correct: 0,
    },
  ]);
  const [tieQuestions, setTieQuestions] = useState([
    {
      id: 101,
      question: 'How many states in India?',
      options: ['27', '28', '29', '30'],
      correct: 1,
    },
  ]);
  const [isTieMode, setIsTieMode] = useState(false);
  const [numTeams, setNumTeams] = useState(4);
  const [introTeamIndex, setIntroTeamIndex] = useState(0);
  const [introMemberIndex, setIntroMemberIndex] = useState(0);
  const [teams, setTeams] = useState([
    { id: 1, name: 'Team 1', color: '#4D96FF', score: 0, members: [] },
    { id: 2, name: 'Team 2', color: '#6BCB77', score: 0, members: [] },
    { id: 3, name: 'Team 3', color: '#FFD93D', score: 0, members: [] },
    { id: 4, name: 'Team 4', color: '#FF4D4D', score: 0, members: [] },
  ]);
  const [activeTeamIndex, setActiveTeamIndex] = useState(0);
  const [memberName, setMemberName] = useState('');
  const [memberPhoto, setMemberPhoto] = useState(null);
  const [memberVideo, setMemberVideo] = useState(null);
  const [roomCode] = useState('DEMO123');
  const [olympiadList, setOlympiadList] = useState([
    { id: 1, name: 'National Science Olympiad 2026', roomCode: 'DEMOOLY' },
  ]);
  const [olympiadTitle, setOlympiadTitle] = useState(
    'National Science Olympiad 2026'
  );
  const [olympiadQuestions, setOlympiadQuestions] = useState([
    {
      id: 1,
      question: 'Capital of India?',
      options: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
      correct: 0,
    },
  ]);
  const [editingOlyId, setEditingOlyId] = useState(null);
  const [olympiadStudents] = useState([
    {
      rank: 1,
      name: 'Aarav Sharma',
      class: '10th',
      score: 98,
      timeTaken: '12m',
    },
  ]);
  const brandName = 'SMARTBUZZERQUIZ';
  const [joinCodeInput, setJoinCodeInput] = useState('');
  const [joinName, setJoinName] = useState('');
  const [joinFather, setJoinFather] = useState('');
  const [joinSchool, setJoinSchool] = useState('');
  const [joinClass, setJoinClass] = useState('');
  const [joinCity, setJoinCity] = useState('');
  const [myTeamId, setMyTeamId] = useState(null);
  const [teamChoiceLocked, setTeamChoiceLocked] = useState(false);
  const [joinedMembers, setJoinedMembers] = useState([]);
  const [buzzedTeamId, setBuzzedTeamId] = useState(null);
  const [hostPlayMode, setHostPlayMode] = useState('buzzer_answer');
  const [micOn, setMicOn] = useState(false);
  const [hostMediaPlay, setHostMediaPlay] = useState(null);
  const [teamTalkOn, setTeamTalkOn] = useState(false);
  const [hostTalkOn, setHostTalkOn] = useState(false);
  const [hostMicMuted, setHostMicMuted] = useState(false);
  const [showAudience, setShowAudience] = useState(false);
  const [vcTeamId, setVcTeamId] = useState(null);
  const [hostAnswerTeam, setHostAnswerTeam] = useState(null);
  const [olympiadStarted, setOlympiadStarted] = useState(false);
  const [olympiadAnswers, setOlympiadAnswers] = useState({});
  const [olympiadCheat, setOlympiadCheat] = useState(false);
  const [olympiadResult, setOlympiadResult] = useState(null);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [lockBuzzerRound, setLockBuzzerRound] = useState(false);
  const [buzzerStartDelay, setBuzzerStartDelay] = useState(5);
  const [mediaKind, setMediaKind] = useState('none');
  const [olyCorrectMark, setOlyCorrectMark] = useState(10);
  const [olyWrongMark, setOlyWrongMark] = useState(0);
  const [certStyle, setCertStyle] = useState(1);
  const [soundVol, setSoundVol] = useState({
    schoolIntro: 80,
    teamIntro: 80,
    ruleIntro: 80,
    roundIntro: 80,
    questionRead: 80,
    buzzer: 100,
    timer: 70,
    correct: 90,
    wrong: 90,
    timeout: 80,
    scorecard: 80,
    tie: 80,
    tieCorrect: 90,
    tieWrong: 90,
    resultCue: 80,
    result: 90,
  });
  const [soundFile, setSoundFile] = useState({});
  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (authView === 'signin') setAppScreen('home');
    else if (authView === 'signup') setAuthView('otp');
    else setAppScreen('home');
  };
  const handleLogoUpload = (e) => {
    if (e.target.files[0]) setLogoUrl(URL.createObjectURL(e.target.files[0]));
  };
  const handleSaveQuestion = (e) => {
    e.preventDefault();
    if (!qText || !optA) {
      alert('Fill question');
      return;
    }
    const row = {
      id: Date.now(),
      roundId: rounds[currentRoundIdx]?.id || 1,
      question: qText,
      options: [optA, optB, optC, optD],
      correct: correctOptIndex,
      image: imageFile,
      video: videoFile,
      audio: audioFile,
    };
    if (isTieMode)
      setTieQuestions([
        ...tieQuestions,
        {
          id: Date.now(),
          question: qText,
          options: [optA, optB, optC, optD],
          correct: correctOptIndex,
        },
      ]);
    else setQuestions([...questions, row]);
    setQText('');
    setOptA('');
    setOptB('');
    setOptC('');
    setOptD('');
    setImageFile(null);
    setVideoFile(null);
    setAudioFile(null);
  };
  const handleJoinSubmit = (e) => {
    e.preventDefault();
    const code = joinCodeInput.trim().toUpperCase();
    if (
      code === 'DEMOOLY' ||
      olympiadList.some((o) => String(o.roomCode).toUpperCase() === code)
    ) {
      setAppScreen('joinOlympiadDetails');
      return;
    }
    if (code === roomCode || code === 'DEMO123') {
      setAppScreen('joinChooseTeam');
      return;
    }
    alert('Use DEMO123 or DEMOOLY');
  };
  const confirmJoinTeam = () => {
    if (!myTeamId) {
      alert('Select a team');
      return;
    }
    const t = teams.find((x) => x.id === myTeamId);
    setJoinedMembers((p) => [
      ...p,
      { name: joinName || 'Participant', teamName: t?.name },
    ]);
    setTeamChoiceLocked(true);
    setAppScreen('joinWelcome');
  };
  const pressBuzzer = () => {
    if (!buzzedTeamId) {
      setBuzzedTeamId(myTeamId);
      playTone('buzzer', soundVol.buzzer);
    }
  };
  const roundQs = questions.filter(
    (q) => !q.roundId || q.roundId === rounds[currentRoundIdx]?.id
  );
  const nextLiveQuestion = () => {
    setBuzzedTeamId(null);
    setHostAnswerTeam(null);
    if (currentQIndex + 1 < (roundQs.length || questions.length))
      setCurrentQIndex((i) => i + 1);
    else if (currentRoundIdx + 1 < rounds.length) {
      playTone('scorecard', soundVol.scorecard);
      setAppScreen('hostScorecard');
    } else {
      playTone('result', soundVol.result);
      setAppScreen('hostFinalResult');
    }
  };
  const goNextRound = () => {
    setCurrentRoundIdx((i) => i + 1);
    setCurrentQIndex(0);
    playTone('roundIntro', soundVol.roundIntro);
    setAppScreen('roundIntro');
  };
  const submitOlympiad = () => {
    let score = 0;
    olympiadQuestions.forEach((q) => {
      if (olympiadAnswers[q.id] === q.correct) score += olyCorrectMark;
      else if (olympiadAnswers[q.id] !== undefined) score += olyWrongMark;
    });
    setOlympiadResult({
      score,
      total: olympiadQuestions.length * olyCorrectMark,
      rank: 1,
    });
    setAppScreen('joinOlympiadResult');
  };
  useEffect(() => {
    const onVis = () => {
      if (
        document.hidden &&
        appScreen === 'joinOlympiadExam' &&
        olympiadStarted
      )
        setOlympiadCheat(true);
    };
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, [appScreen, olympiadStarted]);
  const myTeam = teams.find((t) => t.id === myTeamId);
  const othersLocked = !!buzzedTeamId && buzzedTeamId !== myTeamId;
  const iBuzzed = buzzedTeamId === myTeamId;
  const canClickOptions =
    hostPlayMode === 'buzzer_answer' && iBuzzed && !othersLocked;
  const liveQ = isTieMode
    ? tieQuestions[currentQIndex] || tieQuestions[0]
    : roundQs[currentQIndex] || questions[currentQIndex] || questions[0];
  const inputStyle = {
    padding: '10px 12px',
    borderRadius: 8,
    border: '1px solid #0f4847',
    backgroundColor: '#031419',
    color: '#fff',
    fontSize: 13,
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
  };
  const labelStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    fontSize: 12,
    color: '#8fa8a3',
  };
  const primaryBtnStyle = {
    padding: '11px 14px',
    borderRadius: 8,
    border: 'none',
    backgroundColor: '#00C9A7',
    color: '#031419',
    fontWeight: 800,
    fontSize: 13,
    cursor: 'pointer',
    width: '100%',
  };
  const backBtnStyle = {
    background: 'none',
    border: 'none',
    color: '#8fa8a3',
    cursor: 'pointer',
    fontSize: 12,
    marginBottom: 8,
  };
  const openMedia = (q) => {
    const src = q?.video || q?.audio || q?.image;
    if (!src) return;
    setHostMediaPlay({
      type: q.video ? 'video' : q.audio ? 'audio' : 'image',
      src,
    });
  };
  const liveLogo = (
    <div
      style={{
        position: 'absolute',
        top: 8,
        left: 8,
        width: 52,
        height: 52,
        borderRadius: '50%',
        overflow: 'hidden',
        boxShadow: '0 0 16px #00C9A7',
        animation: 'pulse 1.6s infinite',
      }}
    >
      {logoUrl ? (
        <img
          src={logoUrl}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <div style={{ width: '100%', height: '100%', background: '#00C9A7' }} />
      )}
    </div>
  );

  return (
    <div
      style={{
        height: '100dvh',
        width: '100vw',
        backgroundColor: '#031419',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 12,
        boxSizing: 'border-box',
        fontFamily: 'system-ui, sans-serif',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <style>{`@keyframes pulse{0%{box-shadow:0 0 8px #00C9A7}50%{box-shadow:0 0 22px #FFD93D}100%{box-shadow:0 0 8px #00C9A7}}@keyframes rise{from{opacity:0;transform:scale(.86) translateY(18px)}to{opacity:1;transform:none}}`}</style>
      <header
        style={{
          width: '100%',
          maxWidth: 720,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px 14px',
          backgroundColor: '#071f26',
          border: '1.5px solid #0f4847',
          borderRadius: 12,
        }}
      >
        {appScreen !== 'landing' && (
          <span style={{ fontSize: 11, color: '#00C9A7', fontWeight: 800 }}>
            {hostName}
          </span>
        )}
        <span
          style={{
            fontSize: 11,
            color: '#FFD93D',
            fontWeight: 700,
            letterSpacing: 0.3,
          }}
        ></span>
        <span
          style={{
            padding: '4px 8px',
            borderRadius: 6,
            backgroundColor: '#00C9A7',
            color: '#031419',
            fontWeight: 900,
            fontSize: 10,
          }}
        >
          {brandName}
        </span>
      </header>
      <main
        style={{
          width: '100%',
          maxWidth: 720,
          margin: '12px 0',
          padding: 18,
          backgroundColor: '#071f26',
          border: '1.5px solid #0f4847',
          borderRadius: 16,
          maxHeight: '82vh',
          overflowY: 'auto',
          position: 'relative',
        }}
      >
        {hostMediaPlay ? (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              background: '#000',
              zIndex: 50,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {hostMediaPlay.type === 'image' && (
              <img
                src={hostMediaPlay.src}
                alt=""
                style={{ flex: 1, width: '100%', objectFit: 'contain' }}
              />
            )}
            {hostMediaPlay.type === 'audio' && (
              <audio
                src={hostMediaPlay.src}
                controls
                autoPlay
                style={{ margin: 'auto', width: '90%' }}
              />
            )}
            {hostMediaPlay.type === 'video' && (
              <video
                src={hostMediaPlay.src}
                controls
                autoPlay
                style={{ flex: 1, width: '100%' }}
              />
            )}
            <button
              type="button"
              onClick={() => setHostMediaPlay(null)}
              style={{
                ...primaryBtnStyle,
                backgroundColor: '#FFD93D',
                color: '#031419',
              }}
            >
              Back to Quiz
            </button>
          </div>
        ) : null}
        {appScreen === 'landing' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              textAlign: 'center',
            }}
          >
            <h2 style={{ margin: 0 }}>Select Gateway Role</h2>
            <div style={{ color: '#8fa8a3' }}>
              Created by <b style={{ color: '#FFD93D' }}>Akshay Choudhary</b>
            </div>
            <button
              type="button"
              onClick={() => setAppScreen('rulesPage')}
              style={{
                ...primaryBtnStyle,
                backgroundColor: '#0f4847',
                color: '#fff',
              }}
            >
              Rules
            </button>
            <button
              type="button"
              onClick={() => {
                setAppScreen('auth');
                setAuthView('signin');
              }}
              style={primaryBtnStyle}
            >
              HOST ARENA LOGIN
            </button>
            <button
              type="button"
              onClick={() => setAppScreen('joinAsTeam')}
              style={{
                ...primaryBtnStyle,
                backgroundColor: '#0f4847',
                color: '#00C9A7',
                border: '1px solid #00C9A7',
              }}
            >
              JOIN AS TEAM / PARTICIPANT
            </button>
          </div>
        )}
        {appScreen === 'rulesPage' && (
          <div>
            <button
              type="button"
              onClick={() => setAppScreen('landing')}
              style={backBtnStyle}
            >
              ← Back
            </button>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              style={inputStyle}
            >
              {LANGS.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.label}
                </option>
              ))}
            </select>
            <h3 style={{ color: '#00C9A7' }}>{rules.title}</h3>
            {rules.body.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        )}
        {appScreen === 'auth' && (
          <form
            onSubmit={handleAuthSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
          >
            <button
              type="button"
              onClick={() => setAppScreen('landing')}
              style={backBtnStyle}
            >
              ← Back
            </button>
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                type="button"
                onClick={() => setAuthView('signin')}
                style={{
                  ...primaryBtnStyle,
                  backgroundColor:
                    authView === 'signin' ? '#00C9A7' : '#031419',
                  color: authView === 'signin' ? '#031419' : '#8fa8a3',
                }}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setAuthView('signup')}
                style={{
                  ...primaryBtnStyle,
                  backgroundColor:
                    authView !== 'signin' ? '#00C9A7' : '#031419',
                  color: authView !== 'signin' ? '#031419' : '#8fa8a3',
                }}
              >
                Sign Up
              </button>
            </div>
            {authView === 'signin' && (
              <>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={inputStyle}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={inputStyle}
                />
                <button type="submit" style={primaryBtnStyle}>
                  Access Main Page
                </button>
              </>
            )}
            {authView === 'signup' && (
              <>
                <input
                  placeholder="School name"
                  value={hostName}
                  onChange={(e) => setHostName(e.target.value)}
                  style={inputStyle}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={inputStyle}
                />
                <input
                  placeholder="Mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  style={inputStyle}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={inputStyle}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                />
                <button type="submit" style={primaryBtnStyle}>
                  Send OTP
                </button>
              </>
            )}
            {authView === 'otp' && (
              <>
                <input
                  placeholder="OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  style={inputStyle}
                />
                <button type="submit" style={primaryBtnStyle}>
                  Verify
                </button>
              </>
            )}
          </form>
        )}
        {appScreen === 'joinAsTeam' && (
          <form
            onSubmit={handleJoinSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
          >
            <button
              type="button"
              onClick={() => setAppScreen('landing')}
              style={backBtnStyle}
            >
              ← Back
            </button>
            <h3 style={{ margin: 0, color: '#00C9A7', textAlign: 'center' }}>
              Join as Team / Participant
            </h3>
            <input
              placeholder="Your Name"
              value={joinName}
              onChange={(e) => setJoinName(e.target.value)}
              style={inputStyle}
            />
            <input
              placeholder="Room Code"
              value={joinCodeInput}
              onChange={(e) => setJoinCodeInput(e.target.value)}
              style={{ ...inputStyle, textAlign: 'center', fontWeight: 800 }}
            />
            <button type="submit" style={primaryBtnStyle}>
              JOIN
            </button>
          </form>
        )}
        {appScreen === 'joinChooseTeam' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <button
              type="button"
              onClick={() => setAppScreen('joinAsTeam')}
              style={backBtnStyle}
            >
              ← Back
            </button>
            {teams.slice(0, numTeams).map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => {
                  if (!teamChoiceLocked) setMyTeamId(t.id);
                }}
                style={{
                  ...primaryBtnStyle,
                  background:
                    myTeamId === t.id
                      ? 'linear-gradient(180deg,#fff8,' + t.color + ')'
                      : '#031419',
                  color: myTeamId === t.id ? '#031419' : '#fff',
                  border: '2px solid ' + t.color,
                }}
              >
                {t.name}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                setMyTeamId(null);
                setTeamChoiceLocked(false);
              }}
              style={{
                ...primaryBtnStyle,
                backgroundColor: '#0f4847',
                color: '#fff',
              }}
            >
              RESET TEAM
            </button>
            <button
              type="button"
              onClick={confirmJoinTeam}
              style={primaryBtnStyle}
            >
              Confirm Join
            </button>
          </div>
        )}
        {appScreen === 'joinWelcome' && (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#00C9A7' }}>WELCOME</h2>
            <p>
              {joinName || 'Participant'} — {myTeam?.name}
            </p>
            {joinedMembers.map((p, i) => (
              <div key={i}>
                {p.name} · {p.teamName}
              </div>
            ))}
            <button
              type="button"
              onClick={() => setAppScreen('joinFollowHost')}
              style={primaryBtnStyle}
            >
              Follow Host Screen
            </button>
          </div>
        )}
        {appScreen === 'joinFollowHost' && (
          <div style={{ textAlign: 'center' }}>
            <p>Following host screen</p>
            <button
              type="button"
              onClick={() => setAppScreen('joinBuzzer')}
              style={primaryBtnStyle}
            >
              Quiz Started — Open Buzzer
            </button>
          </div>
        )}
        {appScreen === 'joinBuzzer' && (
          <div>
            {liveLogo}
            <h3 style={{ fontSize: 22, marginTop: 48 }}>{liveQ?.question}</h3>
            {(liveQ?.image || liveQ?.audio || liveQ?.video) && (
              <button
                type="button"
                onClick={() => openMedia(liveQ)}
                style={{
                  ...primaryBtnStyle,
                  backgroundColor: '#FFD93D',
                  color: '#031419',
                }}
              >
                Play Media Full Screen
              </button>
            )}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 8,
              }}
            >
              {(liveQ?.options || []).map((opt, idx) => (
                <button
                  key={idx}
                  type="button"
                  disabled={!canClickOptions}
                  style={{
                    ...primaryBtnStyle,
                    opacity: canClickOptions ? 1 : 0.4,
                    backgroundColor: '#031419',
                    color: '#fff',
                  }}
                >
                  {String.fromCharCode(65 + idx)}. {opt}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={pressBuzzer}
              style={{
                ...primaryBtnStyle,
                height: 72,
                marginTop: 8,
                fontSize: 22,
                background: iBuzzed
                  ? '#FFD93D'
                  : othersLocked
                  ? '#222'
                  : myTeam?.color || '#ff4d4d',
                color: '#031419',
              }}
            >
              {othersLocked ? 'LOCKED' : iBuzzed ? 'YOU BUZZED' : 'BUZZER'}
            </button>
            <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
              <button
                type="button"
                onClick={() => setMicOn(!micOn)}
                style={{
                  ...primaryBtnStyle,
                  backgroundColor: micOn ? '#00C9A7' : '#0f4847',
                  color: micOn ? '#031419' : '#fff',
                }}
              >
                {micOn ? 'Mic ON' : 'Mic MUTE'}
              </button>
              <button
                type="button"
                onClick={() => setTeamTalkOn(!teamTalkOn)}
                style={{
                  ...primaryBtnStyle,
                  backgroundColor: teamTalkOn ? '#00C9A7' : '#0f4847',
                  color: teamTalkOn ? '#031419' : '#fff',
                }}
              >
                {teamTalkOn ? 'Team Talk ON' : 'Talk Team'}
              </button>
              <button
                type="button"
                onClick={() => setHostTalkOn(!hostTalkOn)}
                style={{
                  ...primaryBtnStyle,
                  backgroundColor: hostTalkOn ? '#FFD93D' : '#0f4847',
                  color: hostTalkOn ? '#031419' : '#fff',
                }}
              >
                {hostTalkOn ? 'Host Talk ON' : 'Talk to Host'}
              </button>
            </div>
          </div>
        )}
        {appScreen === 'home' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <h3 style={{ color: '#00C9A7', textAlign: 'center' }}>
              Host Arena Dashboard
            </h3>
            <img
              src={logoUrl || ''}
              alt="logo"
              style={{
                width: 72,
                height: 72,
                borderRadius: '50%',
                display: 'block',
                margin: '0 auto 10px',
                background: '#00C9A7',
              }}
            />
            <p
              style={{
                textAlign: 'center',
                color: '#FFD93D',
                fontWeight: 800,
                fontSize: 16,
              }}
            >
              {hostName}
            </p>
            <button
              type="button"
              onClick={() => setAppScreen('quizListSelect')}
              style={primaryBtnStyle}
            >
              Play Quiz
            </button>
            <button
              type="button"
              onClick={() => setAppScreen('schoolDetail')}
              style={primaryBtnStyle}
            >
              School Detail
            </button>
            <button
              type="button"
              onClick={() => setAppScreen('makeQuiz')}
              style={primaryBtnStyle}
            >
              Make Quiz Studio
            </button>
            <button
              type="button"
              onClick={() => setAppScreen('olympiadStudio')}
              style={{
                ...primaryBtnStyle,
                backgroundColor: '#FFD93D',
                color: '#031419',
              }}
            >
              Olympiad Exam Studio
            </button>
            <button
              type="button"
              onClick={() => setAppScreen('hostSoundSettings')}
              style={{
                ...primaryBtnStyle,
                backgroundColor: '#0f4847',
                color: '#fff',
              }}
            >
              Settings
            </button>
            <button
              type="button"
              onClick={() => setAppScreen('landing')}
              style={{
                ...primaryBtnStyle,
                backgroundColor: '#f43f5e',
                color: '#fff',
              }}
            >
              Log Out
            </button>
          </div>
        )}
        {appScreen === 'hostSoundSettings' && (
          <div>
            <button
              type="button"
              onClick={() => setAppScreen('home')}
              style={backBtnStyle}
            >
              ← Back
            </button>
            <h2 style={{ textAlign: 'center', color: '#00C9A7' }}>
              Sound Settings
            </h2>
            {Object.keys(soundVol).map((key) => (
              <div
                key={key}
                style={{
                  backgroundColor: '#031419',
                  padding: 10,
                  borderRadius: 8,
                  marginTop: 8,
                }}
              >
                <div style={{ fontWeight: 800 }}>
                  {key.replace(/([A-Z])/g, ' $1')}
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={soundVol[key]}
                  onChange={(e) =>
                    setSoundVol({ ...soundVol, [key]: Number(e.target.value) })
                  }
                />
                <input
                  type="file"
                  accept="audio/*"
                  onChange={(e) =>
                    setSoundFile({ ...soundFile, [key]: e.target.files[0] })
                  }
                />
                <button
                  type="button"
                  onClick={() => playTone(key, soundVol[key])}
                  style={{
                    ...primaryBtnStyle,
                    marginTop: 6,
                    backgroundColor: '#0f4847',
                    color: '#fff',
                  }}
                >
                  Play inbuilt
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => setAppScreen('home')}
              style={{
                ...primaryBtnStyle,
                backgroundColor: '#FFD93D',
                color: '#031419',
                marginTop: 10,
              }}
            >
              Save
            </button>
          </div>
        )}
        {appScreen === 'schoolDetail' && (
          <div>
            <button
              type="button"
              onClick={() => setAppScreen('home')}
              style={backBtnStyle}
            >
              ← Back
            </button>
            <input
              value={hostName}
              onChange={(e) => setHostName(e.target.value)}
              style={inputStyle}
            />
            <label style={labelStyle}>
              Upload Logo
              <input type="file" accept="image/*" onChange={handleLogoUpload} />
            </label>
            <p style={{ color: '#8fa8a3', fontSize: 12 }}>
              Drive demo only. Real Google Drive needs API keys in StackBlitz.
            </p>
            <button
              type="button"
              onClick={() => setIsDriveConnected(!isDriveConnected)}
              style={primaryBtnStyle}
            >
              {isDriveConnected ? 'Remove Drive' : 'Connect Google Drive'}
            </button>
            <button
              type="button"
              onClick={() => setLogoUrl('')}
              style={{
                ...primaryBtnStyle,
                backgroundColor: '#0f4847',
                color: '#fff',
                marginTop: 8,
              }}
            >
              Remove Logo
            </button>
            <button
              type="button"
              onClick={() => setAppScreen('home')}
              style={{
                ...primaryBtnStyle,
                backgroundColor: '#FFD93D',
                color: '#031419',
                marginTop: 8,
              }}
            >
              Save School Detail
            </button>
          </div>
        )}
        {appScreen === 'olympiadStudio' && (
          <div>
            <button
              type="button"
              onClick={() => setAppScreen('home')}
              style={backBtnStyle}
            >
              ← Back
            </button>
            <h2 style={{ textAlign: 'center', color: '#00C9A7' }}>
              Olympiad Exam Studio
            </h2>
            <button
              type="button"
              onClick={() => {
                setOlympiadList([
                  ...olympiadList,
                  {
                    id: Date.now(),
                    name: 'Untitled Olympiad',
                    roomCode: 'OLY' + String(Date.now()).slice(-4),
                  },
                ]);
                setOlympiadTitle('');
                setAppScreen('editOlympiad');
              }}
              style={{
                ...primaryBtnStyle,
                backgroundColor: '#FFD93D',
                color: '#031419',
              }}
            >
              + New Olympiad
            </button>
            {olympiadList.map((o) => (
              <div
                key={o.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  backgroundColor: '#031419',
                  padding: 10,
                  borderRadius: 8,
                  marginTop: 8,
                }}
              >
                <span>
                  {o.name} · {o.roomCode}
                </span>
                <span>
                  <button
                    type="button"
                    onClick={() => {
                      setOlympiadTitle(o.name);
                      setAppScreen('editOlympiad');
                    }}
                    style={{
                      ...primaryBtnStyle,
                      width: 'auto',
                      backgroundColor: '#FFD93D',
                      color: '#031419',
                    }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setOlympiadList(olympiadList.filter((x) => x.id !== o.id))
                    }
                    style={{
                      ...primaryBtnStyle,
                      width: 'auto',
                      backgroundColor: '#7a1f1f',
                      color: '#fff',
                      marginLeft: 6,
                    }}
                  >
                    Delete
                  </button>
                </span>
              </div>
            ))}
          </div>
        )}
        {appScreen === 'editOlympiad' && (
          <div>
            <button
              type="button"
              onClick={() => setAppScreen('olympiadStudio')}
              style={backBtnStyle}
            >
              ← Back
            </button>
            <input
              value={olympiadTitle}
              onChange={(e) => setOlympiadTitle(e.target.value)}
              style={inputStyle}
            />
            <button
              type="button"
              onClick={() => setAppScreen('olympiadQuestionBuilder')}
              style={{ ...primaryBtnStyle, marginTop: 10 }}
            >
              1. Make Questions
            </button>
            <button
              type="button"
              onClick={() => setAppScreen('olympiadCertificate')}
              style={{
                ...primaryBtnStyle,
                backgroundColor: '#FFD93D',
                color: '#031419',
                marginTop: 8,
              }}
            >
              2. Make Certificate
            </button>
            <button
              type="button"
              onClick={() => setAppScreen('olympiadPerformance')}
              style={{
                ...primaryBtnStyle,
                backgroundColor: '#0f4847',
                color: '#fff',
                marginTop: 8,
              }}
            >
              3. Performance
            </button>
          </div>
        )}
        {appScreen === 'olympiadQuestionBuilder' && (
          <div>
            <button
              type="button"
              onClick={() => setAppScreen('editOlympiad')}
              style={backBtnStyle}
            >
              ← Back
            </button>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 8,
              }}
            >
              <label style={labelStyle}>
                Correct mark
                <input
                  type="number"
                  value={olyCorrectMark}
                  onChange={(e) => setOlyCorrectMark(Number(e.target.value))}
                  style={inputStyle}
                />
              </label>
              <label style={labelStyle}>
                Wrong mark
                <input
                  type="number"
                  value={olyWrongMark}
                  onChange={(e) => setOlyWrongMark(Number(e.target.value))}
                  style={inputStyle}
                />
              </label>
            </div>
            <textarea
              value={qText}
              onChange={(e) => setQText(e.target.value)}
              style={{ ...inputStyle, height: 50, marginTop: 8 }}
              placeholder="Question"
            />
            {[0, 1, 2, 3].map((idx) => (
              <div key={idx} style={{ display: 'flex', gap: 8, marginTop: 6 }}>
                <input
                  type="radio"
                  name="olyTick"
                  checked={correctOptIndex === idx}
                  onChange={() => setCorrectOptIndex(idx)}
                />
                <input
                  value={
                    idx === 0
                      ? optA
                      : idx === 1
                      ? optB
                      : idx === 2
                      ? optC
                      : optD
                  }
                  onChange={(e) => {
                    if (idx === 0) setOptA(e.target.value);
                    if (idx === 1) setOptB(e.target.value);
                    if (idx === 2) setOptC(e.target.value);
                    if (idx === 3) setOptD(e.target.value);
                  }}
                  style={inputStyle}
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                if (!qText || !optA) return;
                const row = {
                  id: editingOlyId || Date.now(),
                  question: qText,
                  options: [optA, optB, optC, optD],
                  correct: correctOptIndex,
                };
                setOlympiadQuestions(
                  editingOlyId
                    ? olympiadQuestions.map((q) =>
                        q.id === editingOlyId ? row : q
                      )
                    : [...olympiadQuestions, row]
                );
                setEditingOlyId(null);
                setQText('');
                setOptA('');
                setOptB('');
                setOptC('');
                setOptD('');
              }}
              style={{ ...primaryBtnStyle, marginTop: 8 }}
            >
              {editingOlyId ? 'Update Question' : 'Save Question'}
            </button>
            {olympiadQuestions.map((q, i) => (
              <div
                key={q.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: 6,
                }}
              >
                <span>
                  Q{i + 1}: {q.question}
                </span>
                <span>
                  <button
                    type="button"
                    onClick={() => {
                      setEditingOlyId(q.id);
                      setQText(q.question);
                      setOptA(q.options[0] || '');
                      setOptB(q.options[1] || '');
                      setOptC(q.options[2] || '');
                      setOptD(q.options[3] || '');
                      setCorrectOptIndex(q.correct || 0);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#FFD93D',
                    }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setOlympiadQuestions(
                        olympiadQuestions.filter((x) => x.id !== q.id)
                      )
                    }
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#ff4d4d',
                    }}
                  >
                    Delete
                  </button>
                </span>
              </div>
            ))}
          </div>
        )}
        {appScreen === 'olympiadCertificate' && (
          <div>
            <button
              type="button"
              onClick={() => setAppScreen('editOlympiad')}
              style={backBtnStyle}
            >
              ← Back
            </button>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 8,
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setCertStyle(n)}
                  style={{
                    ...primaryBtnStyle,
                    backgroundColor: certStyle === n ? '#FFD93D' : '#031419',
                    color: certStyle === n ? '#031419' : '#fff',
                  }}
                >
                  Style {n}
                </button>
              ))}
            </div>
            <CertCard
              styleId={certStyle}
              hostName={hostName}
              logoUrl={logoUrl}
              title={olympiadTitle}
              student={joinName || olympiadStudents[0]?.name}
              extra={
                (joinClass || olympiadStudents[0]?.class || '') +
                ' · ' +
                (joinSchool || '')
              }
              score={String(
                olympiadResult?.score ?? olympiadStudents[0]?.score
              )}
              rank={olympiadResult?.rank || 1}
            />
          </div>
        )}
        {appScreen === 'olympiadPerformance' && (
          <div>
            <button
              type="button"
              onClick={() => setAppScreen('editOlympiad')}
              style={backBtnStyle}
            >
              ← Back
            </button>
            {olympiadStudents.map((s, i) => (
              <div
                key={s.name}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  backgroundColor: '#031419',
                  padding: 10,
                  borderRadius: 8,
                  marginTop: 8,
                }}
              >
                <span>
                  #{i + 1} {s.name}
                </span>
                <span style={{ color: '#FFD93D' }}>{s.score}</span>
              </div>
            ))}
          </div>
        )}
        {appScreen === 'joinOlympiadDetails' && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setAppScreen('joinOlympiadRules');
            }}
          >
            <button
              type="button"
              onClick={() => setAppScreen('joinAsTeam')}
              style={backBtnStyle}
            >
              ← Back
            </button>
            <input
              placeholder="Name"
              value={joinName}
              onChange={(e) => setJoinName(e.target.value)}
              style={inputStyle}
            />
            <input
              placeholder="Father name"
              value={joinFather}
              onChange={(e) => setJoinFather(e.target.value)}
              style={inputStyle}
            />
            <input
              placeholder="School"
              value={joinSchool}
              onChange={(e) => setJoinSchool(e.target.value)}
              style={inputStyle}
            />
            <input
              placeholder="Class"
              value={joinClass}
              onChange={(e) => setJoinClass(e.target.value)}
              style={inputStyle}
            />
            <input
              placeholder="City"
              value={joinCity}
              onChange={(e) => setJoinCity(e.target.value)}
              style={inputStyle}
            />
            <button type="submit" style={primaryBtnStyle}>
              Next
            </button>
          </form>
        )}
        {appScreen === 'joinOlympiadRules' && (
          <div>
            <button
              type="button"
              onClick={() => {
                setOlympiadStarted(true);
                setAppScreen('joinOlympiadExam');
              }}
              style={primaryBtnStyle}
            >
              Start
            </button>
          </div>
        )}
        {appScreen === 'joinOlympiadExam' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>
                Q {currentQIndex + 1} / {olympiadQuestions.length}
              </span>
              <button
                type="button"
                onClick={() => setAppScreen('joinOlympiadGrid')}
                style={{
                  ...primaryBtnStyle,
                  width: 'auto',
                  backgroundColor: '#0f4847',
                  color: '#fff',
                }}
              >
                All questions
              </button>
            </div>
            {olympiadCheat && <div style={{ color: '#ff4d4d' }}>Locked</div>}
            <h3>{olympiadQuestions[currentQIndex]?.question}</h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 8,
              }}
            >
              {(olympiadQuestions[currentQIndex]?.options || []).map(
                (op, oi) => (
                  <button
                    key={oi}
                    type="button"
                    disabled={olympiadCheat}
                    onClick={() =>
                      setOlympiadAnswers({
                        ...olympiadAnswers,
                        [olympiadQuestions[currentQIndex].id]: oi,
                      })
                    }
                    style={{
                      ...primaryBtnStyle,
                      backgroundColor:
                        olympiadAnswers[
                          olympiadQuestions[currentQIndex]?.id
                        ] === oi
                          ? '#00C9A7'
                          : '#031419',
                      color:
                        olympiadAnswers[
                          olympiadQuestions[currentQIndex]?.id
                        ] === oi
                          ? '#031419'
                          : '#fff',
                    }}
                  >
                    {String.fromCharCode(65 + oi)}. {op}
                  </button>
                )
              )}
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
              <button
                type="button"
                onClick={() => setCurrentQIndex(Math.max(0, currentQIndex - 1))}
                style={{
                  ...primaryBtnStyle,
                  backgroundColor: '#0f4847',
                  color: '#fff',
                }}
              >
                Back
              </button>
              {currentQIndex < olympiadQuestions.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentQIndex(currentQIndex + 1)}
                  style={primaryBtnStyle}
                >
                  Save and Next
                </button>
              ) : (
                <button
                  type="button"
                  onClick={submitOlympiad}
                  style={{
                    ...primaryBtnStyle,
                    backgroundColor: '#FFD93D',
                    color: '#031419',
                  }}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        )}
        {appScreen === 'joinOlympiadGrid' && (
          <div>
            <button
              type="button"
              onClick={() => setAppScreen('joinOlympiadExam')}
              style={backBtnStyle}
            >
              ← Back
            </button>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: 8,
              }}
            >
              {olympiadQuestions.map((q, i) => (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => {
                    setCurrentQIndex(i);
                    setAppScreen('joinOlympiadExam');
                  }}
                  style={{
                    height: 44,
                    border: 'none',
                    borderRadius: 8,
                    fontWeight: 800,
                    backgroundColor:
                      olympiadAnswers[q.id] !== undefined
                        ? '#00C9A7'
                        : '#031419',
                    color:
                      olympiadAnswers[q.id] !== undefined ? '#031419' : '#fff',
                  }}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        )}
        {appScreen === 'joinOlympiadResult' && (
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ color: '#FFD93D' }}>
              {olympiadResult?.score} / {olympiadResult?.total}
            </h1>
            <button
              type="button"
              onClick={() => window.print()}
              style={{
                ...primaryBtnStyle,
                backgroundColor: '#FFD93D',
                color: '#031419',
              }}
            >
              Download Certificate
            </button>
            <CertCard
              styleId={certStyle}
              hostName={hostName}
              logoUrl={logoUrl}
              title={olympiadTitle}
              student={joinName || 'Student'}
              extra={joinClass + ' · ' + joinSchool}
              score={String(olympiadResult?.score || 0)}
              rank={olympiadResult?.rank || 1}
            />
            <button
              type="button"
              onClick={() => setAppScreen('landing')}
              style={primaryBtnStyle}
            >
              Home
            </button>
          </div>
        )}
        {appScreen === 'makeQuiz' && (
          <div>
            <button
              type="button"
              onClick={() => setAppScreen('home')}
              style={backBtnStyle}
            >
              ← Back
            </button>
            <button
              type="button"
              onClick={() => {
                setQuizList([
                  ...quizList,
                  {
                    id: Date.now(),
                    name: 'Untitled Quiz',
                    teamsCount: numTeams,
                  },
                ]);
                setQuizName('Untitled Quiz');
                setAppScreen('editQuiz');
              }}
              style={{
                ...primaryBtnStyle,
                backgroundColor: '#FFD93D',
                color: '#031419',
              }}
            >
              + New Quiz
            </button>
            {quizList.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  backgroundColor: '#031419',
                  padding: 10,
                  borderRadius: 8,
                  marginTop: 8,
                }}
              >
                <span>{item.name}</span>
                <span>
                  <button
                    type="button"
                    onClick={() => {
                      setQuizName(item.name);
                      setAppScreen('editQuiz');
                    }}
                    style={{
                      ...primaryBtnStyle,
                      width: 'auto',
                      backgroundColor: '#FFD93D',
                      color: '#031419',
                    }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setQuizList(quizList.filter((x) => x.id !== item.id))
                    }
                    style={{
                      ...primaryBtnStyle,
                      width: 'auto',
                      backgroundColor: '#7a1f1f',
                      color: '#fff',
                      marginLeft: 6,
                    }}
                  >
                    Delete
                  </button>
                </span>
              </div>
            ))}
          </div>
        )}
        {appScreen === 'editQuiz' && (
          <div>
            <button
              type="button"
              onClick={() => setAppScreen('makeQuiz')}
              style={backBtnStyle}
            >
              ← Back
            </button>
            <input
              value={quizName}
              onChange={(e) => setQuizName(e.target.value)}
              style={inputStyle}
            />
            <button
              type="button"
              onClick={() => setAppScreen('roundManager')}
              style={{ ...primaryBtnStyle, marginTop: 10 }}
            >
              Rounds
            </button>
            <button
              type="button"
              onClick={() => setAppScreen('teamSetup')}
              style={{ ...primaryBtnStyle, marginTop: 8 }}
            >
              Team and Participants
            </button>
            <button
              type="button"
              onClick={() => {
                setIsTieMode(true);
                setAppScreen('tieBuilder');
              }}
              style={{ ...primaryBtnStyle, marginTop: 8 }}
            >
              Tie-Break Questions
            </button>
          </div>
        )}
        {appScreen === 'roundManager' && (
          <div>
            <button
              type="button"
              onClick={() => setAppScreen('editQuiz')}
              style={backBtnStyle}
            >
              ← Back
            </button>
            <h2 style={{ textAlign: 'center', color: '#00C9A7' }}>Rounds</h2>
            <label style={labelStyle}>
              Number of rounds
              <input
                type="number"
                min={1}
                max={12}
                value={rounds.length}
                onChange={(e) => {
                  const n = Math.max(1, Number(e.target.value) || 1);
                  const next = [...rounds];
                  while (next.length < n)
                    next.push({
                      id: Date.now() + next.length,
                      name: 'ROUND ' + (next.length + 1),
                      buzzerTime: 12,
                      startDelay: 5,
                      correctMark: 10,
                      wrongMark: -5,
                      timeoutMark: 0,
                    });
                  setRounds(next.slice(0, n));
                }}
                style={inputStyle}
              />
            </label>
            {rounds.map((r, i) => (
              <div
                key={r.id}
                style={{
                  backgroundColor: '#031419',
                  padding: 10,
                  borderRadius: 8,
                  marginTop: 8,
                }}
              >
                <input
                  value={r.name}
                  onChange={(e) =>
                    setRounds(
                      rounds.map((x) =>
                        x.id === r.id ? { ...x, name: e.target.value } : x
                      )
                    )
                  }
                  style={inputStyle}
                />
                <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentRoundIdx(i);
                      setIsTieMode(false);
                      setAppScreen('questionBuilder');
                    }}
                    style={{
                      ...primaryBtnStyle,
                      backgroundColor: '#FFD93D',
                      color: '#031419',
                    }}
                  >
                    Edit Questions
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setRounds(rounds.filter((x) => x.id !== r.id));
                      if (currentRoundIdx >= i)
                        setCurrentRoundIdx(Math.max(0, currentRoundIdx - 1));
                    }}
                    style={{
                      ...primaryBtnStyle,
                      backgroundColor: '#7a1f1f',
                      color: '#fff',
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
              <button
                type="button"
                onClick={() => setAppScreen('editQuiz')}
                style={{
                  ...primaryBtnStyle,
                  backgroundColor: '#0f4847',
                  color: '#fff',
                }}
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setAppScreen('editQuiz')}
                style={{
                  ...primaryBtnStyle,
                  backgroundColor: '#FFD93D',
                  color: '#031419',
                }}
              >
                Save Rounds
              </button>
            </div>
          </div>
        )}
        {appScreen === 'questionBuilder' && (
          <div>
            <button
              type="button"
              onClick={() => setAppScreen('roundManager')}
              style={backBtnStyle}
            >
              ← Back
            </button>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {rounds.map((rr, ii) => (
                <button
                  key={rr.id}
                  type="button"
                  onClick={() => setCurrentRoundIdx(ii)}
                  style={{
                    ...primaryBtnStyle,
                    width: 'auto',
                    backgroundColor:
                      currentRoundIdx === ii ? '#FFD93D' : '#0f4847',
                    color: currentRoundIdx === ii ? '#031419' : '#fff',
                  }}
                >
                  {rr.name}
                </button>
              ))}
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 10,
                marginTop: 10,
              }}
            >
              <div
                style={{
                  backgroundColor: '#031419',
                  padding: 12,
                  borderRadius: 12,
                }}
              >
                <h4 style={{ color: '#FFD93D' }}>Round Settings</h4>
                <label
                  style={{
                    fontSize: 11,
                    color: '#8fa8a3',
                    display: 'flex',
                    gap: 6,
                  }}
                >
                  <input
                    type="checkbox"
                    checked={lockBuzzerRound}
                    onChange={(e) => setLockBuzzerRound(e.target.checked)}
                  />
                  Lock every buzzer until countdown finishes
                </label>
                {lockBuzzerRound && (
                  <label style={labelStyle}>
                    Seconds to lock the buzzer
                    <input
                      type="number"
                      value={
                        rounds[currentRoundIdx]?.startDelay || buzzerStartDelay
                      }
                      onChange={(e) => {
                        setBuzzerStartDelay(Number(e.target.value));
                        setRounds(
                          rounds.map((r, i) =>
                            i === currentRoundIdx
                              ? { ...r, startDelay: Number(e.target.value) }
                              : r
                          )
                        );
                      }}
                      style={inputStyle}
                    />
                  </label>
                )}
                <label style={labelStyle}>
                  Answer time (seconds after buzz)
                  <input
                    type="number"
                    value={rounds[currentRoundIdx]?.buzzerTime || 12}
                    onChange={(e) =>
                      setRounds(
                        rounds.map((r, i) =>
                          i === currentRoundIdx
                            ? { ...r, buzzerTime: Number(e.target.value) }
                            : r
                        )
                      )
                    }
                    style={inputStyle}
                  />
                </label>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: 6,
                  }}
                >
                  <label style={labelStyle}>
                    Correct
                    <input
                      type="number"
                      value={rounds[currentRoundIdx]?.correctMark || 10}
                      onChange={(e) =>
                        setRounds(
                          rounds.map((r, i) =>
                            i === currentRoundIdx
                              ? { ...r, correctMark: Number(e.target.value) }
                              : r
                          )
                        )
                      }
                      style={inputStyle}
                    />
                  </label>
                  <label style={labelStyle}>
                    Wrong
                    <input
                      type="number"
                      value={rounds[currentRoundIdx]?.wrongMark || -1}
                      onChange={(e) =>
                        setRounds(
                          rounds.map((r, i) =>
                            i === currentRoundIdx
                              ? { ...r, wrongMark: Number(e.target.value) }
                              : r
                          )
                        )
                      }
                      style={inputStyle}
                    />
                  </label>
                  <label style={labelStyle}>
                    Timeout
                    <input
                      type="number"
                      value={rounds[currentRoundIdx]?.timeoutMark || 0}
                      onChange={(e) =>
                        setRounds(
                          rounds.map((r, i) =>
                            i === currentRoundIdx
                              ? { ...r, timeoutMark: Number(e.target.value) }
                              : r
                          )
                        )
                      }
                      style={inputStyle}
                    />
                  </label>
                </div>
                <h4 style={{ color: '#FFD93D' }}>Questions in this Round</h4>
                {questions
                  .filter((q) => q.roundId === rounds[currentRoundIdx]?.id)
                  .map((q, qi) => (
                    <div
                      key={q.id}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: 6,
                      }}
                    >
                      <span>
                        Q{qi + 1}. {q.question}
                      </span>
                      <span>
                        <button
                          type="button"
                          onClick={() => {
                            setQText(q.question);
                            setOptA(q.options[0] || '');
                            setOptB(q.options[1] || '');
                            setOptC(q.options[2] || '');
                            setOptD(q.options[3] || '');
                            setCorrectOptIndex(q.correct || 0);
                          }}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#FFD93D',
                          }}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setQuestions(questions.filter((x) => x.id !== q.id))
                          }
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#ff4d4d',
                          }}
                        >
                          Delete
                        </button>
                      </span>
                    </div>
                  ))}
              </div>
              <div
                style={{
                  backgroundColor: '#031419',
                  padding: 12,
                  borderRadius: 12,
                }}
              >
                <h4 style={{ color: '#FFD93D' }}>Add / Edit Question</h4>
                <form onSubmit={handleSaveQuestion}>
                  <textarea
                    value={qText}
                    onChange={(e) => setQText(e.target.value)}
                    style={{ ...inputStyle, height: 70 }}
                    placeholder="Type the question..."
                  />
                  {[0, 1, 2, 3].map((idx) => (
                    <div
                      key={idx}
                      style={{ display: 'flex', gap: 6, marginTop: 6 }}
                    >
                      <input
                        type="radio"
                        name="c"
                        checked={correctOptIndex === idx}
                        onChange={() => setCorrectOptIndex(idx)}
                      />
                      <input
                        value={
                          idx === 0
                            ? optA
                            : idx === 1
                            ? optB
                            : idx === 2
                            ? optC
                            : optD
                        }
                        onChange={(e) => {
                          if (idx === 0) setOptA(e.target.value);
                          if (idx === 1) setOptB(e.target.value);
                          if (idx === 2) setOptC(e.target.value);
                          if (idx === 3) setOptD(e.target.value);
                        }}
                        style={inputStyle}
                      />
                    </div>
                  ))}
                  <select
                    value={mediaKind}
                    onChange={(e) => setMediaKind(e.target.value)}
                    style={inputStyle}
                  >
                    <option value="none">No media</option>
                    <option value="image">Image</option>
                    <option value="audio">Voice</option>
                    <option value="video">Video</option>
                  </select>
                  {mediaKind === 'image' && (
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setImageFile(e.target.files[0])}
                    />
                  )}
                  {mediaKind === 'audio' && (
                    <input
                      type="file"
                      accept="audio/*"
                      onChange={(e) => setAudioFile(e.target.files[0])}
                    />
                  )}
                  {mediaKind === 'video' && (
                    <input
                      type="file"
                      accept="video/*"
                      onChange={(e) => setVideoFile(e.target.files[0])}
                    />
                  )}
                  <button
                    type="submit"
                    style={{ ...primaryBtnStyle, marginTop: 8 }}
                  >
                    Save Question
                  </button>
                </form>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setAppScreen('roundManager')}
              style={{
                ...primaryBtnStyle,
                backgroundColor: '#FFD93D',
                color: '#031419',
                marginTop: 12,
              }}
            >
              Done — Back to Rounds
            </button>
          </div>
        )}
        {appScreen === 'tieBuilder' && (
          <div>
            <button
              type="button"
              onClick={() => {
                setIsTieMode(false);
                setAppScreen('editQuiz');
              }}
              style={backBtnStyle}
            >
              ← Back
            </button>
            <form onSubmit={handleSaveQuestion}>
              <textarea
                value={qText}
                onChange={(e) => setQText(e.target.value)}
                style={{ ...inputStyle, height: 48 }}
                placeholder="Tie question"
              />
              {[0, 1, 2, 3].map((idx) => (
                <div
                  key={idx}
                  style={{ display: 'flex', gap: 6, marginTop: 6 }}
                >
                  <input
                    type="radio"
                    name="tieC"
                    checked={correctOptIndex === idx}
                    onChange={() => setCorrectOptIndex(idx)}
                  />
                  <input
                    value={
                      idx === 0
                        ? optA
                        : idx === 1
                        ? optB
                        : idx === 2
                        ? optC
                        : optD
                    }
                    onChange={(e) => {
                      if (idx === 0) setOptA(e.target.value);
                      if (idx === 1) setOptB(e.target.value);
                      if (idx === 2) setOptC(e.target.value);
                      if (idx === 3) setOptD(e.target.value);
                    }}
                    style={inputStyle}
                  />
                </div>
              ))}
              <button
                type="submit"
                style={{ ...primaryBtnStyle, marginTop: 8 }}
              >
                Save Question
              </button>
            </form>
            {tieQuestions.map((q, i) => (
              <div
                key={q.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: 6,
                }}
              >
                <span>
                  T{i + 1}: {q.question}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setTieQuestions(tieQuestions.filter((x) => x.id !== q.id))
                  }
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#ff4d4d',
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
        {appScreen === 'teamSetup' && (
          <div>
            <button
              type="button"
              onClick={() => setAppScreen('editQuiz')}
              style={backBtnStyle}
            >
              ← Back
            </button>
            <label style={labelStyle}>
              Number of teams
              <input
                type="number"
                min={2}
                max={8}
                value={numTeams}
                onChange={(e) => {
                  const n = Number(e.target.value) || 2;
                  setNumTeams(n);
                  const colors = [
                    '#4D96FF',
                    '#6BCB77',
                    '#FFD93D',
                    '#FF4D4D',
                    '#A66CFF',
                    '#00C9A7',
                    '#FF8C42',
                    '#F43F5E',
                  ];
                  const next = [...teams];
                  while (next.length < n) {
                    const i = next.length;
                    next.push({
                      id: Date.now() + i,
                      name: 'Team ' + (i + 1),
                      color: colors[i % 8],
                      score: 0,
                      members: [],
                    });
                  }
                  setTeams(next);
                }}
                style={inputStyle}
              />
            </label>
            {teams.slice(0, numTeams).map((t, idx) => (
              <div
                key={t.id}
                style={{ display: 'flex', gap: 6, marginBottom: 6 }}
              >
                <input
                  type="color"
                  value={t.color}
                  onChange={(e) => {
                    const u = [...teams];
                    u[idx].color = e.target.value;
                    setTeams(u);
                  }}
                />
                <input
                  value={t.name}
                  onChange={(e) => {
                    const u = [...teams];
                    u[idx].name = e.target.value;
                    setTeams(u);
                  }}
                  style={inputStyle}
                />
                <button
                  type="button"
                  onClick={() => {
                    setActiveTeamIndex(idx);
                    setAppScreen('manageParticipants');
                  }}
                  style={{ ...primaryBtnStyle, width: 'auto' }}
                >
                  Add Participants
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => setAppScreen('editQuiz')}
              style={{
                ...primaryBtnStyle,
                backgroundColor: '#FFD93D',
                color: '#031419',
                marginTop: 10,
              }}
            >
              Save Teams
            </button>
          </div>
        )}
        {appScreen === 'manageParticipants' && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!memberName) return;
              const u = [...teams];
              u[activeTeamIndex] = {
                ...u[activeTeamIndex],
                members: [
                  ...(u[activeTeamIndex].members || []),
                  {
                    id: Date.now(),
                    name: memberName,
                    photo: memberPhoto || null,
                    video: memberVideo || null,
                  },
                ],
              };
              setTeams(u);
              setMemberName('');
              setMemberPhoto(null);
              setMemberVideo(null);
            }}
          >
            <button
              type="button"
              onClick={() => setAppScreen('teamSetup')}
              style={backBtnStyle}
            >
              ← Back
            </button>
            {(teams[activeTeamIndex]?.members || []).map((m) => (
              <div
                key={m.id}
                style={{
                  display: 'flex',
                  gap: 8,
                  alignItems: 'center',
                  marginTop: 6,
                }}
              >
                {m.video ? (
                  <video src={m.video} style={{ width: 56 }} />
                ) : (
                  <img
                    src={m.photo || ''}
                    alt=""
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      background: '#071f26',
                    }}
                  />
                )}
                <span>{m.name}</span>
                <button
                  type="button"
                  onClick={() =>
                    setTeams(
                      teams.map((t, i) =>
                        i === activeTeamIndex
                          ? {
                              ...t,
                              members: (t.members || []).filter(
                                (x) => x.id !== m.id
                              ),
                            }
                          : t
                      )
                    )
                  }
                  style={{
                    ...primaryBtnStyle,
                    width: 'auto',
                    backgroundColor: '#7a1f1f',
                    color: '#fff',
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
            <input
              placeholder="Member name"
              value={memberName}
              onChange={(e) => setMemberName(e.target.value)}
              style={inputStyle}
            />
            <input
              key={'p' + (teams[activeTeamIndex]?.members || []).length}
              type="file"
              accept="image/*"
              onChange={(e) =>
                e.target.files[0] &&
                setMemberPhoto(URL.createObjectURL(e.target.files[0]))
              }
            />
            <input
              key={'v' + (teams[activeTeamIndex]?.members || []).length}
              type="file"
              accept="video/*"
              onChange={(e) =>
                e.target.files[0] &&
                setMemberVideo(URL.createObjectURL(e.target.files[0]))
              }
            />
            <button type="submit" style={primaryBtnStyle}>
              Add Participant
            </button>
            <button
              type="button"
              onClick={() => setAppScreen('teamSetup')}
              style={{
                ...primaryBtnStyle,
                backgroundColor: '#FFD93D',
                color: '#031419',
                marginTop: 8,
              }}
            >
              Save Participants
            </button>
          </form>
        )}
        {appScreen === 'quizListSelect' && (
          <div>
            <button
              type="button"
              onClick={() => setAppScreen('home')}
              style={backBtnStyle}
            >
              ← Back
            </button>
            {quizList.map((q) => (
              <div
                key={q.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  backgroundColor: '#031419',
                  padding: 10,
                  borderRadius: 8,
                  marginBottom: 8,
                }}
              >
                <span>{q.name}</span>
                <button
                  type="button"
                  onClick={() => {
                    setQuizName(q.name);
                    setCurrentRoundIdx(0);
                    setCurrentQIndex(0);
                    setAppScreen('startReadyPage');
                  }}
                  style={{
                    ...primaryBtnStyle,
                    width: 'auto',
                    backgroundColor: '#FFD93D',
                    color: '#031419',
                  }}
                >
                  Use This Quiz
                </button>
              </div>
            ))}
          </div>
        )}
        {appScreen === 'startReadyPage' && (
          <div style={{ textAlign: 'center' }}>
            <button
              type="button"
              onClick={() => setAppScreen('quizListSelect')}
              style={backBtnStyle}
            >
              ← Back
            </button>
            <h2>How This Show Will Run</h2>
            <h1 style={{ color: '#00C9A7' }}>{roomCode}</h1>
            {[
              {
                id: 'buzzer_only',
                t: '1. Team only buzzes',
                d: 'Team presses buzzer. Host selects A/B/C/D.',
              },
              {
                id: 'buzzer_answer',
                t: '2. Team buzzes, then that team picks the option',
                d: 'After buzz, that team presses options. Host can override.',
              },
              {
                id: 'host_all',
                t: '3. Host does everything',
                d: 'Host clicks a team box, then awards answer.',
              },
            ].map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setHostPlayMode(m.id)}
                style={{
                  ...primaryBtnStyle,
                  textAlign: 'left',
                  backgroundColor:
                    hostPlayMode === m.id ? '#0f4847' : '#031419',
                  color: '#FFD93D',
                  marginTop: 8,
                  border: '1px solid #0f4847',
                }}
              >
                {m.t}
                <div style={{ color: '#8fa8a3', fontWeight: 500 }}>{m.d}</div>
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                playTone('schoolIntro', soundVol.schoolIntro);
                setAppScreen('schoolIntroAnimated');
              }}
              style={{
                ...primaryBtnStyle,
                backgroundColor: '#FFD93D',
                color: '#031419',
                marginTop: 10,
              }}
            >
              ENTER — Start Live Show
            </button>
          </div>
        )}
        {appScreen === 'schoolIntroAnimated' && (
          <div style={{ textAlign: 'center', animation: 'rise 1s ease' }}>
            {liveLogo}
            <h1 style={{ marginTop: 48 }}>{hostName}</h1>
            <h3 style={{ color: '#FFD93D' }}>{quizName}</h3>
            <button
              type="button"
              onClick={() => {
                playTone('roundIntro', soundVol.roundIntro);
                setAppScreen('teamIntroShow');
              }}
              style={{
                ...primaryBtnStyle,
                backgroundColor: '#FFD93D',
                color: '#031419',
              }}
            >
              Continue
            </button>
          </div>
        )}
        {appScreen === 'teamIntroShow' && (
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ color: teams[introTeamIndex]?.color }}>
              {teams[introTeamIndex]?.name}
            </h3>
            {teams[introTeamIndex]?.members?.[introMemberIndex]?.video ? (
              <video
                src={teams[introTeamIndex].members[introMemberIndex].video}
                controls
                autoPlay
                style={{ width: '100%', borderRadius: 12 }}
              />
            ) : (
              <img
                src={
                  teams[introTeamIndex]?.members?.[introMemberIndex]?.photo ||
                  ''
                }
                alt=""
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  background: '#071f26',
                }}
              />
            )}
            <h2>
              {teams[introTeamIndex]?.members?.[introMemberIndex]?.name ||
                'Add participant first'}
            </h2>
            <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
              <button
                type="button"
                onClick={() => {
                  if (introMemberIndex > 0)
                    setIntroMemberIndex(introMemberIndex - 1);
                  else if (introTeamIndex > 0) {
                    const prev = introTeamIndex - 1;
                    setIntroTeamIndex(prev);
                    setIntroMemberIndex(
                      Math.max(0, (teams[prev]?.members || []).length - 1)
                    );
                  } else setAppScreen('schoolIntroAnimated');
                }}
                style={{
                  ...primaryBtnStyle,
                  backgroundColor: '#0f4847',
                  color: '#fff',
                }}
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => {
                  const mems = teams[introTeamIndex]?.members || [];
                  if (introMemberIndex + 1 < mems.length)
                    setIntroMemberIndex(introMemberIndex + 1);
                  else if (introTeamIndex + 1 < numTeams) {
                    setIntroTeamIndex(introTeamIndex + 1);
                    setIntroMemberIndex(0);
                  } else {
                    playTone('roundIntro', soundVol.roundIntro);
                    setAppScreen('roundIntro');
                  }
                }}
                style={{
                  ...primaryBtnStyle,
                  backgroundColor: '#FFD93D',
                  color: '#031419',
                }}
              >
                Next
              </button>
            </div>
          </div>
        )}
        {appScreen === 'roundIntro' && (
          <div style={{ textAlign: 'center' }}>
            {liveLogo}
            <h2 style={{ marginTop: 50, color: '#FFD93D' }}>
              {rounds[currentRoundIdx]?.name}
            </h2>
            <p>
              <h3 style={{ color: '#00C9A7' }}>{hostName}</h3>
              Correct {rounds[currentRoundIdx]?.correctMark} · Wrong{' '}
              {rounds[currentRoundIdx]?.wrongMark} · Timeout{' '}
              {rounds[currentRoundIdx]?.timeoutMark} · Time{' '}
              {rounds[currentRoundIdx]?.buzzerTime}s
            </p>
            <button
              type="button"
              onClick={() => {
                setCurrentQIndex(0);
                setAppScreen('hostLiveQuestion');
              }}
              style={{
                ...primaryBtnStyle,
                backgroundColor: '#FFD93D',
                color: '#031419',
              }}
            >
              Start Round Questions
            </button>
          </div>
        )}
        {appScreen === 'hostLiveQuestion' && (
          <div>
            {liveLogo}
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: 6,
                marginTop: 44,
              }}
            >
              <button
                type="button"
                onClick={() => setShowAudience(!showAudience)}
                style={{
                  ...primaryBtnStyle,
                  width: 'auto',
                  backgroundColor: '#0f4847',
                  color: '#fff',
                }}
              >
                {showAudience ? 'Hide Audience' : 'Audience'}
              </button>
              <button
                type="button"
                onClick={() => setHostMicMuted(!hostMicMuted)}
                style={{
                  ...primaryBtnStyle,
                  width: 'auto',
                  backgroundColor: hostMicMuted ? '#7a1f1f' : '#00C9A7',
                  color: hostMicMuted ? '#fff' : '#031419',
                }}
              >
                {hostMicMuted ? 'Host Mic MUTE' : 'Host Mic ON'}
              </button>
            </div>
            <h3 style={{ fontSize: 22 }}>
              Q{currentQIndex + 1}. {liveQ?.question}
            </h3>
            {(liveQ?.image || liveQ?.audio || liveQ?.video) && (
              <button
                type="button"
                onClick={() => openMedia(liveQ)}
                style={{
                  ...primaryBtnStyle,
                  backgroundColor: '#FFD93D',
                  color: '#031419',
                }}
              >
                Play Media Full Screen
              </button>
            )}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 8,
              }}
            >
              {(liveQ?.options || []).map((op, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    if (!hostAnswerTeam) return;
                    const ok = i === (liveQ?.correct ?? 0);
                    setTeams(
                      teams.map((t) =>
                        t.id === hostAnswerTeam
                          ? {
                              ...t,
                              score:
                                t.score +
                                (ok
                                  ? rounds[currentRoundIdx]?.correctMark || 10
                                  : rounds[currentRoundIdx]?.wrongMark || -1),
                            }
                          : t
                      )
                    );
                    playTone(
                      ok ? 'correct' : 'wrong',
                      ok ? soundVol.correct : soundVol.wrong
                    );
                  }}
                  style={{
                    ...primaryBtnStyle,
                    backgroundColor: '#031419',
                    color: '#fff',
                  }}
                >
                  {String.fromCharCode(65 + i)}. {op}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => {
                setBuzzedTeamId(null);
                setHostAnswerTeam(null);
              }}
              style={{
                ...primaryBtnStyle,
                backgroundColor: '#0f4847',
                color: '#fff',
                marginTop: 8,
              }}
            >
              RESET
            </button>
            <button
              type="button"
              onClick={() => openMedia(liveQ)}
              style={{
                ...primaryBtnStyle,
                backgroundColor: '#FFD93D',
                color: '#031419',
                marginTop: 8,
              }}
            >
              Play Media Full Screen
            </button>
            <button
              type="button"
              onClick={nextLiveQuestion}
              style={{
                ...primaryBtnStyle,
                backgroundColor: '#FFD93D',
                color: '#031419',
                marginTop: 8,
              }}
            >
              Next Question
            </button>
            <button
              type="button"
              onClick={() => setAppScreen('hostScorecard')}
              style={{
                ...primaryBtnStyle,
                backgroundColor: '#0f4847',
                color: '#fff',
                marginTop: 8,
              }}
            >
              Scorecard
            </button>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 8,
                marginTop: 8,
              }}
            >
              {teams.slice(0, numTeams).map((t) => {
                const dim = buzzedTeamId && buzzedTeamId !== t.id;
                return (
                  <div
                    key={t.id}
                    style={{
                      padding: 14,
                      borderRadius: 14,
                      background: dim
                        ? '#111'
                        : 'linear-gradient(180deg,#ffffff55,' + t.color + ')',
                      color: dim ? '#555' : '#031419',
                      fontWeight: 800,
                      cursor: 'pointer',
                      border:
                        hostAnswerTeam === t.id ? '3px solid #FFD93D' : 'none',
                    }}
                  >
                    {t.name}
                    {buzzedTeamId === t.id ? ' BUZZ' : ''}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {appScreen === 'hostScorecard' && (
          <div style={{ textAlign: 'center' }}>
            {liveLogo}
            {vcTeamId ? (
              <div style={{ marginTop: 48 }}>
                <h3>Video conference</h3>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 8,
                    flexWrap: 'wrap',
                  }}
                >
                  <div
                    style={{
                      width: 90,
                      height: 90,
                      borderRadius: 12,
                      background: '#00C9A7',
                      color: '#031419',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    HOST
                  </div>
                  {(teams.find((t) => t.id === vcTeamId)?.members || []).map(
                    (m) => (
                      <div key={m.id}>{m.name}</div>
                    )
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setVcTeamId(null)}
                  style={primaryBtnStyle}
                >
                  Back to Scorecard
                </button>
              </div>
            ) : (
              <div>
                <h3 style={{ color: '#FFD93D', marginTop: 48 }}>Scorecard</h3>
                {teams.slice(0, numTeams).map((t) => (
                  <div
                    key={t.id}
                    onClick={() => setHostAnswerTeam(t.id)}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      background:
                        'linear-gradient(180deg,#ffffff44,' + t.color + ')',
                      color: '#031419',
                      padding: 8,
                      borderRadius: 12,
                      marginTop: 6,
                    }}
                  >
                    <b>
                      {t.name} · {t.score}
                    </b>
                    <button
                      type="button"
                      onClick={() => setVcTeamId(t.id)}
                      style={{ ...primaryBtnStyle, width: 'auto' }}
                    >
                      Video
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => setAppScreen('hostLiveQuestion')}
                  style={{
                    ...primaryBtnStyle,
                    backgroundColor: '#0f4847',
                    color: '#fff',
                    marginTop: 8,
                  }}
                >
                  Back to Quiz
                </button>
                {currentRoundIdx + 1 < rounds.length ? (
                  <button
                    type="button"
                    onClick={goNextRound}
                    style={{
                      ...primaryBtnStyle,
                      backgroundColor: '#FFD93D',
                      color: '#031419',
                      marginTop: 8,
                    }}
                  >
                    Next Round Intro
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setAppScreen('hostFinalResult')}
                    style={{
                      ...primaryBtnStyle,
                      backgroundColor: '#FFD93D',
                      color: '#031419',
                      marginTop: 8,
                    }}
                  >
                    Final Result
                  </button>
                )}
              </div>
            )}
          </div>
        )}
        {appScreen === 'hostFinalResult' && (
          <div style={{ textAlign: 'center' }}>
            {logoUrl ? (
              <img
                src={logoUrl}
                alt=""
                style={{ width: 72, height: 72, borderRadius: '50%' }}
              />
            ) : (
              liveLogo
            )}
            <h2 style={{ color: '#FFD93D' }}>{hostName}</h2>
            <h3>🏆 Final Results</h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 8,
              }}
            >
              {teams
                .slice(0, numTeams)
                .sort((a, b) => b.score - a.score)
                .map((t, i) => (
                  <div
                    key={t.id}
                    style={{
                      background:
                        'linear-gradient(180deg,#ffffff66,' + t.color + ')',
                      color: '#031419',
                      borderRadius: 14,
                      padding: 8,
                    }}
                  >
                    <div style={{ fontSize: 11 }}>Rank {i + 1}</div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 4,
                        margin: '4px 0',
                      }}
                    >
                      {(t.members || []).slice(0, 4).map((m) => (
                        <img
                          key={m.id}
                          src={m.photo || ''}
                          alt=""
                          style={{
                            width: 28,
                            height: 28,
                            borderRadius: '50%',
                            objectFit: 'cover',
                            background: '#071f26',
                          }}
                        />
                      ))}
                    </div>
                    <div style={{ fontWeight: 800, fontSize: 13 }}>
                      {t.name}
                    </div>
                    <div style={{ fontSize: 10 }}>
                      {(t.members || []).map((m) => m.name).join(', ')}
                    </div>
                    <div style={{ fontWeight: 900 }}>{t.score} pts</div>
                  </div>
                ))}
            </div>
            <button
              type="button"
              onClick={() => setAppScreen('home')}
              style={{
                ...primaryBtnStyle,
                marginTop: 12,
                backgroundColor: '#FFD93D',
                color: '#031419',
              }}
            >
              Home
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

function CertCard({
  styleId,
  hostName,
  logoUrl,
  title,
  student,
  extra,
  score,
  rank,
}) {
  const skins = [
    {
      bg: 'linear-gradient(#111 0 26%, #fff 26%)',
      color: '#111',
      border: '10px solid #c9a227',
    },
    { bg: '#0b0b0b', color: '#e8c872', border: '2px solid #e8c872' },
    {
      bg: 'linear-gradient(#1e3a5f 0 16%, #fff 16% 84%, #eab308 84%)',
      color: '#1e3a5f',
      border: '0',
    },
    { bg: '#eef4fb', color: '#12325c', border: '1px solid #9bb7d4' },
    { bg: '#fff', color: '#222', border: '0' },
    { bg: '#0f3d2e', color: '#e7c56a', border: '0' },
    { bg: '#fff', color: '#14532d', border: '8px solid #14532d' },
    { bg: '#fff', color: '#1e3a5f', border: '6px solid #c9a227' },
    { bg: '#faf4ea', color: '#7a1d1d', border: '0' },
    { bg: '#fff8e7', color: '#8a6a2a', border: '6px solid #c9a227' },
  ];
  const s = skins[(styleId - 1) % 10];
  return (
    <div
      style={{
        margin: '12px auto',
        maxWidth: 520,
        padding: 22,
        textAlign: 'center',
        background: s.bg,
        color: s.color,
        border: s.border,
      }}
    >
      {logoUrl && (
        <img
          src={logoUrl}
          alt=""
          style={{ width: 70, height: 70, borderRadius: '50%' }}
        />
      )}
      <div style={{ fontSize: 11 }}>{hostName}</div>
      <h2 style={{ fontFamily: 'Georgia, serif' }}>
        CERTIFICATE OF PARTICIPATION
      </h2>
      <div>{title}</div>
      <p>This certificate is presented to</p>
      <h2 style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
        {student}
      </h2>
      <p>{extra}</p>
      <p>
        for participation in {title}. Score {score} · Rank #{rank}.
      </p>
      <p style={{ fontSize: 12 }}>{hostName}</p>
    </div>
  );
}
