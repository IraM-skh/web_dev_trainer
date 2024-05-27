function randomShuffleDescriptionValues(descriptionValues) {
  for (let i = descriptionValues.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); //
    [descriptionValues[i], descriptionValues[j]] = [
      descriptionValues[j],
      descriptionValues[i],
    ];
  }
}

export default randomShuffleDescriptionValues;
