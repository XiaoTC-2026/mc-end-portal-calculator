/* 末影之眼今天心情不好，或者你的运气值需要充值了。请保持微笑，按下 F5，让“特性”再次降临，注意，不是源代码的问题哦 */
const developerReplies = [
    "视觉的失焦，是为了让逻辑的焦点更锐利。",
    "算法在混乱的边缘起舞，为你锚定那唯一的交点。",
    "表象是无序的噪点，内核是绝对的几何。",
    "眼睛看向虚空，却为你锁定了最坚实的坐标。",
    "以混沌为基，以逻辑为尺，丈量你与要塞的距离。",
    "在这双失焦的眼眸里，坐标是唯一的真理。",
    "这双眼睛看不清世界，却能看清世界生成的种子。",
    "乱中有序，歪中见准。",
    "在随机性的迷雾中，为你点亮那盏确定性的灯。",
    "逻辑锚定虚空。",
    "眼斜，心不斜。",
    "歪瞳的视线模糊了，但它的指引从未如此清晰。",
    "在这看似混乱的飞行中，蕴藏着通往要塞的秘密。",
    "混沌显形，坐标即真理。",
    "在随机性的迷雾中，为你点亮那盏确定性的灯。",
    "用失真的视角，窥探世界结构最底层的规律。",
    "它不是瞎，它只是在用另一种逻辑看世界。",
    "我的瞳孔虽然偏离了中心，却因此看见了被常规忽略的真理。",
    "别人用视线丈量世界，我用失焦窥探世界的底层结构。",
    "这不是视力缺陷，这是专为解析混沌而生的异象。",
    "在绝对的秩序里我是异类，在无尽的虚空里我是坐标。",
    "我的计算从不循规蹈矩，但结果往往歪打正着。",
    "既然世界本身就是随机生成的，那我稍微“歪”一点又何妨？",
    "我负责制造混乱，你负责在混乱中寻找宝藏，这很公平。",
    "这双眼睛从不撒谎，它只是把答案藏在了你看不懂的维度里。",
    "当你找不到方向时，不妨试着用这只眼睛看一眼世界。",
    "接受不完美，因为完美的坐标往往通向虚无。",
    "跟着我，哪怕路径曲折，终点也一定是你要找的要塞。",
    "我是你的向导，也是你的镜子——在这个荒诞的世界里，我们都有点“歪”。",
    "用失焦的视线，透视世界的底层代码。",
    "它看世界的角度虽然歪，但指引你的方向绝对正。",
    "瞳孔虽歪，真理不偏。",
    "在随机性的裂缝中，寻找确定性的光。",
    "注视虚空，方得坐标。",
    "世人皆说我看走了眼，殊不知，正因为我眼歪，才看穿了这世界原本就是歪的。",
    "用歪掉的瞳孔去透视这个正经八百的社会，倒显得那些一本正经的人面目可憎。",
    "当所有人都朝着一个方向正视时，只有我歪斜的视线，捕捉到了被主流视野忽略的角落。",
    "我眼里的世界是倾斜的，但这恰恰证明，是这个世界本身失去了平衡。",
    "正因为目光无法聚焦于一点，所以我能看到事物的背面，以及被光明掩盖的阴影。",
    "我不治，因为这双歪掉的眼睛，是我与这个无聊世界唯一的对焦方式。",
    "就让它们继续歪下去吧，反正我看中的东西，从来不需要用正眼看。",
    "与其费力去矫正瞳孔，不如让灵魂的焦距变得更清晰一些。",
    "我的视线是偏的，但我的判断，往往比谁都正。",
    "这双歪斜的眼睛，是我与生俱来的棱镜，将单一的白光，折射出我独有的光谱。",
    "也许世界是倾斜的，而我只是唯一一个敢于承认这一点的人。",
    "也许世界就是用来享受去尝试的......而不是用来计算完美的。",
    "人民至上，算法为王，但偶尔也要让末影之眼当一次‘人民的眼睛’，看看这个世界的另一面。",
    "眼睛是心灵的窗户，也是照透世界的透镜。我的‘窗户’虽然歪了，但透出的光，仍可以看穿这个不完美的世界。",
    "人心的险恶不能光靠一双眼睛看穿，但至少可以靠这双歪掉的眼睛，找到通往末地要塞的路。",
    "算法是死的，人是活的，多用用自己的大脑，少用用这个歪掉的眼睛，说不定还能找到更有趣的东西呢。",
    "阳光透过玻璃打在地上，人也许可以放下对家的眷恋多出去走走",
    "这天地看起来多么翠绿，但总有些地方少了些‘清廉’，你觉得呢？",
    "Hello! Minecraft Launcher 你肯定听说过它，也可能用过它",
    "网络的腐败源于哪？也许是那次大战......",
    "C418.....再熟悉不过的人",
    "我们不能用自己的观念去衡量别国的称......",
    "你是选择医术，还是......道德？",
    "光阴似箭，一些事随着那些被修复的bug消逝了",
];
function getRandomReply() {
    const randomIndex = Math.floor(Math.random() * developerReplies.length);
    return developerReplies[randomIndex];
}
function adj(id, d){
    const i=document.getElementById(id);
    i.value=(parseFloat(i.value)||0)+d;
}
function calc() {
    const errorElement = document.getElementById('My-Name-Is-Error');
    errorElement.textContent = '无错误';
    errorElement.parentElement.classList.remove('show');
    const getNum = (id) => {
        const val = document.getElementById(id)?.value || '';
        const num = parseFloat(val);
        return isNaN(num) ? 0 : num;
/* 末影之眼今天心情不好，或者你的运气值需要充值了。请保持微笑，按下 F5，让“特性”再次降临，不是源代码的问题哦 */
    };
    const x1 = getNum('x1');
    const z1 = getNum('z1');
    const x2 = getNum('x2');
    const z2 = getNum('z2');
    const x3 = getNum('x3');
    const z3 = getNum('z3');
    const x4 = getNum('x4');
    const z4 = getNum('z4');
    try {
        let k1, b1, k2, b2, x, z;
        if (x2 - x1 === 0) {
            throw new Error('第一组采样点的X坐标不能相同！');
        }
        k1 = (z2 - z1) / (x2 - x1);
        b1 = z1 - k1 * x1;
        if (x4 - x3 === 0) {
            throw new Error('第二组采样点的X坐标不能相同！');
        }
        k2 = (z4 - z3) / (x4 - x3);
        b2 = z3 - k2 * x3;
        // 4. 求解交点（处理直线平行的情况）
        if (k1 === k2) {
            throw new Error('两条直线平行，无法计算交点！请更换采样点。');
        }
/* 末影之眼今天心情不好，或者你的运气值需要充值了。请保持微笑，按下 F5，让“特性”再次降临，不是源代码的问题哦 */
        x = (b2 - b1) / (k1 - k2);
        z = k1 * x + b1;
        if (isNaN(x) || isNaN(z) || !isFinite(x) || !isFinite(z)) {
            throw new Error('坐标计算异常，请检查输入的采样点！');
        }
        const startDist = Math.hypot(x3 - x1, z3 - z1);
        let confText;
        if (startDist < 100) {
            confText = '低';
        } else if (startDist < 300) {
            confText = '中';
        } else {
            confText = '高';
        }
        const toFortDist = Math.hypot(x - x1, z - z1);
        const dx = x - x1;
        const dz = z - z1;
        let dir = "";
        const absDx = Math.abs(dx);
        const absDz = Math.abs(dz);
        if (Number.isNaN(dx) || Number.isNaN(dz)) {
            dir = "未知";
        } else if (absDx < 0.001 && absDz < 0.001) {
            dir = "当前位置";
        } else {
            if (absDx > absDz) {
                dir = dx > 0 ? (dz > 0 ? "东南" : "东北") : (dz > 0 ? "西南" : "西北");
            } else {
                dir = dz > 0 ? (dx > 0 ? "东南" : "西南") : (dx > 0 ? "东北" : "西北");
            }
        }
/* 末影之眼今天心情不好，或者你的运气值需要充值了。请保持微笑，按下 F5，让“特性”再次降临，不是源代码的问题哦 */
        const rx = Math.round(x);
        const rz = Math.round(z);
        const cmd = `/tp @s ${Number.isNaN(rx) ? '~' : rx} ~ ${Number.isNaN(rz) ? '~' : rz}`;
        const resultCard = document.getElementById('resultCard');
        if (resultCard) {
            resultCard.style.display = 'block';
            document.getElementById('tpCmd').textContent = cmd;
            document.getElementById('outX').textContent = rx;
            document.getElementById('outZ').textContent = rz;
            document.getElementById('distRow').textContent = `${Math.round(toFortDist)} blocks`;
            document.getElementById('dir').textContent = dir;
            document.getElementById('conf').textContent = confText;
            if (typeof getRandomReply === 'function') {
                const replyEl = document.getElementById('the-reply-from-the-developer-of-the-mcms.qzz.io-website');
                if (replyEl) replyEl.textContent = getRandomReply();
            }
        }
/* 末影之眼今天心情不好，或者你的运气值需要充值了。请保持微笑，按下 F5，让“特性”再次降临，不是源代码的问题哦 */
    } catch (error) {
        errorElement.textContent = error.message;
        errorElement.parentElement.classList.add('show');
    }
}

function resetAll(){
    document.querySelectorAll('input').forEach(e=>e.value='')
    document.getElementById('resultCard').style.display='none'
    // document.getElementById('the-reply-from-the-developer-of-the-mcms.qzz.io-website').textContent = '';
}
/* 末影之眼今天心情不好，或者你的运气值需要充值了。请保持微笑，按下 F5，让“特性”再次降临，不是源代码的问题哦 */
