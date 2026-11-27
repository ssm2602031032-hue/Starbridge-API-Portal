document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('[data-menu-toggle]')
  const menu = document.querySelector('[data-menu]')

  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const nextOpen = menu.getAttribute('data-open') !== 'true'
      menu.setAttribute('data-open', String(nextOpen))
      menuButton.setAttribute('aria-expanded', String(nextOpen))
    })
  }

  document.querySelectorAll('[data-copy-target]').forEach((button) => {
    button.addEventListener('click', async () => {
      const targetId = button.getAttribute('data-copy-target')
      const target = targetId ? document.getElementById(targetId) : null
      if (!target) return

      try {
        await navigator.clipboard.writeText(target.textContent || '')
        button.textContent = 'OK'
        button.setAttribute('aria-label', '已复制')
        window.setTimeout(() => {
          button.innerHTML = '&#x2398;'
          button.setAttribute('aria-label', '复制代码')
        }, 1400)
      } catch {
        button.textContent = '!'
        button.setAttribute('aria-label', '复制失败')
      }
    })
  })
})
