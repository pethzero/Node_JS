function printableMessage()
{
    var message = 'hello';

    function setMessage(newMessage)
    {
        if(!newMessage) throw new Error('cannot set empty message');
        message = newMessage;
    }


    function getMessage(){
        return message;
    }


    function printMessage(){
        console.log(message);
    }
    return {
        setMessage:setMessage,
        getMessage:getMessage,
        printMessage:printMessage,
    };
}
var awsome1 = printableMessage();
var awsome2 = printableMessage();

awsome1.printMessage();//hello
awsome2.setMessage('hi');
awsome2.printMessage();//hi
awsome1.printMessage();//hello