import React, { useRef } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ComputerIcon from '@mui/icons-material/Computer';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';

export const projectName: string = 'Awesome Portfolio';

export type userData = {
    avatarPath: string;
    name: string;
    skills: string[];
    lisences: string[];
    overview: string;
    description: string;
    career: {
        title: string;
        icon?: JSX.Element;
        content: {
            title: string;
            text: string;
        }
    }[];
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
    career: [
        {
            title: '2001 / 4 / 7',
            icon: <AccessibilityNewIcon />,
            content: {
                title: 'Born',
                text: `大阪で産まれる。${"\n"}3歳の時に愛知に引っ越してきたので関西弁は喋れない`
            }
        },
        {
            title: '2020 / 4',
            icon: <ComputerIcon />,
            content: {
                title: 'Enrollment',
                text: `HAL名古屋に入学。${"\n"}テキストテキストテキスト`
            }
        },
        {
            title: '2022 / 7',
            icon: <TipsAndUpdatesIcon />,
            content: {
                title: 'Inflection Point',
                text: `React, TypeScript, Laravel, Material UIに出会う。${"\n"}これまでフレームワークと言えばJQueryくらいしか触っていなかったため情報量の多さに圧倒されながらプログラミングが一気に楽しくなる。`
            }
        },
        {
            title: 'Now',
            icon: <SensorOccupiedIcon />,
            content: {
                title: 'Job Hunting',
                text: `就職活動中...`
            }
        },
        // {
        //     title: '',
        //     icon: undefined,
        //     content: {
        //         title: '',
        //         text: ``
        //     }
        // },
    ],
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