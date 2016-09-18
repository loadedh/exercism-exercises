export default function isLeapYear (input) {
    if (input % 4 === 0 && input % 100 != 0 || input % 400 === 0) {
        return true;
    } else {
        return false;
    }

}
