const phrases = [
  "No one is around to help",
  "Life is hard, life is stressful",
  "I need peace and tranquility",
  "I don't have to prove myself to anyone"
]
let phraseIndex = 0

const loadImage = async () => {
    let blob = await fetch("https://example.com/image.png").then(r => r.blob());
    let dataUrl = await new Promise(resolve => {
      let reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
    // now do something with `dataUrl`
    return dataUrl
}

document.querySelector('.begin').onclick = () => {
  new Audio('https://cloud-gi6pwmcsl-hack-club-bot.vercel.app/0aaron_smith_-_dancin__krono_remix_-8pm_koguqpm.mp3').play()

  document.querySelector('.begin').remove()

  document.querySelector('body').classList.add('colored-background')

  const danceImage = document.createElement('img')
  danceImage.src = 'https://cloud-mpvs8batk-hack-club-bot.vercel.app/02x-speed-ezgif.com-gif-maker.gif'
  // danceImage.src = 'https://cloud-6wq5da4wh-hack-club-bot.vercel.app/0ezgif.com-gif-maker_1_.gif'
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
}

const updatePhrase = () => {
  phraseIndex = (phraseIndex + 1) % phrases.length
  document.querySelector('.phrase-box').innerText = phrases[phraseIndex]
}