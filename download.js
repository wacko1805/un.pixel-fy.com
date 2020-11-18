const map = {
    Base: 'https://github.com/wacko1805/FOSSAPPS/releases/download/V1.5-no-MicroG/FOSSAPPSV1.5-No-MicroG.zip'
 ,MicroG: 'https://github.com/wacko1805/FOSSAPPS/releases/download/V1.5/FOSSAPPSV1.5.zip'
 ,Full: 'https://github.com/wacko1805/FOSSAPPS/releases/download/V0.2-BETA-NO_MICROG/FOSSAPPSBETA-V0.2-BETA-No-MicroG.zip'
 ,FullMG: 'https://github.com/wacko1805/FOSSAPPS/releases/download/V0.2-BETA/FOSSAPPSBETA-V0.2-BETA.zip'
}
document.getElementById('submit').addEventListener('click', () =>
  location.href = map[document.getElementById('select').value])