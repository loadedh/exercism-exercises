let Beer = () => {
    return {
        verse: singAVerse,
        sing: sing,
        song: sing(99, 0)
    }
}

const onlyOneLeft = '1 bottle of beer on the wall, 1 bottle of beer.\n';
const passAroundLast= 'Take it down and pass it around, no more bottles of beer on the wall.\n';
const getMoreBeer= 'Go to the store and buy some more, 99 bottles of beer on the wall.\n';

let singAVerse = (numberOfVerses) => {
    let howManyBeers = `${numberOfVerses || 'No more'} bottles of beer on the wall, ${numberOfVerses || 'no more'} bottles of beer.\n`;
    let passOne = `Take one down and pass it around, ${numberOfVerses - 1} ${numberOfVerses > 2 ? 'bottles' : 'bottle'} of beer on the wall.\n`;

    return `${numberOfVerses === 0 ? howManyBeers + getMoreBeer : numberOfVerses === 1 ? onlyOneLeft + passAroundLast : howManyBeers + passOne}`;

}

const sing = (beginning, end = 0, result = '') => {

    if (beginning < end) {
        return result.trim()+'\n';
    }

    const newResult = result + singAVerse(beginning--)+'\n';

    return sing(beginning--, end, newResult);
}

export default Beer();
