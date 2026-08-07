import createSpheres from './createSpheres.js';

export default function updateSpheres(fighter) {
  const spheresHtml = createSpheres(fighter);

  const healthProgress = document.getElementById(
    `progess-${fighter.name}-${fighter.id}`,
  );

  healthProgress.innerHTML = spheresHtml;
}
