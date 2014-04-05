(function($, Edge, compId) {
    var Composition = Edge.Composition,
        Symbol = Edge.Symbol;
    //Edge symbol: 'stage'
    (function(symbolName) {
        Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
            var email = sym.$("email")
            email.html("Enter your Email: ");
            inputEmail = $('<input />').attr({
                'type': 'text',
                'value': '',
                'id': 'email'
            });
            inputEmail.css('font-size', 14);
            inputEmail.css('width', 350);
            inputEmail.css('background-color', '#0a81fb');
            inputEmail.appendTo(email);
            var topic = sym.$("topic");
            topic.html("Topic: ");
            inputTopic = $('<input />').attr({
                'type': 'text',
                'value': '',
                'id': 'topic'
            });
            inputTopic.css('font-size', 14);
            inputTopic.css('width', 350);
            inputTopic.css('background-color', '#0a81fb');
            inputTopic.appendTo(topic);
            var message = sym.$("message");
            message.html("Message: ");
            inputMessage = $('<textarea />').attr({
                'type': 'textarea',
                'rows': '10',
                'cols': '25',
                'value': '',
                'id': 'message'
            });
            inputMessage.css('font-size', 14);
            inputMessage.css('background-color', '#0a81fb');
            inputMessage.css('box-shadow', '#0a81fb');
            inputMessage.css('width', 350);
            inputMessage.appendTo(message);
            var submitBtn = sym.$("btn");
            submitBtn.html("Submit");
            submitBtn.css("text-align", "center");
            submitBtn.css("font-size", 14);
            submitBtn.css("font-weight", "bold");

            function emailInfo() {
                var emailInfo = inputEmail.attr("value");
                var topicInfo = inputTopic.attr("value");
                var messageInfo = inputMessage.attr("value");
                location = "mailto:YOUREMAILADDRESSHERE@YOUREMAILSERVER.com?subject=" + topicInfo + "&body=" + emailInfo + messageInfo;
                return true;
            }
            submitBtn.click(function() {
                emailInfo();
            });
        });
        //Edge binding end
    })("stage");
    //Edge symbol end:'stage'
})(jQuery, AdobeEdge, "EDGE-1094819765");