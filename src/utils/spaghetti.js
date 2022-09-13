// 在页面加载或更改主题时, 最好在`head`中添加内联以避免FOUC
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// 每当用户明确选择白天模式时
localStorage.theme = 'light'

// 每当用户明确选择黑夜模式时
localStorage.theme = 'dark'

// 每当用户明确选择跟随操作系统偏好时
localStorage.removeItem('theme')
