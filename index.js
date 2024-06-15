const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());




var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employeedb'
});

mysqlConnection.connect((err)=>{
    if(!err){
        console.log('connection succesful');
    }
    else{
        console.log('connection failed\n Error: ');
    }
});
app.listen(3000,()=>console.log('server is running at 3000'));

//get all employee
app.get('/emps',(req,res)=>{
    
    var insert_q = 'INSERT into employee(Name,EmpCode,Salary)values("ppatill",11150,982612)';
    var get_q = 'SELECT * FROM employee';
    mysqlConnection.query(get_q,(err,rows,fields)=>{
        if(!err){
            res.send(rows);
            console.log('rows');
        }else{
            console.log("error employees: "+err);
        }
    })
});
//get an employee
app.get('/emps/:id',(req,res)=>{
    
    var insert_q = 'INSERT into employee(Name,EmpCode,Salary)values("ppatill",11150,982612)';
    var get_q = 'SELECT * FROM employee WHERE EmpId = ?';
    mysqlConnection.query(get_q,[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.send(rows);
            console.log('rows');
        }else{
            console.log("error employees: "+err);
        }
    })
});

//delete an employee
app.delete('/emps/:id',(req,res)=>{
    
    var insert_q = 'INSERT into employee(Name,EmpCode,Salary)values("ppatill",11150,982612)';
    var delete_q = 'DELETE FROM employee WHERE EmpId = ?';
    mysqlConnection.query(delete_q,[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.send(rows);
            console.log('deleted succesfully');
        }else{
            console.log("error employees: "+err);
        }
    })
});
//INSERT an employee
app.post('/emps',(req,res)=>{
    
    var insert_q = 'INSERT into employee(Name,EmpCode,Salary)values("ppatill",11150,982612)';
    var delete_q = 'DELETE FROM employee WHERE empId = ?';
    mysqlConnection.query(insert_q,(err,rows,fields)=>{
        if(!err){
            res.send(rows);
            console.log('INSERTED succesfully');
        }else{
            console.log("error employees: "+err);
        }
    })
});
//update an employee
app.put('/emps',(req,res)=>{
    var update_q = 'UPDATE employee SET Name="upprasann",EmpCode=1005987,Salary=1009898 WHERE empId=4';
   
    mysqlConnection.query(update_q,(err,rows,fields)=>{
        if(!err){
            //res.send(rows);
            console.log('UPDATED succesfully');
        }else{
            console.log("error employees: "+err);
        }
    })
});