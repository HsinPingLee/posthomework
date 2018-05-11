/* hello*/
$(document).ready(function(){
  $("#ajax_btn").click(function(e){
    e.preventDefault();
    $.ajax({
      method: "get",
      url: "./ajax_data",
      data: {
        fname: $("#ajax_form input[name='fname']").val(),
        lname: $("#ajax_form input[name='lname']").val(),
      },
      success: function(data) {
        $("#ajax_content").text(data)
      }
    })
  })
  
  $("#ajax_btn2").click(function(e){
    e.preventDefault();
    $.ajax({
      method: "post",
      url: "./ajax_data2",
      data: {
        fname: $("#ajax_form2 input[name='fname']").val(),
        lname: $("#ajax_form2 input[name='lname']").val(),
      },
      success: function(data) {
        $("#ajax_content2").text(data)
      }
    })
  })

})


