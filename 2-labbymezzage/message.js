function Message(message, date) {
      
        this.getText = function() {
        return message;
        };
        
        this.setText = function(_text) {
        message = _text;
        };
        
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
        
        Message.prototype.getFormatedDateText = function(alertDate) {
        var date = this.getDate().toLocaleDateString();     
        var hour = this.getDate().getHours();
        var minutes = this.getDate().getMinutes();
        var seconds = this.getDate().getSeconds();
        
        return  "Inlägget skapades: " +date+" "+hour+":"+minutes+":"+seconds;
        };
        
        Message.prototype.getDateText = function(alertDate) {
        var hour = this.getDate().getHours();
        var minutes = this.getDate().getMinutes();
        var seconds = this.getDate().getSeconds();
        
        return  hour+":"+minutes+":"+seconds;
        };
                
                
}