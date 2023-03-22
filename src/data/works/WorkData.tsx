export type WorkData = {
    id: number | string;
    title: string;
    links: {
        title: string;
        url: string;
    }[];
    builtWith: string[];
    thumbnail: {
        title: string;
        path: string;
    };
    images: {
        title: string;
        path: string;
    }[];
    overview: string;
    detail: string;
};


export const works: WorkData[] = [
    {
        id: 'wordleportal',
        title: 'WordlePortal',
        links: [
            {
                title: 'サイトリンク',
                url: 'http://wordleportal.com'
            },
            {
                title: 'GitHub',
                url: 'https://github.com/waonpad/WordlePortal'
            }
        ],
        builtWith: ['React', 'TypeScript', 'Firebase', 'Material-UI', 'Docker', 'Laravel'],
        thumbnail: {
            title: 'サムネイル',
            path: 'thumbnail.png'
        },
        images: [
            {
                title: 'イメージ1',
                path: '1w.png'
            },
            {
                title: 'イメージ2',
                path: '2w.png'
            },
            {
                title: 'イメージ3',
                path: '3w.png'
            }
        ],
        overview: '自分の好きな単語セットでWordleを作ったり、複数人で対戦・評価できるポータルサイト',
        detail: `Wordleというゲームが面白く興味を持ったのと、1つの画面に対して複数人が操作を加えるシステムを作成してみたかったので、このサイトを作成しました。

            さまざまな技術の学習と平行して作成したため今見ると何から何までめちゃくちゃですが、頑張ったと思います。
            デプロイはAWS EC2にDockerを使用して行いました。`
    },
    {
        id: 'gameclips',
        title: 'GameClips',
        links: [
            {
                title: 'サイトリンク',
                url: 'https://gameclips-de52b.web.app'
            },
            {
                title: 'GitHub',
                url: 'https://github.com/waonpad/GameClips'
            }
        ],
        builtWith: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
        thumbnail: {
            title: 'サムネイル',
            path: 'thumbnail.jpg'
        },
        images: [
            {
                title: 'イメージ1',
                path: 'gameclips1.jpg'
            },
        ],
        overview: 'ゲームのクリップを複数のSNSから持ち寄ったり、投稿できるサイト',
        detail: `Firebase関連の技術の学習と、Reactのベストプラクティスを学ぶために作成しました。

        bulletproof-reactをベースとして、Prettier, ESLintなどの恩恵に感動して涙を流しながら開発していました。
        App Checkによるセキュリティ設定まで一通りやってみましたが、圧倒的な快適さと引き換えにスキーマレスDBに散々苦しめられ、RDBが恋しくて毎日枕を濡らしていました。

        また、IGDBというゲームのデータベースサイトのAPIを使用して、投稿作成時のタイトルをサジェストするよう工夫しています。
        CORSを越えるためにCloud Functionsを中継していて、入力のたびにFunctionsと外部APIにリクエストが行くので、のちのちユーザーを入れていくなら今の設計だと爆発しかねないです・・・

        追加した機能は考えているので、継続して開発をしていきたいと思っています。`
    },
    // {
    //     id: ,
    //     title: ,
    //     links: [
    //         {
    //             title: ,
    //             url: ,
    //         },
    //     ],
    //     builtWith: [],
    //     thumbnail: {
    //         title: ,
    //         path: ,
    //     },
    //     images: [
    //         {
    //             title: ,
    //             path: ,
    //         },
    //     ],
    //     overview: ,
    //     detail: ,
    // },
];