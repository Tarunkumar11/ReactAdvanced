const f = (...r) => {
    let l = typeof(r[0])==="object"

    return [...l?r[0]:r].map((e)=>{
        let a = "hop"
        let co = e.toString().includes("3")
        return (!(e%3) && co)?a+'-'+a:(!(e%3) || co)?a:e
    })

}

const arr = [1,2,3,4,5,6]
const result = f(arr)
console.log(result)