const map = {
    Base: 'https://github.com/wacko1805/Fossapps/releases/download/V2.0/Fossapps-V2.0.zip'
 ,Micro: 'https://github.com/wacko1805/Fossapps/releases/download/V2.0/Fossapps-micro-V2.0.zip'

}
document.getElementById('submit').addEventListener('click', () =>
  location.href = map[document.getElementById('select').value])
