-- SELECT *
-- FROM hr.employees;
-- SELECT * 
-- FROM hr.departments;
-- SELECT * 
-- FROM hr.locations;

-- Task 5

SELECT e.first_name, 
e.last_name,
e.email,
d.department_name,
l.city
FROM employees e
LEFT JOIN departments d
ON e.department_id = d.department_id
LEFT JOIN locations l
ON d.location_id = l.location_id
WHERE d.department_name = 'Executive';

-- Task 6

SELECT emp.first_name, 
emp.last_name,
emp.email,
d.department_name,
l.city,
mgr.first_name AS "Manager"
FROM employees emp
LEFT JOIN employees mgr
ON emp.manager_id = mgr.employee_id
LEFT JOIN departments d
ON emp.department_id = d.department_id
LEFT JOIN locations l
ON d.location_id = l.location_id;

-- Task 7

SELECT EXTRACT (YEAR FROM hire_date) AS "Hire Date",
COUNT(hire_date) AS "count"
FROM employees
GROUP BY "Hire Date"
HAVING COUNT(hire_date) >= 2
ORDER BY "Hire Date";