import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, ArrowLeft, Code, Database, Globe, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
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
              <Link href="/about" className="text-blue-600 font-medium">
                About Me
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <Image
                src="/foto.jpg.jpg"
                alt="Hernán Cifuentes"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-6 border-4 border-blue-100 shadow-lg"
              />
              <h1 className="text-4xl font-bold text-gray-900 mb-2">About Me</h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Hi! My name is <strong>Hernán Cifuentes</strong> and I'm currently a Software Development student at
                SENA. I'm in an exciting stage of learning, exploring different areas of the programming world — from
                frontend development to databases and backend.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Since I began my studies, I've discovered how much I enjoy solving problems, creating useful solutions,
                and working in a team. I'm constantly striving to improve, not only to strengthen my technical skills
                but also to share knowledge with other students like me.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                This blog is my personal space to share experiences, projects, resources, and lessons I've learned along
                my journey as a developer. My goal is to provide helpful, clear, and motivating content for both
                beginners and anyone curious about programming.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Thanks for visiting my blog, and welcome to this journey of growth and learning in the world of
                software!
              </p>
            </div>

            {/* Skills/Interests Cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="mr-2 h-5 w-5 text-blue-600" />
                    Frontend Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Learning modern web technologies to create engaging user interfaces and experiences.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="mr-2 h-5 w-5 text-green-600" />
                    Backend & Databases
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Exploring server-side development and database management to build complete applications.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-purple-600" />
                    Team Collaboration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Enjoying the collaborative aspect of software development and learning from peers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="mr-2 h-5 w-5 text-orange-600" />
                    Continuous Learning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Always seeking new challenges and opportunities to grow as a developer.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Link href="/">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore My Blog Posts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
