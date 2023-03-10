import React from 'react';
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
        'ライセンス',
        'らいせんす',
        '来仙す ライセンス',
        'らいせんすスキル'
    ],
    overview: `テキストてきすと文章。テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと文章。${"\n"}テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと文章。テキストてきすと、`,
    description: `ですくりぷしょんdescription、デスクリプション説明。ですくりぷしょんdescription、${"\n"}デスクリプション説明。ですくりぷしょんdescription、デスクリプション説明。ですくりぷしょんdescription、デスクリプション説明。ですくりぷしょんdescription、デスクリプション説明。ですくりぷしょんdescription、デスクリプション説明。ですくりぷしょんdescription、デスクリプション説明。ですくりぷしょんdescription、デスクリプション説明。${"\n"}ですくりぷしょんdescription、デスクリプション説明。ですくりぷしょんdescription、デスクリプション説明。`,
    career: [
        {
            title: 'title',
            icon: <AccessibilityNewIcon />,
            content: {
                title: 'Born',
                text: `あああああああああああああああああああああああああああああああ`
            }
        },
        {
            title: '2020',
            icon: <ComputerIcon />,
            content: {
                title: 'ｖなかｃま',
                text: `テキストテキストテキスト`
            }
        },
        {
            title: '2022',
            icon: <TipsAndUpdatesIcon />,
            content: {
                title: 'ヴぁｖなかｍヴぁあ',
                text: `うぎゃあああああああああああああああああああああああああああああああああああああああああああ`
            }
        },
        {
            title: 'Now',
            icon: <SensorOccupiedIcon />,
            content: {
                title: 'たあああああ',
                text: `てきすとおおおおおおおおお`
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
            text: 'ｂｖなさｓ'
        },
        {
            title: 'Music',
            text: '３３３３３３３３３３３３３３ｊｇｗ'
        },
        {
            title: 'Game',
            text: 'かっま？？？？？？'
        }
    ]
};