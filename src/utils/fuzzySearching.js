const levenshteinDistance = require('js-levenshtein');
const fuzzysort = require('fuzzysort');

const fuzzySearch = (searchText, arr, cutoffScore) => {
  let scores = arr.map((s) => {
    const score = levenshteinDistance(searchText, s, 12);
    return {
      name: s,
      score,
    };
  });

  scores = scores.filter(food => food.score < cutoffScore);
  scores = scores.sort((a, b) => a.score > b.score);

  return scores.map(score => score.name);
};

const fuzzySearchSort = (searchText, arr) => {
  const results = fuzzysort.go(searchText, arr);
  console.log(results);
  return results.map(item => item.target);
};
export { fuzzySearchSort, levenshteinDistance, fuzzySearch as default };
