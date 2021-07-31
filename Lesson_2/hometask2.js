function generateVolumes(pages, volumes) {
  let lower = Math.max(...pages) - 1;
  let highest = pages.reduce((acc, current) => acc + current);

  while (lower + 1 < highest) {
    const middle = Math.floor((lower + highest) / 2);
    let currentVolumes = 0;
    let lastChapterPages = 0;

    for (let i = 0; i < pages.length; i++) {
      if (lastChapterPages + pages[i] <= middle) {
        lastChapterPages += pages[i];
      } else {
        currentVolumes++;
        lastChapterPages = pages[i];
      }
    }
    if (++currentVolumes <= volumes) {
      highest = middle;
    } else {
      lower = middle;
    }
  }

  return highest;
}

console.log(generateVolumes([1, 2, 1, 1], 3));
