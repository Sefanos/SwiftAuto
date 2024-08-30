"use client"
import { useState } from 'react'
import { Bell, ChevronDown, Plus, Settings, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  const [activeAutomations, setActiveAutomations] = useState(12)
  const [totalRuns, setTotalRuns] = useState(1234)
  const [successRate, setSuccessRate] = useState(98.5)

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1 p-4 md:p-6 space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Automations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeAutomations}</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Runs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalRuns}</div>
              <p className="text-xs text-muted-foreground">+20% from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{successRate}%</div>
              <p className="text-xs text-muted-foreground">+0.5% from yesterday</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="md:col-span-4">
            <CardHeader>
              <CardTitle>Recent Automations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {['Email Sequence', 'Data Sync', 'Invoice Generation', 'Customer Onboarding'].map((automation, index) => (
                  <div key={index} className="flex items-center">
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">{automation}</p>
                      <p className="text-sm text-muted-foreground">Last run: 2 hours ago</p>
                    </div>
                    <div className="ml-auto font-medium">
                      {index % 2 === 0 ? 'Active' : 'Paused'}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Create and manage your automations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Create New Automation
              </Button>
              <Button variant="outline" className="w-full">
                <Settings className="mr-2 h-4 w-4" />
                Manage Existing Flows
              </Button>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Automation Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center text-muted-foreground">
              Chart placeholder: Automation runs over time
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}