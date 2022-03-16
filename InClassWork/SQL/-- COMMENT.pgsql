-- COMMENT  

-- SELECT *
-- FROM countries;

-- SELECT
--     country_name,
--     region_id
-- FROM countries
-- WHERE region_id < 3;

-- SELECT
--     country_name,
--     region_id
-- FROM countries
-- WHERE region_id = 3
--     or
--     region_id = 5;


-- SELECT
--     department_id,
--     manager_id
-- FROM employees;

-- SELECT
--     employee_id,
--     last_name,
--     salary,
--     commission_pct
-- FROM hr.employees
-- WHERE commission_pct != 0.00
--     OR (salary > 10000
--     AND hire_date > '31-Dec-98');

-- if (x !- null || (salary > 1000 && hire_date > 1111))

-- SELECT employee_id
-- FROM hr.employees
-- WHERE department_id = 80;

-- SELECT employee_id
-- FROM hr.employees
-- WHERE salary > 80000;

-- SELECT first_name,
--     last_name
-- FROM hr.employees
-- WHERE last_name LIKE 'k%' or
--         last_name LIKE 'K%';

-- SELECT LAST_NAME,
-- EXTRACT(MONTH FROM hire_date) AS "Hire Year"
-- FROM employees WHERE JOB_ID = 'MK_REP';

-- SELECT job_id, MAX(salary) 
-- FROM employees
-- GROUP BY job_id;

-- SELECT department_id, COUNT(*) 
-- FROM employees
-- GROUP BY department_id;

-- SELECT job_id, COUNT(*)
-- FROM employees
-- WHERE salary > 60000
-- GROUP BY job_id

-- SELECT 'HELLO ' || 'Dolly!';

-- SELECT SUBSTRING('Hello Dolly!' FROM 1 for 5);

-- SELECT CHAR_LENGTH('Hello Dolly!');

-- SELECT POSITION ('ll' IN 'Hello Dolly');

-- SELECT ROUND(453.141592, 4);
-- SELECT TRUNC(453.141592, 4);
-- SELECT ROUND(453.141592, -1);
-- SELECT TRUNC(453.141592, -2);
-- SELECT MOD(16, 5) Remains;


-- 12/11/21 Class

-- SELECT * 
-- FROM employees

-- SELECT first_name || ' ' || last_name as "Full Name", salary,
-- CASE
--     WHEN salary > 100000 THEN 'NO!!'
--     WHEN salary BETWEEN 80000 AND 100000 THEN 'Maybe?'
--     ELSE 'YES!!'
-- END as "Raise"
-- FROM employees
-- ORDER BY "Raise";

-- SELECT salary
-- FROM hr.employees;

-- SELECT AVG(salary)
-- FROM hr.employees;

-- SELECT first_name
-- FROM hr.employees
-- WHERE salary > 
--     (SELECT AVG(salary)
--     FROM hr.employees);

-- SELECT *
-- FROM hr.locations
-- WHERE country_id = 'UK';

-- SELECT *
-- FROM hr.departments
-- WHERE location_id IN
--     (SELECT location_id
--     FROM hr.locations
--     WHERE country_id = 'UK');

-- SELECT first_name || ' ' || last_name
-- FROM hr.employees
-- WHERE department_id IN
--     (SELECT department_id from hr.departments
--     WHERE location_id IN
--         (SELECT location_id from hr.locations
--         WHERE city = 'Seattle'));

-- SELECT p.productid, p.description, s.saledate, s.amount
-- FROM sales s JOIN products p
-- ON (p.productid = s.productid);

-- SELECT p.productid, p.description, s.saledate, s.amount
-- FROM hr.products p LEFT JOIN sales s
-- ON (p.productid = s.productid);

-- SELECT e.employee_id, e.first_name, l.city, d.department_name
-- FROM employees e
--     JOIN departments d ON e.department_id = d.department_id
--     JOIN locations l ON d.location_id = l.location_id;

-- SELECT emp.first_name
-- FROM employees emp
-- LEFT JOIN employees mgr
-- ON (mgr.manager_id = emp.employee_id);

-- SELECT emp.first_name || ' ' || emp.last_name as employee,
-- mgr.first_name || ' ' || mgr.last_name as manager
-- FROM employees emp
-- JOIN employees mgr
-- ON (emp.manager_id = mgr.employee_id);




 -- Project 1

-- Task 1

SELECT employee_id
FROM employees
WHERE 
salary > 30000
AND
salary < 40000;

SELECT employee_id
FROM employees
WHERE 
salary BETWEEN 30000 AND 40000;

-- Task 2

SELECT SUBSTRING(last_name, 1, 6),
    job_id,
    salary
FROM employees
WHERE CHAR_LENGTH(last_name) > 6 ;

-- Task 3

SELECT last_name,
    salary,
    commission_pct,
    EXTRACT(YEAR FROM hire_date)
FROM employees
WHERE salary > 80000
AND
hire_date > ('1-JAN-1996');

SELECT MIN(salary)
FROM employees;

-- Task 4

SELECT first_name || ' ' || last_name as "Full Name",
department_name
FROM hr.departments,
hr.employees;

SELECT first_name || ' ' || last_name as "Full Name",
department_name,
hire_date
FROM hr.departments,
hr.employees
WHERE department_name = 'Sales'
ORDER BY hire_date DESC;

-- Task 5

SELECT DISTINCT
    employee_id,
    first_name,
    last_name,
    email,
    department_name,
    city
FROM hr.departments,
hr.employees,
hr.locations
WHERE department_name = 'Executive'
GROUP BY employee_id,
department_name,city;

-- Task 6 ***

-- SELECT DISTINCT 
--     e.first_name,
--     e.last_name,
--     e.email,
--     m.last_name,
--     d.department_name
-- FROM hr.departments d JOIN hr.vw_managers m
-- ON (d.manager_id = e.manager_id)
-- WHERE department_name = 'Executive';

-- SELECT last_name
-- FROM hr.vw_managers;

-- -- Task 7

-- SELECT employee_id
-- FROM hr.employees
-- GROUP BY EXTRACT(YEAR FROM hire_date);