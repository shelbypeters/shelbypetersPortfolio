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
    hire_date
FROM employees
WHERE salary > 80000
AND
hire_date > ('1-JAN-1996');