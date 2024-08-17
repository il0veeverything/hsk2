const words = [
    { chinese: '白', pinyin: 'bái', meaning: '白い' },
    { chinese: '长', pinyin: 'chāng', meaning: '長い' },
    { chinese: '高', pinyin: 'gāo', meaning: '高い' },
    { chinese: '贵', pinyin: 'guì', meaning: '値段が高い' },
    { chinese: '好吃', pinyin: 'hǎo chī', meaning: '美味しい' },
    { chinese: '黑', pinyin: 'hēi', meaning: '黒い' },
    { chinese: '红', pinyin: 'hóng', meaning: '赤' },
    { chinese: '远', pinyin: 'yuǎn', meaning: '遠い' },
    { chinese: '近', pinyin: 'jìn', meaning: '近い' },
    { chinese: '快', pinyin: 'kuài', meaning: '速い' },
    { chinese: '快乐', pinyin: 'kuàilè', meaning: '幸せ' },
    { chinese: '慢', pinyin: 'màn', meaning: '遅い' },
    { chinese: '忙', pinyin: 'máng', meaning: '忙しい' },
    { chinese: '便宜', pinyin: 'piányí', meaning: '安い' },
    { chinese: '晴', pinyin: 'qíng', meaning: '晴れ' },
    { chinese: '阴', pinyin: 'yīn', meaning: 'くもり' },
    { chinese: '新', pinyin: 'xīn', meaning: '新しい' },
    { chinese: '咖啡', pinyin: 'kāfēi', meaning: 'コーヒー' },
    { chinese: '牛奶', pinyin: 'niúnǎi', meaning: '牛乳' },
    { chinese: '西瓜', pinyin: 'xī guā', meaning: 'スイカ' },
    { chinese: '鸡蛋', pinyin: 'jīdàn', meaning: '卵' },
    { chinese: '羊肉', pinyin: 'yángròu', meaning: '羊肉' },
    { chinese: '鱼', pinyin: 'yú', meaning: '魚' },
    { chinese: '男人', pinyin: 'nánrén', meaning: '男性' },
    { chinese: '女人', pinyin: 'nǚrén', meaning: '女性' },
    { chinese: '大家', pinyin: 'dàjiā', meaning: 'みんな' },
    { chinese: '您', pinyin: 'nín', meaning: 'あなた（敬語）' },
    { chinese: '哥哥', pinyin: 'gēgē', meaning: '兄' },
    { chinese: '弟弟', pinyin: 'dìdì', meaning: '弟' },
    { chinese: '姐姐', pinyin: 'jiějiě', meaning: '姉' },
    { chinese: '妹妹', pinyin: 'mèimei', meaning: '妹' },
    { chinese: '孩子', pinyin: 'háizi', meaning: '子供' },
    { chinese: '丈夫', pinyin: 'zhàngfū', meaning: '夫' },
    { chinese: '妻子', pinyin: 'qīzi', meaning: '妻' },
    { chinese: '服务员', pinyin: 'fúwùyuán', meaning: '店員' },
    { chinese: '眼睛', pinyin: 'yǎnjīng', meaning: '目' },
    { chinese: '吧', pinyin: 'ba', meaning: 'でしょ？' },
    { chinese: '帮助', pinyin: 'bāngzhù', meaning: '助ける' },
    { chinese: '比', pinyin: 'bǐ', meaning: '比較して' },
    { chinese: '唱歌', pinyin: 'chànggē', meaning: '歌を歌う' },
    { chinese: '出', pinyin: 'chū', meaning: '出る' },
    { chinese: '穿', pinyin: 'chuān', meaning: '着る' },
    { chinese: '错', pinyin: 'cuò', meaning: '間違う' },
    { chinese: '得', pinyin: 'dé', meaning: '得る' },
    { chinese: '等', pinyin: 'děng', meaning: '待つ' },
    { chinese: '懂', pinyin: 'dǒng', meaning: '分かった' },
    { chinese: '告诉', pinyin: 'gàosù', meaning: '伝える' },
    { chinese: '给', pinyin: 'gěi', meaning: '与える' },
    { chinese: '过', pinyin: 'guò', meaning: '過ぎる' },
    { chinese: '欢迎', pinyin: 'huānyíng', meaning: '歓迎する' },
    { chinese: '回答', pinyin: 'huídá', meaning: '答える' },
    { chinese: '介绍', pinyin: 'jièshào', meaning: '紹介する' },
    { chinese: '进', pinyin: 'jìn', meaning: '入る' },
    { chinese: '觉得', pinyin: 'juédé', meaning: '思う' },
    { chinese: '开始', pinyin: 'kāishǐ', meaning: '始める' },
    { chinese: '累', pinyin: 'lèi', meaning: '疲れる' },
    { chinese: '卖', pinyin: 'mài', meaning: '売る' },
    { chinese: '旁边', pinyin: 'pángbiān', meaning: '隣' },
    { chinese: '跑步', pinyin: 'pǎobù', meaning: '走る' },
    { chinese: '起床', pinyin: 'qǐchuáng', meaning: '起きる' },
    { chinese: '上班', pinyin: 'shàngbān', meaning: '出勤する' },
    { chinese: '生病', pinyin: 'shēngbìng', meaning: '病気になる' },
    { chinese: '送', pinyin: 'sòng', meaning: '送る、届ける' },
    { chinese: '游泳', pinyin: 'yóuyǒng', meaning: '泳ぐ' },
    { chinese: '踢足球', pinyin: 'tī zúqiú', meaning: 'サッカーをする' },
    { chinese: '跳舞', pinyin: 'tiàowǔ', meaning: 'ダンスを踊る' },
    { chinese: '打篮球', pinyin: 'dǎlánqiú', meaning: 'バスケットボールをする' },
    { chinese: '题', pinyin: 'tí', meaning: '書き記す' },
    { chinese: '完', pinyin: 'wán', meaning: '完成する' },
    { chinese: '玩', pinyin: 'wán', meaning: '遊ぶ' },
    { chinese: '问', pinyin: 'wèn', meaning: '尋ねる' },
    { chinese: '希望', pinyin: 'xīwàng', meaning: '望む' },
    { chinese: '洗', pinyin: 'xǐ', meaning: '洗う' },
    { chinese: '笑', pinyin: 'xiào', meaning: '笑う' },
    { chinese: '休息', pinyin: 'xiūxí', meaning: '休憩' },
    { chinese: '要', pinyin: 'yào', meaning: '要求する' },
    { chinese: '找', pinyin: 'zhǎo', meaning: '探す' },
    { chinese: '穿', pinyin: 'chuān', meaning: '着る' },
    { chinese: '知道', pinyin: 'zhīdào', meaning: '知っている' },
    { chinese: '准备', pinyin: 'zhǔnbèi', meaning: '準備をする' },
    { chinese: '走', pinyin: 'zǒu', meaning: '歩く' },
    { chinese: '做', pinyin: 'zuò', meaning: 'する' },
    { chinese: '坐', pinyin: 'zuò', meaning: '座る' },
    { chinese: '别', pinyin: 'bié', meaning: 'しないでください' },
    { chinese: '次', pinyin: 'cì', meaning: '次' },
    { chinese: '从', pinyin: 'cóng', meaning: '〜から' },
    { chinese: '但是', pinyin: 'dànshì', meaning: 'しかし' },
    { chinese: '到', pinyin: 'dào', meaning: '〇〇へ' },
    { chinese: '第一', pinyin: 'dì yī', meaning: '最初の' },
    { chinese: '对', pinyin: 'duì', meaning: '正しい' },
    { chinese: '非常', pinyin: 'fēicháng', meaning: '非常に' },
    { chinese: '还', pinyin: 'hái', meaning: 'さらに' },
    { chinese: '就', pinyin: 'jiù', meaning: 'すぐに' },
    { chinese: '可能', pinyin: 'kěnéng', meaning: 'かもしれない' },
    { chinese: '可以', pinyin: 'kěyǐ', meaning: 'できる' },
    { chinese: '离', pinyin: 'lí', meaning: '〇〇から' },
    { chinese: '每', pinyin: 'měi', meaning: 'それぞれ、各々' },
    { chinese: '让', pinyin: 'ràng', meaning: 'させる' },
    { chinese: '所以', pinyin: 'suǒyǐ', meaning: 'だから' },
    { chinese: '为什么', pinyin: 'wèishéme', meaning: 'なぜ' },
    { chinese: '向', pinyin: 'xiàng', meaning: 'へ' },
    { chinese: '也', pinyin: 'yě', meaning: 'さらに' },
    { chinese: '已经', pinyin: 'yǐjīng', meaning: 'もう既に' },
    { chinese: '一起', pinyin: 'yìqǐ', meaning: '一緒に' },
    { chinese: '因为', pinyin: 'yīnwèi', meaning: 'なぜなら' },
    { chinese: '再', pinyin: 'zài', meaning: '再び' },
    { chinese: '真', pinyin: 'zhēn', meaning: '本当に' },
    { chinese: '正在', pinyin: 'zhèng zài', meaning: 'まさに〇〇している' },
    { chinese: '最', pinyin: 'zuì', meaning: '最も' },
    { chinese: '号', pinyin: 'hào', meaning: '番号' },
    { chinese: '两', pinyin: 'liǎng', meaning: '二つ' },
    { chinese: '百', pinyin: 'bǎi', meaning: '百' },
    { chinese: '千', pinyin: 'qiān', meaning: '千' },
    { chinese: '报纸', pinyin: 'bàozhǐ', meaning: '新聞' },
    { chinese: '房间', pinyin: 'fángjiān', meaning: '部屋' },
    { chinese: '船', pinyin: 'chuán', meaning: '船' },
    { chinese: '公共汽车', pinyin: 'gōnggòng qìchē', meaning: 'バス' },
    { chinese: '公斤', pinyin: 'gōngjīn', meaning: 'kg キログラム' },
    { chinese: '张', pinyin: 'zhāng', meaning: '枚' },
    { chinese: '元', pinyin: 'yuán', meaning: '元（お金の単位）' },
    { chinese: '件', pinyin: 'jiàn', meaning: '着' },
    { chinese: '公司', pinyin: 'gōngsī', meaning: '会社' },
    { chinese: '机场', pinyin: 'jīchǎng', meaning: '空港' },
    { chinese: '教室', pinyin: 'jiàoshì', meaning: '教室' },
    { chinese: '考试', pinyin: 'kǎoshì', meaning: '試験' },
    { chinese: '课', pinyin: 'kè', meaning: '授業' },
    { chinese: '路', pinyin: 'lù', meaning: '道路' },
    { chinese: '旅游', pinyin: 'lǚyóu', meaning: '旅行' },
    { chinese: '门', pinyin: 'mén', meaning: '扉' },
    { chinese: '票', pinyin: 'piào', meaning: 'チケット' },
    { chinese: '去年', pinyin: 'qùnián', meaning: '昨年' },
    { chinese: '身体', pinyin: 'shēntǐ', meaning: '体' },
    { chinese: '生日', pinyin: 'shēngrì', meaning: '誕生日' },
    { chinese: '时间', pinyin: 'shíjiān', meaning: '時間' },
    { chinese: '事情', pinyin: 'shìqíng', meaning: '事' },
    { chinese: '手表', pinyin: 'shǒubiǎo', meaning: '腕時計' },
    { chinese: '手机', pinyin: 'shǒujī', meaning: '携帯電話' },
    { chinese: '它', pinyin: 'tā', meaning: 'それ' },
    { chinese: '外', pinyin: 'wài', meaning: '外' },
    { chinese: '早上', pinyin: 'zǎoshang', meaning: '朝' },
    { chinese: '晚上', pinyin: 'wǎnshàng', meaning: '夜' },
    { chinese: '昨天', pinyin: 'zuótiān', meaning: '昨日' },
    { chinese: '问题', pinyin: 'wèntí', meaning: '問題' },
    { chinese: '小时', pinyin: 'xiǎoshí', meaning: '時間' },
    { chinese: '姓', pinyin: 'xìng', meaning: '姓、名字' },
    { chinese: '雪', pinyin: 'xuě', meaning: '雪' },
    { chinese: '颜色', pinyin: 'yánsè', meaning: '色' },
    { chinese: '药', pinyin: 'yào', meaning: '薬' },
    { chinese: '意思', pinyin: 'yìsi', meaning: '意味' },
    { chinese: '右边', pinyin: 'yòubiān', meaning: '右' },
    { chinese: '左边', pinyin: 'zuǒbiān', meaning: '左' },
    { chinese: '运动', pinyin: 'yùndòng', meaning: '運動' },
    { chinese: '自行车', pinyin: 'zìxíngchē', meaning: '自転車' },
];



let currentWord;
let options;
let currentMode = 'pinyin';

function selectMode(mode) {
    currentMode = mode;
    document.getElementById('mode-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    nextQuestion();
}

function nextQuestion() {
    document.getElementById('result').textContent = '';

    // ボタンのスタイルをリセット
    const optionButtons = document.getElementsByClassName('option');
    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].classList.remove('correct', 'incorrect');
        optionButtons[i].disabled = false;
    }

    currentWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById('chinese-word').textContent = currentWord.chinese;

    generateOptions();
}

function generateOptions() {
    options = currentMode === 'pinyin' ? [currentWord.pinyin] : [currentWord.meaning];
    while (options.length < 4) {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        const option = currentMode === 'pinyin' ? randomWord.pinyin : randomWord.meaning;
        if (!options.includes(option)) {
            options.push(option);
        }
    }

    options.sort(() => Math.random() - 0.5);

    const optionButtons = document.getElementsByClassName('option');
    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].textContent = options[i];
    }
}

function checkAnswer(button) {
    const correctAnswer = currentMode === 'pinyin' ? currentWord.pinyin : currentWord.meaning;
    if (button.textContent === correctAnswer) {
        button.classList.add('correct');
        document.getElementById('result').textContent = 'Correct!';
    } else {
        button.classList.add('incorrect');
        document.getElementById('result').textContent = `Incorrect. The correct answer is ${correctAnswer}`;
    }

    // 全てのボタンを無効化
    const optionButtons = document.getElementsByClassName('option');
    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].disabled = true;
    }
}

// 初回の質問を生成
nextQuestion();
