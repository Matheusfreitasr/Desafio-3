function typeEffect(element, speed) {
  const text = element.innerHTML;
  element.innerHTML = '';

  let i = 0;
  const typing = setInterval(() => {
      if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
      } else {
          clearInterval(typing);
      }
  }, speed);
}

document.addEventListener('DOMContentLoaded', () => {
  const elementsToType = document.querySelectorAll('.titulo__destaque');

  elementsToType.forEach(element => {
    typeEffect(element, 100);
  });
});
