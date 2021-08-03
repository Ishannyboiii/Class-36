class Form
{
    constructor()
    {

    }

    display()
    {
        var title = createElement('h2')
        title.html("Car Racing Game")
        title.position(130,0);

        var input = createInput("name");
        var button = createButton('Play');
        var greeting = createElement('h3');

        input.position(130, 160); 
        button.position(250, 200);

        button.mousePressed(function(){
            input.hide()
            button.hide();
            
            var pName = input.value();
            playerCount+=1;
            player.update(pName)

            player.updateCount(playerCount); 

            var greeting = createElement('h3');
             greeting.html("Hello " + pName );
             greeting.position(130, 160);
        })
    }

}