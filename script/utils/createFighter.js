export default function createFighter(fighter) {
  console.log('fighter', fighter);
  const reflectClass = fighter.location ? 'fighter__img_reflect' : ''
  return `
    <div class="fighter" id="${fighter.name}-${fighter.id}">
      <h3 class="fighter__name">${fighter.name}</h3>
      <img class="fighter__img ${reflectClass}" src="./assets/aliens/${fighter.id}.png" alt="" class="fighter__img">
      <div class="health" id="health-${fighter.name}-${fighter.id}">
        <div class="health__bar">
          <div class="health__bar-container" id="progess">
            <div class="health__sphere" id="sphere1"></div>
            <div class="health__sphere" id="sphere2"></div>
            <div class="health__sphere" id="sphere3"></div>
            <div class="health__sphere" id="sphere4"></div>
            <div class="health__sphere" id="sphere5"></div>
            <div class="health__sphere" id="sphere6"></div>
            <div class="health__sphere" id="sphere7"></div>
            <div class="health__sphere" id="sphere8"></div>
            <div class="health__sphere" id="sphere9"></div>
            <div class="health__sphere" id="sphere10"></div>
            <div class="health__effect">
              <div class="health__shadow" id="shadow1"></div>
                <div class="health__shadow" id="shadow2"></div>
                <div class="health__shadow" id="shadow3"></div>
                <div class="health__shadow" id="shadow4"></div>
                <div class="health__shadow" id="shadow5"></div>
                <div class="health__shadow" id="shadow6"></div>
                <div class="health__shadow" id="shadow7"></div>
                <div class="health__shadow" id="shadow8"></div>
                <div class="health__shadow" id="shadow9"></div>
                <div class="health__shadow" id="shadow10"></div>
            </div>
          </div>
        </div>
        <div class="health__value">100%</div>
      </div>
    </div>
  `;
}
