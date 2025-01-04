        document.getElementById('signupBtn').onclick = function() {
            showForm('signup');
        };

        document.getElementById('signinBtn').onclick = function() {
            showForm('signin');
        };

        function showForm(type) {
            document.getElementById('homePage').style.display = 'none';
            document.getElementById('formPage').style.display = 'block';
            const formTitle = document.getElementById('formTitle');
            formTitle.textContent = type === 'signup' ? 'Sign Up' : 'Sign In';
        }

        document.getElementById('userForm').onsubmit = function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            alert(`${document.getElementById('formTitle').textContent} successfully!\nUsername: ${username}`);
            
        };
    