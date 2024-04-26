//Marksheet
let physicsMarks = 85;
let chemistryMarks = 71;
let mathsMarks = 85;
let totalMarks = 300;
let obtainedMarks = physicsMarks + chemistryMarks + mathsMarks;
let percentage = (obtainedMarks / totalMarks) * 100;
console.log("Marksheet:");
console.log("Physics Marks:", physicsMarks);
console.log("Chemistry Marks:", chemistryMarks);
console.log("Maths Marks:", mathsMarks);
console.log("Obtained Marks:", obtainedMarks);
console.log("Total Marks:", totalMarks);
console.log("Percetage:", percentage.toFixed(2) + "%");
if (percentage >= 80) {
    console.log("A+ Grade");
}
else if (percentage >= 70) {
    console.log("A Grade");
}
else if (percentage >= 60) {
    console.log("B Grade");
}
else if (percentage >= 50) {
    console.log("C Grade");
}
else
    console.log("Failed");
export {};
