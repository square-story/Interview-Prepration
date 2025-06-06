"use client"

import { useState } from "react"
import { ArrowLeft, Save, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function Component() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        difficulty: "",
        content: "",
        codeExample: "",
        tags: "",
    })

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const handleSave = () => {
        // Here you would typically save to a database or local storage
        console.log("Saving topic:", formData)
        alert("Topic saved successfully!")
    }

    const parseContent = (content: string) => {
        // Simple markdown-like parsing for preview
        return content.split("\n").map((line, index) => {
            if (line.startsWith("# ")) {
                return (
                    <h1 key={index} className="text-2xl font-bold mt-6 mb-3">
                        {line.slice(2)}
                    </h1>
                )
            }
            if (line.startsWith("## ")) {
                return (
                    <h2 key={index} className="text-xl font-semibold mt-4 mb-2">
                        {line.slice(3)}
                    </h2>
                )
            }
            if (line.startsWith("### ")) {
                return (
                    <h3 key={index} className="text-lg font-medium mt-3 mb-2">
                        {line.slice(4)}
                    </h3>
                )
            }
            if (line.trim() === "") {
                return <br key={index} />
            }
            return (
                <p key={index} className="mb-2">
                    {line}
                </p>
            )
        })
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-6">
                        <div className="flex items-center">
                            <Button variant="ghost" size="sm" asChild className="mr-4">
                                <Link href="/">
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back to Docs
                                </Link>
                            </Button>
                            <h1 className="text-2xl font-bold text-gray-900">Add New Topic</h1>
                        </div>
                        <Button onClick={handleSave} className="flex items-center gap-2">
                            <Save className="w-4 h-4" />
                            Save Topic
                        </Button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Form */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Topic Information</CardTitle>
                                <CardDescription>Basic details about your learning topic</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <Label htmlFor="title">Title</Label>
                                    <Input
                                        id="title"
                                        placeholder="e.g., React Hooks Fundamentals"
                                        value={formData.title}
                                        onChange={(e) => handleInputChange("title", e.target.value)}
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea
                                        id="description"
                                        placeholder="Brief description of what this topic covers..."
                                        value={formData.description}
                                        onChange={(e) => handleInputChange("description", e.target.value)}
                                        rows={3}
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="category">Category</Label>
                                        <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="React Basics">React Basics</SelectItem>
                                                <SelectItem value="UI Components">UI Components</SelectItem>
                                                <SelectItem value="State Management">State Management</SelectItem>
                                                <SelectItem value="Forms">Forms</SelectItem>
                                                <SelectItem value="Advanced Concepts">Advanced Concepts</SelectItem>
                                                <SelectItem value="Performance">Performance</SelectItem>
                                                <SelectItem value="Testing">Testing</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div>
                                        <Label htmlFor="difficulty">Difficulty</Label>
                                        <Select
                                            value={formData.difficulty}
                                            onValueChange={(value) => handleInputChange("difficulty", value)}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select difficulty" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Beginner">Beginner</SelectItem>
                                                <SelectItem value="Intermediate">Intermediate</SelectItem>
                                                <SelectItem value="Advanced">Advanced</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="tags">Tags (comma-separated)</Label>
                                    <Input
                                        id="tags"
                                        placeholder="e.g., hooks, state, effects"
                                        value={formData.tags}
                                        onChange={(e) => handleInputChange("tags", e.target.value)}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Content</CardTitle>
                                <CardDescription>Write your documentation content</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Tabs defaultValue="content" className="w-full">
                                    <TabsList className="grid w-full grid-cols-2">
                                        <TabsTrigger value="content">Content</TabsTrigger>
                                        <TabsTrigger value="code">Code Example</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="content" className="space-y-4">
                                        <div>
                                            <Label htmlFor="content">Documentation Content</Label>
                                            <Textarea
                                                id="content"
                                                placeholder="# Main Topic&#10;&#10;## Overview&#10;Write your documentation here...&#10;&#10;### Key Points&#10;- Point 1&#10;- Point 2"
                                                value={formData.content}
                                                onChange={(e) => handleInputChange("content", e.target.value)}
                                                rows={12}
                                                className="font-mono text-sm"
                                            />
                                            <p className="text-xs text-gray-500 mt-1">
                                                Use # for headings, ## for subheadings, - for bullet points
                                            </p>
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="code" className="space-y-4">
                                        <div>
                                            <Label htmlFor="codeExample">Code Example</Label>
                                            <Textarea
                                                id="codeExample"
                                                placeholder="import React, { useState } from 'react'&#10;&#10;function Example() {&#10;  const [count, setCount] = useState(0)&#10;  &#10;  return (&#10;    <div>&#10;      <p>You clicked {count} times</p>&#10;      <button onClick={() => setCount(count + 1)}>&#10;        Click me&#10;      </button>&#10;    </div>&#10;  )&#10;}"
                                                value={formData.codeExample}
                                                onChange={(e) => handleInputChange("codeExample", e.target.value)}
                                                rows={12}
                                                className="font-mono text-sm"
                                            />
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Preview */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <div className="flex items-center gap-2">
                                    <Eye className="w-5 h-5" />
                                    <CardTitle>Preview</CardTitle>
                                </div>
                                <CardDescription>How your topic will appear</CardDescription>
                            </CardHeader>
                            <CardContent>
                                {formData.title && (
                                    <div className="space-y-4">
                                        <div className="flex items-start justify-between">
                                            <h2 className="text-xl font-bold">{formData.title}</h2>
                                            {formData.difficulty && (
                                                <Badge
                                                    className={
                                                        formData.difficulty === "Beginner"
                                                            ? "bg-green-100 text-green-800"
                                                            : formData.difficulty === "Intermediate"
                                                                ? "bg-yellow-100 text-yellow-800"
                                                                : "bg-red-100 text-red-800"
                                                    }
                                                >
                                                    {formData.difficulty}
                                                </Badge>
                                            )}
                                        </div>

                                        {formData.description && <p className="text-gray-600">{formData.description}</p>}

                                        {formData.category && <div className="text-sm text-gray-500">Category: {formData.category}</div>}

                                        {formData.tags && (
                                            <div className="flex flex-wrap gap-1">
                                                {formData.tags.split(",").map((tag, index) => (
                                                    <Badge key={index} variant="secondary" className="text-xs">
                                                        {tag.trim()}
                                                    </Badge>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {formData.content && (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Content Preview</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="prose prose-sm max-w-none">{parseContent(formData.content)}</div>
                                </CardContent>
                            </Card>
                        )}

                        {formData.codeExample && (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Code Example</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                                        <code>{formData.codeExample}</code>
                                    </pre>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
