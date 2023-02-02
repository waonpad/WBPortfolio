import React, { useRef } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

export const projectName: string = 'Awesome Portfolio';

export type userData = {
    avatarPath: string;
    name: string;
    skills: string[];
    overview: string;
    links: {
        icon: JSX.Element;
        url: string;
    }[];
}

const mailAddress = 'hoge@example.com';
const defaultSubject = '件名';
const defaultBody = 'メール本文';

export const user: userData = {
    avatarPath: 'profile/icon.png',
    name: '苗字 名前',
    skills: ['HTML', 'CSS', 'JS', 'React', 'TypeScript', 'PHP', 'Laravel', 'MySql', 'Docker', 'Git'],
    overview: `テキストてきすと文章。テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと文章。${"\n"}テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと文章。テキストてきすと、`,
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
    ]
};