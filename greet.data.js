document.addEventListener('alpine:init', () => {

    Alpine.data('greetMe', () => ({
        greetMessage : '',
        username : '',
        greetMe() {
            this.greetMessage = greet(this.username);
            setTimeout(() => { 
                this.greetMessage = '';
                this.username = '';
            }, 4000);
        }
    }));
});