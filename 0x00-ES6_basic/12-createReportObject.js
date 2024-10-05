export default function createReportObject(employeeList) {
  const reportObject = {
    allEmployees: {
      ...employeeList,
    },
    getNumberOfDepartments(allEmployees) {
      const keys = Object.keys(allEmployees);
      return keys.length;
    },
  };

  return reportObject;
}
