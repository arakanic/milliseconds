// This function accepts h hours, m minutes and s seconds to return total time in milliseconds.

const past = (h, m, s) => 1000 * (s + (60 * (m + (60 * h))))

past(0,1,1) // 61000
past(1,1,1) // 3661000
past(0,0,0) // 0
past(1,0,1) // 3601000
past(1,0,0) // 3600000
