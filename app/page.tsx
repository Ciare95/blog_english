import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, User, Map, Book, Lightbulb, Video, MessageSquare, Users, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const blogPosts = [
    {
      id: 1,
      title: "Personal Learning Environment (PLE)",
      description: "Mind map exploring the concept of Personal Learning Environment",
      icon: Map,
      href: "/blog/ple-mind-map",
      category: "Learning",
    },
    {
      id: 2,
      title: "ADSO Glossary",
      description: "Programming terms glossary in alphabetical order",
      icon: Book,
      href: "/blog/adso-glossary",
      category: "Programming",
    },
    {
      id: 3,
      title: "Elon Musk Infographic",
      description: "Visual information about Elon Musk's achievements",
      icon: Lightbulb,
      href: "/blog/elon-musk-infographic",
      category: "Innovation",
    },
    {
      id: 4,
      title: "What I Like and Dislike",
      description: "Personal video sharing my preferences and opinions",
      icon: Video,
      href: "/blog/likes-dislikes",
      category: "Personal",
    },
    {
      id: 5,
      title: "My Ideal Project",
      description: "Video discussing my dream software development project",
      icon: MessageSquare,
      href: "/blog/ideal-project",
      category: "Projects",
    },
    {
      id: 6,
      title: "Technology Debate",
      description: "Video debate about which technologies are better",
      icon: Users,
      href: "/blog/technology-debate",
      category: "Technology",
    },
    {
      id: 7,
      title: "My Daily Routine",
      description: "Video sharing my daily routine as a software development student",
      icon: Clock,
      href: "/blog/daily-routine",
      category: "Lifestyle",
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

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <Image
              src="/images/foto.jpg"
              alt="Hernán Cifuentes"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
            />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome to My Learning Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hi! I'm Hernán Cifuentes, a Software Development student at SENA. This blog documents my experiences,
              projects, and lessons learned in the world of programming.
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <Link href="/about">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <User className="mr-2 h-5 w-5" />
                About Me
              </Button>
            </Link>
            <Link href="#blog-posts">
              <Button variant="outline" size="lg">
                <BookOpen className="mr-2 h-5 w-5" />
                Read Blog Posts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section id="blog-posts" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Blog Entries</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => {
              const IconComponent = post.icon
              return (
                <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={post.href}>
                      <Button className="w-full">Read More</Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Hernán Cifuentes - Software Development Student at SENA</p>
          <p className="text-gray-400 mt-2">This blog is part of my English class project</p>
        </div>
      </footer>
    </div>
  )
}
