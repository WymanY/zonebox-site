export type Lang = 'zh' | 'en';

export const DOWNLOAD_DMG =
  'https://github.com/WymanY/ZoneBox/releases/download/0.2/ZoneBox-0.2-arm64.dmg';
export const RELEASES_URL = 'https://github.com/WymanY/ZoneBox/releases/latest';
export const GITHUB_URL = 'https://github.com/WymanY/ZoneBox';

export const copy = {
  zh: {
    brand: 'ZoneBox',
    navFeatures: '功能',
    navPrivacy: '隐私',
    navDownload: '下载',
    langSwitch: 'EN',
    langAria: 'Switch to English',
    heroKicker: 'macOS 菜单栏工具',
    heroTitle: '在屏幕上划出分区，窗口落到该去的地方。',
    heroBody:
      'ZoneBox 常驻时钟旁边，没有 Dock 图标。拖一下或按个快捷键，窗口就吸附进编号分区。',
    download: '下载 0.2',
    downloadMeta: 'macOS 14+ · Apple Silicon · 已公证',
    otherRelease: '查看 GitHub Release',
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
        body: '当前 0.2 是 Apple Silicon 直装包，拖进“应用程序”即可。',
      },
      {
        title: '数据留在本机',
        body: '布局和工作区保存在你的 Mac 上。没有账号，也不上传窗口内容。',
      },
    ],
    ctaTitle: '把窗口放进自己的格子里',
    ctaBody: '下载公证过的 0.2，装完先走一遍欢迎引导。',
    footerPrivacy: '隐私',
    footerGithub: 'GitHub',
    footerNote: '© 2026 Wyman. 目前仅提供 Apple Silicon 安装包。',
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
    langSwitch: '中文',
    langAria: '切换到中文',
    heroKicker: 'macOS menu-bar utility',
    heroTitle: 'Draw zones. Snap windows into them.',
    heroBody:
      'ZoneBox lives next to the clock. There is no Dock icon. Drag a window or press a key, and it lands in a numbered zone.',
    download: 'Download 0.2',
    downloadMeta: 'macOS 14+ · Apple Silicon · notarized',
    otherRelease: 'GitHub Release',
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
        body: '0.2 is an Apple Silicon disk image. Drag ZoneBox.app into Applications.',
      },
      {
        title: 'Stays on the Mac',
        body: 'Layouts and workspaces are saved locally. There is no account, and window contents are not uploaded.',
      },
    ],
    ctaTitle: 'Put windows in their places',
    ctaBody: 'Download notarized 0.2, then walk through the welcome tour.',
    footerPrivacy: 'Privacy',
    footerGithub: 'GitHub',
    footerNote: '© 2026 Wyman. Apple Silicon only for now.',
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
