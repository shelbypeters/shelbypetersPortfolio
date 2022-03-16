export let test = [
    {
    bodyPart: "upper legs",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3214.gif",
    id: "3214",
    name: "arms apart circular toe touch (male)",
    target: "glutes",
    },
    {
    bodyPart: "upper legs",
    equipment: "assisted",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1709.gif",
    id: "1709",
    name: "assisted lying glutes stretch",
    target: "glutes",
    },
    {
    bodyPart: "upper legs",
    equipment: "assisted",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1710.gif",
    id: "1710",
    name: "assisted lying gluteus and piriformis stretch",
    target: "glutes",
    }
    ]

export const getRandom = (arr) => {
    return Math.floor(Math.random() * arr.length);
}
console.log(getRandom(test))

export default getRandom;