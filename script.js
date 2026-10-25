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

/* kana icon: grows out of the link, trails the pointer below-right (clear of the name),
   and on leave plays the same motion in reverse back into the link. */

const peek = document.querySelector('.peek')
const link = document.querySelector('.peek-link')

if (fine) {
  let tx = 0
  let ty = 0
  let x = 0
  let y = 0
  let raf = 0
  let following = false
  let anims = []

  const at = (px, py, s = 1) => `translate(${px}px, ${py}px) scale(${s})`

  // Center of the link text, in the icon's top-left coordinates.
  const home = () => {
    const r = link.getBoundingClientRect()
    const half = peek.offsetWidth / 2
    return [r.left + r.width / 2 - half, r.top + r.height / 2 - half]
  }

  const follow = () => {
    x += (tx - x) * 0.2
    y += (ty - y) * 0.2
    peek.style.transform = at(x, y)
    raf = following ? requestAnimationFrame(follow) : 0
  }

  // Enter and exit share duration and a symmetric curve; the fade happens in the quarter nearest the link.
  const FLY = { duration: reduce ? 0 : 280, easing: 'cubic-bezier(0.65, 0, 0.35, 1)' }

  const fly = (fromTransform, toTransform, opacity, done) => {
    // Take over from wherever an interrupted animation left it.
    const from = anims.length ? getComputedStyle(peek).transform : fromTransform
    const fromOpacity = anims.length ? Number(getComputedStyle(peek).opacity) : opacity[0]
    anims.forEach((a) => a.cancel())
    peek.style.transform = toTransform
    peek.style.opacity = String(opacity[2])
    const move = peek.animate([{ transform: from }, { transform: toTransform }], FLY)
    const fade = peek.animate(
      [{ opacity: fromOpacity }, { opacity: opacity[1], offset: opacity[2] ? 0.25 : 0.75 }, { opacity: opacity[2] }],
      { duration: FLY.duration, easing: 'linear' },
    )
    anims = [move, fade]
    move.onfinish = () => {
      anims = []
      done?.()
    }
  }

  link.addEventListener('pointerenter', (e) => {
    tx = x = e.clientX + 14
    ty = y = e.clientY + 18
    const [hx, hy] = home()
    fly(at(hx, hy, 0.3), at(x, y), [0, 1, 1], () => {
      following = true
      if (!raf) raf = requestAnimationFrame(follow)
    })
  })

  link.addEventListener('pointermove', (e) => {
    tx = e.clientX + 14
    ty = e.clientY + 18
  })

  link.addEventListener('pointerleave', () => {
    following = false
    cancelAnimationFrame(raf)
    raf = 0
    const [hx, hy] = home()
    fly(peek.style.transform, at(hx, hy, 0.3), [1, 1, 0])
  })
}

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
