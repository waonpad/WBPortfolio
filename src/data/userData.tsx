import React, { useRef } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

export const projectName: string = 'Awesome Portfolio';

export type userData = {
    avatarPath: string;
    name: string;
    skills: string[];
    lisences: string[];
    overview: string;
    description: string;
    career: string; // 変更するかも
    links: {
        icon: JSX.Element;
        url: string;
    }[];
    fun: {
        title: string;
        text: string;
    }[];
}

const mailAddress = 'hoge@example.com';
const defaultSubject = '件名';
const defaultBody = 'メール本文';

export const user: userData = {
    avatarPath: 'profile/icon.png',
    name: '苗字 名前',
    skills: ['HTML', 'CSS', 'JS', 'React', 'TypeScript', 'PHP', 'Laravel', 'MySql', 'Docker', 'Git'],
    lisences: [
        '基本情報技術者',
        'Webデザイナー検定 エキスパート',
        '情報検定 情報活用試験2級',
        '情報検定 情報システム試験基本スキル'
    ],
    overview: `テキストてきすと文章。テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと文章。${"\n"}テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと文章。テキストてきすと、`,
    description: `ですくりぷしょんdescription、デスクリプション説明。ですくりぷしょんdescription、${"\n"}デスクリプション説明。ですくりぷしょんdescription、デスクリプション説明。ですくりぷしょんdescription、デスクリプション説明。ですくりぷしょんdescription、デスクリプション説明。ですくりぷしょんdescription、デスクリプション説明。ですくりぷしょんdescription、デスクリプション説明。ですくりぷしょんdescription、デスクリプション説明。${"\n"}ですくりぷしょんdescription、デスクリプション説明。ですくりぷしょんdescription、デスクリプション説明。`,
    career: `経歴キャリアcareerきゃりあ経歴キャリアcareerきゃりあ${"\n"}経歴キャリアcareerきゃりあ経歴キャリアcareerきゃりあ経歴キャリア${"\n"}careerきゃりあ経歴キャリアcareerきゃりあ経歴キャリアcareerきゃりあ`,
    links: [
        {
            icon: <GitHubIcon />,
            url: 'https://github.com'
        },
        {
            icon: <TwitterIcon />,
            url: 'https://twitter.com'
        },
        {
            icon: <EmailIcon />,
            url: `https://mail.google.com/mail/?view=cm&to=${mailAddress}&su=${defaultSubject}&body=${defaultBody}`
        }
    ],
    fun: [
        {
            title: 'Food',
            text: 'カレーは毎週絶対食べる'
        },
        {
            title: 'Music',
            text: '最近はFuture Funkがマイブーム'
        },
        {
            title: 'Game',
            text: '麻雀でリーチに突っ張る時が一番生を感じる'
        }
    ]
};