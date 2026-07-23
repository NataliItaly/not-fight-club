export default function chooseCharacter() {
  const list = document.getElementById('choose-character-list');

  Array.from({ length: 9 }, (_, i) => i + 1).forEach((_, i) => {
    const li = `
        <li class="list__item list__item_vertical choose-character__item" id=${i + 1}>
          <img class="list__img" src="./assets/aliens/${i + 1}.png" alt="Alien character" />
        </li>
      `;
    list.insertAdjacentHTML('beforeend', li);
  });
  console.log(list);

  list.addEventListener('click', function (e) {
    if (e.target.closest('.list__item')) {
      console.log(e.target.closest('.list__item').id);
    }
  });
}
