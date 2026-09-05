export type Lang = 'zh' | 'en';

export const DOWNLOAD_DMG =
  'https://github.com/WymanY/ZoneBox/releases/download/0.3/ZoneBox-0.3.dmg';
export const RELEASES_URL = 'https://github.com/WymanY/ZoneBox/releases/latest';
export const GITHUB_URL = 'https://github.com/WymanY/ZoneBox';

export const copy = {
  zh: {
    brand: 'ZoneBox',
    navFeatures: '功能',
    navPrivacy: '隐私',
    navDownload: '下载',
    navGuide: '教程',
    langSwitch: 'EN',
    langAria: 'Switch to English',
    themeAria: '外观',
    themeSystem: '跟随系统',
    themeLight: '浅色',
    themeDark: '深色',
    heroKicker: 'macOS 菜单栏工具',
    heroTitle: '在屏幕上划出分区，窗口落到该去的地方。',
    heroBody:
      'ZoneBox 常驻时钟旁边，没有 Dock 图标。拖一下或按个快捷键，窗口就吸附进编号分区。',
    download: '下载 0.3',
    downloadMeta: 'macOS 14+ · Apple Silicon 与 Intel · 已公证',
    otherRelease: '查看 GitHub Release',
    guideTitle: '怎么用',
    guideBody: 'ZoneBox 住在菜单栏。先开辅助功能，再选布局，然后把窗口送进分区。下面六项是它真正和普通分屏不一样的地方。',
    guideHint: '装完后会弹出欢迎引导，也可以随时右键菜单栏图标再看一遍。',
    guides: [
      {
        id: 'find',
        title: '先找到它',
        kicker: '菜单栏，没有 Dock 图标',
        why: '装完看起来像没开。它在时钟旁边，左键打开面板，右键打开菜单。',
        steps: [
          '打开 ZoneBox.app，看菜单栏时钟左边有没有分区图标。',
          '左键点图标打开面板，右键打开菜单。',
          '第一次会弹出欢迎引导：认识产品、开权限、选布局、试一次吸附。',
        ],
        keys: [],
      },
      {
        id: 'access',
        title: '打开辅助功能',
        kicker: '不授权就动不了别人家的窗口',
        why: '吸附、分隔杆、工作区归位都要移动其他应用的窗口。权限只留在这台 Mac 上。',
        steps: [
          '引导里点打开辅助功能设置，打开 ZoneBox 开关。',
          '如果开关已经开了但还是不能吸附，用退出并重新打开。',
          '之后随时可以在系统设置里关掉。关掉后图标还在，只是不再移动窗口。',
        ],
        keys: [],
      },
      {
        id: 'snap',
        title: '吸附第一个窗口',
        kicker: '分区亮起来，窗口落进去',
        why: '这不是系统左右分屏。你自己决定格子的大小和位置，窗口按编号落点。',
        steps: [
          '按住窗口标题栏拖动，不要从内容区域拖。',
          '按住 Shift，或拖动时点一下右键，当前鼠标所在显示器会亮出分区。',
          '丢到编号分区上，或在分区显示时按 1 到 9。也可以直接 Control+Option+1…9。',
        ],
        keys: ['Shift', '⌃⌥1…9'],
      },
      {
        id: 'editor',
        title: '画自己的布局',
        kicker: '每个显示器各自记住一套',
        why: '超宽屏可以三列，笔记本可以自己画编辑器加大预览。布局跟着显示器走，不是全局一份。',
        steps: [
          '菜单栏选打开布局编辑器，或按 Control+Option+Z。',
          '从列、行、2×2 开始，或在空白处拖出新分区。',
          '保存后，这套布局只作用在鼠标所在的那块屏。',
        ],
        keys: ['⌃⌥Z'],
      },
      {
        id: 'divider',
        title: '拖分隔杆改两边',
        kicker: '一次改两个窗口，比例写回布局',
        why: '系统分屏松手就忘了。ZoneBox 把新比例存进当前布局，下次吸附还是这个宽。',
        steps: [
          '先把两个相邻分区各放进一个窗口。',
          '中间缝上会出现分隔杆。',
          '拖动它，两个窗口一起改大小，比例保存回这套布局。',
        ],
        keys: [],
      },
      {
        id: 'workspace',
        title: '一键把工作区叫回来',
        kicker: '记住谁住在哪个格子',
        why: '编码、写作、参考资料可以做成不同方案。回来时窗口按原位归位，不用重新摆。',
        steps: [
          '把常用应用放进各自的分区。',
          '在菜单栏保存为工作区方案。',
          '下次用快捷键或菜单把这一组窗口全部召回。',
        ],
        keys: [],
      },
    ],
    stepsTitle: '三步上手',
    steps: [
      {
        n: '01',
        title: '划出分区',
        body: '一套布局就是一个显示器上的一组带编号分区。先选列、行、2×2，或自己画。每个显示器各自记住一套。',
      },
      {
        n: '02',
        title: '吸附窗口',
        body: '按住标题栏拖动，再按 Shift 或点一下右键，分区就会亮起来。也可以用 Control+Option+1…9 把当前窗口送进去。',
      },
      {
        n: '03',
        title: '一键归位',
        body: '工作区方案记住每个应用住在哪个分区。下次打开，窗口按原位回来。',
      },
    ],
    featuresTitle: '吸附之外',
    features: [
      {
        title: '布局编辑器',
        body: '列、行、2×2，或自由画分区。Control+Option+Z 打开。',
      },
      {
        title: '分隔杆',
        body: '相邻两个分区各放一个窗口后，拖动中间的缝，一次改两边比例并保存回布局。',
      },
      {
        title: '工作区方案',
        body: '记住每个应用住在哪个分区，一键全部归位。',
      },
      {
        title: '置顶与快速吸附',
        body: '悬停标题栏可以把窗口固定在最前；快捷键为当前窗口呼出分区编号。',
      },
    ],
    trustTitle: '给本机窗口用的工具',
    trust: [
      {
        title: '原生 AppKit',
        body: '菜单栏常驻，没有 Dock 图标。左键打开面板，右键打开菜单。',
      },
      {
        title: 'Developer ID + 公证',
        body: '当前 0.3 是通用二进制直装包，Apple Silicon 和 Intel 都能用，拖进“应用程序”即可。',
      },
      {
        title: '数据留在本机',
        body: '布局和工作区保存在你的 Mac 上。没有账号，也不上传窗口内容。',
      },
    ],
    ctaTitle: '把窗口放进自己的格子里',
    ctaBody: '下载公证过的 0.3，装完先走一遍欢迎引导。',
    footerPrivacy: '隐私',
    footerGithub: 'GitHub',
    footerNote: '© 2026 Wyman. 0.3 同时支持 Apple Silicon 和 Intel。',
    privacyTitle: '隐私',
    privacyIntro:
      'ZoneBox 是装在你 Mac 上的菜单栏应用。它要移动窗口，所以需要辅助功能权限。它不设账号，也不把窗口内容送到网上。',
    privacySections: [
      {
        title: '本机保存的内容',
        body: '布局、工作区方案和设置以 JSON 写在本机 Application Support。这些文件不会被 ZoneBox 上传。',
      },
      {
        title: '辅助功能',
        body: '吸附、分隔杆、工作区归位都要移动其他应用的窗口，因此需要辅助功能。你可以随时在系统设置里关掉。关掉后，ZoneBox 仍留在菜单栏，但不会再移动窗口。',
      },
      {
        title: '屏幕录制',
        body: '只有在使用置顶预览等需要画面的功能时，才会申请屏幕录制。首页下载和普通吸附都不需要这项权限。',
      },
      {
        title: '没有账号和遥测',
        body: '没有登录、没有云同步、没有使用统计。下载走 GitHub Release，不经过 ZoneBox 自己的服务器。',
      },
      {
        title: '联系',
        body: '有问题可以在 GitHub 仓库提 issue。',
      },
    ],
    backHome: '返回首页',
    heroAlt: '超宽显示器上，编辑器、浏览器和终端分别落在四块荧光绿分区里。',
  },
  en: {
    brand: 'ZoneBox',
    navFeatures: 'Features',
    navPrivacy: 'Privacy',
    navDownload: 'Download',
    navGuide: 'Guide',
    langSwitch: '中文',
    langAria: '切换到中文',
    themeAria: 'Appearance',
    themeSystem: 'System',
    themeLight: 'Light',
    themeDark: 'Dark',
    heroKicker: 'macOS menu-bar utility',
    heroTitle: 'Draw zones. Snap windows into them.',
    heroBody:
      'ZoneBox lives next to the clock. There is no Dock icon. Drag a window or press a key, and it lands in a numbered zone.',
    download: 'Download 0.3',
    downloadMeta: 'macOS 14+ · Apple Silicon and Intel · notarized',
    otherRelease: 'GitHub Release',
    guideTitle: 'How to use it',
    guideBody: 'ZoneBox lives in the menu bar. Turn on Accessibility, pick a layout, then send windows into zones. These six pieces are what make it different from macOS Split View.',
    guideHint: 'The welcome tour appears on first launch. Replay it anytime from the menu-bar icon.',
    guides: [
      {
        id: 'find',
        title: 'Find it first',
        kicker: 'Menu bar, no Dock icon',
        why: 'After install it can look like nothing launched. It sits next to the clock. Left-click the panel, right-click the menu.',
        steps: [
          'Open ZoneBox.app and look just left of the clock for the zone icon.',
          'Left-click for the panel, right-click for the menu.',
          'The first launch opens a welcome tour: what it is, Accessibility, a starting layout, and one snap.',
        ],
        keys: [],
      },
      {
        id: 'access',
        title: 'Turn on Accessibility',
        kicker: 'It cannot move other apps without this',
        why: 'Snapping, divider handles, and workspace restore all move other windows. The permission stays on this Mac.',
        steps: [
          'In the tour, open Accessibility settings and enable ZoneBox.',
          'If the switch is on but snapping still fails, quit and reopen.',
          'You can turn it off later in System Settings. The icon stays; windows stop moving.',
        ],
        keys: [],
      },
      {
        id: 'snap',
        title: 'Snap the first window',
        kicker: 'Zones light up, the window lands',
        why: 'This is not system Split View. You choose the rectangles. Windows land on numbered zones.',
        steps: [
          'Drag by the title bar, not from the window contents.',
          'Hold Shift, or right-click once while dragging, to show zones on the display under the cursor.',
          'Drop on a numbered zone, or press 1–9 while zones are showing. Control+Option+1…9 also works.',
        ],
        keys: ['Shift', '⌃⌥1…9'],
      },
      {
        id: 'editor',
        title: 'Draw your own layout',
        kicker: 'Each display keeps its own',
        why: 'An ultrawide can be three columns; a laptop can be an editor plus a preview you drew. Layouts follow the display, not one global set.',
        steps: [
          'Open the layout editor from the menu bar, or press Control+Option+Z.',
          'Start from columns, rows, or 2×2, or drag out a new pane.',
          'Save. That layout applies to the display under the mouse.',
        ],
        keys: ['⌃⌥Z'],
      },
      {
        id: 'divider',
        title: 'Drag the seam',
        kicker: 'Resize both windows, keep the ratio',
        why: 'Split View forgets the split. ZoneBox writes the new ratio back into the current layout.',
        steps: [
          'Snap one window into each of two neighboring zones.',
          'A divider handle appears in the seam.',
          'Drag it. Both windows resize, and the ratio is saved.',
        ],
        keys: [],
      },
      {
        id: 'workspace',
        title: 'Call the workspace back',
        kicker: 'Remember which app lives where',
        why: 'Coding, writing, and research can be separate setups. Come back later and the windows return to their zones.',
        steps: [
          'Place your usual apps into their zones.',
          'Save that arrangement as a workspace from the menu bar.',
          'Restore it later from the shortcut or the menu.',
        ],
        keys: [],
      },
    ],
    stepsTitle: 'How it works',
    steps: [
      {
        n: '01',
        title: 'Draw zones',
        body: 'A layout is a set of numbered zones for one display. Start from columns, rows, or 2×2, or draw your own. Each display keeps its own layout.',
      },
      {
        n: '02',
        title: 'Snap a window',
        body: 'Drag by the title bar, then hold Shift or right-click to show the zones. Or press Control+Option+1…9 to send the focused window in.',
      },
      {
        n: '03',
        title: 'Bring it all back',
        body: 'A workspace remembers which app lives in which zone, then restores the arrangement later.',
      },
    ],
    featuresTitle: 'Beyond snapping',
    features: [
      {
        title: 'Layout editor',
        body: 'Columns, rows, 2×2, or freehand zones. Open with Control+Option+Z.',
      },
      {
        title: 'Divider handles',
        body: 'Snap two neighbors, then drag the seam to resize both and save the ratio.',
      },
      {
        title: 'Workspaces',
        body: 'Remember which app lives in which zone, then restore them in one step.',
      },
      {
        title: 'Pin and Quick Snap',
        body: 'Hover a title bar to pin a window on top. A shortcut shows zone numbers for the focused window.',
      },
    ],
    trustTitle: 'A tool for windows on this Mac',
    trust: [
      {
        title: 'Native AppKit',
        body: 'It lives in the menu bar, with no Dock icon. Left-click the panel, right-click the menu.',
      },
      {
        title: 'Developer ID + notarized',
        body: '0.3 is a universal disk image for Apple Silicon and Intel. Drag ZoneBox.app into Applications.',
      },
      {
        title: 'Stays on the Mac',
        body: 'Layouts and workspaces are saved locally. There is no account, and window contents are not uploaded.',
      },
    ],
    ctaTitle: 'Put windows in their places',
    ctaBody: 'Download notarized 0.3, then walk through the welcome tour.',
    footerPrivacy: 'Privacy',
    footerGithub: 'GitHub',
    footerNote: '© 2026 Wyman. 0.3 covers Apple Silicon and Intel.',
    privacyTitle: 'Privacy',
    privacyIntro:
      'ZoneBox is a menu-bar app on your Mac. It needs Accessibility because it moves windows. It has no accounts and does not send window contents to a server.',
    privacySections: [
      {
        title: 'What stays on this Mac',
        body: 'Layouts, workspace profiles, and settings are JSON files in Application Support. ZoneBox does not upload them.',
      },
      {
        title: 'Accessibility',
        body: 'Snapping, divider handles, and workspace restore all move other apps’ windows, so Accessibility is required. You can turn it off in System Settings at any time. ZoneBox stays in the menu bar, but it will not move windows.',
      },
      {
        title: 'Screen Recording',
        body: 'Screen Recording is requested only for features that need a picture of a window, such as pin preview. Ordinary snapping and the download on this site do not need it.',
      },
      {
        title: 'No accounts, no telemetry',
        body: 'There is no sign-in, no cloud sync, and no usage analytics. Downloads come from GitHub Releases, not a ZoneBox server.',
      },
      {
        title: 'Contact',
        body: 'Open an issue on the GitHub repository.',
      },
    ],
    backHome: 'Back to home',
    heroAlt:
      'An ultrawide display with an editor, browser, and terminal sitting inside four lime-green zones.',
  },
} as const;

export type Copy = (typeof copy)[Lang];
