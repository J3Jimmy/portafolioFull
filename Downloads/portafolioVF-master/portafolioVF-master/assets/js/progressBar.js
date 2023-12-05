document.addEventListener('DOMContentLoaded', function () {

  //progressBar
  // API web animations
  const progressBar = document.getElementById('progress')

  progressBar.animate(
    // como argumento, el metodo animate recibne un array de objetos que describen los estados de la animacion.
    [
      { width: 0 },
      { width: '100%' }
    ],
    {
      fill: 'forwards',
      timeline: new ScrollTimeline({
        subject: document.documentElement
      })

    }
  )


  //animated Secctions












})