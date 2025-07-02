import { Button } from "@/components/ui/button"
import { BookOpen, ArrowLeft, Clock } from "lucide-react"
import Link from "next/link"

export default function DailyRoutinePage() {
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

      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-100 rounded-lg mr-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">My Daily Routine</h1>
                <p className="text-gray-600 mt-1">Life as a Software Development Student</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Balancing studies, coding practice, and personal life requires a well-structured routine. In this video,
                I share how I organize my daily schedule as a software development student at SENA, including study
                habits, coding practice, and time for personal growth and relaxation.
              </p>
            </div>

            {/* Video Embed */}
            <div className="bg-gray-100 rounded-lg overflow-hidden mb-8">
              <video
                src="/daily_routine.mp4"
                width="100%"
                height="400"
                controls
                title="My Daily Routine"
                className="w-full aspect-video"
              ></video>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Daily Schedule Overview</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Morning Routine (6:00 - 9:00 AM)</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Wake up and morning preparation</li>
                <li>Review daily goals and priorities</li>
                <li>Quick review of previous day's learning</li>
                <li>Breakfast and commute to SENA</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Study Hours (9:00 AM - 3:00 PM)</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Attending classes and lectures</li>
                <li>Participating in group projects and discussions</li>
                <li>Taking notes and asking questions</li>
                <li>Practical coding exercises and labs</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Afternoon Practice (3:00 - 6:00 PM)</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Personal coding practice and projects</li>
                <li>Working on assignments and homework</li>
                <li>Researching new technologies and concepts</li>
                <li>Contributing to open source or personal repositories</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Evening Activities (6:00 - 10:00 PM)</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Dinner and family time</li>
                <li>Reading programming blogs and documentation</li>
                <li>Working on this blog and content creation</li>
                <li>Relaxation and personal hobbies</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Night Routine (10:00 PM - 11:00 PM)</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Reviewing the day's accomplishments</li>
                <li>Planning tomorrow's priorities</li>
                <li>Light reading or educational videos</li>
                <li>Preparing for rest and sleep</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Principles</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Time Management</h3>
              <p className="text-gray-700 mb-4">
                I use time-blocking techniques to ensure I dedicate focused time to different activities. This helps me
                maintain a balance between structured learning and creative exploration.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Continuous Learning</h3>
              <p className="text-gray-700 mb-4">
                Every day includes some form of learning, whether it's formal education, self-study, or practical
                application. I believe in the compound effect of consistent daily progress.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Work-Life Balance</h3>
              <p className="text-gray-700 mb-6">
                While I'm passionate about programming, I make sure to include time for relaxation, social connections,
                and personal interests to maintain overall well-being.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Having a structured routine helps me stay productive and motivated while ensuring I make consistent
                progress toward my goals as a software developer. Flexibility within structure allows me to adapt to
                changing priorities while maintaining good habits.
              </p>
            </div>

            <div className="flex justify-center mt-8">
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
