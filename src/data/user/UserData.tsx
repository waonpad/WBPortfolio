import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ComputerIcon from '@mui/icons-material/Computer';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';

export const projectName: string = 'Asai Kazuto';

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

const mailAddress = 'asaikazuto0407@gmail.com';
const defaultSubject = '';
const defaultBody = '';

export const user: userData = {
    avatarPath: 'icon.jpg',
    name: '浅井 和音',
    skills: ['HTML', 'CSS', 'JS', 'React', 'TypeScript', 'PHP', 'Laravel', 'MySql', 'Docker', 'Git', 'Firebase'],
    lisences: [
        '基本情報技術者',
        'Webデザイナー検定 エキスパート',
        '情報検定 情報活用試験2級',
        '情報検定 情報システム試験基本スキル',
        'Azure Fundamentals'
    ],
    overview: `Web制作を中心に活動しています。誰もが気持ちよく利用できるデザイン、コーディングを目標にしています。

        最近Javaを勉強し始めました。`,
    description: `Web制作を中心に活動しています。誰もが気持ちよく利用できるデザイン、コーディングを目標にしています。

        プログラミングの事なら時間を忘れて熱中してしまうので、気づいたら深夜ということもよくあります。`,
    career: [
        {
            title: '2001 / 4 / 7',
            icon: <AccessibilityNewIcon />,
            content: {
                title: 'Born',
                text: `
                    大阪で産まれる。
                    3歳の時に愛知に引っ越してきたので関西弁は喋れない
                `
            }
        },
        {
            title: '2020 / 4',
            icon: <ComputerIcon />,
            content: {
                title: 'Enrollment',
                text: `HAL名古屋に入学。${"\n"}`
            }
        },
        {
            title: '2022 / 7',
            icon: <TipsAndUpdatesIcon />,
            content: {
                title: 'Inflection Point',
                text: `React, TypeScript, Laravel, Material UIに出会う。
                    これまでフレームワークと言えばJQueryくらいしか触っていなかったため、情報量の多さに圧倒されながらプログラミングが一気に楽しくなる。`
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
            url: 'https://github.com/waonpad'
        },
        {
            icon: <TwitterIcon />,
            url: 'https://twitter.com/ATTACK3500'
        },
        {
            icon: <EditIcon />,
            url: 'https://qiita.com/ATTACK3500'
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