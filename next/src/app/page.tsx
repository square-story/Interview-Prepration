"use client"

import { useState } from "react"
import { Search, BookOpen, Code, Lightbulb, Star } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const learningTopics = [
  {
    id: 1,
    title: "React Hooks Fundamentals",
    description: "Understanding useState, useEffect, and custom hooks",
    category: "React Basics",
    difficulty: "Beginner",
    lastUpdated: "2024-01-15",
    tags: ["hooks", "state", "effects"],
    icon: <Code className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "shadcn/ui Component Integration",
    description: "How to properly install and customize shadcn/ui components",
    category: "UI Components",
    difficulty: "Intermediate",
    lastUpdated: "2024-01-14",
    tags: ["shadcn", "components", "styling"],
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    id: 3,
    title: "React Context & State Management",
    description: "Managing global state with Context API and Zustand",
    category: "State Management",
    difficulty: "Advanced",
    lastUpdated: "2024-01-13",
    tags: ["context", "state", "zustand"],
    icon: <Lightbulb className="w-5 h-5" />,
  },
  {
    id: 4,
    title: "Form Handling with React Hook Form",
    description: "Building robust forms with validation and error handling",
    category: "Forms",
    difficulty: "Intermediate",
    lastUpdated: "2024-01-12",
    tags: ["forms", "validation", "react-hook-form"],
    icon: <Star className="w-5 h-5" />,
  },
]

const categories = ["All", "React Basics", "UI Components", "State Management", "Forms", "Advanced Concepts"]

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredTopics = learningTopics.filter((topic) => {
    const matchesSearch =
      topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || topic.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">React Learning Docs</h1>
                <p className="text-sm text-gray-600">My personal React & shadcn/ui documentation</p>
              </div>
            </div>
            <Button asChild>
              <Link href="/add-topic">Add New Topic</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Categories</h2>
              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${selectedCategory === category ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-100"
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </nav>

              <div className="mt-8">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Quick Stats</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Total Topics:</span>
                    <span className="font-medium">{learningTopics.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Categories:</span>
                    <span className="font-medium">{categories.length - 1}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Last Updated:</span>
                    <span className="font-medium">Today</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search topics, descriptions, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Topics Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {filteredTopics.map((topic) => (
                <Card key={topic.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        {topic.icon}
                        <CardTitle className="text-lg">{topic.title}</CardTitle>
                      </div>
                      <Badge className={getDifficultyColor(topic.difficulty)}>{topic.difficulty}</Badge>
                    </div>
                    <CardDescription>{topic.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>Category: {topic.category}</span>
                        <span>Updated: {topic.lastUpdated}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {topic.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <Link href={`/topic/${topic.id}`}>View Topic</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredTopics.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No topics found</h3>
                <p className="text-gray-600">Try adjusting your search or category filter.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
