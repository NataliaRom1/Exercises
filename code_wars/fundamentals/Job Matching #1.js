function match(candidate, job) {
  // is this job a valid match for the candidate?

  if (candidate.minSalary == undefined || job.maxSalary == undefined) {
    throw "Error"
  }
  return (((candidate.minSalary - candidate.minSalary * 0.1) <= job.maxSalary));
}

let candidate = {
  minSalary: 120000
}
let job = {
  maxSalary: 140000
}
console.log(match(candidate, job));