let employee = {
  name: "John Doe",
  streetAddress: "123 Main St",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  // Non-destructively update the employee object
  return { ...employee, [key]: value };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  // Destructively update the employee object
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  // Non-destructively delete the property from the employee object
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  // Destructively delete the property from the employee object
  delete employee[key];
  return employee;
}
