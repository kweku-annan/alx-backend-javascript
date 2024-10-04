export default function createEmployeesObject(departmentName, employees) {
  const employeesInDepartment = {
    [`${departmentName}`]: [...employees],
  };

  return employeesInDepartment;
}
