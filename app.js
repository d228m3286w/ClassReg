var students = [];
var classes = [];
var schedule = [];

function addClass(){
  var newClass = document.getElementById('class').value;  
  if(newClass.length) {
    classes.push(newClass);
  }
  addToSelect(document.getElementById('availableClasses'), newClass);
  return false;
}

function addStudent(){
  var newStudent = document.getElementById('student').value;   
  if(newStudent.length) {
    students.push(newStudent);
  }
  addToSelect(document.getElementById('registeredStudents'), newStudent); 
  return false;
}

function addToSelect(menu, value) {
  menu.options[menu.options.length] = new Option(value, value);
}

function register(){
  var className = document.getElementById('availableClasses').value;  
  var student = document.getElementById('registeredStudents').value;  
  
  schedule.push({
    'class': className,
    'student': student
  });
  
  console.log(schedule);
  setSchedule();
}

function setSchedule() {
  var html = '';
  
  for(var i = 0; i < schedule.length; i++) {
    html += html + schedule[i].class + ' - ' + schedule[i].student + '<br />'
  }
  
  document.getElementById('schedule').innerHTML = html;
}

