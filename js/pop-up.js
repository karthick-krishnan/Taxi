


document.addEventListener('DOMContentLoaded', function () {
    var statusButton = document.getElementById('status_button');
    // onClick's logic below:
    statusButton.addEventListener('click', function () {

        let onlineStatus = statusButton.getAttribute("online_status");

        if (onlineStatus && onlineStatus == "true") {
            statusButton.setAttribute('online_status', false);
        } else {
            statusButton.setAttribute('online_status', true);
        }



        if (statusButton.getAttribute('online_status') == "true") {
            statusButton.innerText = 'go_offline';
            statusButton.style.backgroundColor = "green";
        } else {
            statusButton.innerText = 'go_online';
            statusButton.style.backgroundColor = "red";
        }

    });
});


