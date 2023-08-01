//package SuperPages;
//
//import java.util.Scanner;
//
//public class Insta extends Page {
//
//    public static void InstaPage() {
//        Scanner sc = new Scanner(System.in);
//
//        System.out.println("Insta Page!");
//
//        System.out.print("Enter Username: ");
//        String username = sc.nextLine();
//
//        System.out.print("Enter Content: ");
//        String content = sc.nextLine();
//
//        // Call the inherited method from the base class to insert the post
//        insertPost("Insta", username, content);
//
//        sc.close();
//    }
//}

package SuperPages;

import java.util.Scanner;

public class Insta extends Page {
    private String username;
    private String content;

    // Getters and setters for the fields
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void InstaPage() {
        Scanner sc = new Scanner(System.in);

        System.out.println("Insta Page!");

        System.out.print("Enter Username: ");
        setUsername(sc.nextLine());

        System.out.print("Enter Content: ");
        setContent(sc.nextLine());

        // Call the inherited method from the base class to insert the post
        insertPost("Insta", getUsername(), getContent());

        sc.close();
    }
}

package SuperPages;

import java.util.Scanner;

public class Insta extends Page {
    private String username;
    private String content;

    // Getters and setters for the fields
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void TwitterPage() {
        Scanner sc = new Scanner(System.in);

        System.out.println("Twitter Page!");

        System.out.print("Enter Username: ");
        setUsername(sc.nextLine());

        System.out.print("Enter Content: ");
        setContent(sc.nextLine());

        // Call the inherited method from the base class to insert the post
        insertPost("Twitter", getUsername(), getContent());

        sc.close();
    }
}

