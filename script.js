const html = document.documentElement
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
const fine = matchMedia('(hover: hover) and (pointer: fine)').matches

/* Theme toggle: paper ⇄ green, remembered, with a circular wipe from the button. */

const mode = document.querySelector('.mode')
const themeColor = document.querySelector('meta[name="theme-color"]')

const syncMode = () => {
  const ink = html.dataset.mode === 'ink'
  mode.setAttribute('aria-label', `switch to ${ink ? 'paper' : 'green'} theme`)
  themeColor.content = ink ? '#253532' : '#ebe8d8'
}

syncMode()

mode.addEventListener('click', () => {
  const flip = () => {
    html.dataset.mode = html.dataset.mode === 'ink' ? 'paper' : 'ink'
    try {
      localStorage.setItem('mode', html.dataset.mode)
    } catch {}
    syncMode()
  }
  if (!document.startViewTransition || reduce) return flip()
  const r = mode.getBoundingClientRect()
  const x = r.left + r.width / 2
  const y = r.top + r.height / 2
  const end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
  const vt = document.startViewTransition(flip)
  // A transition can be skipped (e.g. a hidden tab); the theme still flips, so ignore those rejections.
  vt.finished.catch(() => {})
  vt.updateCallbackDone.catch(() => {})
  vt.ready
    .then(() => {
      html.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${end}px at ${x}px ${y}px)`] },
        { duration: 560, easing: 'cubic-bezier(0.77, 0, 0.175, 1)', pseudoElement: '::view-transition-new(root)' },
      )
    })
    .catch(() => {})
})

/* The hand beside the name: hover hides it until the pointer leaves; a click or tap hides it for a moment. */

const wave = document.querySelector('.wave')
let hovering = false
let comeBack

const setHidden = (hidden) => {
  wave.classList.toggle('hidden', hidden)
  wave.setAttribute('aria-label', hidden ? 'show the hand' : 'hide the hand')
}

if (fine) {
  wave.addEventListener('pointerenter', () => {
    hovering = true
    clearTimeout(comeBack)
    setHidden(true)
  })
  wave.addEventListener('pointerleave', () => {
    hovering = false
    clearTimeout(comeBack)
    setHidden(false)
  })
}

wave.addEventListener('click', () => {
  setHidden(true)
  clearTimeout(comeBack)
  comeBack = setTimeout(() => {
    if (!hovering) setHidden(false)
  }, 1800)
})

/* Copy email: the icon turns into a drawn check and a small "copied" tooltip shows. */

const copy = document.querySelector('.copy')
const tip = copy.querySelector('.tip')
let copiedTimer

copy.addEventListener('click', async () => {
  const email = 'judahutauruk12@gmail.com'
  try {
    await navigator.clipboard.writeText(email)
  } catch {
    const t = document.createElement('textarea')
    t.value = email
    document.body.append(t)
    t.select()
    document.execCommand('copy')
    t.remove()
  }
  tip.textContent = 'copied'
  copy.classList.add('done')
  clearTimeout(copiedTimer)
  copiedTimer = setTimeout(() => copy.classList.remove('done'), 1600)
})
