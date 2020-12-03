const map = {
    Base: 'https://github.com/wacko1805/FOSSAPPS/releases/download/V1.8/Fossapps-V1.8.zip'
 ,Micro: 'https://github.com/wacko1805/FOSSAPPS/releases/download/V1.8/Fossapps-micro-V1.8.zip'

}
document.getElementById('submit').addEventListener('click', () =>
  location.href = map[document.getElementById('select').value])