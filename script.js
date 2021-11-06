const phrases = [
  "No one is around to help",
  "Life is hard, life is stressful",
  "I need peace and tranquility",
  "I don't have to prove myself to anyone"
]
let phraseIndex = 0

const start = () => {
  const audio = document.createElement('audio')
  audio.src = 'https://cloud-gi6pwmcsl-hack-club-bot.vercel.app/0aaron_smith_-_dancin__krono_remix_-8pm_koguqpm.mp3'
  audio.loop = true
  document.querySelector('.container').appendChild(audio)
  audio.style = 'visibility: hidden;'
  audio.play()

  // toggle audio on click
  const toggleAudio = () => {
    audio.paused ? audio.play() : audio.pause()
  }

  document.querySelector('.begin').remove()

  document.querySelector('body').classList.add('colored-background')

  const danceImage = document.createElement('img')
  danceImage.src = 'https://cloud-mpvs8batk-hack-club-bot.vercel.app/02x-speed-ezgif.com-gif-maker.gif'
  document.querySelector('.container').appendChild(danceImage)

  const phraseBox = document.createElement('p')
  phraseBox.classList.add('phrase-box')
  phraseBox.classList.add('flicker-text')
  document.querySelector('.container').appendChild(phraseBox)
  phraseBox.innerText = ' '

  setTimeout(() => {
    phraseBox.innerText = phrases[phraseIndex]
    setInterval(updatePhrase, 6000)
  }, 2000)

  danceImage.onclick = toggleAudio
}

const updatePhrase = () => {
  phraseIndex = (phraseIndex + 1) % phrases.length
  document.querySelector('.phrase-box').innerText = phrases[phraseIndex]
}

document.onload = () => {
  if (window.location.hash != '') {
    start
  }
}
document.querySelector('.begin').onclick = start
