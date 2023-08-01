package SuperPages;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

public abstract class Page {
    protected static final String Driver = "com.mysql.cj.jdbc.Driver";
    protected static final String URL = "jdbc:mysql://localhost:3306/mini_pro";
    protected static final String USER = "root";
    protected static final String PASSWORD = "tiger";

    protected static void insertPost(String tableName, String username, String content) {
        try {
            Class.forName(Driver);

            try (Connection con = DriverManager.getConnection(URL, USER, PASSWORD);
                 PreparedStatement stmt = con.prepareStatement("INSERT INTO " + tableName + " (username, content) VALUES (?, ?)")) {

                stmt.setString(1, username);
                stmt.setString(2, content);

                int rowsAffected = stmt.executeUpdate();

                if (rowsAffected > 0) {
                    System.out.println("Data added successfully!");
                    System.out.println("What Next?!");
                    System.out.println("Enter 1 to go back!");
                    System.out.println("Enter 2 Exit!");
                    Scanner sc = new Scanner(System.in);
                    int a = sc.nextInt();
                    sc.close();
                    switch (a) {
                        case 1:
                            Welcome.WelcomePage();
                            break;
                        case 2:
                            System.out.println("Thank you for visiting our Application");
                            break;
                        default:
                            break;
                    }

                } else {
                    System.out.println("Failed to add data!");
                }
            }
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
    }
}
