import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, ArrowLeft, Book } from "lucide-react"
import Link from "next/link"

export default function ADSOGlossaryPage() {
  const glossaryTerms = [
    {
      term: "Algorithm",
      definition:
        "A step-by-step procedure or formula for solving a problem. In programming, algorithms are the logical sequences of instructions that tell a computer how to perform a specific task or solve a particular problem.",
    },
    {
      term: "API",
      definition:
        "Application Programming Interface - A set of protocols, routines, and tools for building software applications. APIs specify how software components should interact and allow different programs to communicate with each other.",
    },
    {
      term: "Array",
      definition:
        "A data structure that stores multiple values in a single variable. Arrays organize data so that a related set of values can be easily sorted, searched, and accessed by referring to an index number.",
    },
    {
      term: "Backend",
      definition:
        "The server-side of an application that users don't directly interact with. It includes the server, database, and application logic that processes requests, manages data, and sends responses to the frontend.",
    },
    {
      term: "Bug",
      definition:
        "An error, flaw, or fault in a computer program that causes it to produce incorrect or unexpected results. Bugs can range from minor display issues to critical system failures that prevent the program from running.",
    },
    {
      term: "Class",
      definition:
        "A blueprint or template for creating objects in object-oriented programming. Classes define the properties (attributes) and methods (functions) that objects created from the class will have.",
    },
    {
      term: "Compiler",
      definition:
        "A program that translates source code written in a high-level programming language into machine code or another target language. The compiler checks for syntax errors and optimizes the code for execution.",
    },
    {
      term: "Database",
      definition:
        "An organized collection of structured information or data, typically stored electronically in a computer system. Databases are managed by database management systems (DBMS) and allow for efficient storage, retrieval, and manipulation of data.",
    },
    {
      term: "Debug",
      definition:
        "The process of finding and fixing bugs or errors in computer programs. Debugging involves identifying the source of problems, understanding why they occur, and implementing solutions to resolve them.",
    },
    {
      term: "Deployment",
      definition:
        "The process of making a software application available for use in a production environment. This includes installing, configuring, and running the application on servers where end users can access it.",
    },
    {
      term: "Framework",
      definition:
        "A pre-written code structure that provides a foundation for developing applications. Frameworks include libraries, tools, and conventions that help developers build software more efficiently by providing reusable components.",
    },
    {
      term: "Frontend",
      definition:
        "The client-side of an application that users directly interact with. It includes the user interface, user experience design, and all the visual elements that users see and interact with in their web browser or mobile app.",
    },
    {
      term: "Function",
      definition:
        "A reusable block of code that performs a specific task. Functions take input parameters, process them, and often return a result. They help organize code, reduce repetition, and make programs more modular and maintainable.",
    },
    {
      term: "Hardware",
      definition:
        "When talking about computer hardware refers to the collection of the physical components that constitute a computer system. Hardware usually includes screen, motherboard, mouse, keyboard, hard disks, among other electronic parts. Without hardware, software could not be used.",
    },
    {
      term: "Inheritance",
      definition:
        "A fundamental concept in object-oriented programming where a new class (child class) can inherit properties and methods from an existing class (parent class). This promotes code reusability and establishes hierarchical relationships between classes.",
    },
    {
      term: "Library",
      definition:
        "A collection of pre-written code, functions, and procedures that developers can use in their programs. Libraries provide specific functionality and help developers avoid writing code from scratch, saving time and ensuring reliability.",
    },
    {
      term: "Loop",
      definition:
        "A programming construct that repeats a block of code multiple times until a specified condition is met. Common types include for loops, while loops, and do-while loops, which help automate repetitive tasks.",
    },
    {
      term: "Object",
      definition:
        "An instance of a class in object-oriented programming. Objects contain data (attributes) and code (methods) and represent real-world entities or concepts within a program. They encapsulate both state and behavior.",
    },
    {
      term: "Software",
      definition:
        "A collection of computer programs, procedures, and documentation that performs tasks on a computer system. Software includes applications, operating systems, and utilities that tell the hardware what to do and how to do it.",
    },
    {
      term: "Source code",
      definition:
        "The human-readable instructions written by programmers in a programming language. Source code is the original form of a program before it's compiled or interpreted into machine-executable code.",
    },
    {
      term: "Syntax",
      definition:
        "The set of rules that defines valid constructs in a programming language. Syntax determines how code must be written for the computer to understand and execute it properly. Syntax errors prevent programs from running.",
    },
    {
      term: "Variable",
      definition:
        "A named storage location in computer memory that holds data which can be modified during program execution. Variables have a name, a data type, and a value, and they allow programs to store and manipulate information.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Hernán's Dev Blog</h1>
            </div>
            <nav className="flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium">
                About Me
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-green-100 rounded-lg mr-4">
                <Book className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">ADSO Glossary</h1>
                <p className="text-gray-600 mt-1">Programming Terms Dictionary</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                This glossary contains essential programming terms that every software development student should know.
                Each term is defined clearly to help build a strong foundation in programming concepts and terminology.
              </p>
            </div>

            <div className="grid gap-6">
              {glossaryTerms.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl text-blue-700 font-bold">{item.term}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{item.definition}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Link href="/">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Back to Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
