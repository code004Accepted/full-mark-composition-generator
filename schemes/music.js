schemes['music'] = {
    //三个学科 其中第一个是主学科 后两个是相关学科
    subj: ['音乐', '作曲技术理论', '美学'],
    //至少1个有关第一个学科的 字面上可以解释为物理结构的词
    stru: ['琴'],
    //至少9个有关第一个学科的名人名言
    cele: [
        ['欣德米特', '音乐是无意义的噪音，除非它触动了接受的心灵。'],
        ['圣伊多禄', '现在的音乐终将消逝，留下的只有将来的记忆。'],
        ['叔本华', '音乐，是任何地方都可以理解的真正的普遍性语言。'],
        ['狄德罗', '好的音乐是非常接近原始语言的。'],
        ['贝多芬', '若是为了更美丽的东西的话，任何规则都可以破坏。'],
        ['卡拉扬', '我可容忍一个错误的音符，绝不能容忍节奏有一点儿谬误。'],
        ['萧伯纳', '所有伟大的艺术和文学都是宣传。'],
        ['江文也', '如果我贫乏的本能不能对那音乐有任何感觉，就算知道它们的历史和理论又能如何呢？'],
        ['何训田', '每个人都有自己的香型。'],
    ],
    //至少3个有关第一个学科的思想（主义）
    prin: ['传统', '后现代', '超现代'],
    //至少3个有关第一个学科的性质
    prop: ['流传变异', '即兴', '审美错位'],
    //至少6个有关第一个学科的概念
    conc: ['新音乐学', '审美', '社会介入', '民族志', '乐谱文本', '人工智能音乐'],
    init: function (){
        shuffle(this.stru);
        shuffle(this.cele);
        shuffle(this.prin);
        shuffle(this.prop);
        shuffle(this.conc);
    }
}
