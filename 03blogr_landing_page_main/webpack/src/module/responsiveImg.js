const d = document,
  w = window;

export default function responsiveImg(id, mq, desktop, mobile) {
  const $img = d.getElementById(id),
    $mq = w.matchMedia(mq);
  //console.log($mq);

  const responsive = (e) => {
    //console.log(e);
    if (e.matches) {
      //console.log("estoy en modo desktop");
      $img.src = desktop;
    } else {
      //console.log("estoy en modo mobile");
      $img.src = mobile;
    }
  };
  $mq.addEventListener("change", responsive);
  responsive($mq);
}
