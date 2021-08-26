function sorting(arr) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < arr.length; i += 1) {
      if (arr[i - 1] > arr[i]) {
        done = false;
        var tmp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = tmp;
      }
    }
  }

  return arr;
}

function sortingStr(str) {
  if (!str) {
    return;
  }
  str = str.split('');
  str = sorting(str);
  str = str.join('');
  console.log(str)
  return str;
}

const words = ["kita", "atik", "tika", "aku", "kia", "makan", 'kua'];

function anagramGrouping(words) {
  const anagrams = {}; // {abc:[abc,cba], dell:[dell, ledl]}
  words.forEach((word) => {
    const sortedWord = sortingStr(word);
    if (anagrams[sortedWord]) {
      return anagrams[sortedWord].push(word);
    }
    anagrams[sortedWord] = [word];
  });
  return anagrams;
}

const groupedAnagrams = anagramGrouping(words);
for (const sortedWord in groupedAnagrams) {
  console.log(groupedAnagrams[sortedWord].toString());
  document.writeln(groupedAnagrams[sortedWord].toString(),"<br>");
}