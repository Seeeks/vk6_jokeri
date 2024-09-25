const nappula = document.getElementById("uusi_rivi")
const p = document.querySelector("p")
const table = document.querySelector("table")
let rows = 0

const addJokeriRow = () => {
    const row = table.insertRow()

    for (let i = 0; i < 7; i++) {
        let cell = row.insertCell(0)
        cell.innerHTML = Math.floor(Math.random() * 10)
    }

    rows++

    p.innerHTML = `Rivejä: ${rows}`
}

nappula.addEventListener("click", () => {
    addJokeriRow()
})