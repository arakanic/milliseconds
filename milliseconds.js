// This function accepts h hours, m minutes and s seconds to return total time in milliseconds.

const past = (h, m, s) => 1000 * (s + (60 * (m + (60 * h))))
