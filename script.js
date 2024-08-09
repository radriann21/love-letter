function openCard() {
  let card = document.getElementById('card');
  card.classList.toggle('open');
  
  let front = document.querySelector('.front');
  let back = document.querySelector('.back');
  
  if (card.classList.contains('open')) {
    front.style.display = 'none';
    back.style.display = 'block';
  } else {
    front.style.display = 'flex';
    back.style.display = 'none';
  }
}

function changeText() {
  let text = document.getElementById('textPoem')

  text.classList.add('hidden');

  setTimeout(() => {
    const texto = `sacred feeling that rocks in my hands,<br>
    striking the paper with words of longing,<br>
    feeling the absence without even having touched you,<br>
    and I understand your sighs without having witnessed them;<br>
    at the same time that your light envelops me, I let myself be carried away by your laughter,<br>
    and I am a witness of your dawns in every smile<br>
    your struggles in every tear;<br>
    and I sensitively present myself to you to seek my peace,<br>
    you and your heart that welcome me, I, decide to love you.`;

    text.innerHTML = texto;

    text.classList.remove('hidden');
  }, 500); 
}
