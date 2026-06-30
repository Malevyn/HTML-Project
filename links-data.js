/* ============================================
   WINDOWS 98 DESKTOP - LINKS DATA
   ============================================
   
   This file contains all the hardcoded links and
   folders that will be displayed on the desktop.
   
   Structure:
   - Type: 'folder' or 'link'
   - Icon: Emoji or Unicode character
   - Label: Display name
   - Items: Array of links (for folders)
   - URL: Link destination (for links)
*/

const desktopData = [
    {
        type: 'folder',
        icon: '📁',
        label: 'Web Dev Tools',
        items: [
            {
                type: 'link',
                icon: '🌐',
                label: 'MDN Web Docs',
                url: 'https://developer.mozilla.org'
            },
            {
                type: 'link',
                icon: '🔴',
                label: 'Stack Overflow',
                url: 'https://stackoverflow.com'
            },
            {
                type: 'link',
                icon: '⚫',
                label: 'GitHub',
                url: 'https://github.com'
            },
            {
                type: 'link',
                icon: '📘',
                label: 'CSS Tricks',
                url: 'https://css-tricks.com'
            }
        ]
    },
    {
        type: 'folder',
        icon: '📁',
        label: 'Design Resources',
        items: [
            {
                type: 'link',
                icon: '🎨',
                label: 'Figma',
                url: 'https://www.figma.com'
            },
            {
                type: 'link',
                icon: '🖼️',
                label: 'Unsplash',
                url: 'https://unsplash.com'
            },
            {
                type: 'link',
                icon: '🎭',
                label: 'Adobe Color',
                url: 'https://color.adobe.com'
            }
        ]
    },
    {
        type: 'folder',
        icon: '📁',
        label: 'Utilities',
        items: [
            {
                type: 'link',
                icon: '🔧',
                label: 'Regex101',
                url: 'https://regex101.com'
            },
            {
                type: 'link',
                icon: '📐',
                label: 'Can I Use',
                url: 'https://caniuse.com'
            },
            {
                type: 'link',
                icon: '⚡',
                label: 'PageSpeed Insights',
                url: 'https://pagespeed.web.dev'
            }
        ]
    },
    {
        type: 'link',
        icon: '💾',
        label: 'My Computer',
        url: null,
        action: 'open-computer'
    },
    {
        type: 'link',
        icon: '🗑️',
        label: 'Recycle Bin',
        url: null,
        action: 'recycle-bin'
    }
];