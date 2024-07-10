
import html from '../assets/svg/skills/html.svg'
import css from '../assets/svg/skills/css.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import react from '../assets/svg/skills/react.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import tailwind from '../assets/svg/skills/tailwind.svg'
import c from '../assets/svg/skills/c.svg'
import cplusplus from '../assets/svg/skills/cplusplus.svg'
import java from '../assets/svg/skills/java.svg'
import python from '../assets/svg/skills/python.svg'
import git from '../assets/svg/skills/git.svg'
import materialui from '../assets/svg/skills/materialui.svg'
import microsoftoffice from '../assets/svg/skills/microsoftoffice.svg'
import nodejs from '../assets/svg/skills/nodejs.svg'
import express from '../assets/svg/skills/express.svg'
import redux from '../assets/svg/skills/redux.svg'
import ubantu from '../assets/svg/skills/ubantu.svg'

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'react':
            return react;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'tailwind':
            return tailwind;
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        case 'java':
            return java;
        case 'python':
            return python;
        case 'git':
            return git;
        case 'materialui':
            return materialui;
        case 'microsoft office':
            return microsoftoffice;
        case 'nodejs':
            return nodejs;
        case 'express':
            return express;
        case 'redux':
            return redux;
        case 'ubuntu':
            return ubantu;
        default:
            break;
    }
}
