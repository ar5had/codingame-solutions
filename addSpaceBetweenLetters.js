print(readline().replace(/[A-z](?![^A-z])/g,'$& ').trim())
// explain regex
// $$    Inserts a "$".
// $&    Inserts the matched substring.
// $`    Inserts the portion of the string that precedes the matched substring.
// $'    Inserts the portion of the string that follows the matched substring.
// $n    Where n is a positive integer less than 100, inserts the nth parenthesized submatch string, provided the first argument was a RegExp object
