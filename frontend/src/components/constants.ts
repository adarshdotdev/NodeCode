export const LANG_VERSION = {
  javascript: "18.6.09",
  python: "3.2.7",
  java: "17.0.2",
  "c++": "11.0.0", // C++11 standard version
  c: "99.0.0", // C99 standard version
};

export const CODE_TEMPLATE = {
  javascript: `// JavaScript Example: Greeting Function with User Input
function greet(name) {
    if (!name) {
        console.log("Hello, world!");
    } else {
        console.log("Hello, " + name + "!");
    }
}

const userName = prompt("Enter your name:");
greet(userName);`,

  python: `# Python Example: Greeting Function with User Input
def greet(name="world"):
    print(f"Hello, {name}!")

name = input("Enter your name: ").strip()
greet(name if name else "world")`,

  java: `// Java Example: Greeting Function with User Input
import java.util.Scanner;

public class Main {
    public static void greet(String name) {
        if (name.isEmpty()) {
            System.out.println("Hello, world!");
        } else {
            System.out.println("Hello, " + name + "!");
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        greet(name);
        scanner.close();
    }
}`,

  "c++": `// C++ Example: Greeting Function with User Input
#include <iostream>
using namespace std;

void greet(string name) {
    if (name.empty()) {
        cout << "Hello, world!" << endl;
    } else {
        cout << "Hello, " << name << "!" << endl;
    }
}

int main() {
    string name;
    cout << "Enter your name: ";
    getline(cin, name);
    greet(name);
    return 0;
}`,

  c: `// C Example: Greeting Function with User Input
#include <stdio.h>
#include <string.h>

void greet(char name[]) {
    if (strlen(name) == 0) {
        printf("Hello, world!\\n");
    } else {
        printf("Hello, %s!\\n", name);
    }
}

int main() {
    char name[100];
    printf("Enter your name: ");
    fgets(name, sizeof(name), stdin);
    
    // Remove newline character if present
    name[strcspn(name, "\\n")] = 0;
    
    greet(name);
    return 0;
}`,
};
