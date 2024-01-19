import React from 'react'

import * as BsIcons from 'react-icons/bs'
import * as FiIcons from 'react-icons/fi'
// import * as FaIcons from 'react-icons/fa'
import * as BiIcons from 'react-icons/bi'




export const MenubarData = [
    {
        title: 'home',
        path: '/',
        icon: <BsIcons.BsHouseDoor />,
        clName: 'icon-text'
    },
    {
        title: 'Explore',
        path: '/explore',
        icon: <BsIcons.BsCompass />,
        clName: 'icon-text'
    },
    {
        title: 'Subscriptions',
        path: '/subscription',
        icon: <BsIcons.BsCollectionPlay />,
        clName: 'icon-text'
    },
    {
        title: 'Library',
        path: '/library',
        icon: <FiIcons.FiYoutube />,
        clName: 'icon-text'
    },
    {
        title: 'History',
        path: '/history',
        icon: <BiIcons.BiHistory />,
        clName: 'icon-text'
    },
    {
        title: 'Your videos',
        path: '/yourVideos',
        icon: <BsIcons.BsPlayBtn />,
        clName: 'icon-text'
    },
    {
        title: 'Watch later',
        path: '/watchLater',
        icon: <BsIcons.BsClock />,
        clName: 'icon-text'
    },
    {
        title: 'Liked videos',
        path: '/liked',
        icon: <BsIcons.BsHandThumbsUp />,
        clName: 'icon-text'
    },
    {
        title: 'Show more',
        path: '/showMore',
        icon: <BsIcons.BsChevronDown />,
        clName: 'icon-text'
    }
]

export default MenubarData;