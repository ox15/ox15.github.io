import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)
import java.util.Collection;
import java.util.List;
import greenfoot.Color;
/**
 * The yard where the chicken "lives".
 * 
 * @author thepiguy 
 * @version 0.1
 */
public class Yard extends World
{
    public enum Control {CAR, CHICKEN};
    Control control=null;
    boolean fanfarePlayed=false;
    Car car;
    Car car2;
    
    Text txt;
    
    Bullet b;
    public int botsKilled=0;
    /**
     * Constructor for objects of class Yard.
     * 
     */
    public Yard()
    {    
        // Uncomment this if you are using cherry
        super(1099, 550, 1);
        // 
        setPaintOrder(Bullet.class, Text.class, Car.class, Robot.class, Vulture.class, Chicken.class, Boid.class, Egg.class);
        //new GreenfootImage(image);
        car=prepare();

        //prepare();
        //         txt = new Text();
        //         addObject(txt, 561, 263);

        //prepare();

        prepare();
    }

    public void act(){
        if(control != null)
        {
            removeObject(txt);
        } else {
            if (Greenfoot.isKeyDown("a")) 
            {
                control = Control.CHICKEN;
           } else if (Greenfoot.isKeyDown("b")) {
               control = Control.CAR;
           }
        }
        
        GreenfootImage bg = getBackground();
        bg.setColor(greenfoot.Color.WHITE);
        bg.fillRect(0, 0, 150, 25);
        bg.setColor(greenfoot.Color.BLACK);
        bg.drawString("Car 1A fuel: " +car.fuel, 10, 10);
        robots();
        
        gameOver();
        
    }
 
    
    /**
     * Prepare the world for the start of the program. That is: create the initial
     * objects and add them to the world.
     * 
     * Returns an instance of the special car for which we will track fuel.
     */
    private Car prepare()
    {

        Chicken chicken = new Chicken();
        addObject(chicken, 381, 286);

        Boid boid = new Boid();
        addObject(boid, 403, 108);
        Boid boid2 = new Boid();
        addObject(boid2, 403, 108);
        Boid boid3 = new Boid();
        addObject(boid3, 403, 108);
        Boid boid4 = new Boid();
        addObject(boid4, 403, 108);
        Boid boid5 = new Boid();
        addObject(boid5, 403, 108);
        Boid boid6 = new Boid();
        addObject(boid6, 403, 108);
        Boid boid7 = new Boid();
        addObject(boid7, 403, 108);
        Boid boid8 = new Boid();
        addObject(boid8, 403, 108);
        Boid boid9 = new Boid();
        addObject(boid9, 70, 351);
        Boid boid18 = new Boid();
        addObject(boid18, 403, 108);

        Car car = new Car();
        addObject(car, 556, 293);
        car.setLocation(221, 296);

        chicken.setLocation(551, 290);

        Pump pump = new Pump();
        addObject(pump, 737, 73);
        Pump pump2 = new Pump();
        addObject(pump2, 742, 250);
        Pump pump3 = new Pump();
        addObject(pump3, 747, 430);

        pump.setLocation(184, 64);
        pump2.setLocation(560, 280);
        pump2.setLocation(548, 279);
        pump3.setLocation(805, 458);
        BotFactory botfactory = new BotFactory();
        addObject(botfactory, 223, 511);

        Pump pump7 = new Pump();
        addObject(pump7, 227, 436);
        pump7.setLocation(225, 432);

        boid18.setLocation(400, 110);
        boid9.setLocation(403, 118);

        GasCan gascan = new GasCan();
        addObject(gascan, 556, 214);
        GasCan gascan2 = new GasCan();
        addObject(gascan2, 555, 346);
        GasCan gascan3 = new GasCan();
        addObject(gascan3, 491, 277);
        GasCan gascan4 = new GasCan();
        addObject(gascan4, 627, 279);
        GasCan gascan5 = new GasCan();
        addObject(gascan5, 359, 301);

        
        botfactory.setLocation(1046,51);
        return car;
    }


    

    public void gameOver(){
       
        List boid = getObjects(Boid.class);
        List car = getObjects(Car.class);
        //No text class!
        //Text w=new Text("               You Win!", "        You killed 3 robots");
        //Text l=new Text("               You Lose!","          Avoid the robots");
        if (boid.size()>0 && botsKilled>=3){
            GreenfootImage bgw = getBackground();
            //bg.fillRect(348, 279, 240, 100);
//             bgw.setColor(Color.BLUE);
//             bgw.drawString("You Win!");
            
            //addObject(w, 661, 263);
            Greenfoot.playSound("fanfare.wav");
            Greenfoot.stop();
        }
        
        if (car.size()<1){
            GreenfootImage bgw = getBackground();
            //bg.fillRect(348, 279, 240, 100);
 //             bgw.setColor(Color.BLUE);
//             bgw.drawString("You Win!");
            
            //addObject(l, 661, 263);
            Greenfoot.playSound("you_lose.wav");
            Greenfoot.stop();
        }
    }
    private void robots(){
        if (Greenfoot.isKeyDown("r")){
        Robot robot = new Robot();
        addObject(robot, 229, 478);
        Robot robot2 = new Robot();
        addObject(robot2, 289, 491);
        Robot robot3 = new Robot();
        addObject(robot3, 278, 451);
        Robot robot4 = new Robot();
        addObject(robot4, 245, 530);
        Robot robot5 = new Robot();
        addObject(robot5, 198, 515);
    }
    if(Greenfoot.isKeyDown("b"))
    {
        Boid boid = new Boid();
        addObject(boid, 403, 108);
        Boid boid2 = new Boid();
        addObject(boid2, 403, 108);
        Boid boid3 = new Boid();
        addObject(boid3, 403, 108);
        Boid boid4 = new Boid();
        addObject(boid4, 403, 108);
        Boid boid5 = new Boid();
        addObject(boid5, 403, 108);
        Boid boid6 = new Boid();
        addObject(boid6, 403, 108);
        Boid boid7 = new Boid();
        addObject(boid7, 403, 108);
        Boid boid8 = new Boid();
        addObject(boid8, 403, 108);
        Boid boid9 = new Boid();
        addObject(boid9, 403, 108);
    }
    if (Greenfoot.isKeyDown("g")){
        
        GasCan gascan = new GasCan();
        addObject(gascan, 556, 214);
        GasCan gascan2 = new GasCan();
        addObject(gascan2, 555, 346);
        GasCan gascan3 = new GasCan();
        addObject(gascan3, 491, 277);
        GasCan gascan4 = new GasCan();
        addObject(gascan4, 627, 279);
        GasCan gascan5 = new GasCan();
        addObject(gascan5, 359, 301);
    
    }
    }
    
    
}

