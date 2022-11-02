$("document").ready(()=>{
    $.ajax({
        url:'https://randomuser.me/api/',
        dataType:'json',
        success:function(data){
            $("#FName").html(data.results[0].name.first)
            $("#LName").html(data.results[0].name.last)
            $("#Email").html(data.results[0].email)
            $("#Gender").html(data.results[0].gender)
            $("#DOB").html(data.results[0].dob.date)
            $("#PhNo").html(data.results[0].phone)
            $("#Cell").html(data.results[0].cell)
            $("#Nationality").html(data.results[0].nat)
            $("#ID").html(data.results[0].id.name+" "+data.results[0].id.value)
            $("#Address").html(data.results[0].location.street.number+" "+data.results[0].location.street.name+" "+data.results[0].location.city+" "+data.results[0].location.state+" "+data.results[0].location.country)


        }
    });
});
