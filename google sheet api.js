let Button = document.querySelector('button');

function send() {
  let email = document.querySelector('#mailValue').value;

  $.ajax({
    data: {
      "email": email
    },
    url: "https://script.google.com/macros/s/AKfycbxu4kWPcLajpNoPv7IFEywNEhml1P4kubJgAFCgSpnzO8h81gkyHRIMixeTM-7pD8Q5/exec",
    success: function(response) {
      if (response == "存入成功") {
        alert("存入成功");
      }
    },
  });
};

Button.addEventListener('click', send);
