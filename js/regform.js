$(function () {
    if (localStorage.getItem("students") == null) {
        localStorage.setItem("students", JSON.stringify([]));
    }
    
    dialog = $("#dialog").dialog({
        autoOpen:false,
         height:500,
        width:500,
        modal:true
    });
    
    
    $(".regstu").click(function(){
        dialog.dialog( "open" )
    });

  showregisterstudents();
    
    $("#dob").datePiceker(
    {
        changeYear:true,
        changeMonth:true,
        changeDay:"0d"
    });


    function showregisterstudents(){
        alert("hi");
        var students = getdatafromlocalstorage();

        var data = "";
        if (students.length == 0) {
            data = "<h3>data is not added yet</h3>";

        } else {
            data += "<table id='regstudents'><tr>";
            data += "<th>#</th>";
            data += "<th>USN</th>";
            data += "<th>Name</th>";
            data += "<th>EMail</th>";
            data += "<th>Mobile</th>";
            data += "<th>DOB</th>";
            data += "<th>percentage</th>";
            data += "</tr></table>";
            for (var i = 0; i < students.length; i++) {
                j = i + 1;
                data += "<tr>";
                data += "<td>" +j+ "</td>";
                data += "<td>" +students[i].usn+"</td>";
                data += "<td>" +students[i].name+"</td>";
                data += "<td>" +students[i].email+"</td>";
                data += "<td>" +students[i].mobile+"</td>";
                data += "<td>" +students[i].dob+"</td>";
                data += "<td>" +students[i].percentage+"</td>";
                data += "</tr>";
            }
            data += "</table>";
        }


        $("#content").html(data);
        $("#regstudents").dateTable({
            "pageLenght": 2
        })
    }



    $('.submit').click(function () {

        var isValid = $("#regform").validate({
            rules: {
                usn: {
                    required: true,
                    minlength: 10
                },
                name: {
                    required: true,
                    // minlength:10
                },
                mobile: {
                    required: true,
                    minlength: 10,
                    number: true
                },
                email: {
                    required: true,
                    email: true
                },
                percentage: {
                    required: true,
                    // minlength:10
                },
                course: {
                    required: true,

                },
                dob: {
                    required: true,

                },

            },
            messages: {
                usn: {
                    required: "usn cannot be empty",
                    minlength: 'provide minimum 10 chars'

                },
                name: {
                    required: "name cannot be empty",
                    // minlength:'provide minimum 10 chars'

                },
                mobile: {
                    required: " mobile cannot be empty",
                    minlength: 'provide minimum 10 chars',
                    number: 'cannot have charcters'

                },
                percentage: {
                    required: "percentage cannot be empty",
                    email: 'enter a valid email'

                },
                email: {
                    required: "email cannot be empty",
                    // minlength:'provide minimum 10 chars'

                },
                course: {
                    required: "select a course"

                },
                dob: {
                    required: "DOB should not be empty"
                },
            }

        }).form();
        // form whetthe from is valid
        if (isValid) {
            var usn = $("#usn").val();
            var name = $("#name").val();
            var email = $("#email").val();
            var mobile = $("#mobile").val();
            var course = $("#course").val();
            var dob = $("#dob").val();
            var percentage = $("#percentage").val();
            $('.reset').click();

            student = {
                'usn': usn,
                'name': name,
                'email': email,
                'mobile': mobile,
                'course': course,
                'dob': dob,
                'percentage': percentage
            }

     

            var students = getdatafromlocalstorage();
            students.push(student);
            updatelocalstorage(students);
            showregisterstudents();
            dialog.dialog( "close" );
            return false;
        }



    });


    function getdatafromlocalstorage() {
       
        var students = localStorage.getItem("students");

        return students;
    }

    function updatelocalstorage(update) {
     
        localStorage.setItem("students", JSON.stringify(update));
    }


});
