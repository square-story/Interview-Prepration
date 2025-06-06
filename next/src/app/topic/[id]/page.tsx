"use client"

import { ArrowLeft, Edit, Calendar, Tag, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// Mock data - in a real app, this would come from props or API
const topicData = {
    id: 1,
    title: "React Hooks Fundamentals",
    description: "Understanding useState, useEffect, and custom hooks",
    category: "React Basics",
    difficulty: "Beginner",
    lastUpdated: "2024-01-15",
    tags: ["hooks", "state", "effects"],
    content: `# React Hooks Fundamentals

## Overview
React Hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8 and have revolutionized how we write React applications.

## Key Concepts

### useState Hook
The useState hook allows you to add state to functional components.

**Basic Syntax:**
\`const [state, setState] = useState(initialValue)\`

### useEffect Hook
The useEffect hook lets you perform side effects in functional components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined.

**Basic Syntax:**
\`useEffect(() => { /* effect */ }, [dependencies])\`

## Best Practices

1. **Always use hooks at the top level** - Don't call hooks inside loops, conditions, or nested functions
2. **Use multiple state variables** - Instead of one complex state object, use multiple useState calls
3. **Optimize with dependencies** - Always include dependencies in useEffect to avoid bugs
4. **Custom hooks for reusability** - Extract component logic into custom hooks when it can be reused

## Common Patterns

### State Management
- Use useState for simple local state
- Use useReducer for complex state logic
- Consider context for global state

### Side Effects
- Data fetching
- Setting up subscriptions
- Manually changing the DOM

## Next Steps
- Learn about useContext for global state
- Explore useReducer for complex state logic
- Build custom hooks for reusable logic`,
    codeExample: `import React, { useState, useEffect } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  // Effect runs after every render
  useEffect(() => {
    document.title = \`Count: \${count}\`
  })

  // Effect with dependency array
  useEffect(() => {
    console.log('Name changed:', name)
  }, [name])

  // Effect with cleanup
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer tick')
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Hello, {name}!</p>
    </div>
  )
}

export default Counter`,
}

export default function Component() {
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

    const parseContent = (content: string) => {
        return content.split("\n").map((line, index) => {
            if (line.startsWith("# ")) {
                return (
                    <h1 key={index} className="text-3xl font-bold mt-8 mb-4 first:mt-0">
                        {line.slice(2)}
                    </h1>
                )
            }
            if (line.startsWith("## ")) {
                return (
                    <h2 key={index} className="text-2xl font-semibold mt-6 mb-3">
                        {line.slice(3)}
                    </h2>
                )
            }
            if (line.startsWith("### ")) {
                return (
                    <h3 key={index} className="text-xl font-medium mt-4 mb-2">
                        {line.slice(4)}
                    </h3>
                )
            }
            if (line.startsWith("**") && line.endsWith("**")) {
                return (
                    <p key={index} className="font-semibold mb-2">
                        {line.slice(2, -2)}
                    </p>
                )
            }
            if (line.startsWith("`") && line.endsWith("`")) {
                return (
                    <code key={index} className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                        {line.slice(1, -1)}
                    </code>
                )
            }
            if (line.startsWith("- ")) {
                return (
                    <li key={index} className="ml-4 mb-1">
                        {line.slice(2)}
                    </li>
                )
            }
            if (line.trim() === "") {
                return <br key={index} />
            }
            return (
                <p key={index} className="mb-3 leading-relaxed">
                    {line}
                </p>
            )
        })
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-6">
                        <div className="flex items-center">
                            <Button variant="ghost" size="sm" asChild className="mr-4">
                                <Link href="/">
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back to Docs
                                </Link>
                            </Button>
                            <div className="flex items-center gap-2">
                                <BookOpen className="w-6 h-6 text-blue-600" />
                                <h1 className="text-2xl font-bold text-gray-900">{topicData.title}</h1>
                            </div>
                        </div>
                        <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                        </Button>
                    </div>
                </div>
            </header>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Topic Header */}
                <Card className="mb-8">
                    <CardHeader>
                        <div className="flex items-start justify-between">
                            <div>
                                <CardTitle className="text-2xl mb-2">{topicData.title}</CardTitle>
                                <CardDescription className="text-lg">{topicData.description}</CardDescription>
                            </div>
                            <Badge className={getDifficultyColor(topicData.difficulty)}>{topicData.difficulty}</Badge>
                        </div>

                        <div className="flex items-center gap-6 text-sm text-gray-600 mt-4">
                            <div className="flex items-center gap-1">
                                <Tag className="w-4 h-4" />
                                <span>Category: {topicData.category}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>Updated: {topicData.lastUpdated}</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {topicData.tags.map((tag) => (
                                <Badge key={tag} variant="secondary">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </CardHeader>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Documentation</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="prose prose-gray max-w-none">{parseContent(topicData.content)}</div>
                            </CardContent>
                        </Card>

                        {topicData.codeExample && (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Code Example</CardTitle>
                                    <CardDescription>Practical implementation example</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto text-sm">
                                        <code>{topicData.codeExample}</code>
                                    </pre>
                                </CardContent>
                            </Card>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Quick Navigation</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <nav className="space-y-2">
                                    <a href="#overview" className="block text-sm text-blue-600 hover:text-blue-800">
                                        Overview
                                    </a>
                                    <a href="#key-concepts" className="block text-sm text-blue-600 hover:text-blue-800">
                                        Key Concepts
                                    </a>
                                    <a href="#best-practices" className="block text-sm text-blue-600 hover:text-blue-800">
                                        Best Practices
                                    </a>
                                    <a href="#common-patterns" className="block text-sm text-blue-600 hover:text-blue-800">
                                        Common Patterns
                                    </a>
                                    <a href="#next-steps" className="block text-sm text-blue-600 hover:text-blue-800">
                                        Next Steps
                                    </a>
                                </nav>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Related Topics</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <Link href="/topic/2" className="block text-sm text-blue-600 hover:text-blue-800">
                                        Custom Hooks Deep Dive
                                    </Link>
                                    <Link href="/topic/3" className="block text-sm text-blue-600 hover:text-blue-800">
                                        useContext & Global State
                                    </Link>
                                    <Link href="/topic/4" className="block text-sm text-blue-600 hover:text-blue-800">
                                        Performance Optimization
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Learning Progress</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span>Completed</span>
                                        <span className="font-medium">75%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                                    </div>
                                    <Button size="sm" className="w-full">
                                        Mark as Complete
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
