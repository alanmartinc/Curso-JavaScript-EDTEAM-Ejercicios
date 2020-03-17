// Continue

for(let i = 0; i <= 100; i++) {
    if(i % 7 === 0) continue
    console.log(i)
}

// Break

let n = 0
for(let i = 1; i <= 100; i++) {
    if(i % 7 === 0) {
        console.log(i)
        n++
    }
    if(n >= 10) break
}
