document.getElementById('banAppealForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var reason = document.getElementById('reason').value;
    var arguments = document.getElementById('arguments').value;

    var roleId = '1125075103500210215'; // Replace with the actual role ID

    var payload = {
        "username": "Ban Appeal Bot",
        "avatar_url": "https://i.imgur.com/4M34hi2.png",
        "content": "<@&" + roleId + "> New Ban Appeal", // Mention the role before the message
        "embeds": [
            {
                "title": "New Ban Appeal",
                "color": 16711680, // Red
                "fields": [
                    {
                        "name": "Username",
                        "value": username,
                        "inline": true
                    },
                    {
                        "name": "Reason",
                        "value": reason,
                        "inline": true
                    },
                    {
                        "name": "Arguments",
                        "value": arguments,
                        "inline": true
                    }
                ]
            }
        ]
    };

    var webhookURL = "https://discord.com/api/webhooks/1213508066704756786/TDWaZQvGk2ndMOXlRG5ho96wtgVVMMZYgFsNJkaoA7zzUeJ7R8e7tVGIbOHCHdKoTOfK";

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        alert('Ban appeal submitted successfully!');
        document.getElementById('banAppealForm').reset();
    })
    .catch(error => {
        console.error('There was an error sending the ban appeal:', error);
        alert('Error submitting ban appeal. Please try again later.');
    });
});

