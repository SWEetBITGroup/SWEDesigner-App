class Ciao {

public void hello( ) {
System.out.println("dioporco");
}


}

public class Main extends Ciao {

public static  void main( String[] args) {
Main x = new Main();
x.culo();
}

public void culo( ) {
super.hello();
}


}

