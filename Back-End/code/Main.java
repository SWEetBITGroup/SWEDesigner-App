class Ciao {

public void hello( ) {
System.out.println("diocane");
}


}

public class Main extends Ciao {

public static  void main( String[] args) {
Main x = new Main();
x.diocane();
}

public void diocane( ) {
super.hello();
}


}

