const map = {
    Base: 'https://github.com/wacko1805/FOSSAPPS/releases/download/V1.7/FOSSAPPSV1.7-BASE.zip'
 ,MicroG: 'https://github.com/wacko1805/FOSSAPPS/releases/download/V1.7-MicroG/FOSSAPPSV1.7-MicroG.zip'
 ,Full: 'https://github.com/wacko1805/FOSSAPPS/releases/download/V0.3-BETA/FOSSAPPSBETA-V0.3-BETA-Base.zip'
 ,FullMG: 'https://github.com/wacko1805/FOSSAPPS/releases/download/V0.3-BETA-MicroG/FOSSAPPSBETA-V0.3-BETA-MicroG.zip'
}
document.getElementById('submit').addEventListener('click', () =>
  location.href = map[document.getElementById('select').value])