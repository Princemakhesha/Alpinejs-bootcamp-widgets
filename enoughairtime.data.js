document.addEventListener('alpine:init', () => {
    
    Alpine.data('enoughAirtime', function(){

        return {
            airtimeUsage : '',
            availableAirtime : '',
            airtimeMessage : '',
            calculate() {
                const amount = enoughAirtime(this.airtimeUsage, this.availableAirtime)
                this.airtimeMessage = amount

                setTimeout(() => {
                    this.airtimeMessage = '',
                    this.availableAirtime = '',
                    this.airtimeUsage = ''
                   }, 3000);

            }
        }
    });
})