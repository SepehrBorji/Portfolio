---
title: "Payroll Software"
description: "A console application that generates pay stubs for employees in a small company"
image: "/images/payroll-project/pay cheque 2.PNG"
tags: ["C#",".NET", "Object-Oriented Programming","File I/O"]
year: 2023
featured: true
category: "engineering"
---
# Overview
this is a C# console application that generates payroll slips and salary information for a small company.  

The idea and general guidelines for this project is from the last section of the book Learn C# in one day and learn it well by Jamie Chan, but I've made changes of my own.   

# Company Payroll requirements - Staff, Admin, Manager
The company contains 3 types of staff members. Ordinary staff members, Managers, and Administrators. All staff members have their names in the payroll system and are paid hourly wages.  


Ordinary staff members will be paid $20 an hour, with no eligibility for overtime or any bonuses.   


Administrators will be paid $30 an hour and are eligible for overtime, gaining them an extra $15 an hour (time and a half) when they work past 160 hours a month. Administrators do not have any bonuses.   

Managers will be paid $50 an hour and do not make overtime pay, but instead are granted a $1000 bonus when they work past 160 hours a month.   

To reflect these requirements in the program, there are 3 classes to represent staff, called "Staff", "Admin", and "Manager". Since managers and administrators are staff members just like ordinary staff members, it's a good idea to have "Manager" and "Admin" classes inherit functionality from the "Staff" class.   

<img src="/images/payroll-project/Staff signature.PNG" alt="Staff Class signature" class="img-medium">

<img src="/images/payroll-project/Admin signature.PNG" alt="Admin Class Signature" class="img-large">

<img src="/images/payroll-project/Manager Signature.PNG" alt="Manager Class Signature" class="img-medium">

Since all staff members have an hourly rate, but the value for this hourly rate depends on what kind of staff member is instantiated, all staff members share the same "hourlyRate" field and the constructor of the class is responsible for initializing the field with the right value. 

<img src="/images/payroll-project/Staff constructor.PNG" alt="Staff class constructor" class="img-medium">

<img src="/images/payroll-project/Admin constructor.PNG" alt="Admin class constructor" class="img-large">

<img src="/images/payroll-project/Manager constructor.PNG" alt="Manager class constructor" class="img-large">

Furthermore, since the child classes are accessing the field "hourlyRate" declared in a parent class, the field has the "protected" access modifier.  

<img src="/images/payroll-project/hourlyRate declaration.PNG" alt="hourlyRate field declaration" class="img-large">

# Gathering Staff Information - FileReader Class

The company could have any number of staff members and this number can change quickly. Instead of hardcoding the information of each staff member, it's a much better idea to have the names and staff positions of each staff member in a text file. The FileReader class will read this text file to gather the staff information for the rest of the program to use. This information will be returned as a list of the staff members in the company.  

<img src="/images/payroll-project/FileReader class.PNG" alt="FileReader class implementation" class="img-large">

The data input text file is "Staff.txt" and has the following format:  

<img src="/images/payroll-project/staff input file.PNG" alt="Staff Input File" class="img-medium">

# Generating the Pay Cheque - PayCheque Class
The program needs to be able to generate and send out pay cheques, and it is the job of the PayCheque class to generate the pay cheque of every staff member in the form of a .txt file. For example, If there is a staff member named Joel, his pay cheque will be contained in Joel.txt.  

<img src="/images/payroll-project/pay cheque 1.PNG" alt="Paycheque example 1" class="img-medium">
<img src="/images/payroll-project/pay cheque 2.PNG" alt="Paycheque example 2" class="img-medium">
<img src="/images/payroll-project/pay cheque 3.PNG" alt="Paycheque example 3" class="img-medium">

# Running the Program
Although C#10 and .NET 6 remove the need for an explicitly defined Main() method, I still added one just to keep things clean and organized (at least to me). The Main() method will be responsible for taking user input for the pay month, pay year, hours worked, etc. to generate the pay cheque information. The method takes input using a while loop so it will repeatedly prompt the user until valid values are given.   

<img src="/images/payroll-project/while loop input.PNG" alt="while loop governing user input" class="img-medium">