export default function createIteratorObject(report) {
  const allEmployees = [];
  for (const value of Object.values(report)) {
    for (const department of Object.values(value)) {
      allEmployees.push(...Object.values(department));
    }
  }
  return allEmployees;
}
