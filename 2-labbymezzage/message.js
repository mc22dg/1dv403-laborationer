function Message(message, date) {
      
        this.getText = function() {
        return message;
        };
        
        this.setText = function(_text) {
        message = _text;
        };
        
        this.getFormattedTime = function()
        {
                var hour = this.getDate.getHours();
                var minutes = this.getDate.getMinutes();
                
                var year = this.getDate.getFullYear();
                
                return year;
                
        }
        
        
        this.getDate = function() {
        return date;
        };
        
        this.setDate = function(_date) {
        date = _date;
        };
        
        Message.prototype.toString = function() {
        return this.getText() + " ("+this.getDate()+")";
        };
        
        Message.prototype.getHTMLText = function() {
        return this.getText().replace(/[\n\r]/g, "<br/>");
        };
        
        Message.prototype.getDateText = function(alertDate) {
        var dateFormat = this.getDate();
        };
}